const nouns = [
  "cat",
  "dog",
  "hamster",
  "parrot",
  "dolphin"
];

// take the all items except the last item in the array
const nList = nouns.slice(0, nouns.length - 1);

// separates item with commas
const nounList = nList.join(', ');

// takes last item of the array
const lastItem = nouns[nouns.length - 1];

// concatenate with the partial sentence from index.html
const sentence = document.querySelector('.sentence');
sentence.innerHTML += ` ${nounList}, and ${lastItem}.`;
