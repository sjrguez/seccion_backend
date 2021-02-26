let _ideaService = null;

class IdeaController {
    constructor({ IdeaService }) {
        _ideaService = IdeaService;
    }


    async get(req, res) {
        const { ideaId } = req.params;
        const idea = await _ideaService.get(ideaId);
        return res.send({ idea })
    }

    async getAll(req, res) {
        const ideas = await _ideaService.getAll();
        return res.send({ ideas })
    }

    async create(req, res) {
        const { body } = req;
        const idea = await _ideaService.create(body);
        return res.status(201).send({ idea })
    }

    async update(req, res) {
        const { body } = req;
        const { ideaId } = req.params;

        const ideaUpdated = await _ideaService.update(ideaId, body);
        return res.send({ ideaUpdated });
    }

    async delete(req, res) {
        const { ideaId } = req.params;
        await _ideaService.delete(ideaId);
        return res.send({ deleted: true })

    }

    async getUserIdeas(req, res) {
        const { userId } = req.params;
        const ideas = await _ideaService.getIdeaByUserId(userId);
        return res.send({ ideas })
    }

    async upvoteIdea() {
        const { ideaId } = req.params
        const idea = await _ideaService.upvoteIdea(ideaId)
        return res.send({ idea })
    }

    async downvoteIdea() {
        const { ideaId } = req.params
        const idea = await _ideaService.downvoteIdea(ideaId)
        return res.send({ idea })
    }

}


module.exports = IdeaController;