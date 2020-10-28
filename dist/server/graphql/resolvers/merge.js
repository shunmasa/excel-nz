var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import dateToString from '../../helpers/date';
import User from '../../models/user';
import Post from '../../models/post';
import Notice from '../../models/notice';
/**
 *
 * @param id
 */
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findById(id);
        return Object.assign(Object.assign({}, user._doc), { _id: user.id });
    }
    catch (err) {
        throw err;
    }
});
/**
 * Get user object with schema typing
 * @param user
 */
const transformUser = (user) => {
    return Object.assign(Object.assign({}, user._doc), { _id: user.id });
};
const getNotice = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notice = yield Notice.findById(id);
        return Object.assign(Object.assign({}, notice._doc), { _id: notice.id, createdAt: dateToString(notice._doc.createdAt) });
    }
    catch (err) {
        throw err;
    }
});
const transformNotice = (notice) => {
    return Object.assign(Object.assign({}, notice._doc), { _id: notice.id, createdAt: dateToString(notice._doc.createdAt) });
};
const getPost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post.findById(id);
        return Object.assign(Object.assign({}, post._doc), { _id: post.id, createdAt: dateToString(post._doc.createdAt), updatedAt: dateToString(post._doc.updatedAt) });
    }
    catch (err) {
        throw err;
    }
});
const transformPost = (post) => {
    return Object.assign(Object.assign({}, post._doc), { _id: post.id, createdAt: dateToString(post._doc.createdAt), updatedAt: dateToString(post._doc.updatedAt) });
};
export { getUser, transformUser, getPost, transformPost, getNotice, transformNotice };
