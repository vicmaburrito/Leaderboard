import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

const gameID = 'OyWOyYBAfoODiap1EhZ8';
const API_URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;
const tbody = document.getElementById('tbody');
const searchID = (id) => document.getElementById(id);

const PostToApi = async () => {
  const user = searchID('user').value;
  const score = searchID('score').value;
  const userData = { user, score };

  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(userData),
    });
  } catch (error) {
    error(error);
  }
};

const dData = async () => {
  try {
    const fetching = await fetch(API_URL);
    const res = await fetching.json();
    const data = res;
    const leaderboard = data.result;
    leaderboard.forEach((element, index) => {
      const tr = document.createElement('tr');
      const th = document.createElement('th');
      const td = document.createElement('td');

      if (index % 2 === 0) {
        th.innerHTML += `
                    ${element.user}:`;
        td.innerHTML += `
                    ${element.score}`;
      } else {
        th.innerHTML += `
                    ${element.user}:`;
        td.innerHTML += `
                    ${element.score}`;
      }

      tr.appendChild(th);
      tr.appendChild(td);
      tbody.appendChild(tr);
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  tbody.innerHTML = '';
  PostToApi();
  dData();
});

dData();