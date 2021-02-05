function getDaysOfTheWeek(listDays, result) {
  let date = new Date();
  let days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  
  for (let i = 0; i < 5; i++) {
    result[i].day = days[i];
  }
}

function getTempNextDays(listDays, result) {
  let sumTemp = 0;
  let cnt = 0;

  for (let i = 0; i < listDays.length; i++) {
    if (cnt == 8 || i == listDays.length - 1) {
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

function getCloudsNextDays() {

}

function getWeatherNextDays(listDays) {
  let buffer = listDays[0].dt_txt.slice(0, 10);
  let bufferDays = [];
  let result = [];

  for (let i = 0; i < listDays.length; i++) {
    if (buffer != listDays[i].dt_txt.slice(0, 10)) {
      bufferDays.push(listDays[i]);
    }
  }

  getTempNextDays(bufferDays, result);
  getDaysOfTheWeek(bufferDays, result);
  console.log(result);

  // for (let i = 0; i < bufferDays.length; i++) {
  //   if (cnt == 4) result[i - cnt].clouds = bufferDays[i].weather[0].main;
  //   cnt++
  // }

  //console.log(result);
  return listDays;
}

export default getWeatherNextDays;