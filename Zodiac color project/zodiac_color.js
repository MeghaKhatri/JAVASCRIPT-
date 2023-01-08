const zodiac = document.getElementById("zodiac");

const body = document.body;

// body.style.background = "red"; // check body is accessed or not

const changeBackground = () => {
  switch (zodiac.value) {
    case "Aries":
      body.style.background = "red";
      break;
    case "Tarus":
      body.style.background = "green";
      break;
    case "Gemini":
      body.style.background = "pink";
      break;
    case "Cancer":
      body.style.background = "orange";
      break;
    case "Leo":
      body.style.background = "blue";
      break;
    case "Virgo":
      body.style.background = "brown";
      break;
    case "Libra":
      body.style.background = "gray";
      break;
    case "Scorpio":
      body.style.background = "yellow";
      break;
    case "Sagittarius":
      body.style.background = "Magenta";
      break;
    case "Aquarius":
      body.style.background = "Aqua";
      break;
    case "Capricorn":
      body.style.background = "cyan";
      break;
    case "Pisces":
      body.style.background = "Aquamarine";
      break;

    default:
        body.style.background = "AliceBlue";
      break;
  }
};
