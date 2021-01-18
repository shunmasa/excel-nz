import { UserMutation, UserQueries, UserSubscription } from './user';
import { PostQueries, PostMutation, PostSubscription } from './post';
import { NoticeQueries, NoticeMutation } from './notice';
const rootResolver = {
    Query: Object.assign(Object.assign(Object.assign({}, UserQueries), PostQueries), NoticeQueries),
    Mutation: Object.assign(Object.assign(Object.assign({}, UserMutation), PostMutation), NoticeMutation),
    Subscription: Object.assign(Object.assign({}, UserSubscription), PostSubscription)
};
//
export default rootResolver;
