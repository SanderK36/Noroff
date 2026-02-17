/*
    1. Create a literal object magazine with properties title, issue, and editor, plus a describe method that uses this to return all the properties as a string. Log its output.

    2. Build a constructor function LibraryItem with properties title, author, and year. Add a shared describe method to its prototype. Create two instances and prove the method is shared by logging a comparison.

    3. Destructure magazine to extract the title property (rename it to magTitle) and the genre property (give it a default value of "General Tech"). Log both values individually.

    4. Define a Book class with properties title, author, and year, and a describe method.

    5. Define an EBook class that extends Book, adds a fileSize property, and overrides the describe method to include the file size.

    6. Create one magazine, one LibraryItem, one Book, and one EBook, put them into an array, and demonstrate polymorphism by calling describe() on each item in a loop.
    */

    //1. Object Literal
    const magazine = {
        title: "Tech today",
        issue: "115",
        editor:"Sander Karlsen",
        describe(){
            return `${this.title} (Issue ${this.issue}) - Editor" ${this.editor}`
        }
    }

    console.log(magazine.describe())

    //2. Constructor Function
    function LibraryItem(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }

    LibraryItem.prototype.describe = function() {
        return `${this.title} by ${this.author} (${this.year})`
    }

    const itemA = new LibraryItem("Harry Potter", "JK Rowling", 1995);
    const itemB = new LibraryItem("Overwatch", "Jeff Kaplan", 2015);

    console.log(itemA.describe())
    console.log(itemB.describe())

    console.log(itemA.describe === itemB.describe)

    //3. Destructuring
    const {title: magTitle, genre = "General Tech"} = magazine;
    console.log(magTitle)
    console.log(genre)

    //4.
    class book {
        constructor(title, author, year){
            this.title = title
            this.author = author
            this.year = year
        }
        describe(){
            return `${this.title} by ${this.author} (${this.year})`
        }
    }

    //5. Ebook class
    class eBook extends book {
        constructor(title, author, year, fileSize){
            super(title, author, year)
            this.fileSize = fileSize
        }
        describe(){
            return `${super.describe()} [eBook ${this.fileSize}MB]`
        }
    }

    const paper = new book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
    const digital = new eBook("1984", "George Orwell", 1949, 2);

    const catalog = [magazine, itemA, paper, digital];

    for(const entry of catalog){
        console.log(entry.describe())
    }


