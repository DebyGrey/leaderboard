export default class Store {
  static getScores = () => {
    let scores;
    if (localStorage.getItem('scores') === null) {
      scores = [];
    } else {
      scores = JSON.parse(localStorage.getItem('scores'));
    }
    return scores;
  };
}
