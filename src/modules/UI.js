import API from './API.js';

// Display ranks
export default class UI {
  static displayScores = async () => {
    const scoreList = await API.getData();
    const scoreBoard = document.querySelector('.score-board');
    scoreBoard.innerHTML = '';

    if (scoreList.length === 0) {
      scoreBoard.innerHTML = 'No score to display yet';
    } else {
      scoreList.forEach((score, index) => {
        const scoreListItem = document.createElement('li');
        scoreListItem.classList.add('score-list-item');

        if ((index + 1) % 2 === 0) {
          scoreListItem.classList.add('gray-item');
        } else {
          scoreListItem.classList.add('white-item');
        }

        const scoresText = `${score.user}: ${score.score}`;
        scoreListItem.innerHTML = scoresText;
        scoreBoard.appendChild(scoreListItem);
      });
    }
  };

  // Add score
  static addScore = async (e) => {
    e.preventDefault();

    const nameInput = document.querySelector('.input-name');
    const scoreInput = document.querySelector('.input-score');
    const regExpforNumbersOnly = /^(d+ )*(d+)$/;
    const regExpforAlphabetsOnly = /^[a-zA-Z\s]+$/;

    if (
      nameInput.value === ''
      || !regExpforAlphabetsOnly.test(nameInput.value)
    ) {
      nameInput.focus();
      return;
    }

    if (
      scoreInput.value === ''
      || !regExpforNumbersOnly.test(scoreInput.value)
    ) {
      scoreInput.focus();
    }

    const formData = { name: nameInput.value, score: scoreInput.value };
    await API.postData(formData);
    nameInput.value = '';
    scoreInput.value = '';
  };
}
