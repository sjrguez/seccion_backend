const BaseService = require('./base.service');
const _commentRepository = null;
const _ideaRepository = null;


class CommentService extends BaseService {

    constructor({ CommentRepository, IdeaRepository }) {
        super(CommentRepository);
        _commentRepository = CommentRepository;
    }


    async getIdeaComment(ideaId) {
        if (!ideaId) {
            const error = new Error;
            error.code = 400;
            error.message = "ideaId must be sent";
        }

        const idea = _ideaRepository.get(ideaId);

        if (!idea) {
            const error = new Error;
            error.code = 404;
            error.message = "idea does not exist";
        }

        const { comments } = idea;

        return comments;
    }


    async createComment(comment, ideaId) {

        if (!ideaId) {
            const error = new Error;
            error.code = 400;
            error.message = "ideaId must be sent";
        }

        const idea = _ideaRepository.get(ideaId);

        if (!idea) {
            const error = new Error;
            error.code = 404;
            error.message = "idea does not exist";
        }


        const createdComment = await _commentRepository.create(comment);
        idea.comments.push(createdComment)

        return await _commentRepository.update(ideaId, { comments: idea.comments });
    }

}


module.exports = CommentService