import { AddZero } from '@/shared/utils'
import { useEffect } from 'react'

interface IProps {
  seconds: number
  setSeconds: React.Dispatch<React.SetStateAction<number>>
}

export const Countdown = ({ seconds, setSeconds }: IProps) => {
  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => setSeconds(seconds - 1), 1000)
      localStorage.setItem('countdownTimer', (seconds - 1).toString())
      return () => clearTimeout(timerId)
    }
  }, [seconds, setSeconds])

  return (
    <div className="countdown">
      {AddZero(Math.floor(seconds / 60))} : {AddZero(seconds % 60)}
    </div>
  )
}
