const { MovieShow } = require('../models');

const movieshowdata= [
  {
    title: 'Avatar',
    yearReleased: '2009',
  },
  {
    title: 'The Office',
    yearReleased: '2005',
  },
  {
    title: 'Forrest Gump',
    yearReleased: '1994',
  },
  {
    title: 'The Dark Knight',
    yearReleased: '2008',
  },
  {
    title: 'Snow White and the Seven Dwarfs',
    yearReleased: '1938'
  },
  {
      title: 'The Breakfast Club',
      yearReleased: '1985'
  },
  {
      title: 'The Green Mile',
      yearReleased: '1999'
  },
  {
    title: 'Moon Knight',
    yearReleased: '2022'
  },
  {
    title: 'Jurassic Park',
    yearReleased: '1993'
  }
];

const seedMovieShow = () => MovieShow.bulkCreate(movieshowdata);

module.exports = seedMovieShow;
