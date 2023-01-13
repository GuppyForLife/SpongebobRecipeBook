const {sequelize} = require('./db');
const {User} = require('./');
const {Recipe} = require('./');
const {users, recipes} = require('./seedData');
const bcrypt = require('bcryptjs/dist/bcrypt');

const seed = async () => {
  try {
    await sequelize.sync({ force: true }); // recreate db
    const usersWithHashedPasswords = [];
    const SALT_COUNT = 8;
    for(const i in users){
      users[i].password = await bcrypt.hash(users[i].password, SALT_COUNT);
      usersWithHashedPasswords.push(users[i]);
    }
    const createdUsers = await User.bulkCreate(usersWithHashedPasswords);
    const createdRecipes = await Recipe.bulkCreate(recipes);
    for(let i=0; i<createdRecipes.length; ++i){
        let recipe = createdRecipes[i];
        const userId = createdUsers[i % 3].id;
        await recipe.setUser(userId);
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = seed;