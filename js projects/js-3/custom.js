quotes = [
    "gegergerger",
    "fjferjgnough",
    "kfwuefh9wefhye",
    "gegergerger",
    "fjferjgnough",
    "kfwuefh9wefhye",
    "gegergerger",
    "fjferjgnough",
    "kfwuefh9wefhye",
    "gegergerger",
    "fjferjgnough",
    "kfwuefh9wefhye",
]

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote(){
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);

        if (usedIndexes.has(randomIdx))  {continue}

        const quote = quotes[randomIdx];
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx);
        break;
    }
}