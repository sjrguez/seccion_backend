module.exports = {
    NotFoundMiddleWare: require("./not-found.middleware"),
    ErrorMiddleware: require("./error.middleware"),
    AuthMiddleware: require("./auth.middleware"),
    ParserInMiddleware: require('./parse-In.middleware'),
    CacheMiddleware: require('./cache.middleware')
}