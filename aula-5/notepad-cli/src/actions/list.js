const { list } = require('../core/file-manager');
const { title, output } = require('../io/output');

module.exports = async (cb = null) => {

    title('Notes List');

    const notes = await list();

    if (notes.length === 0) {
        output('Notes folder is empty');
    } else {
        notes.forEach((note, index) => output(`[${index + 1}]\t${note}`));
    }

    if (cb) cb();
}