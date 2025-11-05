const bookContainer=document.querySelector('.book-container');
const myLibrary=[];

function Book(title,author,year,pages,isRead){
this.title=title,
this.author=author,
this.year=year,
this.pages=pages,
this.isRead=isRead,
this.id=crypto.randomUUID()
}

function addBookToLibrary(title,author,year,pages,isRead){
      let newBook=new Book(title,author,year,pages,isRead) ;
      myLibrary.push(newBook);
}
addBookToLibrary('trial1','hdb',1933,233,'Not read');
addBookToLibrary('trial2','dhfbds',2003,122,'Read');
addBookToLibrary('trial3','ddddddbds',2013,122,'Read');
function showBook(){
myLibrary.forEach(book=>{
        const bookCard=document.createElement('div');
        bookCard.classList.add('book-card');
        const bookTitle=document.createElement('h3');
        bookTitle.textContent=book.title;
        const bookAuthor=document.createElement('p');
        bookAuthor.textContent= `By:${book.author}`;
        const bookYear=document.createElement('p');
        bookYear.textContent=`Year : ${book.year}`;
        const bookPages=document.createElement('p');
        bookPages.textContent=`Pages:${book.pages}`;
        const bookIsRead=document.createElement('button');
        bookIsRead.textContent=book.isRead;
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookYear);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookIsRead);
        bookContainer.appendChild(bookCard);
       
})

}
showBook();





