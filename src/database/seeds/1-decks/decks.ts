import { IDeck } from '../../../models/Deck'
import { ICard } from '../../../models/Card'

const cards: ICard[] = [
  {
    question: 'Who is the richest person in the world in 2020?',
    answers: [
      {
        text: 'Jeff Bezos',
        isCorrect: true,
        why: 'US$ 113 bilhões'
      },
      {
        text: 'Bill Gates',
        isCorrect: false,
        why: 'US$ 98 bilhões'
      },
      {
        text: 'Bernard Arnault e família',
        isCorrect: false,
        why: 'US$ 76 bilhões'
      },
      {
        text: 'Warren Buffett',
        isCorrect: false,
        why: 'US$ 67,5 bilhões'
      }
    ]
  },
  {
    question: 'Who is the greatest actress in the world in 2020?',
    answers: [
      {
        text: 'Renée Zellweger',
        isCorrect: true
      },
      {
        text: 'Saoirse Ronan',
        isCorrect: false
      },
      {
        text: 'Charlize Theron',
        isCorrect: false
      },
      {
        text: 'Scarlett Johansson',
        isCorrect: false
      }
    ]
  }
]

const decks: IDeck = {
  name: 'People',
  visibility: 'PUBLIC',
  cards: cards
}

export = decks
