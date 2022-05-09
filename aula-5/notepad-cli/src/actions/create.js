const { writer } = require("../core/file-manager");
const { userInput, alert } = require("../io/input");
const { title, output } = require("../io/output")

module.exports = async (cb = null) => {
    title('Create Note');

    const name = await userInput('Name: ');
    const content = await userInput('Content: ');

    await alert(`Save note with name ${name}?`, async () => {
        await writer(name, content);
        output(`Created file with name ${name}.`);
    });

    if (cb) cb();
}