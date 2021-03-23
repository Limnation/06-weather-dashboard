var button = $('#button-addon2');
// C for content in html
var cityC = $('#cityC');
var dateC = $('#dateC')
var imageC = $('#imageC')
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

                    //for the Timezone
                    var dateTimeFormat= "MM/DD/YYYY";
                    //daily Daily forecast weather data API response
                    // starts at daily 1 becuase 0 is current day
                    //current day
                    var date0V = dataOne.daily[0].dt;
                    var dateTime0 = moment.unix(date0V).format(dateTimeFormat);
                    dateC.append(dateTime0);

                    var imageW0V = dataOne.daily[0].weather[0].icon;
                    var imageW0Link = `http://openweathermap.org/img/wn/${imageW0V}.png`
                    imageC.attr('src', imageW0Link);
                    //DAY 1
                    var date1V = dataOne.daily[1].dt;
                    var dateTime1 = moment.unix(date1V).format(dateTimeFormat);
                    date1.append(dateTime1);

                    var imageW1V = dataOne.daily[1].weather[0].icon;
                    var imageW1Link = `http://openweathermap.org/img/wn/${imageW1V}.png`
                    imageW1.attr('src', imageW1Link);

                    var temp1V = dataOne.daily[1].temp.max;
                    temp1.append(temp1V);

                    var humidity1V= dataOne.daily[1].humidity;
                    humidity1.append(humidity1V);
                    //DAY 2
                    var date2V= dataOne.daily[1].dt;
                    date2.append(date2V);

                    var imageW2V = dataOne.daily[2].weather[0].icon;
                    var imageW2Link = `http://openweathermap.org/img/wn/${imageW2V}.png`
                    imageW2.attr('src', imageW2Link);

                    var temp2V= dataOne.daily[2].temp.max;
                    temp2.append(temp2V);

                    var humidity2V= dataOne.daily[2].humidity;
                    humidity2.append(humidity2V);
                    //DAY 3
                    var date3V= dataOne.daily[3].dt;
                    date3.append(date3V);

                    var imageW3V = dataOne.daily[3].weather[0].icon;
                    var imageW3Link = `http://openweathermap.org/img/wn/${imageW3V}.png`
                    imageW3.attr('src', imageW3Link);

                    var temp3V= dataOne.daily[3].temp.max;
                    temp3.append(temp3V);

                    var humidity3V= dataOne.daily[3].humidity;
                    humidity3.append(humidity3V);
                    //DAY 4
                    var date4V= dataOne.daily[4].dt;
                    date4.append(date4V);

                    var imageW4V = dataOne.daily[4].weather[0].icon;
                    var imageW4Link = `http://openweathermap.org/img/wn/${imageW4V}.png`
                    imageW4.attr('src', imageW4Link);

                    var temp4V= dataOne.daily[4].temp.max;
                    temp4.append(temp4V);

                    var humidity4V= dataOne.daily[4].humidity;
                    humidity4.append(humidity4V);
                    //DAY 5
                    var date5V= dataOne.daily[5].dt;
                    date4.append(date5V);

                    var imageW5V = dataOne.daily[5].weather[0].icon;
                    var imageW5Link = `http://openweathermap.org/img/wn/${imageW5V}.png`
                    imageW5.attr('src', imageW5Link);

                    var temp5V= dataOne.daily[5].temp.max;
                    temp5.append(temp5V);

                    var humidity5V= dataOne.daily[5].humidity;
                    humidity5.append(humidity5V);

                    //presented with a color that indicates whether the conditions are favorable(1-2), moderate(3-7), or severe(8+)
                    if (UVindexV <= 2) {
                        $(UVindexC).addClass("favorable");
                    } else if (UVindexV > 2 && UVindexV <= 7){
                        $(UVindexC).addClass("moderate");
                    } else {
                        $(UVindexC).addClass("severe");
                    }
                });
        });   
}
button.on('click', getApi);

//creating empty array
var historyArr = [];

function addCity() {
    let input = $('#search').val();
    //adding input to array
    historyArr.push(input);
    console.log(historyArr);
    //created the list(li)
    var li = document.createElement("li");
    //setting the New li to = History array itterated
    for (let i = 0; i < historyArr.length; i++) {
        var node = document.createTextNode(historyArr[i]);
    }
    li.appendChild(node);
    //telling where li to go in the html
    var ulList = $(".list-group");
    ulList.append(li);
    li.classList.add("list-group-item");
}
button.on('click', addCity);