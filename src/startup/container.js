const { createContainer, asClass, asValue, asFunction } = require('awilix');

// Config

const config = require('../config')
const app = require('.')

// Services

const { HomeService } = require('../services')


// Controllers

const { HomeController } = require('../controller')

// Routes

const { HomeRoutes } = require("../routes/index.router")
const Routes = require('../routes')

// Model

const { User, Idea, Comment } = require("../models");

const container = createContainer();


container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
    }).register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    }).register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    }).register({
        UserModel: asValue(User),
        IdeaModel: asValue(Idea),
        CommentModel: asValue(Comment)
    })



module.exports = container;