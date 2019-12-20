import React, { useContext, useEffect } from 'react'
import { Progress as AntProgress, Button } from 'antd-mobile'
import { getProgress } from '@/services/laboratory'
import { context } from '@/stores/laboratory'
import './index.scss'

export default function Progress(): JSX.Element {
  const { state, dispatch } = useContext(context)

  useEffect(() => {
    getProgress()
  }, [])

  return (
    <>
      <AntProgress percent={state.progress} />
      <div className="button-group">
        <Button type="primary" className="button" onClick={(): any => dispatch({ type: 'decrease' })}>
          减少
        </Button>
        <Button type="primary" className="button" onClick={(): any => dispatch({ type: 'increase' })}>
          增加
        </Button>
      </div>
    </>
  )
}
