function Book(title,author,pages,isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead

    // If you’re using constructors to make your objects it is best to define functions on the prototype of that object. 
    // Doing so means that a single instance of each function will be shared between all of the Student objects. 
    // If we declare the function directly in the constructor like we did when they were first introduced that function would
    //  be duplicated every time a new Student is created. In this example, that wouldn’t really matter much, but in a 
    //  project that is creating thousands of objects, it really can make a difference.
    this.info = function(){
        let message = this.title + " " + this.author + ", " + this.pages + " pages, ";

        if(isRead){
            message + " is read";
            return message;
        }

        message + " not read yet";
        return message;
    }
}

const dune = new Book("Dune", "H dude", "1000", true );

console.log(dune.info());