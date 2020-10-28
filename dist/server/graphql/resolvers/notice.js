var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { UserInputError } = require('apollo-server');
import mongoose from 'mongoose';
// import config from '../../../config';
import Notice from '../../models/notice';
import { transformNotice } from './merge';
// const { AuthenticationError} = require('apollo-server');
const NoticeQueries = {
    notices: (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const notices = yield Notice.find();
            console.log('userdata', notices);
            //  const {notices} = user
            return notices.map((n) => {
                return transformNotice(n);
            });
        }
        catch (err) {
            throw err;
        }
    }),
    notice: (parent, { _id }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const notice = yield Notice.findById(_id);
            return transformNotice(notice);
        }
        catch (err) {
            throw err;
        }
    })
};
const NoticeMutation = {
    createNotice: (parent, { body }) => __awaiter(void 0, void 0, void 0, function* () {
        if (body.trim() === '') {
            throw new UserInputError('Empty notice', {
                errors: {
                    body: 'body must not be empty'
                }
            });
        }
        try {
            const newNotice = new Notice({
                _id: new mongoose.Types.ObjectId(),
                body
            });
            // const {notices}:any = user;
            // const newNotice = notices.unshift({
            //   _id: new mongoose.Types.ObjectId(),
            //   body
            // })
            const savedNotice = yield newNotice.save();
            return savedNotice;
        }
        catch (error) {
            throw error;
        }
    }),
    deleteNotice: (parent, { _id }, context) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log('id', _id);
            const deleteNotice = yield Notice.findByIdAndRemove({ _id });
            return { _id: deleteNotice._id };
            // return { _id: deletedNotice.id};
        }
        catch (err) {
            throw new Error(err);
        }
    }),
    updateNotice: (parent, { _id, noticeInput }, context) => __awaiter(void 0, void 0, void 0, function* () {
        // If not authenticated throw error
        if (!context.isAuth) {
            console.log("cntext", context.isAuth);
            throw new Error('Non Authenticated');
        }
        try {
            const notice = yield Notice.findByIdAndUpdate(_id, noticeInput, {
                new: true
            });
            return transformNotice(notice);
        }
        catch (error) {
            throw error;
        }
    })
};
export { NoticeQueries, NoticeMutation };
