var button = $('#button-addon2');
var input = $('#search').val();
// C for content in html
var cityC = $('#cityC');
var tempC = $('#tempC');
var humidityC = $('#humidityC');
var windSpeedC = $('#windSpeedC');
var UVindexC = $('#UVindexC');
          
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

            var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=dfbc98f0dc3dbb36a4bc6a2139fe1754`
    
            fetch(url)
                .then(function (response) {
                    return response.json();
                })
                .then(function (dataOne) {
                    //Using console.log to examine the data
                    console.log(dataOne);

                    var UVindexV= dataOne.current.uvi;
                    UVindexC.append(UVindexV);
                });
        });
    
    
}
button.on('click', getApi);
  