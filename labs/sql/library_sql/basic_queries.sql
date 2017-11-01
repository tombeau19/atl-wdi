-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns


-- Get all information about all authors
-- SQL 
SELECT * FROM authors;
-- AdvancedRecord 
Author.all

-- Get just the name and birth year of all authors
-- SQL
SELECT name, birth_year FROM authors;
-- AdvancedRecord
Author.select(:name, :birth_year)

-- Get all authors born in the 20th century or later
-- SQL
SELECT * FROM authoers WHERE birth_year > 1900;
-- AdvancedRecord
Author.where('birth_year > 1900')

-- Get all authors born in the USA
-- SQL
SELECT * FROM authors WHERE nationality='United States of America';
-- AdvancedRecord
Author.where("nationality = 'United States of America'")


-- Get all books published in 
-- SQL
SELECT * FROM books WHERE publication_date = 1985;
-- AdvancedRecord
Book.where('publication_date = 1985')

-- Get all books published before 1989
-- SQL
SELECT * FROM books WHERE publication_date < 1989;
-- AdvancedRecord
Book.where('publication_date < 1989')

-- Get just the title of all books.
-- SQL
SELECT title FROM books;
-- AdvancedRecord
Book.select(:title)

-- Get just the year that 'A Dance with Dragons' was published
-- SQL
SELECT publication_date FROM books WHERE title='A Dance with Dragons';
-- AdvancedRecord
Book.select(:publication_date).where(title:  'A Dance with Dragons')

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
-- SQL
SELECT * FROM books WHERE title LIKE '%the%';
-- AdvancedRecord
Book.where('title ILIKE ?', '%the%')

-- Add yourself as an author
INSERT INTO authors (name, nationality, birth_year) VALUES ('Tom Beauregard', 'United States of America', 1987);

-- Add two books that you'd like to write (you can hard-code your id as the author id)
INSERT INTO books (title, publication_date, author_id) VALUES ('good book', 2017, 9);

INSERT INTO books (title, publication_date, author_id) VALUES ('bad book', 2018, 9);

-- Update one of your books to have a new title
UPDATE books SET title = 'worse book', publication_date = 2020 WHERE id = 70;

-- Delete your books
DELETE FROM books WHERE author_id=9;

-- Delete your author entry
DELETE FROM authors WHERE id=9