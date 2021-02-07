function getDaysOfTheWeek(listDays, result) {
  let date = new Date().getDay();
  let cnt = 1;
  let days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  for (let i = 0; i < result.length; i++) {
    if (date + cnt > 6) {
      date = 0;
      cnt = 0;
    }
    result[i].day = days[date + cnt];
    cnt++;
  }
}

function getTempNextDays(listDays, result) {
  let sumTemp = 0;
  let cnt = 0;

  for (let i = 0; i < listDays.length; i++) {
    if (cnt === 8 || i === listDays.length - 1) {
      result.push({
        day: "",
        clouds: "",
        temp: (sumTemp / cnt).toFixed(1),
      });
      sumTemp = 0;
      cnt = 0;
    }
    sumTemp += listDays[i].main.temp;
    cnt++;
  }
}

function getCloudsNextDays(listDays, result) {
  let cnt = 0;
  for (let i = 7; i < listDays.length; i += 7) {
    result[cnt].clouds = listDays[i].weather[0].description;
    cnt++;
  }
}

function getWeatherNextDays(listDays) {
  let buffer = listDays[0].dt_txt.slice(0, 10);
  let bufferDays = [];
  let result = [];

  for (let i = 0; i < listDays.length; i++) {
    if (buffer !== listDays[i].dt_txt.slice(0, 10)) {
      bufferDays.push(listDays[i]);
    }
  }

  getTempNextDays(bufferDays, result);
  getDaysOfTheWeek(bufferDays, result);
  getCloudsNextDays(listDays, result);

  return result;
}

export default getWeatherNextDays;
