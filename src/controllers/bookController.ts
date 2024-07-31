import { Request, Response } from 'express';
import Book, { IBook } from '../models/book';

export const createBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { title, author, publishedDate, isbn } = req.body;
    const newBook: IBook = new Book({ title, author, publishedDate, isbn });
    const savedBook = await newBook.save();
    return res.status(201).json(savedBook);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getBookById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { title, author, publishedDate, isbn } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, publishedDate, isbn },
      { new: true }
    );
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(updatedBook);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateBookCoverImage = async (req: Request, res: Response): Promise<Response> => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    book.coverImage = req.file.path;
    const updatedBook = await book.save();
    return res.status(200).json(updatedBook);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
