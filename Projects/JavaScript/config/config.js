const path = require('path');

module.exports = {
    development: {
        rootFolder: path.normalize(path.join(__dirname, '/../')),
        "username": "root",
        "password": null,
        "database": "javascript_project",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    production:{}
};
