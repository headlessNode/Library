function Book(title, author, nPages, read){
    this.title = title;
    this.author = author;
    this.nPages = nPages;
    this.read = read;
    
    this.info = function () {
        return title+ ' ' + 'by' + ' ' + author + ',' + nPages + 'pages'+','+' '+read;
    }
}

const theHobbit = new Book('The Hobbit','J.R.R. Tolkien',295,'not read yet');
console.log(theHobbit.info());