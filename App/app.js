const searchbtn = document.getElementById("searchbtn");

const fetchWeather = async (UserData) => {
  const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${UserData}&appid=bc70b67c25aaa68ea84888d28a239d28`
  );
  const result = await weatherData.json();
  console.log(result);

  const temp = (result.main.temp - 273.5).toFixed(2);
  document.getElementById("cityName").innerText = result.name;
  document.getElementById("badgeId").innerText = result.sys.country;
  document.getElementById("wind").innerText = result.wind.speed;
  document.getElementById("temp").innerText = temp;
};
const fetchTime = async () => {
    const timeData = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?&address=dhaka`);
    const time = await timeData.json();
    console.log(time);
};

const getData = () => {
  const userData = document.getElementById("userSearch").value;
  document.getElementById("userSearch").value = "";
  fetchWeather(userData);
  fetchTime();
};

searchbtn.addEventListener("click", getData);
