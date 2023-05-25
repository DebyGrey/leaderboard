import './index.css';
import UI from './modules/UI.js';

// display scores
document.addEventListener('DOMContentLoaded', UI.displayScores);
// document.addEventListener('DOMContentLoaded', API.createGame);

// on submit
document.querySelector('.leaderboard-form').addEventListener('submit', ((e) => UI.addScore(e)));

// refresh scores table
document.querySelector('.refresh-btn').addEventListener('click', UI.displayScores);