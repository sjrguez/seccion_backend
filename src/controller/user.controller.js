let _userService = null;

class UserController {
    constructor({ UserService }) {
        _userService = UserService;
    }


    async get(req, res) {
        const { userId } = req.params;
        const user = await _userService.get(userId);
        return res.send({ user })
    }

    async getAll(req, res) {
        const users = await _userService.getAll();
        return res.send({ users })
    }

    async update(req, res) {
        const { body } = req;
        const { userId } = req.params;

        const userUpdated = await _userService.update(userId, body);
        return res.send({ userUpdated });
    }

    async delete(req, res) {
        const { userId } = req.params;
        await _userService.delete(userId);
        return res.send({ deleted: true })

    }
}


module.exports = UserController;