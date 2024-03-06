class Book {
    constructor (title,author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    };

    getSummary () {
        return (this.title + " was wrote " + this.author + " in " + this.year)
    };

    getAge () {
        return (this.title + " was wrote " + (2024 - this.year) + " years ago")
    };

    revise (yearRevise) {
        if (typeof(yearRevise) == "number") {
            this.year = yearRevise;
            return (this.title + " was revise in " + this.year )
        } else { return ("This book wasn't revise")}
    } 
};

const book1 = new Book('Gamlet', 'William Shakespeare', 1603);
console.log(book1.getSummary());
console.log(book1.getAge());
console.log(book1.revise(1623));