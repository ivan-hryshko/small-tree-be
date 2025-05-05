
import request from 'supertest'
import app from '../../../app'
import AppDataSource from '../../../config/app-data-source'

beforeAll(async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
});

afterAll(async () => {
  if (AppDataSource.isInitialized) {
    await AppDataSource.destroy();
  }
});

describe('POST /api/v1/game', () => {
  it('should create a game with', async () => {
    expect(true).toBe(true)

    const response = await request(app)
      .post('/api/v1/games/create')
      // .send(movieData)
      // .set('Authorization', `${testHelper.getToken()}`)

    expect(response.status).toBe(200)

  })
})