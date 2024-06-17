import { IAnswerInLocal, ILocalObj } from '../types'

export const AddZero = (num: number) => {
  if (num < 10) return '0' + num

  return num
}

export const AnswerInLocal = (answerObj: IAnswerInLocal) => {
  const local = window.localStorage.getItem('test')

  if (!local) {
    const answerLocalObj: ILocalObj = {
      answers: [
        {
          ...answerObj,
        },
      ],
    }

    window.localStorage.setItem('test', JSON.stringify(answerLocalObj))
  }

  if (local) {
    const answerLocalObj: ILocalObj = JSON.parse(local)
    answerLocalObj.answers.push({
      ...answerObj,
    })
    window.localStorage.setItem('test', JSON.stringify(answerLocalObj))
  }
}
