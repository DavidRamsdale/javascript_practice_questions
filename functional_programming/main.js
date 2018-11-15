// function subtractTwoThings(thing1, thing2) {
//     let answer;

//     try{
//         answer = thing 1 - thing ;
//         if (isNaN(answer)){
//             throw `Invalue input`;
//         }

//         return answer;

//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// }

// let calculation = subtractTwoThings(43, 10);
// console.log(calculation)

// class DavidError extends Error {
//     constructor(...params){
//         super(...params);
//         this.name = "DavidError";

//         if (Error.captureStackTrace){
//             Error.captureStackTrace(this, DavidError);
//         }
//     }
// }

// try {
//     throw new DavidError("my error");
// }

// function myDog(){
//     var dog = "Fido";
//     console.log(dog);
// }

// myDog();
// console.log(dog);

// {
//     var dog = "Fido";
//     console.log(dog);

// }

// console.log(dog)

// function parentFunc(a) {
//     let b = 1;

//     function nestedFunction(d ,e) {
//         d + e;
//     }

//     return nestedFunction(a,b);
// }

// let answer = parentFunc(5,9);
// console.log(answer);

// ////////////////////////////////////////////////////////////////////////////
// let b = 1;
// let f;

// function parentFunc(a) {
//     f =10;

//     function nestedFunction(d ,e) {
//         d + e;
//     }

//     return nestedFunction(a,b);
// }

// // let answer = parentFunc(5,9);
// // console.log(answer);
// console.log(f);

////////////////////////////////////////////////////////////////////////////////

// function makeAdder(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// let addFive = makeAdder(5);
// let addTen = makeAdder(10);

// addFive(6);

// console.log(answer);

////////////////////////////////////////////////////////////////////////////////

// let caculatorMixin = function(Base) {
//     return class extends Base {
//         area() {
//             return this.width*this.height;
//         }
//     }
// }

// class Shape {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     talk(input) {
//         return `Hey I am a talking ${input}`;
//     }
// }

// class Square extends caculatorMixin(Shape) {
//     constructor(height, width){
//     super(height, width);
//     }

// shout() { 
//     return super.talk("square") + "!";
// }
// }

// let square = new Square(10, 10);

// console.log(square.height, square.width);
// console.log(square.shout());
// console.log(square.area());

////////////////////////////////////////////////////////////////////////////////

// let cohort = [
//     {name: "K. West", nickname: "Ye", dateOfBirth: "1988-02-21"},
//     {name: "K. Kardasien", nickname: "Kim", dateOfBirth: "1984-11-13"}
// ]

// let cohort = "[{ \"name\": \"K. West\", \"nickname\": \"Ye\", \"dateOfBirth\": \"1977-06-08\"},{ \"name\": \"A. Grham\", \"nickname\": \"Drake\", \"dateOfBirth\": \"1986-10-24\"}]"

// Challenge 

// const weather = '{"query":{"count":1,"created":"2018-03-28T00:57:28Z","lang":"en-US","results":{"channel":{"units":{"distance":"mi","pressure":"in","speed":"mph","temperature":"F"},"title":"Yahoo! Weather - Sydney, NSW, AU","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","description":"Yahoo! Weather for Sydney, NSW, AU","language":"en-us","lastBuildDate":"Wed, 28 Mar 2018 11:57 AM AEDT","ttl":"60","location":{"city":"Sydney","country":"Australia","region":" NSW"},"wind":{"chill":"77","direction":"0","speed":"11"},"atmosphere":{"humidity":"56","pressure":"1013.0","rising":"0","visibility":"16.1"},"astronomy":{"sunrise":"7:5 am","sunset":"6:56 pm"},"image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http://weather.yahoo.com","url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},"item":{"title":"Conditions for Sydney, NSW, AU at 11:00 AM AEDT","lat":"-33.856281","long":"151.020966","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-1105779/","pubDate":"Wed, 28 Mar 2018 11:00 AM AEDT","condition":{"code":"32","date":"Wed, 28 Mar 2018 11:00 AM AEDT","temp":"77","text":"Sunny"},"forecast":[{"code":"32","date":"28 Mar 2018","day":"Wed","high":"83","low":"57","text":"Sunny"},{"code":"32","date":"29 Mar 2018","day":"Thu","high":"85","low":"61","text":"Sunny"},{"code":"30","date":"30 Mar 2018","day":"Fri","high":"85","low":"64","text":"Partly Cloudy"},{"code":"30","date":"31 Mar 2018","day":"Sat","high":"75","low":"66","text":"Partly Cloudy"},{"code":"30","date":"01 Apr 2018","day":"Sun","high":"90","low":"62","text":"Partly Cloudy"},{"code":"30","date":"02 Apr 2018","day":"Mon","high":"83","low":"66","text":"Partly Cloudy"},{"code":"30","date":"03 Apr 2018","day":"Tue","high":"75","low":"65","text":"Partly Cloudy"},{"code":"30","date":"04 Apr 2018","day":"Wed","high":"74","low":"63","text":"Partly Cloudy"},{"code":"30","date":"05 Apr 2018","day":"Thu","high":"81","low":"61","text":"Partly Cloudy"},{"code":"34","date":"06 Apr 2018","day":"Fri","high":"77","low":"62","text":"Mostly Sunny"}],"guid":{"isPermaLink":"false"}}}}}}'

// weather_new = JSON.parse(weather);


// sunrise = weather_new["query"]["results"]["channel"]["astronomy"]["sunrise"];
// sunset = weather_new["query"]["results"]["channel"]["astronomy"]["sunset"];
// forcast = weather_new["query"]["results"]["channel"]["item"]["forecast"];
// for (x in forcast ) {
//     let string = ""
//     string += "date:" + forcast[x]["date"] + " " + "day:" + forcast[x]["day"] + " " + "high:" +  fahrenheitToCelcius(forcast[x]["high"]).toFixed(2) + " " + "low:" + fahrenheitToCelcius(forcast[x]["low"]).toFixed(2);
    
//     console.log(string);
// }

// function fahrenheitToCelcius(y){
//     return (y -32)* 5/9;
// }
   
// function time_fix(z){

// }

//Beast Mode ++
theUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22sydney%2Caustralia%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

parsed_response = JSON.parse(httpGet(theUrl));

console.log(parsed_response["query"]["results"]["channel"]["item"]["condition"]);

function fahrenheitToCelcius(y){
    return (y -32)* 5/9;
}
   