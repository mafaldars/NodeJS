const { remove } = require("../core/file-manager");
const { userInput, alert } = require("../io/input");
const { title, output } = require("../io/output")

module.exports = async (cb = null) => {
    title('Remove Note');

    const name = await userInput('Name: ');

    await alert(`Remove file with name ${name}?`, async () => {
        await remove(name);
        output(`Removed note ${name}`);
    });

    if (cb) cb();
}