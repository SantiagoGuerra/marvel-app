import React from 'react'
import { useParams } from 'react-router-dom'

function Character() {
  
  const { id } = useParams()

  return (
    <div>
      id: {id}
    </div>
  )
}

export default Character
