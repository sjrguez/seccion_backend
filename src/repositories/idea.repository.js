const BaseRepository = require("./base.repository");
let _idea = null;


class IdeaRepository extends BaseRepository {
    constructor({ IdeaModel }) {
        super(IdeaModel)
        _idea = IdeaModel;
    }

    async getIdeaByUserId(author) {
        return await _idea.find({ author })
    }

}

module.exports = IdeaRepository;