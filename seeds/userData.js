const { User } = require('../models');

const userdata= [
    {
      username: 'shaquille.oatmeal',
      password: 'password1234',
    },
    {
        username: 'hoosier-daddy',
        password: 'password1234',
    },
    {
        username: 'google_was_my_idea',
        password: 'password1234',
    },
    {
        username: 'real_name_hidden',
        password: 'password1234',
    },
    {
        username: 'unfinished_sentenc',
        password: 'password1234',
    },
    {
        username: 'bigfootisreal',
        password: 'password1234',
    },
]


const seedUser = () => User.bulkCreate(userdata);


module.exports = seedUser;