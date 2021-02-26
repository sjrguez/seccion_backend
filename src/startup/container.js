const { createContainer, asClass, asValue, asFunction } = require('awilix');

// Config

const config = require('../config')
const app = require('.')

// Services

const { HomeService, UserService, CommentService, IdeaService } = require('../services')


// Controllers

const { HomeController } = require('../controller')

// Routes

const { HomeRoutes } = require("../routes/index.router")
const Routes = require('../routes')

// Model

const { User, Idea, Comment } = require("../models");

// Repository

const { IdeaRepository, UserRepository, CommentRepository } = require('../repositories')



// container
const container = createContainer();


container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
        UserService: asClass(UserService).singleton(),
        IdeaService: asClass(IdeaService).singleton(),
        CommentService: asClass(CommentService).singleton(),
    }).register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    }).register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    }).register({
        UserModel: asValue(User),
        IdeaModel: asValue(Idea),
        CommentModel: asValue(Comment)
    }).register({
        UserRepository: asClass(UserRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton(),
    })



module.exports = container;