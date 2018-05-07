/**
 * JS file to handle book request.
 */
const getBookUrl = "http://fakerestapi.azurewebsites.net/api/Books";
const pageUrl = window.location.href;
localStorage.setItem('username','Stephen');
const user = localStorage.getItem('username');
const url = new URL(pageUrl);
let min = url.searchParams.get('min') | 0;
let max = url.searchParams.get('max') | 500;
min = parseInt(min);
max = parseInt(max);


const catalogue = document.getElementById('container');

function getAllBooks() {
  fetch(getBookUrl).then((response) => response.json())
    .then((response) => {
      response = response.filter( x => x.PageCount > min && x.PageCount <= max);
      response.map(result => {
        catalogue.appendChild(getBookObject(result));
      });      
    });
};

function getBookObject(response) {
  const div = document.createElement('div');
  const colMd3 = document.createElement('div');
  colMd3.setAttribute('class','col-md-3');
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  const cardBody = document.createElement('div');
  cardBody.setAttribute('class', 'card-body')
  const span = document.createElement('span');
  const cardTitle = document.createElement('a');
  cardTitle.className = 'card-title';
  cardTitle.href = `./viewdetails.html?id=${response.ID}`;
  const excerpt = document.createElement('p');
  const count = document.createElement('h4');
  const id = document.createElement('h5');
  span.textContent = 'Book Title: ';
  span.appendChild(cardTitle);
  cardTitle.textContent = response.Title;
  excerpt.textContent = response.Excerpt;
  id.textContent = response.ID;
  count.textContent = response.PageCount;
  cardBody.appendChild(span);
  cardBody.appendChild(excerpt);
  // cardBody.appendChild(id);
  // cardBody.appendChild(count);
  card.appendChild(cardBody);
  colMd3.appendChild(card);
  return colMd3;
  //let content = document.createTextNode(`${wordObject.word} - ${status}`);
  //let liClass = document.createAttribute('class');
}





