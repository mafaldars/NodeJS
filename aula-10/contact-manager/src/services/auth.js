const bcrypt = require('bcrypt');
const User = require('../models/User');

const createPasswordHash = async (plainPassword) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(plainPassword, salt);
}

const createUser = async (name, email, username, password) => {
    const hash = await createPasswordHash(password);

    return User.create({ name, email, username, password: hash });
};

const attemptLogin = async (username, password) => {
    const user = await User.findOne({ username });

    if (!user) {
        throw new Error('Bad credentials');
    }
    
    const valid = await bcrypt.compare(password, user.password);
    
    if (!valid) {
        throw new Error('Bad credentials');
    }

    return user;
}

const updateUser = async (id, name, email, password) => {
    const user = await User.findById(id);
    user.name = name;
    user.email = email;

    if (password) {
        const hash = await createPasswordHash(password);
        user.password = hash;
    }

    await user.save();

    return user;
}

module.exports = {
    createUser,
    attemptLogin,
    updateUser
}