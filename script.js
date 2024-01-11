const getWeather = (city) => {
    cityName.innerHTML =city
  
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
        headers: { 'X-Api-Key': 'K8/r3+Y9PCtzEnz6hotwOw==jBht6bWHMA0ihhYb' },
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            cloud_pct.innerHTML = result.cloud_pct;
            temp.innerHTML = result.temp;
            temp2.innerHTML = result.temp;
            feels_like.innerHTML = result.feels_like;
            humidity.innerHTML = result.humidity;
            humidity2.innerHTML = result.humidity;
            min_temp.innerHTML = result.min_temp;
            sunrise.innerHTML = result.sunrise;
            sunset.innerHTML = result.sunset;
           
            wind_speed.innerHTML = result.wind_speed;
            wind_speed2.innerHTML = result.wind_speed;
            max_temp.innerHTML = result.max_temp;
        },
        error: function(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            var errorMessage = JSON.parse(jqXHR.responseText).error;
            console.error('Server Error: ', errorMessage);
            // Display or handle the error message appropriately
        }
    });
};

var submitButton = document.getElementById('submit'); 
var cityInput = document.getElementById('city');    

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    var city = cityInput.value;
    getWeather(city);
});

// Initial weather retrieval
var initialCity = 'muzaffarnagar';
getWeather('muzaffarnagar');
