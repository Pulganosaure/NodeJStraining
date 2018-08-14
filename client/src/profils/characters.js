import React, {Fragment} from 'react'
import gw2 from '../API/gw2.js'


class ProfileCharacters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      details: [],
    }

  }

  async componentDidMount() {
    const data = await gw2.getCharacterList()
    this.setState({
      characters: data,
    })
      this.state.characters.map(character => (
        this.state.details.push(this.getDetails(character))
      ))
  }

  getDetails(name)
  {
    return gw2.getCharacterDetails(name)
  }
  render() {
    const {characters} = this.state
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
        <div>
          {this.state.details.map(char => <h1>{char.name}</h1>)}
        </div>
      </Fragment>
    )
  }
}

export default ProfileCharacters
