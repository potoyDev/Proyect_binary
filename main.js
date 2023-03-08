import './style.css'
import getBinary from  './functions/getbinary.js'
import Numbers from "./json/numbers.js"
import handletClick from './functions/handletClick'


function printHtml(index){
  return(`
  <div>
  <img src=${Numbers[index].src} alt="10px" id="img"/>
  <p>valor binario:${getBinary(Numbers[index].value)}</p>
  
  <input type="text" placeholder="valor en binario" value="" id= "txt_binary" />
 <div id="button-section">
 
 '<button  value="Confirme esta opcion" id="Botton"/ >'
 
 </div>
  </div>
`)
}

let index = 0
document.querySelector('#app').innerHTML = printHtml(index)
document.querySelector('#Botton').addEventListener("click", handletClick) 


//*while (document.querySelector("#BottonSubmit")){
 //console.log("hola")


//}







