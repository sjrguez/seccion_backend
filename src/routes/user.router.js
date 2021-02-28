const { Router } = require('express');
const { AuthMiddleware, ParserInMiddleware } = require("../midlewares/index")
module.exports = function({ UserController }) {

    const router = Router();

    router.get("/", [AuthMiddleware, ParserInMiddleware], UserController.getAll)
    router.get("/:userId", UserController.get)


    router.patch("/:userId", UserController.update)
    router.delete("/:userId", UserController.delete)


    return router;
}