//TODO: add a display class for manipulating the dom
class Library {
    books = [];

    get getBooks(){
        return this.books;
    }

    addBookToLibrary(Book){
        this.books.push(Book);
    }

    printBooks(){
        console.log(this.books);
    }

    addBooksToTable() {
        const books = document.querySelectorAll(".books");
        this.removeElements(books);
    
        const buttons = document.querySelectorAll('button');
        this.removeElements(buttons);
    
        let index = 0;
        this.books.forEach(book => {
            // append new rows (books) to table
            var tableRow = document.getElementById("table");
    
            var newRow = `<tr class="books"> <td> ${book.title} </td> <td> ${book.author}</td> <td> ${book.pages} </td><td> ${book.isRead} </td> </tr>`;
            tableRow.innerHTML += newRow;
            
            const button = document.createElement("button");
            button.innerHTML= "Remove";
            button.id = index;
    
            tableRow.append(button);
    
    
            index++;
        });
    
        this.addListenerToButtons();
    }

    removeElements(elms){
        elms.forEach(el => el.remove());
    }

    addListenerToButtons() {
        const removeButtons = document.querySelectorAll('button');

        removeButtons.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                const indexPosition = e.target.id;
                this.books.splice(indexPosition, 1);

                const button = document.getElementById(indexPosition)
                if(button){
                    button.remove();
                }

                this.addBooksToTable();
            });
        });
    }

}

class Book {
    constructor(title,author,pages,isRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    };

}


const dune = new Book("dune", "hubert", 1000, false);
const sapiens = new Book("sapiens", "yuval", 1000, true);
const library = new Library();

library.addBookToLibrary(dune);
library.addBookToLibrary(sapiens);
library.printBooks();
library.addBooksToTable();
library.addListenerToButtons();


const addBookForm = document.getElementById("addBook").addEventListener("click",displayAddBookForm);

function displayAddBookForm(){
    document.getElementById("form").style.display = "inline";
}


const submitNewBook = document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    const formData = new FormData(document.querySelector('form'));
    const title = formData.get("title");
    const author = formData.get("author");
    const pages = formData.get("pages");
    const isRead = formData.get("isRead");
    
    const newBook = new Book(title,author,pages,isRead);

    library.addBookToLibrary(newBook);
    library.addBooksToTable();

    document.getElementById("form").style.display = "none";
});
