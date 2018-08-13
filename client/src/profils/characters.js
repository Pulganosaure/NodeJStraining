import React, {Fragment} from 'react'
import * as gw2api from '../API/gw2.js'


class ProfileCharacters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
    }
    this.printchars = this.printchars.bind(this)
  }

printchars()
{
  const {characters} = this.state

  if(characters !== '')
    characters.map(character => {
    return <h1>{character}</h1>
    })
}
  async componentDidMount() {
      const data =  await gw2api.getCharactersList()
      this.setState({
        characters: data,
      })
    }
  render()
  {
    return (
      <Fragment>
        <div className="row justify-content-md-center">
          <h1 className="">Characters :</h1>
        </div>
        <div className="row mt-4">
          <table className="table table-striped">
            <tbody>
            </tbody>
          </table>
        </div>
              {this.printchars()
              }
      </Fragment>)
    }
  }

  export default ProfileCharacters
