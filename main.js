import './style.css'
import getBinary from  './functions/getbinary.js'
import Numbers from "./json/numbers.js"
// import Uno from "./json/assets/images/uno.png"
function printHtml(index){
  document.querySelector('#app').innerHTML = `
  <div>
  <img src=${Numbers[index].src} alt="10px" id="numberimg"/>
  <p>valor binario:${getBinary(Numbers[index].value)}</p>
  
  <input type="text" placeholder="valor en binario" value="" />
 
  <input type="button" value="Confirme esta opcion" id="boton"/ >
  </div>
`
}

printHtml(0)
  let index = 0
console.log(document.getElementById("boton"))
const onclick = document.getElementById("boton").onclick
  console.log(onclick)
if (document.getElementById("boton").onclick){
    index++
    printHtml(index)
  }







