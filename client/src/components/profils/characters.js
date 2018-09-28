import React from 'react'

class ProfileCharacters extends React.Component {
  render() {
    const { characters } = this.props.gw2
    return (
      <div className="row mt-5 justify-content-md-center mb-3">
        <h1 className="">Characters :</h1>
        {characters.map(char => <p key={char}>{char}</p>)}
      </div>
    )
  }
}

export default ProfileCharacters
