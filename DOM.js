// getElementByTagName

console.log(document.getElementsByTagName('h1').length);

//getElementById
document.getElementById('container').style.backgroundColor = 'lightblue';

//getElementsByClassName
// document.getElementsByClassName('sure').style.backgroundColor = 'blue';

//querySelector
document.querySelector('h1').style.backgroundColor = 'green';
document.querySelector('.sure').style.backgroundColor = 'grey';

//querySelectorAll
document.querySelectorAll('h1')[0].style.backgroundColor = 'yellow';

document.querySelectorAll('li')[2].style.color = 'crimson';

//innerText
const para = document.querySelector('.para');

console.log(para.innerText); // This will give the text with HTML tags and can modify the content
para.innerText = '<strong>This is a new text</strong>'; // This will change the text inside the paragraph
console.log(para.innerText); 

//textContent
console.log(para.textContent); // This will give only the pure text without HTML tags

//innerHTML
console.log(para.innerHTML); // This will give the text with HTML tags as well
para.innerHTML = '<strong>This is a new text</strong>'; // This will change the HTML inside the paragraph
console.log(para);


// Class List
// This is about adding and removing classes from elements

const head1 = document.querySelector('#hey');
console.log(head1.classList);

head1.classList.add('new-class');

head1.classList.remove('new-class');

const sure = document.querySelector('.sure');
sure.classList.add('sure-bro');

sure.classList.toggle('sure-bro'); // This will remove the class if it exists, and add it if it doesn't

// Everything about Attributes -> getting and setting attributes

const btn = document.querySelector('#btn');

btn.classList.toggle('btn-style');

const anchor = document.querySelector('a');
console.log(anchor.href); // it will give the value of the href, but if don't have any value it won't return anything

anchor.href = 'https://www.google.com'; 
console.log(anchor.href); 

const inp = document.querySelector('input[type="text"]');
console.log(inp.value = 'Aditya');

inp.type = 'password';
console.log(inp.type); 

//getAttribute and setAttribute
console.log(anchor.getAttribute('href'));
anchor.setAttribute('href', 'https://www.youtube.com');
console.log(anchor.getAttribute('href')); 


//parentElement - This is used to get the parent element of a particular element
const parent = document.querySelector('#input');
console.log(parent.parentElement);

console.log(parent.parentElement.parentElement); // This will give the grandparent element of the input element

//childElement - This is used to get the child elements of a particular element
const child = document.querySelector('#container');
console.log(child.children[0]);
console.log(child.children[1].innertext = "this is the modified children");


//creating element
const newDiv = document.createElement('div'); // This will create a new div element
newDiv.innerHTML = `<h1> This is a new div</h1>
<p> This is a new paragraph</p>`;
newDiv.classList.add('new-div')

console.log(newDiv);

document.body.appendChild(newDiv);


// inserBefore -> syntax: selector.insertBefore(newElement, referenceElement);
para.insertBefore(newDiv, para.children[0]);

const newPara = document.createElement('p'); // This will create a new paragraph element
newPara.innerHTML = `<strong>This is a new paragraph</strong>`;

para.append(newPara); // This will append the new paragraph to the end of the existing paragraph

//replaceChild -> syntax: selector.replaceChild(newElement, oldElement);
// const oldPara = document.querySelector('.para p');
// const newPara2 = document.createElement('p'); // This will create a new paragraph element
// newPara2.innerHTML = `<strong>This is a replaced paragraph</strong>`;
// para.replaceChild(newPara2, oldPara); // This will replace the old paragraph with the new paragraph
// This will give error if the old element is not a child of the selector element


// EVENT LISTENERS
/*
Javascript's interaction with HTML is handled through events that occur when 
the user or the browser manipulates a page. When the page
loads, it is called an event.
*/

// The correct way to add an event Listner is to use the addEventListener() method.
const newBTN = document.createElement('button');
newBTN.classList.add('hooray');
newBTN.innerHTML = `<h3>Change meow btn style</h3>`;
const section = document.querySelector('.sec-2');
section.append(newBTN);
newBTN.style.marginTop = '20px';
newBTN.addEventListener('click', () => {
    console.log('Button clicked');
    btn.style.backgroundColor = 'red';
    btn.style.color = 'white';
    btn.style.fontSize = '20px';
    btn.style.padding = '10px';
    btn.style.borderRadius = '5px';
    btn.style.border = 'none';
    btn.style.cursor = 'pointer';
})

const form = document.querySelector('form');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const input = document.querySelector('input[type="text"]');
    console.log(input.value);
    input.value = ''; // This will clear the input field after submitting the form
    alert('Form submitted');
    btn.style.backgroundColor = 'green';
    btn.style.color = 'white';
    btn.style.fontSize = '20px';
})