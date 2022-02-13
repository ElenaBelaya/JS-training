function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray);
   
    console.log(newArray);
    
    const change = newArray.length < maxLength ? console.table(newArray) : console.table(newArray.slice(0, maxLength));
    }



makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)