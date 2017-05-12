import axios from 'axios'

let json = document.getElementById("json")
function fetchTopics () {
  axios.get('https://cnodejs.org/api/v1/topics', {
    params: {
    }
  })
  .then(function (response) {
    let textNode = document.createTextNode(JSON.stringify(response.data))
    json.appendChild(textNode)
  })
  .catch(function (error) {
    console.log(error);
  });
}
window.onload = function () {
  fetchTopics();
}
