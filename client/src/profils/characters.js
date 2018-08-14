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
    const detail = await gw2.getCharacterDetails('Miss Yamada')
    this.setState({
      characters: data,
      details: detail,
    })

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

        </div>
      </Fragment>
    )
  }
}

export default ProfileCharacters
