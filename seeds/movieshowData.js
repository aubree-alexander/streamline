const { ForeignKeyConstraintError } = require('sequelize/types');
const { MovieShow } = require('../models');

const movieshowdata= [
  {
    title: 'Avatar',
    yearReleased: '2009',
    image_url: 'https://res.cloudinary.com/ddmkrf5bx123/image/upload/v1654368742/streamline/61OUGpUfAyL._AC_SY741__bsolfu.jpg',
    genre: ['Action', 'Science Fiction', 'Adventure']
  },
  {
    title: 'The Office',
    yearReleased: '2005',
    image_url: 'https://res.cloudinary.com/ddmkrf5bx123/image/upload/v1654368777/streamline/download_1_qg3ysg.jpg',
    genre: 'Comedy'
  },
  {
    title: 'Forrest Gump',
    yearReleased: '1994',
    image_url: 'https://res.cloudinary.com/ddmkrf5bx123/image/upload/v1654368798/streamline/61F7SuvJ58L._AC_SL1000__rtynyc.jpg',
    genre: ['Comedy', 'Drama']
  },
  {
    title: 'The Dark Knight',
    yearReleased: '2008',
    image_url: 'https://res.cloudinary.com/ddmkrf5bx123/image/upload/v1654368822/streamline/download_2_pzqmy9.jpg',
    genre: ['Action', 'Adventure']
  },
  {
    title: 'Snow White and the Seven Dwarfs',
    yearReleased: '1938',
    image_url: 'https://res.cloudinary.com/ddmkrf5bx123/image/upload/v1654368843/streamline/p_snowwhiteandthesevendwarfs_19871_806c8934_mn2o8r.jpg',
    genre: ['Animation', "Children's",]
  },
  {
      title: 'The Breakfast Club',
      yearReleased: '1985',
      image_url: 'https://res.cloudinary.com/ddmkrf5bx123/image/upload/v1654368864/streamline/7250a8ca-0519-4a5c-816c-7fd128b1cb36_1.1e654ba0d6ca06d871b407d8ca90c7fc_ovghhs.jpg',
      genre: ['Comedy', 'Drama']
  },
  {
      title: 'The Green Mile',
      yearReleased: '1999',
      image_url: 'https://res.cloudinary.com/ddmkrf5bx123/image/upload/v1654368884/streamline/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000__inibkr.jpg',
      genre: ['Drama', 'Mystery']
  },
  {
    title: 'Moon Knight',
    yearReleased: '2022',
    image_url: 'https://res.cloudinary.com/ddmkrf5bx123/image/upload/v1654368902/streamline/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE_._V1__tle9st.jpg',
    genre: ['Superhero', 'Action']
  },
  {
    title: 'Jurassic Park',
    yearReleased: '1993',
    image_url: 'https://res.cloudinary.com/ddmkrf5bx123/image/upload/v1654368921/streamline/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE_._V1__vjpujn.jpg',
    genre: ['Action', 'Adventure', 'Thriller']
  }
];

const seedMovieShow = () => MovieShow.bulkCreate(movieshowdata);

module.exports = seedMovieShow;
