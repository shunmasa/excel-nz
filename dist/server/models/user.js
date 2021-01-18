import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    notices: {
        body: String,
    },
});
/**
 * Statics
 */
userSchema.statics = {
    /**
     * Get User
     * @param {ObjectId} id - The objectId of user.
     */
    get(id) {
        return this.findById(id)
            .execAsync()
            .then((user) => {
            if (user) {
                return user;
            }
        });
    }
};
export default mongoose.model('User', userSchema);
