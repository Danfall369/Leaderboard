import './style.css';
import video from './assets/retro-arcade-room-preview.mp4';

import {
  displayData, addData, refresh,
} from './modules/scoreAPI.js';

const videoBg = document.getElementById('bg-video');
videoBg.src = video;

// Call the displayData function to display the player scores
displayData();

// Add an event listener to the submit button to add a new player score
addData();

// Add an event listener to the refresh button to refresh the player scores
refresh.addEventListener('click', displayData);