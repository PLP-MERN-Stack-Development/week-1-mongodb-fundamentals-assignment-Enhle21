// find all books in a specific genre
db.books.find({genre: "Fantasy"})
// find books published after a certain year
db.books.find({published_year: {$gt: 2000}})
// find books by a specific author
db.books.find({author: "J.K Rowling"})
// Update the price of a specific book
db.books.updateOne({title: "The Time Machine"}, {$set:{price: 250.99}})
// Delete a book by its title
db.books.deleteOne({title: "The Time Machine"})

//TASK 3: Advanced Queries
// find books in stock and published after 2010
db.books.find({in_stock: true, published_year: {$gt: 2010}})
// Projection (only title, author, price)
db.books.find({}, {title: 1, author: 1, price: 1, _id: 0})
// Sorting by price (ascending)
db.books.find().sort({price: 1})
// Sorting by price (descending)
db.books.find().sort({price: -1})
//Pagination - page1 (firest 5 books)
db.books.find().skip (0).limit(5)
//Pagination -page2
db.books.find().skip(5).limit(5)

//TASK4: Aggregation pipeline
//Average price og books by genre
db.books.aggregate([
    {$group: {_id: "$genre", avgPrice: {$avg:"$price"}}}
])
//Author with the most books
db.books.aggregate([
    {$group: {_id: "$author", count: {$sum: 1}}},
    {$sort: {count: -1}},
    {$limit: 1}
])
// Group by publication decade
db.books.aggregate ([
    {
        $group: {
            _id: {$subtract:["$published_year", {$mod: ["$published_year", 10]}]},
            count: {$sum: 1}
        }
    }
])

//TASK5: Indexing
//Create index on title
db.books.createIndex ({title: 1})
//Compound index on author and published_year
db.books.createIndex({author:1, published_year: 1})
//Explain plan (before/ after creating index)
db.books.find({title: "The Time Machine"}).explain("executionStats")