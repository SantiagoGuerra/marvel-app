import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCharacterInfo } from '../middlewares'

function Character() {
  const dispatch = useDispatch()
  const characterInfo = useSelector(state => state)

  const { id } = useParams();

  useEffect(() => {
    dispatch(getCharacterInfo(id))

  }, [dispatch])

  return (
    <div>
      id: {id} +
      {console.log(characterInfo)}
    </div>
  )
}

export default Character
