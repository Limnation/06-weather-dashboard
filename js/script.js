var url = `api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=dfbc98f0dc3dbb36a4bc6a2139fe1754`

var cityName = encodeURIComponent($('search').val());