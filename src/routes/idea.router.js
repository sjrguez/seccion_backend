const { Router } = require('express');
const { ParserInMiddleware } = require('../midlewares');

module.exports = function({ IdeaController }) {

    const router = Router();

    router.get("/", ParserInMiddleware, IdeaController.getAll)
    router.get("/:ideaId", IdeaController.get)
    router.post("/", IdeaController.create)
    router.get("/:ideaId/all", IdeaController.getUserIdeas)
    router.patch("/:ideaId", IdeaController.update)
    router.delete("/:ideaId", IdeaController.delete)
    router.post("/:ideaId/upvote", IdeaController.upvoteIdea)
    router.post("/:ideaId/downvote", IdeaController.downvoteIdea)


    return router;
}