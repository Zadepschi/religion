const image = document.querySelector("#myImage");
const text = document.querySelector("h2");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");

buttonOne.addEventListener("click", reincarnation);

function reincarnation() {
    image.setAttribute("src", "reinkarnatsia.jpg");
    text.innerHTML = "DO YOU WANT TO BE REINCARNATED?";
    buttonOne.innerHTML = "NO";
    buttonTwo.innerHTML = "YES";
    buttonThree.style = "display: none";

    buttonOne.addEventListener("click", maya);
    buttonTwo.addEventListener("click", cat);
}

function maya() {
    image.setAttribute("src", "indeets.jpg");
    text.innerHTML = "FOLLOW THE MAYAN RELIGION";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}
function cat () {
    image.setAttribute("src", "blackcat.jpg");
    text.innerHTML = "DO YOU OWN A BLACK CAT?";
    buttonOne.innerHTML = "YES";
    buttonTwo.innerHTML = "NO";

    buttonOne.addEventListener("click", wickan);
    buttonTwo.addEventListener("click", indianFood);
}

function wickan() {
    image.setAttribute("src", "vikka.jpg");
    text.innerHTML = "BE A WICCAN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function indianFood() {
    image.setAttribute("src", "food.jpg");
    text.innerHTML = "DO YOU PREFER INDIAN OR CHINESE TAKEOUT?";
    buttonOne.innerHTML = "INDIAN";
    buttonTwo.innerHTML = "CHINESE";

    buttonOne.addEventListener("click", hindu);
    buttonTwo.addEventListener("click", buddhist);
}

function hindu() {
    image.setAttribute("src", "vishnu1.jpg");
    text.innerHTML = "BE A HINDU";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function buddhist() {
    image.setAttribute("src", "budda.jpg");
    text.innerHTML = "BE A DUDDHIST";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}



buttonTwo.addEventListener("click", bacon);

function bacon() {
    image.setAttribute("src", "becon.jpg");
    text.innerHTML = "HOW DO YOU FEEL ABOUT BACON?";
    buttonOne.innerHTML = "MEH...";
    buttonTwo.innerHTML = "I LOVE BACON!";
    buttonThree.style = "display: none";

    buttonOne.addEventListener("click", humus);
    buttonTwo.addEventListener("click", angry);
    
}

  function humus() {
    image.setAttribute("src", "humus.jpg");
    text.innerHTML = "HOW DO YOU FEEL ABOUT HUMMUS?";
    buttonOne.innerHTML = "MEH...";
    buttonTwo.innerHTML = "I LOVE HUMMUS!";

    buttonOne.addEventListener("click", jew);
    buttonTwo.addEventListener("click", muslim);
  }
  function jew() {
    image.setAttribute("src", "iudei.jpg");
    text.innerHTML = "BE A JEW";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
  }

  function muslim() {
    image.setAttribute("src", "muslim.jpg");
    text.innerHTML = "BE A MUSLIM";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
  }

  function angry() {
    image.setAttribute("src", "angry.jpg");
    text.innerHTML = "ARE YOU A NATURALLY ANNOYING PERSON?";
    buttonOne.innerHTML = "YES";
    buttonTwo.innerHTML = "NO";

    buttonOne.addEventListener("click", underwear);
    buttonTwo.addEventListener("click", christian);
  }

  function underwear() {
    image.setAttribute("src", "don.jpg");
    text.innerHTML = "DO YOU THINK UNDERWEAR CAN BE MAGICAL?";
    buttonOne.innerHTML = "NO";
    buttonTwo.innerHTML = "YES";

    buttonOne.addEventListener("click", jehovah);
    buttonTwo.addEventListener("click", mormon);
  }

  function jehovah() {
    image.setAttribute("src", "iegova.jpg");
    text.innerHTML = "BE A JEHOVAH'S WITNESS";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
  }

  function mormon() {
    image.setAttribute("src", "mormon.jpg");
    text.innerHTML = "BE A MORMON";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
  }

  function christian() {
    image.setAttribute("src", "hristian.jpg");
    text.innerHTML = "BE A BORING, GENERIC CHRISTIAN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
  }

  buttonThree.addEventListener("click", rich);

  function rich() {
    image.setAttribute("src", "rich.jpg");
    text.innerHTML = "ARE YOU RICH AND INSANE?";
    buttonOne.innerHTML = "NO";
    buttonTwo.innerHTML = "YES";
    buttonThree.style = "display: none";

    buttonOne.addEventListener("click", atheist);
    buttonTwo.addEventListener("click", scientologist);
  }

  function atheist() {
    image.setAttribute("src", "pozner.jpg");
    text.innerHTML = "BE AN ATHEIST";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
  }

  function scientologist() {
    image.setAttribute("src", "sientolog.jpg");
    text.innerHTML = "BE A SCIENTOLOGIST";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
  }