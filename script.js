// console.log("hello");
// window.console.log("hello");
// console.dir(document.body);    // print property
// console.log(document.body);    //print html

// console.dir(document.body.childNodes[1]);

// let heading = document.getElementById("heading");
// console.dir(heading);

// let headings = document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings);

// let headings = document.getElementsByTagName("p");
// console.dir(headings);
// console.log(headings);

// let First = document.querySelector("#heading");
// console.dir(First);
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from apna college";

// let divs = document.querySelectorAll(".box");

// for (div of divs) {
//   console.log(div);
// }
// divs[0].innerText = "hello jiya";

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";
// // console.log(button);
// document.querySelector("body").prepend(newBtn);

// let p = document.querySelector("p");
// p.classList.add("newClass");

// let btn1 = document.querySelector("#btn1");

// btn.onclick = () => {
//   console.log("btn1 was clicked");
//   let a = 25;
//   a++;
//   console.log(a);
// };

let modeBtn = document.querySelector("#mode");

let currMode = "light";
modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currMode);
});
