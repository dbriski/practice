const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');
const userInputs = document.querySelectorAll('input');

const movies = [];

const renderNewMovies = () => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }

  movies.forEach((movie) => {
    const movieItem = document.createElement('li');
    // movieItem.innerHTML = `
    // <div class="list-item">
    //   <h3>${movie.info.title}</h3>
    // </div>
    // `;
    let text = movie.info.title + ' - ';
    for (const key in movie) {
      if (key !== movie.info.title) {
        text = movie.info.title + ' - ' + key;
      } 
    }
    movieList.append(movieItem);
  });
};

const addMovieHandler = () => {
  const title = userInputs[0].value;
  const extraNameValue = userInputs[1].value;
  const extraValue = userInputs[2].value;

  if (
    title.trim === '' ||
    extraNameValue.trim === '' ||
    extraValue === ''
  ) {
    return;
  }

  const movieObj = {
    info: {
      title,
      [extraNameValue]: extraValue,
    },
    id: Math.random(),
  };

  movies.push(movieObj);
  console.log(movies);
  renderNewMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);
// searchMovieBtn.addEventListener('click');
