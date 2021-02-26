const BaseService = require('./base.service');
let _ideaRepository = null;


class IdeaService extends BaseService {
    constructor({ IdeaRepository }) {
        super(IdeaRepository);
        _ideaRepository = IdeaRepository;
    }

    async getIdeaByUserId(author) {
        if (!author) {
            const error = new Error;
            error.code = 400;
            error.message = "userid must be sent";
        }

        return await this._ideaRepository.getIdeaByUserId(author);
    }


    async upvoteIdea(ideaId) {
        if (!ideaId) {
            const error = new Error;
            error.code = 400;
            error.message = "ideaId must be sent";
        }

        const idea = await _ideaRepository.get(ideaId);

        if (!idea) {
            const error = new Error;
            error.code = 404;
            error.message = "idea does not exist";
        }

        idea.upvotes.push(true);

        return await _ideaRepository.update(ideaId, { upvotes: idea.upvotes });
    }

    async downvoteIdea(ideaId) {
        if (!ideaId) {
            const error = new Error;
            error.code = 400;
            error.message = "ideaId must be sent";
        }

        const idea = await _ideaRepository.get(ideaId);

        if (!idea) {
            const error = new Error;
            error.code = 404;
            error.message = "idea does not exist";
        }

        idea.downvotes.push(true);

        return await _ideaRepository.update(ideaId, { downvotes: idea.downvotes });
    }
}


module.exports = IdeaService;