import React, {Fragment} from 'react'
import gw2 from '../API/gw2.js'
import loadcircle from '../assets/loading/loadcircle.gif'


class Spinner extends React.Component {
  render()
  {
    return <img
      alt="Loading"
      src={loadcircle}
    />
  }

}



class CharactersForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      details: {},
    }

  }
  async componentDidMount()
  {
    const data = await gw2.getCharacterDetails(this.props.charName)
    this.setState({
      details: data,
    })
  }
  render()
  {
    const {details} = this.state
    return(
      <div>
        {
          (details)
          ? <div className="row border mb-1">
            <div className="col-2">
              <p>{details.profession}</p>
            </div>
            <div className="col-8 border-x">
              <h4>{details.name}</h4>
            </div>
            <div className="col-2">
              <h2>{details.level}</h2>
            </div>
          </div>
          :  <Spinner/>
        }
      </div>

    )

  }

}



class ProfileCharacters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
    }

  }

  async componentDidMount() {
    const data = await gw2.getCharacterList()
    this.setState({
      characters: data,
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
          { characters.map(name =>
            <CharactersForm charName={name}/>
          )
        }
      </div>
    </Fragment>
  )
}
}

export default ProfileCharacters
