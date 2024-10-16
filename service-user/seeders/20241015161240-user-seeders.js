'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [{
        name: "budy",
        profession: "admin",
        role: "admin",
        email: "budi01gaming@gmail.com",
        password: await bcrypt.hash('12345678', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "dimas",
        profession: "student",
        role: "student",
        email: "dimaspersneleng@gmail.com",
        password: await bcrypt.hash('12345678', 10),
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]
    );

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', 'null', {});

  }
};
