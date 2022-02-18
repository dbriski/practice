const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');
const userInputs = document.querySelectorAll('input');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieItem = document.createElement('li');
    // movieItem.innerHTML = `
    // <div class="list-item">
    //   <h3>${movie.info.title}</h3>
    // </div>
    // `;
    const {info, ...otherProps} = movie;
    console.log(otherProps);
    // const {title: movieTitle} = info;
    let {getFormattedTitle} = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.apply(movie) + ' - ';
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieItem.textContent = text;
    movieList.append(movieItem);
  });
};

const addMovieHandler = () => {
  const title = userInputs[0].value;
  const extraNameValue = userInputs[1].value;
  const extraValue = userInputs[2].value;

  if (extraNameValue.trim === '' || extraValue === '') {
    return;
  }

  const movieObj = {
    info: {
      set title(val) {
        if (val.trim === '' ) {
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraNameValue]: extraValue
    },
    id: Math.random(),
    getFormattedTitle() {
      console.log(this)
      return this.info.title.toUpperCase();
    }
  };

  movieObj.info.title = title;
  console.log(movieObj.info.title);

  movies.push(movieObj);
  console.log(movies);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterValue = userInputs[3].value;
  renderMovies(filterValue);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchMovieBtn.addEventListener('click', searchMovieHandler);

