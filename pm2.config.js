// import environment variable
require('dotenv').config();

module.exports = {
  apps: [
    {
      name: `${process.env.PORT} Nanas Link Analytics (${process.env.NODE_ENV})`,
      script: `yarn start --port ${process.env.PORT}`,
      watch: true,
    },
  ],
};
