const create = require("../actions/create");
const edit = require("../actions/edit");
const list = require("../actions/list");
const read = require("../actions/read");
const remove = require("../actions/remove");

module.exports = (option, cb = null) => {
    switch (option.toUpperCase()) {
        case 'L': list(cb); break;
        case 'R': read(cb); break;
        case 'C': create(cb); break;
        case 'U': edit(cb); break;
        case 'D': remove(cb); break;
        case 'E': break;
        default: cb();
    }
}