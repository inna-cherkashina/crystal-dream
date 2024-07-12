let arrLetters = ['C', 'R', 'Y', 'S', 'T', 'A', 'L', ' ', 'D', 'R', 'E', 'A', 'M'];
let block = document.querySelector('.letters');

// arrLetters.forEach(function (elem) {
//   block.innerHTML += `<span>${elem}</span>`;
//   console.log(elem);
// });
for (let i = 0; i <= arrLetters.length - 1; i++) {
  console.log(arrLetters[i]);
  block.innerHTML += `<span class="letter-elem elem-${i + 1}">${arrLetters[i]}</span>`;
}

