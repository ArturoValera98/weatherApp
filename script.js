async function getData(city) {
  const key = "100cd3a690514aa8b7386362586c5b08";
  const url = `https://api.weatherbit.io/v2.0/current?city=${city},&key=${key}`;
  const response = await fetch(url);
  const Data = await response.json();
  const info = Data.data;
  const temp = info[0].app_temp;
  const desc = info[0].weather.description;
  const time = info[0].ob_time;
  console.log(Data.data);

  return { temp, desc, time };
}

const submit = document.getElementById("submit");
const container = document.getElementById("input_container");

submit.onclick = async function () {
  document.getElementById("clouds").style.visibility = "hidden";
  document.getElementById("rain").style.visibility = "hidden";
  document.getElementById("sun").style.visibility = "hidden";

  const city = document.getElementById("input").value;
  const facts = await getData(city);
  const description = document.getElementById("description");
  const temp = document.getElementById("temp");
  // const time = document.getElementById("date");
  description.innerText = `${facts.desc}`;
  temp.innerText = `${facts.temp}` + "°";
  document.getElementById("input").value = "";
  // const local_time = facts.time.toString();
  // time.innerText = local_time.substr(11, 15);
  // console.log(facts.time);

  if (facts.desc.includes("Clouds") || facts.desc.includes("clouds")) {
    document.getElementById("clouds").style.visibility = "visible";
  }

  if (facts.desc.includes("rain") || facts.desc.includes("Rain")) {
    document.getElementById("rain").style.visibility = "visible";
  }
  if (facts.desc.includes("clear") || facts.desc.includes("Clear")) {
    document.getElementById("sun").style.visibility = "visible";
  }
};
