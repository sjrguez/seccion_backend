const BaseRepository = require("./base.repository");


let _user = null;

class UserRepository extends BaseRepository {
    constructor({ UserModel }) {
        super(UserModel)
        _user = UserModel;
    }


    async getUserByUserName(username) {
        const data = await _user.findOne({ username });
        return data;
    }


}

module.exports = UserRepository;