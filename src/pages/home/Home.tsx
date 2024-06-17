import { ILocalObj, ITest } from '@/shared/types'
import { CardCheckbox, CardRadio, CardText } from '@/widgets/Cards'
import { Countdown } from '@/widgets/Countdown'
import { Pagination } from '@/widgets/Pagination'
import { useState } from 'react'

export const Home = () => {
  const test: ITest = {
    conut: 60,
    questions: [
      {
        id: 1,
        type: 'checkbox',
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
      },
      {
        id: 12,
        type: 'text',
        title: 'Компонент - это ... ',
      },
      {
        id: 3,
        type: 'radio',
        title: 'Что такое JSX?',
        variants: [
          'Это простой HTML',
          'Это функция',
          'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
      },
      {
        id: 4,
        type: 'radio',
        title: 'Что такое useState?',
        variants: [
          'Это функция для хранения данных компонента',
          'Это глобальный стейт',
          'Это когда на ты никому не нужен',
        ],
      },
    ],
  }

  const [step, setStep] = useState(() => {
    const local = window.localStorage.getItem('test')
    return local !== null ? (JSON.parse(local) as ILocalObj).answers.length : 0
  })

  const [seconds, setSeconds] = useState(() => {
    const savedTime = localStorage.getItem('countdownTimer')
    return savedTime !== null ? JSON.parse(savedTime) : test.conut
  })

  const question = test.questions[step]

  const onClickValue = () => {
    setStep((prev) => prev + 1)
  }

  if (step === test.questions.length) {
    return <h1>Тестирование завершено</h1>
  }

  if (!seconds) {
    return <h1>Время вышло</h1>
  }

  return (
    <div className="content">
      <div className="top">
        <h1 className="heading">Тестирование</h1>
        {test?.conut && (
          <Countdown
            seconds={seconds}
            setSeconds={setSeconds}
          />
        )}
      </div>
      <Pagination
        quantity={test.questions.length}
        step={step}
      />
      {question.type === 'radio' && (
        <CardRadio
          onClickValue={onClickValue}
          question={question}
        />
      )}
      {question.type === 'checkbox' && (
        <CardCheckbox
          onClickValue={onClickValue}
          question={question}
        />
      )}
      {question.type === 'text' && (
        <CardText
          onClickValue={onClickValue}
          question={question}
        />
      )}
    </div>
  )
}
