import React, {Fragment} from 'react'
import gw2 from '../API/gw2.js'


class ProfileCharacters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
    }
    this.printchars = this.printchars.bind(this)
  }

  async componentDidMount() {
    const data = await gw2.getData()
    this.setState({
      characters: data,
    })
  }
  printchars() {
    const {characters} = this.state
    characters === ''
      ? null
      : characters.map((character, index) => (
          <h1 key={index}>{character}</h1>
        ))
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
          { characters.map((character, index) => (
              <h1 key={index}>{character}</h1>
            ))
          }
      </Fragment>
    )
  }
}

export default ProfileCharacters
