import cn from 'classnames'

interface IProps {
  quantity: number
  step: number
}

export const Pagination = ({ quantity, step }: IProps) => {
  return (
    <ul className="list">
      {Array.from({ length: quantity }).map((_, id) => (
        <li
          className={cn(
            'item',
            step === id && 'item_red',
            step > id && 'item_black',
          )}
          key={id}
        ></li>
      ))}
    </ul>
  )
}
