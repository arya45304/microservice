const {User} = require('../../../models');

module.exports = async (req, res) => {

const userIds = req.query.user_ids || [];

const sqlOptions = {
    attributes: ['id', 'name', 'email', 'role', 'profession', 'avatar']
};

if (userIds.length){
    sqlOptions.where = {
        id: userIds
    }
}

const id = req.params.id;

const user =await User.findAll(sqlOptions);

return res.json({
    status: 'success',
    data: user
});
}
