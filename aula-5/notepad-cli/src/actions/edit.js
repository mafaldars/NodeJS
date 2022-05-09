const { reader, writer } = require("../core/file-manager");
const { userInput } = require('../io/input');
const { title } = require('../io/output');

module.exports = async (cb = null) => {
    title('Update Note');

    const name = await userInput('Name: ');
    const content = await reader(name);

    const newContent = await userInput('Content: ', content);

    if (content !== newContent) {
        await writer(name, newContent);
    }

    if (cb) cb();
}