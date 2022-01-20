function createElement(data) {
  const par = document.createElement("p");
  par.innerText = data;
  document.body.appendChild(par);
}

function queryWikipedia(callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
  );
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        const info = JSON.parse(xhttp.responseText);
        callback(info.query.pages["21721040"].extract);
      }
    }
  };
  xhttp.send(null);
}

queryWikipedia(createElement);
