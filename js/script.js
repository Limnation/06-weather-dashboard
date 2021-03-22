var fetchButton = document.getElementById('button-addon2');
var input = $('#search').val();

function getApi() {

    var input = $('#search').val();
    var cityName = encodeURIComponent(input);

    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=dfbc98f0dc3dbb36a4bc6a2139fe1754`
    
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //Using console.log to examine the data
        console.log(data);
        // for (var i = 0; i < data.length; i++) {
        //   //Creating a h3 element and a p element
        //   var userName = document.createElement('h3');
        //   var userUrl = document.createElement('p');
  
        //   //Setting the text of the h3 element and p element.
        //   userName.textContent = data[i].login;
        //   userUrl.textContent = data[i].url;
  
        //   //Appending the dynamically generated html to the div associated with the id="users"
        //   //Append will attach the element as the bottom most child.
        //   usersContainer.append(userName);
        //   usersContainer.append(userUrl);
        // }
      });
  }
  fetchButton.addEventListener('click', getApi);
  