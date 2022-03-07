const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  let tutorial = tutorials.map(tutorial => tutorial)
  let sentences = tutorial.map(sentence => sentence.split(" "))
  let capitalizedSentences = sentences.map(function (sentence) {
    return sentence.map(function (word) {
      return word[0].toUpperCase() + word.substring(1);
    });
  })

  let joinedSentences = capitalizedSentences.map(function (arr) {
    return arr.join(" ");
    
  })
  return joinedSentences//.map(function (sentence) {
    //return sentence.map(function (word) {
      //return word[0].toUpperCase() + word.substring(1);
    //})
  //});
}

//return tutorials.map(tutorial => tutorial[0].toUpperCase() + (tutorial.substring(1)))


//return tutorial.split(" ").map(function (word) {
  //return word[0].toUpperCase() + word.substring(1);
//})

