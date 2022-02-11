const addMovieButtonElement = document.getElementById('add-btn');
const addMovieModal = document.getElementById('add-modal');
const backdropElement = document.getElementById('backdrop');
const cancelButtonElement = addMovieModal.querySelector('.btn.btn--passive');
const addButtonElement = addMovieModal.querySelector('.btn.btn--success');
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextElement = document.getElementById('entry-text');
const movieList = document.getElementById('movie-list');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextElement.style.display = 'block';
  } else {
    entryTextElement.style.display = 'none';
  }
};

const closeMovieDeletionModal = () => {
  toggleBackdropModal();
  deleteMovieModal.classList.remove('visible');
};

// takes id from newMovieElement, checks for it in movies and removes it from array and HTML code
const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  movieList.children[movieIndex].remove();
  closeMovieDeletionModal();
  updateUI();
};

const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add('visible');
  toggleBackdropModal();
  const cancelDeletionButton =
    deleteMovieModal.querySelector('.btn.btn--passive');
  let confirmDeletionButton =
    deleteMovieModal.querySelector('.btn.btn--danger');
// recreates new deletion button that replaces existing one and its events; 
// old DOMs will go into the void and garbage collection will clear them
// before adding event listener, there is always a new button when function executes again
  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteMovieModal.querySelector('.btn.btn--danger');

  cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);
  cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId)
  );
};

// creates movie element using HTML code and appends it to ul
const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
  <img src="${imageUrl}" alt="${title}">
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5 stars</p>
  </div>
  `;
  //deletion on click with binded value from newMovie object
  newMovieElement.addEventListener(
    'click',
    startDeleteMovieHandler.bind(null, id)
  );
  movieList.append(newMovieElement);
};

const toggleBackdropModal = () => {
  backdropElement.classList.toggle('visible');
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdropModal();
};

// userInputs are created as an array because of .querySelectorAll and loops can be applied
const clearMovieInput = () => {
  for (const usrInp of userInputs) {
    usrInp.value = '';
  }
};

const cancelMovieHandler = () => {
  closeMovieModal();
  toggleBackdropModal();
  clearMovieInput();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};

// takes value from inputs, checks for valid input, creates object based on value from inputs then pushes them into array
const addMovieHandler = () => {
  const movieTitle = userInputs[0].value;
  const movieImg = userInputs[1].value;
  const movieRating = userInputs[2].value;

  if (
    movieTitle.trim() === '' ||
    movieImg.trim() === '' ||
    movieRating === '' ||
    +movieRating < 1 ||
    +movieRating > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
  }

  const newMovie = {
    id: Math.random().toString(),
    title: movieTitle,
    image: movieImg,
    rating: movieRating,
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdropModal();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

addMovieButtonElement.addEventListener('click', showMovieModal);
backdropElement.addEventListener('click', backdropClickHandler);
cancelButtonElement.addEventListener('click', cancelMovieHandler);
addButtonElement.addEventListener('click', addMovieHandler);
