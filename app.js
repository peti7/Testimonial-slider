'use strict';

const quotes = [
    {
        quote: `“Be yourself; everyone else is already taken.”`,
        author: `― Oscar Wilde`,
    },
    {
        quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
        author: `― Marilyn Monroe`,
    },
    {
        quote: `
        “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        author: `― Albert Einstein`,
    },
    {
        quote: `“So many books, so little time.”`,
        author: `― Frank Zappa`,
    },
    {
        quote: `“Be the change that you wish to see in the world.”`,
        author: `― Mahatma Gandhi`,
    }
];
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const btns = document.querySelectorAll(".btns span");

let counter = 0;

window.addEventListener('load', () => {
    showQuotes();
})

function showQuotes(){
    quote.textContent = quotes[counter].quote;
    author.textContent = quotes[counter].author;
}

nextBtn.addEventListener('click', () => {
    counter++;
    if(counter > quotes.length - 1){
        counter = 0;
    }
    document.querySelector(".active").classList.remove("active");
    btns[counter].classList.add("active");
    showQuotes();
});

prevBtn.addEventListener('click', () => {
    counter--;
    if(counter < 0){
        counter = quotes.length - 1;
    }
    document.querySelector(".active").classList.remove("active");
    btns[counter].classList.add("active");
    showQuotes();
});

btns.forEach((btn, index)=> {
    btn.addEventListener('click', () => {
        counter = index;
        showQuotes();
        document.querySelector(".active").classList.remove("active");
        btns[index].classList.add("active");
    });
});

