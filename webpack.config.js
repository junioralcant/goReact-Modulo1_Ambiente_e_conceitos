const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'), //encrontra o arquivo principal da aplicação
    output: { // local onde sera armazenado os cadigos tranpilados pelo babel
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js', // nome do arquivo onde vai ser amezenado, é criado altomatocamente
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}