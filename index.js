const displayQuoteElement=document.getElementById("displayQuote")
const inputQuoteElement=document.getElementById("inputQuote")
const timerElement=document.getElementById("timer")

inputQuoteElement.addEventListener("input",()=>{
     const quote=displayQuoteElement.querySelectorAll("span")
     const value=inputQuoteElement.value.split("")
     const correct =true 
     quote.forEach((charSpan,index) => {
        const char=value[index]
        if(char==null){
            charSpan.classList.remove("correct")
            charSpan.classList.remove("incorrect")
            correct=false
        }else if (char === charSpan.innerHTML){
            charSpan.classList.add("correct")
            charSpan.classList.remove("incorrect")
        }else{
            charSpan.classList.remove("correct")
            charSpan.classList.add("incorrect")
            correct=false
        }
     });
  if(correct)randomQuote()
})

async function randomQuote(){
    const response=await fetch("https://api.quotable.io/random")
    const quote=await response.json()
    const data=quote.content
    displayQuoteElement.innerHTML=""

    data.split("").forEach(char => {
        const charSpan=document.createElement("span")
        charSpan.innerHTML=char
        displayQuoteElement.appendChild(charSpan)
    });

    inputQuoteElement.value=null
}
randomQuote()


let i=60
function onTime(){
    timerElement.innerHTML=i
    i--
    if(i<0){
      timerElement.innerHTML="YOU LSOE"
        randomQuote()
    }else{
        setTimeout(onTime,1000)
    }
}
onTime()




















































 