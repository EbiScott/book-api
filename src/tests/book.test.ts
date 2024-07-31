import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI!, {
    // No need to include useNewUrlParser and useUnifiedTopology
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('POST /books', () => {
  it('should create a new book', async () => {
    const res = await request(app)
      .post('/api/books')
      .send({
        title: 'Test Book',
        author: 'Test Author',
        publishedDate: '2022-01-01',
        isbn: '1234567890',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });
});
