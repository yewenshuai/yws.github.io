// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// document.querySelector("html").addEventListener("click", function () {
//   alert("别戳我，我怕疼！");
// });
const myimg = document.querySelector('img');
myimg.onclick=()=>{
    const mysrc = myimg.getAttribute('src');
    if(mysrc==="images/img.png")
    {
        myimg.setAttribute("src","images/img2.png");
    }
    else{
        myimg.setAttribute("src","images/img.png");
    }
}
let mybutton=document.querySelector("button");
let myheading=document.querySelector("h1");
function setUserName(){
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name",myName);
    myheading.textContent = `Mozilla is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myheading.textContent = `Mozilla is cool, ${storedName}`;
}

mybutton.onclick = function(){
    setUserName();
};