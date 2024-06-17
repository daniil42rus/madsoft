import { IQuestions } from '@/shared/types'
import { AnswerInLocal } from '@/shared/utils'
import { useState } from 'react'

interface IProps {
  question: IQuestions
  onClickValue: (id: number) => void
}

export const CardRadio = ({ question, onClickValue }: IProps) => {
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
        {question.variants?.map((val, id) => (
          <label key={id}>
            <input
              type="radio"
              name={question.title}
              onChange={() => setAnswer(val)}
              value={val}
              checked={answer === val}
            />
            {val}
          </label>
        ))}
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
