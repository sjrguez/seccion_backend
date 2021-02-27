const { generateToken } = require("../helpers/jwt.helper");

let _userRepository = null;


class AuthService {
    constructor({ UserService }) {
        _userRepository = UserService;
    }

    async signUp(user) {
        const { username } = user;
        const userExist = await _userRepository.getUserByUserName(username);
        if (userExist) {
            const error = new Error();
            error.status = 401;
            error.message = "User already exist"
            throw error;
        }
        return await _userRepository.create(user);
    }

    async signIn(user) {
        const { username, password } = user;
        const userExist = await _userRepository.getUserByUserName(username);
        if (!userExist) {
            const error = new Error();
            error.status = 404;
            error.message = "User already exist"
            throw error;
        }

        const validPassword = userExist.comparePassword(password);
        if (!validPassword) {
            const error = new Error();
            error.status = 400;
            error.message = "Invalid password or username"
            throw error;
        }

        const userToEncode = {
            username: userExist.username,
            id: userExist._id,
        }

        const token = generateToken(userToEncode)
        return { token, user: userExist };
    }
}

module.exports = AuthService