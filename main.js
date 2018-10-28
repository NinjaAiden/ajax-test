const baseUrl = "https://swapi.co/api/";

function getData(type, cb) {

    var xhr = new XMLHttpRequest();

    //define informaiton we want to recieve
    xhr.open("GET", baseUrl + type + "/");
    //send the request
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function writeToDocument(type) {
    getData(type, function(data) {
        document.getElementById("data").innerHTML = data;
    });
}
