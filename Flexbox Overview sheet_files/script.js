
const p= document.querySelector("p")
const handleClick= ()=> {
    console.log("hello") 
    p.classList.toggle(".dark-mode")
}
p.addEventListener("click", handleClick)

