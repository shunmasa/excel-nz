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
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import config from '../../config';
import User from '../../models/user';
import { transformUser } from './merge';
const pubsub = new PubSub();
const USER_ADDED = 'USER_ADDED';
const UserQueries = {
    users: (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const users = yield User.find();
            return users.map((user) => {
                return transformUser(user);
            });
        }
        catch (err) {
            throw err;
        }
    }),
    user: (parent, { userId }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User.findById(userId);
            return transformUser(user);
        }
        catch (err) {
            throw err;
        }
    }),
};
const UserMutation = {
    login: (parent, { email, password }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User.findOne({ email, password });
            if (!user) {
                throw new Error('User does not Exists');
            }
            const token = jwt.sign({ userId: user.id }, config.jwtSecret, {
                expiresIn: '1h'
            });
            return {
                userId: user.id,
                token,
                tokenExpiration: 1
            };
        }
        catch (err) {
            throw err;
        }
    }),
    createUser: (parent, { userInput }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User.findOne({
                email: userInput.email
            });
            if (user) {
                throw new Error('User already Exists');
            }
            else {
                const newUser = new User({
                    _id: new mongoose.Types.ObjectId(),
                    email: userInput.email,
                    username: userInput.username,
                    password: userInput.password
                });
                const savedUser = yield newUser.save();
                pubsub.publish(USER_ADDED, {
                    userAdded: transformUser(savedUser)
                });
                const token = jwt.sign({ userId: savedUser.id }, config.jwtSecret, {
                    expiresIn: '1h'
                });
                return {
                    userId: savedUser.id,
                    token,
                    tokenExpiration: 1
                };
            }
        }
        catch (error) {
            throw error;
        }
    }),
    updateUser: (parent, { userId, updateUser }, context) => __awaiter(void 0, void 0, void 0, function* () {
        // If not authenticated throw error
        console.log("userId", userId);
        if (!context.isAuth) {
            console.log("cntext", context.isAuth);
            throw new Error('Non Authenticated');
        }
        try {
            const user = yield User.findByIdAndUpdate(userId, updateUser, {
                new: true
            });
            return transformUser(user);
        }
        catch (error) {
            throw error;
        }
    })
};
/**
 * User Subscriptions
 */
const UserSubscription = {
    userAdded: {
        subscribe: () => pubsub.asyncIterator([USER_ADDED])
    }
};
export { UserQueries, UserMutation, UserSubscription };
