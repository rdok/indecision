const path = require('path');

module.exports = {
    entry: './bin/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js'
    }
}