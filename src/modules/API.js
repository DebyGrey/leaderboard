export default class API {
  static baseURL =
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

  // PyOj9cYru3lhpatJsdkj
  static gameID = 'PyOj9cYru3lhpatJsdkj';

  static endpointURL = `games/${API.gameID}/scores/`;

  static url = API.baseURL + API.endpointURL;

  static gameEndpointURL = `${API.baseURL}games`;

  // Create game
  static createGame = async () => {
    fetch(API.gameEndpointURL, {
      method: 'POST',
      body: JSON.stringify({
        name: "Grey's game",
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        const gameID = responseData.result.split(' ')[3];
        return gameID;
      });
  };

  // Get data
  static getData = async () => {
    const res = await fetch(API.url);
    const { result } = await res.json();
    return result;
  };

  // Post data
  static postData = (formData) => {
    fetch(API.url, {
      method: 'POST',
      body: JSON.stringify({
        user: formData.name,
        score: formData.score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  };
}