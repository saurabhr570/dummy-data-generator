//write a program to capitalize first letter of your sentense or string 
/*function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  console.log(capitalizeFirstLetter("hello world")); // "Hello world"*/


// write a program to capitalize any word in given sentense
/*let ask="i will tell you about this function"
console.log(ask.slice(0,26)+ " " + ask.charAt(27).toUpperCase()+ ask.slice(28,35))*/


/*function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longestWord = "";
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    return longestWord;
}
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // "jumped"*/
  const lang=["c++","java","c","python","javascript"]
  function longestword(arr){
    let longword=arr[0];
    for(let item of arr){
        if(item.length>longword.length) 
        longword=item;

    }
    return longword;
  }
  console.log(longestword(lang));
  