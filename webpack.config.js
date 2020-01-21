const path = require('path');

module.exports = {
    entry: './bin/list.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js'
    }
}