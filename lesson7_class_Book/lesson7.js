class Book {
    constructor (title,author, year) {
        this.Title = title;
        this.Author = author;
        this.Year = year;
    };

    GetSummary () {
        return (this.Title + " was wrote " + this.Author + " in " + this.Year)
    };

    GetAge () {
        return (this.Title + " was wrote " + (2024 - this.Year) + " years ago")
    };

    Revise (yearRevise) {
        if (typeof(yearRevise) == "number") {
            this.Year = yearRevise;
            return (this.Title + " was revise in " + this.Year )
        } else { return ("This book wasn't revise")}
    } 
};

const book1 = new Book('Gamlet', 'William Shakespeare', 1603);
console.log(book1.GetSummary());
console.log(book1.GetAge());
console.log(book1.Revise(1623));