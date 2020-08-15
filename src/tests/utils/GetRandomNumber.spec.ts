import { GetRandomNumber } from '../../utils/GetRandomNumber'

describe('GetRandomNumber', () => {
  it('should get a random number', async () => {
    const max = 10
    const random = GetRandomNumber(max)

    expect(random).toBeGreaterThan(0)
    expect(random).toBeLessThanOrEqual(max)
  })
})
