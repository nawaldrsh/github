const heading = document.getElementById("heading");
console.log(heading);
const btn = document.getElementById("btn");
const result = document.getElementById("result");


//* step 1: class with quote and author and get info 

class quote {
    constructor(saying,author){
     this.saying = saying;
     this.author = author;
    }
getInfo(){
    return ` Quote for the day: '${this.saying}'-- ${this.author}`;
}
}
const quote1 = new quote("You must be the change you wish to see in the world","Mahatma Ghandi");
const quote2 = new quote("The only thing we have to fear is fear itself"," Franklin D. Roosevel");
const quote3 = new quote("Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that","Martin Luther King Jr");
const quote4 = new quote("Do one thing every day that scares you","Eleanor Roosevelt");
const quote5 = new quote("Well done is better than well said","Benjamin Franklin");

console.log(quote1);
console.log(quote2);
console.log(quote3);
console.log(quote4);
console.log(quote5);

//* STEP 2: adding the quotes class into an array

const quoteArray = [quote1.getInfo(),quote2.getInfo(),quote3.getInfo(),quote4.getInfo(),quote5.getInfo()
];

console.log(quoteArray);

const randomNumber = Math.floor(Math.random()*5);
const randomQoute = randomNumber % quoteArray.length;
console.log(quoteArray[randomQoute]);


//*   STEP 3: create function for generate quote btn

btn.addEventListener("click",function(){
    const randomNumber = Math.floor(Math.random()*5);
    const randomQoute = randomNumber % quoteArray.length;

    btn.textContent = quoteArray[randomQoute];

}
)

//*  STEP 4 : copy to clipboard and thank you message.

document.getElementById('copyBtn')
.addEventListener("click",()=>{
    const content = document.getElementById('btn').textContent;
    const cb = navigator.clipboard;
    cb.writeText(content)
    .then (()=>{
        alert("Thank you, you have successfully copied the quote!");
    })
}) 

//* STEP 5: Data validation :

