const BaseRepository = require("./base.repository");


let _user = null;

class UserRepository extends BaseRepository {
    constructor({ UserModel }) {
        super(UserModel)
        _user = UserModel;
    }


    getUserByUserName(username) {
        return await _user.findOne({ username });
    }


}