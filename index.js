const btnEl = document.getElementById('btn')
const gameEl = document.getElementById('game')
const startEl = document.getElementById('start')


const cwEl = document.getElementById('cw')
const hintEl = document.getElementById('hint')

const btn = document.getElementById('btn2')
const entryEl = document.getElementById('entry')
const paraEl = document.getElementById('result')


let correctWord;


// ame loigic

const jsConcepts = [
  { word: "closure", hint: "Keeps variables alive even after a function is done." },
  { word: "promise", hint: "Used to handle asynchronous code; it’s either pending, resolved, or rejected." },
  { word: "hoisting", hint: "JavaScript's sneaky move of declarations to the top of scope." },
  { word: "callback", hint: "A function passed into another function... like a functional sidekick." },
  { word: "event", hint: "Click, scroll, hover—JavaScript loves reacting to these." },
  { word: "object", hint: "Key-value pairs’ best friend; the building block of JS structures." },
  { word: "array", hint: "An ordered list of values, often comma-separated and brack"}
  ]


//Interface switch
btnEl.addEventListener('click',function(){
   
    
    gameEl.classList.remove('hidden')
    gameEl.classList.add('active')
    startEl.classList.add('hidden')
    
    
})


//ame play

btn.addEventListener('click',function(){
   
    
   gameOn()
    
    
})


function gameOn(){
    let randomnword = jsConcepts[Math.floor(Math.random() * jsConcepts.length)];
    let randomResult = randomnword.word.split('')

    for (let i = randomResult.length - 1; i > 0; i--) {
        let j= Math.floor(Math.random() * (i + 1));
        [randomResult[i], randomResult[j]] = [randomResult[j], randomResult[i]]
    }
  
    

    let result = cwEl.innerText = randomnword.word.split('').reverse().join('')

    let hint = hintEl.innerText = randomnword.hint

    correctWord =  result.split('').reverse().join('')

console.log(hint)

    if(entryEl.value == correctWord){

        paraEl.innerText = `You are correct! The correct word is ${correctWord.split('').reverse().join('')}`

    }
}

gameOn()
