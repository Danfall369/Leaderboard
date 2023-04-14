// Get Data
const getData = async () => {
  try {
    const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hK5IsEjL7yqRYqcS8MvI/scores/', {
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
    const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hK5IsEjL7yqRYqcS8MvI/scores/', {
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
const addData = () => {
  const submitButton = document.getElementById('inputsScore');
  submitButton.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('yourName').value;
    const score = document.getElementById('yourScore').value;
    if (name === '' || score === '') {
      return null;
    }
    await postData({ user: name, score });
    const message = document.createElement('div');
    message.textContent = 'Score submitted successfully!';
    document.body.appendChild(message);
    setTimeout(() => {
      message.remove();
    }, 2000);
    return null;
  });
};

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

// refresh button
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', displayData);

export {
  displayData, addData, postData, getData, refresh,
};
