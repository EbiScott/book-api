import { Request, Response } from 'express';
import Book from '../models/book';

// Create a new book
export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, author, publishedDate, isbn } = req.body;

    // Create a new book instance
    const newBook = new Book({
      title,
      author,
      publishedDate,
      isbn,
      coverImage: req.file ? req.file.path : undefined,
    });

    // Save the book to the database
    await newBook.save();

    return res.status(201).json({ message: 'Book created successfully', book: newBook });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(500).json({ message: 'An unknown error occurred' });
  }
};

// Get all books
export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(500).json({ message: 'An unknown error occurred' });
  }
};

// Get a book by ID
export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(book);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(500).json({ message: 'An unknown error occurred' });
  }
};

// Update a book by ID
export const updateBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        author: req.body.author,
        publishedDate: req.body.publishedDate,
        isbn: req.body.isbn,
        coverImage: req.file ? req.file.path : undefined,
      },
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).json({ message: 'Book updated successfully', book });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(500).json({ message: 'An unknown error occurred' });
  }
};

// Delete a book by ID
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(500).json({ message: 'An unknown error occurred' });
  }
}