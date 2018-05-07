/**
 * JS file to handle book request.
 */
const getBookUrl = "http://fakerestapi.azurewebsites.net/api/Books";
const pageUrl = window.location.href;
localStorage.setItem('username','Stephen');
const user = localStorage.getItem('username');
const url = new URL(pageUrl);
const min = url.searchParams.get('min') | 0;
const max = url.searchParams.get('max') | 500;
min = parseInt(min);
max = parseInt(max);


const catalogue = document.getElementById('id1');

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
  const title = document.createElement('a');
  const excerpt = document.createElement('h3');
  const count = document.createElement('h4');
  const id = document.createElement('h5');
  title.textContent = response.Title;
  excerpt.textContent = response.Excerpt;
  id.textContent = response.ID;
  count.textContent = response.PageCount;
  div.appendChild(title);
  div.appendChild(excerpt);
  div.appendChild(id);
  div.appendChild(count);
  return div;
  //let content = document.createTextNode(`${wordObject.word} - ${status}`);
  //let liClass = document.createAttribute('class');
}





