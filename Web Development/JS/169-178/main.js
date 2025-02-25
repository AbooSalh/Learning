let req = new XMLHttpRequest();
req.open("GET", "articles.json");
req.send();
let myData = "";
req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    setTimeout(() => {
      console.log("data loaded");
    }, 0);
    myData = JSON.parse(this.responseText);
    for (let i = 0; i < myData.length; i++) {
      myData[i].category = "all";
    }
    console.log(myData);
    let updatedData = JSON.stringify(myData);

    console.log(typeof updatedData);
    let loobData = JSON.parse(updatedData);
    for (let i = 0; i < loobData.length; i++) {
      let data = loobData[i][i + 1];
      let div = document.createElement("div");
      div.id = "data";
      let divInner = `
        <div>
          <h2>${data.title}</h2>
          <p>Article Number ${data.id} Body</p>
          <p>Author: ${data.author}</p>
          <p>Category: ${data.section}</p>
        </div>
              `;
      div.innerHTML = divInner;
      document.body.appendChild(div);
    }
  }
};
