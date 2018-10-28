var xhr = new XMLHttpRequest();
var data;

//define informaiton we want to recieve
xhr.open("GET", "https://swapi.co/api/");
//send the request
xhr.send();

xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        data = JSON.parse(this.responseText);
    }
};

setTimeout(function(){
    console.log(data);
}, 1000);