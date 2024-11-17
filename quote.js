quotesArray = [`"You miss 100% of the shots you don't take."

--Wayne Gretzy`, `"The best revenge is massive success."

--Frank Sinatra` , `“Be yourself; everyone else is already taken.”
― Oscar Wilde` , `“So many books, so little time.”
― Frank Zappa` , `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`]







function getRandomNumber(){
    
    var quoteNum = Math.floor(Math.random() * quotesArray.length);
    
    
   if (quoteNum < quotesArray.length ) {
    document.getElementById("main").innerHTML = quotesArray[quoteNum];
    
}


}



