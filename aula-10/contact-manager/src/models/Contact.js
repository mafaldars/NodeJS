const { Schema, model } = require('mongoose');
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');

const ContactSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    birthday: Date,
    photo: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

ContactSchema
    .virtual('age')
    .get(function () {
        // return this.ageInDate();
        return Math.floor((Date.now() - this.birthday.getTime()) / 1000 / (60 * 60 * 24 * 365));
    });

ContactSchema.plugin(mongooseLeanVirtuals);

ContactSchema.methods.ageInDate = function (date = new Date()) {
    if (typeof date === 'string') {
        date = new Date(date);
    }

    return Math.floor((date.getTime() - this.birthday.getTime()) / 1000 / (60 * 60 * 24 * 365));
}

module.exports = model('Contact', ContactSchema);