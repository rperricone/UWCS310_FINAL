const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

formEl.addEventListener('submit', async function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;
  
  // Fetch bestselling books for date and add top 5 to page
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  let response =  fetch(`https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json?api-key=${API_KEY}`, requestOptions)
  let res = await response
  let text = await res.json()
  bookShelf = new BookShelf();
  //console.log(text.results.books.slice(0,5)) 
  $('#panel').empty()
  for(let bookData of text.results.books.slice(0,100)){
    //console.log(book.title, book.author, book.description, book.book_image)
    let book = new Book(bookData.title, bookData.author, bookData.description, bookData.book_image, bookData.rank);
    bookShelf.addBook(book);
    $('#panel').append(`<div class="book grid-item "><b>Title</b>: 
    ${book.getTitle()}<br/><b>Author</b>: 
    ${book.getAuthor()}<br/><b>
    <img class="book-image" src="${book.getImage()}"  alt="${book.getDescription()}"> 
    <
    <span class="tooltip">${book.getDescription()}</span><br/><br/></div>`)
   }
});



for (let i = 0; i < 100; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 2}s`;
    document.getElementById('sparkling-background').appendChild(sparkle);
}


setTimeout(() => {
    const toast = document.getElementById('toast');
    toast.textContent = 'Pssst get 20% off by saying "#2023END" to your barista!';
    toast.classList.add('visible');
    setTimeout(() => {
        toast.style.animation = 'fadeout 1s';
        toast.addEventListener('animationend', () => {
            toast.style.visibility = 'hidden';
            toast.style.animation = '';
            toast.classList.remove('visible');
        });
    }, 10*1000); // start fading out the toast after 10 seconds
}, 20*1000); // sh

//Model for the books 
const panel = document.getElementById('panel');
// put books in here
panel.innerHTML = `<div> books <br/> <div id='close' class="btn-robin" onclick="alert('close')">X</div></div>`;
panel.classList.add('visible');
