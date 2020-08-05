import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCharacterInfo } from '../middlewares'
import CharacterBasicInfo from '../components/CharacterBasicInfo'

function Character() {
  const dispatch = useDispatch()
  const characterInfo = useSelector(state => state.characterInfo)

  const { id } = useParams();

  useEffect(() => {
    dispatch(getCharacterInfo(id))

  }, [dispatch])

  return (
    <div>
      <CharacterBasicInfo data={characterInfo}/>
      {console.log(characterInfo)}
    </div>
  )
}

export default Character
