import express from 'express';
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  updateBookCoverImage
} from '../controllers/bookController';
import upload from '../middlewares/upload';

const router = express.Router();

router.post('/books', createBook);
router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);
router.patch('/books/cover-image/:id', upload.single('coverImage'), updateBookCoverImage);

export default router;
