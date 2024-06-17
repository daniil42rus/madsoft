import { IQuestions } from '@/shared/types'
import { AnswerInLocal } from '@/shared/utils'
import { useState } from 'react'

interface IProps {
  question: IQuestions
  onClickValue: (id: number) => void
}

export const CardCheckbox = ({ question, onClickValue }: IProps) => {
  const [answer, setAnswer] = useState<string[] | null>(null)
  const handleClick = () => {
    if (!answer) return
    AnswerInLocal({ id: question.id, answer })
    setAnswer(null)
    onClickValue(question.id)
  }

  const hanldeChange = (val: string) => {
    const answerVal = answer ? answer : []
    const indexVal = answerVal?.indexOf(val)

    indexVal !== -1 ? answerVal.splice(indexVal, 1) : answerVal.push(val)

    setAnswer(answerVal)
  }

  return (
    <>
      <h2>{question.title}</h2>
      <div className="answers">
        {question.variants?.map((val, id) => (
          <label key={id}>
            <input
              type="checkbox"
              name={question.title}
              onChange={() => hanldeChange(val)}
              value={val}
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
