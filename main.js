function getData(cb) {
    
    var xhr = new XMLHttpRequest();

    //define informaiton we want to recieve
    xhr.open("GET", "https://swapi.co/api/");
    //send the request
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function printDataToConsole(data){
    console.log(data);
}

getData(printDataToConsole);