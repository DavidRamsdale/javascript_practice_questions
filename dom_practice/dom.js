// console.dir(document);
// console.log(document.title);    
// console.log(document.body);
// console.log(document.forms);
// console.log(document.links);

// Get element by id
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "hello";
// headerTitle.innerText = "Goodbye";

// Get elements by class name//
// let items = document.getElementsByClassName("list-group-item");
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[2].style.fontWeight= "bold";
// items[1].style.backgroundColor = "yellow";

// for(i =0; i < items.length; i++){
//     items[i].style.backgroundColor= "grey";
// }

//Get elemts by tag name//

// let li = document.getElementsByClassName("li");
// console.log(li);
// li[1].textContent = "Hello 2";
// li[2].style.fontWeight= "bold";
// li[1].style.backgroundColor = "yellow";

// for(i =0; i < items.length; i++){
//     li[i].style.backgroundColor= "grey";
// }

// QuerySelector //

// let header = document.querySelector("#main-header");
// header.sytle.borderBottom = "solid 4px #ccc";

// let input = document.querySelector("input");
// input.value = "Hello World";

var itemList = document.querySelector("#items");

// parentNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroudColor = "yellow";



// //firstelementchild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = "Hello1";

console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color = "Green";