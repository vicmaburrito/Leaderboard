import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores/';
const call = () => {
  fetch(
    API_URL,
  )
    .then((response) => response.json())
    .then((data) => {
    });
};

call();