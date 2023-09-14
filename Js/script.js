let addBook = document.querySelector('.add-btn');
let dialogForm = document.querySelector('.dialog');
let bookTitleSelector = document.querySelector('.book-title');
let authorSelector = document.querySelector('.author');
let nPagesSelector = document.querySelector('.nPages');
let submitBtn = document.querySelector('.submit-btn');
let readCheck = document.querySelector('.read-check');
let validationFailed = document.querySelector('.fail-msg');
let booksContainer = document.querySelector('.books')


const myLibrary = [];
let title;
let author;
let nPages;
let read;

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
        }
        main();
    }
    // dialogForm.style.top = '-30%';
    // dialogForm.style.opacity = '0';
});



//based on the user input, create book object and add it into the library array.
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

function removeBookFromLibrary(bookIndex){

    myLibrary.splice(bookIndex,1);

    let removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((currentValue,currentIndex, listObj)=>{
        if(removeBtn[currentIndex].dataset.index > bookIndex){
            let datasetIndex = parseInt(removeBtn[currentIndex].dataset.index);
            
            let newDatasetIndex = datasetIndex - 1;
            
            removeBtn[currentIndex].dataset.index = newDatasetIndex;
        }
    });

    
}

function changeReadStatus(status, event){
    
    let targetTitle = event.target.parentElement.firstElementChild.textContent;
    
    console.log(targetTitle);


    if(status === 'read'){
        event.target.dataset.status = 'not read';
        event.target.textContent = 'not read';
        read = 'not read';
        
        myLibrary.filter((object)=>{
            console.log(object.title);
    
            if(object.title === targetTitle){
                console.log('change read status in library');
                object.read = 'not read';
            }
    
        });

        
        
    }
    else if (status === 'not read'){
        event.target.dataset.status = 'read';
        event.target.textContent = 'read';
        read = 'read';
        
        myLibrary.filter((object)=>{
            console.log(object.title);
    
            if(object.title === targetTitle){
                console.log('change read status in library');
                object.read = 'read';
            }
    
        });


    }
    console.log(myLibrary);
}

function addBooksToPage(myLibrary){

    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    //Add title to the card
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = myLibrary[myLibrary.length - 1].title;
    bookTitle.classList.add('title');
    bookCard.appendChild(bookTitle);
    //Add Author to the card
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = myLibrary[myLibrary.length - 1].author;
    bookCard.appendChild(bookAuthor);
    //Add nPages to the card
    const bookPages = document.createElement('p');
    bookPages.textContent = 'Number of Pages:' + ' ' + myLibrary[myLibrary.length - 1].nPages;
    bookCard.appendChild(bookPages);
    //Add read button
    const readButton = document.createElement('button');
    readButton.textContent = read;
    readButton.classList.add('bookCard-btns');
    readButton.classList.add('read-btn');

    readButton.dataset.status = myLibrary[myLibrary.length - 1].read;

    bookCard.appendChild(readButton);

    
    //Add remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('bookCard-btns');
    removeBtn.classList.add('remove-btn');

    removeBtn.dataset.index = myLibrary.length - 1;

    bookCard.appendChild(removeBtn);

    readButton.addEventListener('click', (event)=>{
        changeReadStatus(readButton.dataset.status, event);
    });

    removeBtn.addEventListener('click', (e)=>{
        
        removeBookFromLibrary(removeBtn.dataset.index);
        bookCard.remove();
    });


    booksContainer.appendChild(bookCard);

}


function main(){
    

    const libraryBook = new Book(title,author,nPages,read);

    addBookToLibrary(libraryBook);
    addBooksToPage(myLibrary);


}


