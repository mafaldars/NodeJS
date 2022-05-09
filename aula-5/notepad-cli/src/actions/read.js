const { reader } = require("../core/file-manager");
const { userInput } = require("../io/input");
const { title, line, output } = require("../io/output");

module.exports = async (cb = null) => {

    title('Read Note');

    const name = await userInput('Name: ');
    const content = await reader(name);

    line();
    output(`\n${content}\n`);
    line();

    if (cb) cb();
}