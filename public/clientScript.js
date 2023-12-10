const formEl = document.getElementById('best-books-form');

$('#datepicker').datepicker()
let selectedBooks = new BookShelf();
// $('#panel').on('blur', function() {
//     $(this).hide();
//   });
formEl.addEventListener('submit', async function(e) {
  e.preventDefault();
//   $('#panel').show();
//   $('#panel').focus();

var date = $('#datepicker').datepicker('getDate').getDate();  
var month = $('#datepicker').datepicker('getDate').getMonth() +1;  
var year = $('#datepicker').datepicker('getDate').getFullYear();  
console.log(date, month, year , 'date month year')
 
  // Fetch bestselling books for date and add top 5 to page



  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  let response =  fetch(`https://api.nytimes.com/svc/books/v3/lists/${year}-${month.toString().padStart(2,'0')}-${date.toString().padStart(2,'0')}/hardcover-fiction.json?api-key=${API_KEY}`, requestOptions)
  let res = await response
  if (!res.ok) {
    doToast(`Error on fetch for API call ${res.status}`)
  }
  let text = await res.json()
  console.log(text, 'text')
  bookShelf = new BookShelf();
  //console.log(text.results.books.slice(0,5)) 
  $('#panel').empty()
  for(let bookData of text.results.books.slice(0,15)){
    //console.log(book.title, book.author, book.description, book.book_image)
    let book = new Book(bookData.title, bookData.author, bookData.description, bookData.book_image, bookData.rank);
    let index = bookShelf.addBook(book);// add index on book to bookshelf to return index and do no sorting today !!!!
    $('#panel').append(`<div class="book grid-item">
    <b>Title</b>: ${book.getTitle()}<br/>
    <b>Author</b>: ${book.getAuthor()}<br/>
    <div class="book-image-container">
      <img class="book-image" onmouseover="tooltipVisible(event,true)" onmouseout="tooltipVisible(event,false)" src="${book.getImage()}" title="${book.getDescription()}">
      
      <div class="plus-button" onclick="addClick(event,${index})">+</div>
      <br/> 
    </div>
    <span class="tooltip-robin">${book.getDescription()}</span><br/>
  </div>`)
   }

});

function updateSelectedBooks(){
    
    $('#panel-selected-books').empty()
    // $('#panel-selected-books').append(`<img class="bookshelf" src="bookshelf.jpeg">`)
    $('#panel-selected-books').addClass('visible')
  for(let book of [... selectedBooks.getBooks()]){
    console.log("updateSelectedBooks", book)
    //console.log(book.title, book.author, book.description, book.book_image)

    $('#panel-selected-books').append(`<div class="grid-item-selected-books">
   
    <div class="book-selected book-image-container-selected-books">
      <img class="book-image-selected-books" onmouseover="tooltipVisible(event,true)" onmouseout="tooltipVisible(event,false)" src="${book.getImage()}" title="${book.getDescription()}">
      
      <div class="plus-button" onclick="removeClick(event,'${book.getTitle()}')">-</div>
      <br/> 
    </div>
    <span class="tooltip-robin">${book.getDescription()}</span><br/>
  </div>`)

   }
}
function removeClick(event, title){
  
    selectedBooks.removeBook(title)
    updateSelectedBooks()

}
function addClick(event, index){
    selectedBooks.addBook(bookShelf.getBook(index))
// add selected book to the selected books list
  console.log("clicked", index)
  updateSelectedBooks()

}
function tooltipShow(event){
        console.log(event)
        let tooltip =  $(event.target).next()
        let x = e.clientX, y = e.clientY;
        tooltip.style.top = (y + 20) + 'px';
        tooltip.style.left = (x + 20) + 'px';
      };

function tooltipVisible(event, visible){

    let tooltip =  $(event.target).next()
    console.log(tooltip)
    if(visible){
        console.log('visible!')
        tooltip.addClass('visible-robin')
      
    }else{
        console.log('not visible!')
        tooltip.removeClass('visible-robin')
    }
    
}


// for (let i = 0; i < 100; i++) {
//     const sparkle = document.createElement('div');
//     sparkle.className = 'sparkle';
//     sparkle.style.top = `${Math.random() * 100}%`;
//     sparkle.style.left = `${Math.random() * 100}%`;
//     sparkle.style.animationDelay = `${Math.random() * 2}s`;
//     document.getElementById('sparkling-background').appendChild(sparkle);
// }

function doToast(message){
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('visible');
    setTimeout(() => {
        toast.style.animation = 'fadeout 1s';
        toast.addEventListener('animationend', () => {
            toast.style.visibility = 'hidden';
            toast.style.animation = '';
            toast.classList.remove('visible');
        });
    }, 10*1000); 
}

setTimeout(() => {
   doToast('Pssst get 20% off by saying "#2023END" to your barista!')// start fading out the toast after 10 seconds
}, 20*1000); // sh

//Model for the books 
const panel = document.getElementById('panel');
// put books in here
// panel.innerHTML = `<div> books <br/> <div id='close' class="btn-robin" onclick="alert('close')">X</div></div>`;
panel.classList.add('visible');

$('.plus-button').on('click', function() {
    alert('clicked');
  });