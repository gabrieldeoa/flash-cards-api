import { JsonController, Get } from 'routing-controllers'
import { injectable, inject } from 'tsyringe'
import { ICardsService } from '../services/CardsService'

@injectable()
@JsonController('/cards')
export default class CardsController {
  constructor (@inject('ICardsService') private cardsService: ICardsService) {}

  @Get('/random')
  getRandom () {
    return this.cardsService.getRandom()
  }
}
