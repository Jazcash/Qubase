var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'testing'
    },
    port: 3000,
  },

  test: {
    root: rootPath,
    app: {
      name: 'testing'
    },
    port: 3001,
  },

  production: {
    root: rootPath,
    app: {
      name: 'testing'
    },
    port: 3002,
  }
};

module.exports = config[env];
