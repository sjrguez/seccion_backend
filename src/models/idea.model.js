const { Schema, model } = require("mongoose");



const IdeaSchema = new Schema({
    idea: { type: String, required: true },
    descripcion: { type: String, required: false },
    upvotes: [{ type: Boolean }],
    downvotes: [{ type: Boolean }],
    user: { type: Schema.Types.ObjectId, ref: 'user', required: true, autopopulate: true },
    comments: [{
        comment: { type: Schema.Types.ObjectId, ref: 'comment', required: true, autopopulate: true },
    }]
})

IdeaSchema.plugin(require("mongoose-autopopulate"))


module.exports = model('idea', IdeaSchema)