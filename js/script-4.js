function findLongestWord(string) {
    const arrayFromString = string.split(" ");
    console.log(arrayFromString);
    let word = arrayFromString[0];
    

    for (let i = 1; i < arrayFromString.length; i += 1) {
        if (word.length < arrayFromString[i].length) {
            word = arrayFromString[i];
           
        }
         
    }
 console.log(word);  
}

 
findLongestWord("The quick brown fox jumped over the lazy dog"); 