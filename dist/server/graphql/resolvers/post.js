var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PubSub } from 'apollo-server';
// import mongoose from 'mongoose';
// import config from '../../../config';
import Post from '../../models/post';
const cloudinary = require("cloudinary");
import { transformPost } from './merge';
// const { AuthenticationError} = require('apollo-server');
var shortId = require('shortid');
const uploadFile = (file) => __awaiter(void 0, void 0, void 0, function* () {
    // The Upload scalar return a a promise
    const { createReadStream } = yield file;
    const fileStream = createReadStream();
    cloudinary.config({
        cloud_name: 'depk7masa',
        api_key: '371641928741888',
        api_secret: 'Fwbz4p3FmzCmT73bBe9WS2YR2Zo'
    });
    return new Promise((resolve, reject) => {
        const cloudStream = cloudinary.v2.uploader.upload_stream(function (err, fileUploaded) {
            if (err) {
                reject(err);
            }
            resolve(fileUploaded);
        });
        fileStream.pipe(cloudStream);
    });
});
const pubsub = new PubSub();
const POST_ADDED = 'POST_ADDED';
const PostQueries = {
    posts: (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const posts = yield Post.find();
            return posts.map((p) => {
                return transformPost(p);
            });
        }
        catch (err) {
            throw err;
        }
    }),
    post: (parent, { postId }) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("pId", postId);
        try {
            const post = yield Post.findById(postId);
            return transformPost(post);
        }
        catch (err) {
            throw err;
        }
    }),
    somePosts: (parent, { after, first }, context) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('after', after);
        try {
            if (first < 0) {
                throw new Error('First must be positive');
            }
            const posts = yield Post.find();
            console.log('p', posts);
            // const index = posts.map(m => m.id).indexOf(after) + 1;
            // console.log('pndex',index)
            const totalCount = posts.length;
            let postArray = [];
            let start = 0;
            console.log('after', after);
            if (after !== undefined) {
                const buff = new Buffer(after, 'base64');
                console.log('buff', buff);
                const id = buff.toString('ascii');
                console.log('id', id);
                const index = posts.findIndex((post) => post._id === id);
                if (index === -1) {
                    throw new Error('After does not exist');
                }
                start = index + 1;
            }
            console.log('start:', start);
            postArray = first === undefined ?
                posts :
                posts.slice(start, start + first);
            console.log('first', first);
            let endCursor;
            const edges = postArray.map((post) => {
                const buffer = new Buffer(post.id);
                endCursor = buffer.toString('base64');
                // endCursor = Buffer.from(post.id,"base64").toString('base64');
                // endCursor = post.id
                return ({
                    cursor: endCursor,
                    node: transformPost(post),
                });
            });
            const hasNextPage = start + first < totalCount;
            const pageInfo = endCursor !== undefined ?
                {
                    endCursor,
                    hasNextPage,
                } :
                {
                    hasNextPage,
                };
            const result = {
                edges,
                pageInfo,
                totalCount,
            };
            return result;
        }
        catch (err) {
            throw err;
        }
    }),
};
const PostMutation = {
    createPost: (parent, { postInput: { file, username, description, postTitle } }) => __awaiter(void 0, void 0, void 0, function* () {
        //postInput
        console.log('data', file);
        const pictuer = yield uploadFile(file);
        console.log('picterUrl', pictuer);
        // await processUpload({ stream });
        try {
            const post = yield Post.findOne({
                username: username
            });
            if (post) {
                throw new Error('Post already Exists');
            }
            else {
                // let buff = new Buffer(post.id);
                // let id = buff.toString('base64')
                const newPost = new Post({
                    _id: shortId.generate(),
                    username: username,
                    description: description,
                    postTitle: postTitle,
                    file: pictuer.url
                });
                const savedPost = yield newPost.save();
                //   pubsub.publish(POST_ADDED, {
                //   postAdded: transformPost(savedPost)
                // });
                return savedPost;
            }
        }
        catch (error) {
            throw error;
        }
    }),
    deletePost: (_, { _id }, context) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const deletePost = yield Post.findByIdAndRemove({ _id });
            return { _id: deletePost._id };
            // await Post.findByIdAndRemove(postId)
        }
        catch (err) {
            throw new Error(err);
        }
    }),
    updatePost: (parent, { postId, postUpdate: { username, description, postTitle, file } }, context) => __awaiter(void 0, void 0, void 0, function* () {
        // If not authenticated throw error
        console.log("Up_postId", postId);
        // if (!context.isAuth) {
        //   console.log("cntext",context.isAuth);
        //   throw new Error('Non Authenticated');
        // }
        console.log('dataaaaa', file);
        const pictuer = yield uploadFile(file);
        console.log('username', username);
        const postObject = {
            username,
            description,
            postTitle,
            file: pictuer.url
        };
        // const willUpdatePost = new Post({
        //   // _id: shortId.generate(),
        //   username: username,
        //   description: description,
        //   postTitle:postTitle,
        //   file:pictuer.url
        // });
        console.log('value', postObject);
        try {
            const post = yield Post.findByIdAndUpdate(postId, postObject, {
                new: true
            });
            return transformPost(post);
        }
        catch (error) {
            throw error;
        }
    })
};
/**
 * Post Subscriptions
 */
const PostSubscription = {
    postAdded: {
        subscribe: () => pubsub.asyncIterator([POST_ADDED])
    }
};
export { PostQueries, PostMutation, PostSubscription };
