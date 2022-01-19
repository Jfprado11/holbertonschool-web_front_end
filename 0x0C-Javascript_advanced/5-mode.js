function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  document.body.insertAdjacentHTML("beforeend", "<p>Welcome Holberton!</p>");

  const buttonSpooky = document.createElement("button");
  buttonSpooky.innerHTML = "Spooky";
  document.body.appendChild(buttonSpooky);

  const buttonDark = document.createElement("button");
  buttonDark.innerHTML = "Dark mode";
  document.body.appendChild(buttonDark);

  const buttonScreamy = document.createElement("button");
  buttonScreamy.innerHTML = "Scream mode";
  document.body.appendChild(buttonScreamy);

  buttonSpooky.addEventListener("click", () => {
    spooky();
  });

  buttonDark.addEventListener("click", () => {
    darkMode();
  });

  buttonScreamy.addEventListener("click", () => {
    screamMode();
  });
}

main();
