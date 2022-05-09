const router = require("./core/router");
const { menu } = require("./io/output")

const app = async () => {
    const option = await menu();
    router(option, app);
};

app();