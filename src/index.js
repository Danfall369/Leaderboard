import './style.css';

import {
  displayData, addData, refresh,
} from './modules/scoreAPI.js';

// Call the displayData function to display the player scores
displayData();

// Add an event listener to the submit button to add a new player score
addData();

// Add an event listener to the refresh button to refresh the player scores
refresh.addEventListener('click', displayData);