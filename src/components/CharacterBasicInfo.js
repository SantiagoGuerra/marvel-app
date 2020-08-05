import React from 'react'

function CharacterBasicInfo({ data }) {


  const {
    name,
    thumbnail,
    description
  } = data

  return (
    <div>
      <img src={`${ thumbnail.path }.${ thumbnail.extension }`} alt={ name }/>
      <h2>
        { name }
      </h2>

      <p>
        {description}
      </p>
    </div>
  )
}

export default CharacterBasicInfo
