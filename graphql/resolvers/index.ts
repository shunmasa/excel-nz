import { UserMutation, UserQueries, UserSubscription } from './user';
import {PostQueries, PostMutation, PostSubscription} from './post';
import {NoticeQueries, NoticeMutation} from './notice';
const rootResolver = {
  Query: {
    ...UserQueries,
    ...PostQueries,
    ...NoticeQueries
  
  },
  Mutation: {
    ...UserMutation,
    ...PostMutation,
    ...NoticeMutation

  },
  Subscription: {
    ...UserSubscription,
    ... PostSubscription
   
  }
};

export default rootResolver;