'use strict';

fetch('http://api.openweathermap.org/data/2.5/weather?id=704147&units=metric&appid=09c167d56f45bb57eda495fffcb6742a')
	.then(function (resp) {
		return resp.json();
	})
	.then(function (data) {
		console.log(data);
		document.querySelector('.weather__city').textContent = data.name;
		document.querySelector('.weather__temp').innerHTML = `${Math.round(data.main.temp)}&deg`;
		document.querySelector('.weather__disclaimer').textContent = data.weather[0]['main'];
		document.querySelector('.weather__temp-max').innerHTML = `Max: ${Math.round(data.main.temp_max)}&deg`;
		document.querySelector('.weather__temp-min').innerHTML = `Min: ${Math.round(data.main.temp_min)}&deg`;
	})
	.catch(function () {
		// catch any error
	});