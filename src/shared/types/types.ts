export interface IAnswerInLocal {
  id: number
  answer: string | string[]
}

export interface ILocalObj {
  answers: IAnswerInLocal[]
}
export interface IQuestions {
  id: number
  type: 'radio' | 'text' | 'checkbox'
  title: string
  variants?: string[]
}

export interface ITest {
  conut?: number
  questions: IQuestions[]
}
