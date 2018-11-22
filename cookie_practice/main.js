// Cookies
// console.log("Hello");

// document.cookie = "javascript=amazing";

// let expiry = new Date();
// let days = 2;

// expiry.setTime(expiry.getTime() + (days*24*60*60*1000));

// document.cookie = `coderAcademy=super-awesome;expires=${expiry.toUTCString()}`;

// let cookies = document.cookie;
// console.log(cookies)

// function getCookie(name){
//     let cookie = {};
//     document.cookie.split(";").forEach((item) =>{
//         let [key, value] = item.split("=");
//         cookie[key.trim()] = value;
//     });
//     return cookie[name];
// }

// function removeCookie(name){
//     let expiry = new Date();
//     expiry.setTime(expiry.getTime() - 100);

//     document.cookie = `${name}=;expires=${expiry.toUTCString()}`;
// }



// console.log(getCookie("javascript"));


///////////////////////////////////////////////////////////////////////

// Local storage
// uses these if you want to activate an event
localStorage.setItem("name", "Garret");
sessionStorage.setItem("name", "David");

// Dot notation does not activate an event
localStorage.lname = "DavidRamsdale";
sessionStorage.address = "123 fakestreet";
