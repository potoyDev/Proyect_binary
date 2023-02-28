import './style.css'


import Numbers from "./json/numbers.js"
// import Uno from "./json/assets/images/uno.png"
for (let i of Numbers){
  console.log(i.value)
  console.log(i.value)
}
document.querySelector('#app').innerHTML = `
  <form action="main.js" method="get">
  <img src=${Numbers[1].src} alt="10px"/>
  
  <input type="text" placeholder="valor en binario" />
 
  <input type="button" value="Confirme esta opcion"/ >
  </form>
`


