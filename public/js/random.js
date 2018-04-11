var quotes = ["Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "It is better to fail in originality than to succeed in imitation.",
    "The road to success and the road to failure are almost exactly the same.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Opportunities don't happen. You create them."];

var generateRandomQuote = () => {
    var randomQuote = Math.floor(Math.random() * 4);
    document.getElementById('quote').innerHTML = quotes[randomQuote];
};