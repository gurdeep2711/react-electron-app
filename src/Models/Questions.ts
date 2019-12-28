export const QUESTIONS = [
  {
    qId: 1,
    caption: 'Choose the correct one.',
    question: 'Apple is fruit?',
    options: ['yes', 'no'],
    correct: [0]
  }, {
    qId: 2,
    caption: 'Choose the correct one.',
    question: 'What color of orange is?',
    options: ['red', 'green', 'yellow', 'orange'],
    correct: [3]
  }, {
    qId: 3,
    caption: 'Choose the correct one(Multiple).',
    question: 'Choose even numbers?',
    options: [1, 2, 5, 8],
    correct: [1, 3]
  }, {
    qId: 4,
    caption: 'Choose the correct one.',
    question: '(10 < 1) is correct?',
    options: ['true', 'false'],
    correct: [1]
  }, {
    qId: 5,
    caption: 'Choose the correct one.',
    question: 'How many wheels car have?',
    options: [5, 4, 6, 3],
    correct: [1]
  }
] as any;

export interface Question {
  qId: number,
  caption: string,
  question: string,
  options: Array<string | number>,
  correct: Array<number>
}