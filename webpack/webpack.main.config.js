const path = require(`path`);

module.exports = {
    entry: path.resolve(__dirname, `../src/index.ts`),
    module: {
        rules: require(`./webpack.rules`)
    },
    resolve: {
        extensions: [`.js`, `.ts`, `.jsx`, `.tsx`, `.css`, `.json`]
    }
};
