import { FC } from 'react'
import { useRouteError } from 'react-router-dom'
import styled from 'styled-components'
import { RouteError } from './utils/error'
import { color } from './css/cssVar'

type Props = {
  className?: string
}

const View: FC<Props> = ({ className }) => {
  const error = useRouteError() as RouteError

  return (
    <div className={className}>
      <div>
        <p>{error.message ?? 'エラーが発生しました'}</p>
      </div>
    </div>
  )
}

export default styled(View)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 80%;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${color.danger};

    & > p {
      color: ${color.danger};
      font-weight: bold;
      font-size: 2rem;
      text-align: center;
    }
  }
`
