let addBook = document.querySelector('.add-btn');
let dialogForm = document.querySelector('.dialog');
let bookTitleSelector = document.querySelector('.book-title');
let authorSelector = document.querySelector('.author');
let nPagesSelector = document.querySelector('.nPages');
let submitBtn = document.querySelector('.submit-btn');
let readCheck = document.querySelector('.read-check');
let validationFailed = document.querySelector('.fail-msg');


const myLibrary = [];
let title;
let author;
let nPages;
let read;
let theHobbit;


// on clicking the add book btn a form should come up in which you can add the details of the book.
addBook.addEventListener('click', ()=>{
    dialogForm.showModal();
    dialogForm.style.top = '35%';
    dialogForm.style.opacity = '1';
});


// on clicking the submit btn on the addBookForm you should create a function that takes in user input.
submitBtn.addEventListener('click', ()=>{

    //The input fields must not be empty. Except the checkbox
    if(bookTitleSelector.value === '' || authorSelector.value === '' || nPagesSelector.value === ''){
        if(bookTitleSelector.value === ''){
            bookTitleSelector.style.background = '#BF8891';
        }

        else if(authorSelector.value === ''){
            authorSelector.style.background = '#BF8891';
        }

        else if(nPagesSelector.value === ''){
            nPagesSelector.style.background = '#BF8891';
        }

        else{
            bookTitleSelector.style.background = '#BF8891';
            authorSelector.style.background = '#BF8891';
            nPagesSelector.style.background = '#BF8891';
        }
        
        validationFailed.textContent = '* Input fields must not be empty.'
        event.preventDefault();
    }

    else{
        //if program is here, it means fields are not empty. Restore default background.
        validationFailed.textContent = '';
        bookTitleSelector.style.background = '#C2D0D6';
        authorSelector.style.background = '#C2D0D6';
        nPagesSelector.style.background = '#C2D0D6';

        
        if(bookTitleSelector.value === authorSelector.value){
            bookTitleSelector.style.background = '#BF8891';
            authorSelector.style.background = '#BF8891';
            validationFailed.textContent = '* Book and Author name must not match.'
            event.preventDefault();
        }

        else{
            bookTitleSelector.style.background = '#C2D0D6';
            authorSelector.style.background = '#C2D0D6';

            title = bookTitleSelector.value;
            author = authorSelector.value;
            nPages = nPagesSelector.value;

            if(readCheck.checked){
                read = 'read';
            }
            else{
                read = 'not read';
            }
            event.preventDefault();
        }
        main();
    }
    // dialogForm.style.top = '-30%';
    // dialogForm.style.opacity = '0';
});



//based on the user input, create book object and add it into the library array.
function Book(title, author, nPages, read){
    console.log(this);
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

function main(){
    
    const libraryBook = new Book(title,author,nPages,read);

    addBookToLibrary(libraryBook);
    console.log(myLibrary);
}


