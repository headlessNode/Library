let addBook = document.querySelector('.add-btn');
let dialogForm = document.querySelector('.form');
let bookTitleSelector = document.querySelector('.book-title');
let authorSelector = document.querySelector('.author');
let nPagesSelector = document.querySelector('.nPages');

const myLibrary = [];

function Book(title, author, nPages, read){
    this.title = title;
    this.author = author;
    this.nPages = nPages;
    this.read = read;
    
    this.info = function () {
        return title+ ' ' + 'by' + ' ' + author + ',' + nPages + 'pages'+','+' '+read;
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}


// on clicking the add book btn a form should come up in which you can add the details of the book.

addBook.addEventListener('click', ()=>{
    dialogForm.showModal();
});


// on clicking the sumbit btn on the addBookForm you should create a function that takes in user input, create book object based on that input, and store that object in the array.