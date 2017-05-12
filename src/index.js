import axios from 'axios'

let json = document.getElementById("json")
function fetchTopics () {
  axios.get('https://cnodejs.org/api/v1/topics', {
    params: {
    }
  })
  .then(function (response) {
    // let textNode = document.createTextNode(response.data[0].content)
    let list = response.data.data
    json.innerHTML = list[0].content
  })
  .catch(function (error) {
    console.log(error);
  });
}
window.onload = function () {
  fetchTopics();
}
