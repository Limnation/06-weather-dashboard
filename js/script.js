var button = $('#button-addon2');
var input = $('#search').val();
// C for content in html
var cityC = $('#cityC');
var tempC = $('#tempC');
var humidityC = $('#humidityC');
var windSpeedC = $('#windSpeedC');
var UVindexC = $('#UVindexC');
// forcast var
var date1 = $('#date1');
var imageW1 = $('#imageW1');
var temp1 = $('#temp1');
var humidity1 = $('#humidity1');

var date2 = $('#date2');
var imageW2 = $('#imageW2');
var temp2 = $('#temp2');
var humidity2 = $('#humidity2');

var date3 = $('#date3');
var imageW3 = $('#imageW3');
var temp3 = $('#temp3');
var humidity3 = $('#humidity3');

var date4 = $('#date4');
var imageW4 = $('#imageW4');
var temp4 = $('#temp4');
var humidity4 = $('#humidity4');

var date5 = $('#date5');
var imageW5 = $('#imageW5');
var temp5 = $('#temp5');
var humidity5 = $('#humidity5');
          
function getApi() {

    var input = $('#search').val();
    var cityName = encodeURIComponent(input);
    // added imperial to the api to get units in Fahrenheit
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=dfbc98f0dc3dbb36a4bc6a2139fe1754`

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //Using console.log to examine the data
            console.log(data);
            // //these r the V for value/output
            var cityV = data.name;
            cityC.append(cityV);
                
            var tempV = data.main.temp;
            tempC.append(tempV);
                
            var humidityV= data.main.humidity;
            humidityC.append(humidityV);
                
            var windSpeedV= data.wind.speed;
            windSpeedC.append(windSpeedV);

            var lat = data.coord.lat;
            var lon = data.coord.lon;

            var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=dfbc98f0dc3dbb36a4bc6a2139fe1754`
    
            fetch(url)
                .then(function (response) {
                    return response.json();
                })
                .then(function (dataOne) {
                    //Using console.log to examine the data
                    console.log(dataOne);

                    var UVindexV= dataOne.current.uvi;
                    UVindexC.append(UVindexV);
                    //daily Daily forecast weather data API response
                    //DAY 1
                    var date1V= dataOne.daily[0].dt;
                    date1.append(date1V);

                    var imageW1V = dataOne.daily[0].weather.icon;
                    imageW1Link = `http://openweathermap.org/img/wn/${imageW1V}.png`
                    imageW1.append(imageW1Link);

                    var temp1V= dataOne.daily[0].temp;
                    temp1.append(temp1V);

                    var humidity1V= dataOne.daily[0].humidity;
                    humidity1.append(humidity1V);
                    //DAY 2
                    var date2V= dataOne.daily[1].dt;
                    date2.append(date2V);

                    var imageW2V = dataOne.daily[1].weather.icon;
                    imageW2Link = `http://openweathermap.org/img/wn/${imageW1V}.png`
                    imageW2.append(imageW2Link);

                    var temp2V= dataOne.daily[1].temp;
                    temp2.append(temp2V);

                    var humidity2V= dataOne.daily[1].humidity;
                    humidity2.append(humidity2V);
                });
        });
    
    
}
button.on('click', getApi);
  