const { verify } = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");


module.exports = (req, res, next) => {
    const token = req.headers('authorization');
    if (!token) {
        const error = new Error();
        error = {
            status: 400,
            message: "Token must be sent"
        }

        throw error;
    }

    try {
        const data = verify(toke, JWT_SECRET)
        req.user = data.user;
        next()

    } catch (e) {
        const error = new Error()
        error = {
            status: 401,
            message: "Invalid token"
        }
        throw error;
    }
}