const BaseRepository = require("./base.repository");
let _comment = null;


class CommentRepository extends BaseRepository {
    constructor({ CommentModel }) {
        super(CommentModel)
        _comment = CommentModel;
    }

}

module.exports = CommentRepository;