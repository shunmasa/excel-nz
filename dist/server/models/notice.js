import mongoose from 'mongoose';
const noticeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
noticeSchema.statics = {
    /**
     * Get User
     * @param {ObjectId} id - The objectId of user.
     */
    get(id) {
        return this.findById(id)
            .execAsync()
            .then((notice) => {
            if (notice) {
                return notice;
            }
        });
    }
};
export default mongoose.model('Notice', noticeSchema);
