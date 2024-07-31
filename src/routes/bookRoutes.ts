import { Router } from 'express';
import { 
  createBook, 
  getBooks, 
  getBookById, 
  updateBook, 
  deleteBook 
} from '../controllers/bookController';

const router = Router();

// Route to create a new book
router.post('/books', createBook);

// Route to get all books
router.get('/books', getBooks);

// Route to get a specific book by ID
router.get('/books/:id', getBookById);

// Route to update a specific book by ID
router.put('/books/:id', updateBook);

// Route to delete a specific book by ID
router.delete('/books/:id', deleteBook);

export default router;
