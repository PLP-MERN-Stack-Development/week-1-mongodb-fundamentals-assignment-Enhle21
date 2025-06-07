db.books.insertMany([
    {
        title: "The Time Machine",           // book title
        author: "HG.Wells",                 // book author
        genre: "Science Fiction",           // genre
        published_year: 1895,               // year published
        price: 250.99,                      // price in rands
        in_stock: true,                     // availability
        pages: 118,
        publisher: "Penguin"                  // publisher
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        published_year: 1925,
        price: 199.99,
        in_stock: true,
        pages: 180,
        publisher: "Scribner"

    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        published_year: 1949,
        price: 299.99,
        in_stock: true,
        pages: 328,
        publisher: "Secker & Warburg"                  
    },
    {
        title: "To Kill a MockingBird",
        author: "Harper Lee",
        genre: "Classic",
        published_year: 1960,
        price: 250.00,
        in_stock: false,
        pages: 281,
        publisher: "J.B Lippincott & Co."

    },
    {
        title: "The Martian",
        author: "Andy Weir",
        genre: "Science Fiction",
        published_year: 2011,
        price: 150.00,
        in_stock: true,
        pages:370,
        publisher: "Crown Publishing Group"

    },
    {
        title: "Educated",
        author: "Tara Westover",
        genre: "Memior",
        published_year: 2018,
        price: 285.99,
        in_stock: true,
        pages: 334,
        publisher: "Random House" 

    },
    {
        title: "Becoming",
        author: "Michelle Obama",
        genre: "Biography",
        published_year: 1993,
        price: 299.99,
        in_stock: false,
        pages: 430,
        publisher: "crown Publishing Group"
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        genre: "Science Fiction",
        published_year: 1965,
        price: 300.00,
        in_stock: true,
        pages: 412,
        publisher: "Clinton Books"
    },
    {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genre: "History",
        published_year: 2011,
        price: 350.00,
        in_stock: true,
        pages: 443,
        publisher: "Harvill Secker"
    }
])