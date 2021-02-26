const BaseRepository = require("./base.repository");


let _user = null;

class UserRepository extends BaseRepository {
    constructor({ UserModel }) {
        super(UserModel)
        _user = UserModel;
    }


    async getUserByUserName(username) {
        await _user.findOne({ username });
        return true;
    }


}

module.exports = UserRepository;