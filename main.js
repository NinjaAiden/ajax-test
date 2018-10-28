var xhr = new XMLHttpRequest();

//define informaiton we want to recieve
xhr.open("GET", "https://swapi.co/api/");
//send the request
xhr.send();

function setData(jsonData){
    data = jsonData;
}

xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        setData(JSON.parse(this.responseText));
    }
};