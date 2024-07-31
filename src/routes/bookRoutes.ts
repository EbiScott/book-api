import { Router } from 'express';
import { 
  createBook, 
  getBooks, 
  getBookById, 
  updateBook, 
  deleteBook 
} from '../controllers/bookController';
import multer from 'multer';

const router = Router();

// Setup multer for file handling
const upload = multer({ dest: 'uploads/' }); // Adjust destination as needed

// Route to create a new book
router.post('/books', upload.single('coverImage'), createBook);

// Route to get all books
router.get('/books', getBooks);

// Route to get a specific book by ID
router.get('/books/:id', getBookById);

// Route to update a specific book by ID
router.put('/books/:id', upload.single('coverImage'), updateBook);

// Route to delete a specific book by ID
router.delete('/books/:id', deleteBook);

export default router;
