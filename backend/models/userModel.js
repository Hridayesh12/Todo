const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please Enter Your First Name'],
    },
    email: {
        type: String,
        required: [true, 'Please Enter Your Email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please Enter A Valid Email']
    },
    password: {
        type: String,
        required: [true, 'Please Enter Password'],
    },
    todoArray: {
        type: Array,
        default: []
    }
});

// userSchema.pre('save', async function (next) {
//     const salt = await bcrypt.genSalt();
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// userSchema.statics.login = async function (userData) {
//     const user = await this.findOne({ email: userData.email });
//     if (user) {
//         const auth = await bcrypt.compare(userData.password, user.password);
//         if (auth) {
//             return user;
//         }
//         throw Error('Incorrect Password');
//     }
//     throw Error('Incorrect Email');
// };
const User = mongoose.model('User', userSchema);

module.exports = User;