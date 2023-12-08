// let myPromise = new Promise((resolve, reject) => {
//   let myRequest = new XMLHttpRequest();
//   myRequest.open("GET", "users.json");
//   myRequest.send();
//   myRequest.onload = function () {
//     if (myRequest.readyState === 4 && myRequest.status === 200) {
//       resolve(JSON.parse(myRequest.response));
//     } else {
//       reject(Error("error"));
//     }
//   };
// });
// myPromise
//   .then((response) => {
//     response.length = 5;
//     return response;
//   })
//   .then((response) => {
//     for (let i = 0; i < response.length; i++) {
//       let div = document.createElement("div");
//       div.innerHTML = `
//         <h3>${response[i].title}</h3>
//         <p>${response[i].description}</p>
//         `;
//       document.body.appendChild(div);
//     }
//   });
fetch("users.json")
  .then((response) => {
    response = response.json();
    return response;
  })
  .then((response) => {
    response.length = 5;
    return response;
  })
  .then((response) => {
    for (let i = 0; i < response.length; i++) {
      let div = document.createElement("div");
      div.innerHTML = `
        <h3>${response[i].title}</h3>
        <p>${response[i].description}</p>
        `;
      document.body.appendChild(div);
    }
  });