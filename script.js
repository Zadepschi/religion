const image = document.querySelector("#myImage");
const text = document.querySelector("h2");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");

buttonOne.addEventListener("click", reincarnation);

function reincarnation() {
    image.setAttribute("src", "reinkarnatsia.jpg");
    text.innerHTML = "ЖЕЛАЕТЕ ЛИ ВЫ РЕИНКАРНИРОВАТЬ?";
    buttonOne.innerHTML = "НЕТ";
    buttonTwo.innerHTML = "ДА";
    buttonThree.style = "display: none";

    buttonOne.addEventListener("click", maya);
    buttonTwo.addEventListener("click", cat);
}

function maya() {
    image.setAttribute("src", "indeets.jpg");
    text.innerHTML = "ОБРАТИТЕСЬ В РЕЛИГИЮ МАЙЯ";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}
function cat () {
    image.setAttribute("src", "blackcat.jpg");
    text.innerHTML = "У ВАС ЕСТЬ ЧЁРНАЯ КОШКА?";
    buttonOne.innerHTML = "ДА";
    buttonTwo.innerHTML = "НЕТ";

    buttonOne.addEventListener("click", wickan);
    buttonTwo.addEventListener("click", indianFood);
}

function wickan() {
    image.setAttribute("src", "vikka.jpg");
    text.innerHTML = "БУДЬТЕ ВИККАНИНОМ ";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function indianFood() {
    image.setAttribute("src", "food.jpg");
    text.innerHTML = "ПРЕДПОЧИТАЕТЕ ИНДИЙСКУЮ ИЛИ КИТАЙСКУЮ ЕДУ?";
    buttonOne.innerHTML = "ИНДИЙСКУЮ";
    buttonTwo.innerHTML = "КИТАЙСКУЮ";

    buttonOne.addEventListener("click", hindu);
    buttonTwo.addEventListener("click", buddhist);
}

function hindu() {
    image.setAttribute("src", "vishnu1.jpg");
    text.innerHTML = "БУДЬТЕ ИНДУИСТОМ";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function buddhist() {
    image.setAttribute("src", "budda.jpg");
    text.innerHTML = "БУДЬТЕ БУДДИСТОМ ";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}



buttonTwo.addEventListener("click", bacon);

function bacon() {
    image.setAttribute("src", "becon.jpg");
    text.innerHTML = "ЧТО СКАЖЕТЕ НАСЧЁТ БЕКОНА?";
    buttonOne.innerHTML = "БУЭ...";
    buttonTwo.innerHTML = "ОБОЖАЮ БЕКОН!";
    buttonThree.style = "display: none";

    buttonOne.addEventListener("click", humus);
    buttonTwo.addEventListener("click", angry);
    
}

  function humus() {
    image.setAttribute("src", "humus.jpg");
    text.innerHTML = "ЧТО СКАЖЕТЕ НАСЧЁТ ХУМУСА?";
    buttonOne.innerHTML = "БУЭ...";
    buttonTwo.innerHTML = "ОБОЖАЮ ХУМУС!";

    buttonOne.addEventListener("click", jew);
    buttonTwo.addEventListener("click", muslim);
  }
  function jew() {
    image.setAttribute("src", "iudei.jpg");
    text.innerHTML = "БУДЬТЕ ИУДЕЕМ";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
  }

  function muslim() {
    image.setAttribute("src", "muslim.jpg");
    text.innerHTML = "БУДЬТЕ МУСУЛЬМАНИНОМ";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
  }

  function angry() {
    image.setAttribute("src", "angry.jpg");
    text.innerHTML = "ВЫ ОТ ПРИРОДЫ РАЗДРАЖАЕТЕ ЛЮДЕЙ?";
    buttonOne.innerHTML = "ДА";
    buttonTwo.innerHTML = "НЕТ";

    buttonOne.addEventListener("click", underwear);
    buttonTwo.addEventListener("click", christian);
  }

  function underwear() {
    image.setAttribute("src", "don.jpg");
    text.innerHTML = "СЧИТАЕТЕ ЛИ ВЫ, ЧТО НИЖНЕЕ БЕЛЬЁ МОЖЕТ БЫТЬ СВЯЩЕННЫМ?";
    buttonOne.innerHTML = "НЕТ";
    buttonTwo.innerHTML = "ДА";

    buttonOne.addEventListener("click", jehovah);
    buttonTwo.addEventListener("click", mormon);
  }

  function jehovah() {
    image.setAttribute("src", "iegova.jpg");
    text.innerHTML = "БУДЬТЕ СВИДЕТЕЛЕМ ИЕГОВЫ";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
  }

  function mormon() {
    image.setAttribute("src", "mormon.jpg");
    text.innerHTML = "БУДЬТЕ МОРМОНОМ";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
  }

  function christian() {
    image.setAttribute("src", "hristian.jpg");
    text.innerHTML = "БУДЬТЕ БАНАЛЬНЫМ ХРИСТИАНИНОМ";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
  }

  buttonThree.addEventListener("click", rich);

  function rich() {
    image.setAttribute("src", "rich.jpg");
    text.innerHTML = "ВЫ БОГАТЫЙ И СУМАСШЕДШИЙ?";
    buttonOne.innerHTML = "НЕТ";
    buttonTwo.innerHTML = "О ДА";
    buttonThree.style = "display: none";

    buttonOne.addEventListener("click", atheist);
    buttonTwo.addEventListener("click", scientologist);
  }

  function atheist() {
    image.setAttribute("src", "pozner.jpg");
    text.innerHTML = "БУДЬТЕ АТЕИСТОМ";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
  }

  function scientologist() {
    image.setAttribute("src", "sientolog.jpg");
    text.innerHTML = "БУДЬТЕ САЙЕНТОЛОГОМ";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
  }