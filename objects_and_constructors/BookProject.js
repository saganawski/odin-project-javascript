
let myLibrary = [];

function Book(title,author,pages,isRead) {
    this.author = author
    this.title = title
    this.pages = pages
    this.isRead = isRead

}

function addBookToLibrary(Book){
    myLibrary.push(Book);
}

var dune = new Book("dune", "hubert", 1000, false);
var sapiens = new Book("sapiens", "yuval", 1000, true);

addBookToLibrary(dune);
addBookToLibrary(sapiens);

console.log(myLibrary);

addBooksToTable();
function addBooksToTable() {
    // remove all elements in table first
    const removeElements = (elms) => elms.forEach(el => el.remove());
    const books = document.querySelectorAll(".books");
    removeElements(books);

    const buttons = document.querySelectorAll('button');
    removeElements(buttons);

    let index = 0;
    myLibrary.forEach(book => {
        // append new rows (books) to table
        var tableRow = document.getElementById("table");

        var newRow = "<tr class='books'> <td>" + book.title + "</td> <td>" + book.author + "</td> <td>" + book.pages + "</td><td>" + book.isRead + "</td> </tr>";
        tableRow.innerHTML += newRow;
        
        const button = document.createElement("button");
        button.innerHTML= "Remove";
        button.id = index;

        tableRow.append(button);


        index++;
    });

    addListenerToButtons();
}


var addBookForm = document.getElementById("addBook").addEventListener("click",displayAddBookForm);

function displayAddBookForm(){
    document.getElementById("form").style.display = "inline";
}


var submitNewBook = document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    var formData = new FormData(document.querySelector('form'));
    let title = formData.get("title");
    let author = formData.get("author");
    let pages = formData.get("pages");
    let isRead = formData.get("isRead");
    
    const newBook = new Book(title,author,pages,isRead);

    myLibrary.push(newBook);

    addBooksToTable();

    document.getElementById("form").style.display = "none";
});



addListenerToButtons();

function addListenerToButtons() {
    const removeButtons = document.querySelectorAll('button');

    removeButtons.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();

            const indexPosition = e.target.id;
            myLibrary.splice(indexPosition, 1);
            const button = document.getElementById(indexPosition).remove();

            addBooksToTable();
        });
    });
}

