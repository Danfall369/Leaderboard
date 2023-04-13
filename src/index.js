import './style.css';

import {
  displayData, submitButton, postData, refresh,
} from './modules/scoreAPI.js';

// Call the displayData function to display the player scores
displayData();

// Add an event listener to the submit button to add a new player score
submitButton.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('yourName').value;
  const score = document.getElementById('yourScore').value;
  if (name === '' || score === '') {
    return null;
  }
  postData({ user: name, score });
  displayData();
  return null;
});

// Add an event listener to the refresh button to refresh the player scores
refresh.addEventListener('click', displayData);