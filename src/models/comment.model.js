const { Schema, model } = require("mongoose");



const CommentSchema = new Schema({
    idea: { type: String, required: true },
    descripcion: { type: String, required: false },
    author: { type: Schema.Types.ObjectId, ref: 'user', required: true, autopopulate: true },
})

CommentSchema.plugin(require("mongoose-autopopulate"))

module.exports = model("comment", CommentSchema)