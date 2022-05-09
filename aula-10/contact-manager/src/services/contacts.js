const { randomUUID } = require('crypto');
const { join } = require('path');
const { extname } = require('path');

const Contact = require("../models/Contact");

const all = async (user, filter = undefined) => {
    let filterData = {};

    if (user && !user.isAdmin) {
        filterData = { user };
    }

    if (filter) {
        filterData = {
            ...filterData,
            name: {
                $regex: `.*${filter}.*`,
                $options: 'i'
            }
        };
    }
    return Contact.find(filterData).lean();
}

const byId = async (id) => Contact.findById(id).lean({ virtuals: true });

const create = async (name, email, phone, birthday, image, user) => {

    let fileName = null;

    if (image) {
        fileName = `${randomUUID()}${extname(image.name)}`;
        image.mv(join(__dirname, '..', '..', 'public', 'uploads', fileName));
    }

    return Contact.create({
        name,
        email,
        phone,
        birthday,
        photo: fileName,
        user: user?._id ?? null
    });
}

const update = async (id, name, email, phone, birthday) => {
    return Contact.findByIdAndUpdate(id, {
        $set: { name, email, phone, birthday }
    });
};

const remove = async (id) => Contact.findByIdAndDelete(id);

module.exports = { all, byId, create, update, remove };