const bookContainer=document.querySelector('.book-container');
const dialog=document.querySelector('.dialog');
const addBook=document.querySelector('#add-book');
const closeButton=document.querySelector('#close-button');
const bookForm=document.querySelector('#bookForm')


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

addBook.addEventListener('click',()=> dialog.showModal());
closeButton.addEventListener('click',()=>dialog.close());

bookForm.addEventListener('submit',function(event){
     event.preventDefault();
const titleInpt=document.querySelector('#title').value;
const authorInpt=document.querySelector('#author').value;  
const yearInpt=document.querySelector('#year').value; 
const pagesInpt=document.querySelector('#pages').value; 
const isReadInpt=document.querySelector('input[name="isRead"]:checked')?.value || ''; 
     console.log(titleInpt,authorInpt,yearInpt,pagesInpt,isReadInpt);
 
addBookToLibrary(titleInpt,authorInpt,yearInpt,pagesInpt,isReadInpt);
showBook();
dialog.close();
});
console.log(myLibrary.length);

 addBookToLibrary('trial1','hdb',1933,233,'Not read');
 addBookToLibrary('trial2','dhfbds',2003,122,'Read');
 addBookToLibrary('trial3','ddddddbds',2013,122,'Read'); 
 
 function removeBook(id){
                const index=myLibrary.findIndex(book=>book.id===id);
                if(index!==-1){
                        myLibrary.splice(index,1);//remove from [index] only one element 
                }
                console.log(myLibrary);
                showBook();
        }
function showBook(){
        bookContainer.innerHTML=" ";//To clear the previous books and add only the last one
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

        bookCard.dataset.id=book.id;          //assign the the book id as data attribute to each book object card
        const removeBtn=document.createElement('button');
        removeBtn.textContent="Remove";

        removeBtn.addEventListener('click',()=>{
                const bookId=bookCard.dataset.id;
                bookCard.remove();//remove the card from the view
                removeBook(bookId);//remove the object from the array
        })
     
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookYear);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookIsRead);
        bookCard.appendChild(removeBtn);
        bookContainer.appendChild(bookCard);
       
})

}

showBook();











