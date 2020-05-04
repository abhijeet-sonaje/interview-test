// import mongoose from 'mongoose';

// const options = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     poolSize: 80
// };

// mongoose.connect(process.env.MONGO_URL, options).then(() => {
//     console.log("Mongo Connected Succesfully!");
// });


const db = {
    async create(dbModel, args) {
        const response = await dbModel.create(args);
        return (response);
    },

    async delete(dbModel, args) {
        const response = await dbModel.findOneAndUpdate({ _id: args._id }, { $set: { is_deleted: true } });
        return (response);
    },

    async remove(dbModel, args) {
        const response = await dbModel.deleteOne({ _id: args._id });
        return (response);
    },

    async get(dbModel, args) {
        const response = await dbModel.findOne(args);
        return (response);
    },

    async findAndPopulate(dbModel, args, populate) {
        const response = await dbModel.findOne(args).populate(populate);
        return response;
    },

    async find(dbModel, args) {
        const response = await dbModel.find(args);
        return (response);
    },

    async list(dbModel) {
        const response = await dbModel.find({ is_deleted: false });
        return (response);
    },

    async update(dbModel, condition, args) {
        const response = await dbModel.updateOne(condition, { $set: args });
        return (response);
    }
}

export { db };