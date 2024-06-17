import { IQuestions } from '@/shared/types'
import { AnswerInLocal } from '@/shared/utils'
import { useState } from 'react'

interface IProps {
  question: IQuestions
  onClickValue: (id: number) => void
}

export const CardText = ({ question, onClickValue }: IProps) => {
  const [answer, setAnswer] = useState<string | null>(null)
  const handleClick = () => {
    if (!answer) return

    AnswerInLocal({ id: question.id, answer })

    setAnswer(null)
    onClickValue(question.id)
  }
  return (
    <>
      <h2>{question.title}</h2>
      <div className="answers">
        <textarea
          rows={10}
          cols={20}
          className="textarea"
          onChange={(e) => setAnswer(e.target.value)}
        >
          {answer}
        </textarea>
      </div>
      <button
        className="button"
        disabled={!answer?.length}
        onClick={handleClick}
      >
        Ответить
      </button>
    </>
  )
}
