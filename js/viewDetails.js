const apiURL = 'http://fakerestapi.azurewebsites.net/';
const params = (new URL(document.location)).searchParams;
const id = params.get('id');

fetchBook();

function fetchBook() {
  fetch(`${apiURL}/api/Books/${id}`)
  .then(response => response.json())
  .then(book => {
    document.getElementById('title').textContent = book.Title;
    document.getElementById('description').textContent = book.Description;
    document.getElementById('pageCount').textContent = book.PageCount;
    document.getElementById('body').textContent = book.Excerpt;
    document.getElementById('time').textContent = book.PublishDate;
  });
}