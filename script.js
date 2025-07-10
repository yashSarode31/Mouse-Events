const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click",event =>{
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
})

myButton.addEventListener("mouseover",event =>{
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it! 😲";
})

myButton.addEventListener("mouseout",event =>{
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click me 😀";
})

myButton.addEventListener("dblclick", () => {
  myBox.style.backgroundColor = "skyblue";
  myBox.textContent = "Whoa! Double trouble 😵";
});