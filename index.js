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



const upperCaseFirst = (sentence) =>  {
  let str =[];
  let words = sentence.split(' ');
  for (var i of words) {
  str.push( i.charAt(0).toUpperCase() + i.slice(1))
  }
  return str.join(' ')
}

const titleCased = () => {
  return tutorials.map(item => upperCaseFirst(item));
}