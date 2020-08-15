import { JsonController, Get, Param } from 'routing-controllers'
import { injectable, inject } from 'tsyringe'
import { IDecksService } from '@services/DecksService'

@injectable()
@JsonController('/decks')
export default class DecksController {
  constructor (@inject('IDecksService') private decksService: IDecksService) {}

  @Get('/random')
  getRandom () {
    return this.decksService.getRandom()
  }

  @Get('/:deckId/random-card')
  getRandomCard (@Param('deckId') deckId: number) {
    return this.decksService.getRandomCard(deckId)
  }
}
