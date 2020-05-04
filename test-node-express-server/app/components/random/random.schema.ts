import mongoose from "mongoose";

const randomSchema = new mongoose.Schema({
    data: { type: Object, default: null },
    date_created: { type: Date, default: Date.now },
    date_modified: { type: Date, default: Date.now },
    is_deleted: { type: Boolean, default: false }
});

const random = mongoose.model("Random", randomSchema);

export default random;
