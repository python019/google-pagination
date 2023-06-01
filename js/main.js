const nav = document.querySelector('nav');
const text = nav.textContent;

// function changing the current page according to the input value
// ! default value of 0 to select the first anchor link
function goToPage(number = 0) {
  // loop through the existing anchor link elements
  const links = document.querySelectorAll('a');
  links.forEach((link, index) => {
    // find the lower case **o**
    const letter = link.querySelector('span');
    // if the index matches the input number update the color with the --current custom property
    // add or remove a class of .current to style the number referring to the page
    if (index === number) {
      letter.style.color = 'var(--current)';
      link.className = 'current';
    } else {
      const letterText = letter.textContent;
      letter.style.color = `var(--${letterText}`;
      link.className = '';
    }
  });
}

// counter variable to enumerate the pages
let page = 0;

const html = text
  // split into letters
  .split('')
  // wrap letters in span elements
  // style each letter with the matching custom property
  .map((letter) => {
    if (letter !== 'o') {
      return `<span style="color: var(--${letter.toLowerCase()})">${letter}</span>`;
    }
    // increment the counter variable
    page += 1;
    // in an anchor link element specify a span with the letter and a span with the counter variable
    // on click call a function to change the current page
    // ! -1 given zero-based indexing
    return `<a href="#${page}" onclick="goToPage(${page - 1})"><span style="color: var(--${letter.toLowerCase()})">${letter}</span><span>${page}</span></a>`;
  })
  // return as a string
  .join('');

nav.innerHTML = html;
// immediately call the function to select the first page
goToPage();
