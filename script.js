function generate(){
    var quotes = {
        "Lao Tzu" : "He who knows that enough is enough will always have enough.",
        "George Bernard Shaw" : "Life isn't about finding yourself. Life is about creating yourself.",
        "John C.Maxwell" : "People may hear your words, but they fell your attitude",
        "Albert Einstein" : "If you can't explain simply, you don't understand it well enough",
        "John Cale" : "Time plays a role in almost every decision. And some decisions define your attitude about time.",
        "Lou Holtz" : "Ability is what you're capable of doing. Motivation determine what you do. Attitude determines how well you do it.",
        "Norman Schwarzkopf" : "The more you sweat in peace, the less you bleed in war",
        "Robert Forst" : "The woods are lovely, dark and deep. But i have promises to keep, and miles to go before i sleep",
        "Nathaniel hawthorne" : "Times files over us, but leaves its shadow behind.",
        "A.P.J.Abdul Kalam" : "Man need his difficulties because they are necessary to enjoy success.",
        "Bil Keane" : "Yesterday's the past, tomorrow's the future, but today is a gift. That's why it's called the present."
    }

    var keys = Object.keys(quotes);
    var author = keys[Math.floor(Math.random(keys) * keys.length)];
    document.getElementById("Author").innerHTML = "--"+author;
    document.getElementById("quote").innerHTML = quotes[author];
}