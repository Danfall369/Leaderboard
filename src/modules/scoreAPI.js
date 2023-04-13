// Get Data
const getData = async () => {
  try {
    const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/M8xA00Wa4pzZJNfSlKuJ/scores/', {
      method: 'GET',

    });
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    return error;
  }
};

// Post Data
const postData = async (data) => {
  try {
    const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/M8xA00Wa4pzZJNfSlKuJ/scores/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await res.json(data);
    return responseData;
  } catch (error) {
    return error;
  }
};

// Add Data
const submitButton = document.getElementById('inputsScore');
submitButton.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('yourName').value;
  const score = document.getElementById('yourScore').value;
  if (name === '' || score === '') {
    return null;
  }
  return postData({ user: name, score });
});

// Display Data
const displayData = async () => {
  try {
    const viewData = await getData();
    const { result } = viewData;
    const containerList = document.getElementById('playerScoresList');
    containerList.innerHTML = '';
    result.sort((a, b) => b.score - a.score);
    result.forEach((element) => {
      const playerList = document.createElement('li');
      playerList.classList.add('playerScores');
      playerList.innerHTML = `<li>${element.user}:${element.score}</li>`;
      containerList.appendChild(playerList);
    });
  } catch (error) {
    return error;
  }
  return null;
};
displayData();

// refresh button
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', displayData);

export {
  displayData, submitButton, postData, getData, refresh,
};