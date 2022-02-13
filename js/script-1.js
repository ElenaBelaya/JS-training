function Count(message, pricePerWord) {
    const makeArray = message.split(" ").length;
    
  
    console.log(makeArray * pricePerWord);
}
Count("Java Script is in my blood", 50);