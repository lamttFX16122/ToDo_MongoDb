const UserModel = require('./../models/user.Model');
const bcrypt = require('bcryptjs');
const userController = {
    // Create User
    userRegister: async (req, res) => {
        try {
            // only new user... check email exist by middleware
            const { email, password, userName } = req.body;
            const numSalt = parseInt(process.env.SALT_PASSWORD);
            const salt = await bcrypt.genSalt(numSalt);
            const hashed = await bcrypt.hash(password, salt);
            const newUser = new UserModel({
                email: email,
                password: hashed,
                userName: userName
            });
            // Save model
            newUser.save((err, doc) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        error: 2,
                        message: 'Server Error',
                        payload: {}
                    });
                }
                return res.status(201).json({
                    error: 0,
                    massage: 'User created',
                    payload: {}
                })
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                error: 2,
                message: 'Server Error',
                payload: {}
            });
        }
    },
    checkEmailRegister: (req, res) => {
        const { email } = req.body;
        UserModel.findOne({ email: email })
            .then(user => {
                if (!user) {
                    return res.status(200).json({
                        error: 0,
                        message: 'Email valid',
                        payload: {}
                    }) //Exist
                }
                else {
                    return res.status(200).json({
                        error: 2,
                        message: 'Email is Exist',
                        payload: {}
                    }) //Exist
                }
            })
            .catch(err => console.log(err));
    }
}
module.exports = userController;