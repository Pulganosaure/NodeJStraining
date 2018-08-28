import React, {Fragment} from 'react'
import gw2 from '../API/gw2.js'
import * as gw2infos from '../API/gw2infos.js'
import loadcircle from '../assets/loading/loadcircle.gif'


class Spinner extends React.Component {
  render()
  {
    return <img
      alt="Loading"
      src={loadcircle}
      style={{height: "50px"}}
    />
  }

}

class ClassChar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      iconClassurl: "",
    }
  }
  async componentDidMount() {
    const classIcon = await gw2infos.getCLassIcon(this.props.className)
    this.setState({
      iconClassurl: classIcon.classIcon
    })
  }
  render() {
    return(
      <div className="col text-center">
        <h5 className="mb-0">{this.props.className}</h5>
        <img className="text-center" src={this.state.iconClassurl} alt="error class not found"></img>
      </div>
  )}
}

class TitleChar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
    }
  }
  async componentDidMount() {
    const data = await gw2.getCurrentTitle(this.props.id)
    console.log(data)
    console.log(this.props.id)
    this.setState({
      name: data.name
    })
  }
  render() {
    return(
      <h6>{this.state.name}</h6>
  )}
}

class CharactersForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      details: null,
    }
  }
  async componentDidMount() {
    const data = await gw2.getCharacterDetails(this.props.charName)
    this.setState({
      details: data,
    })
  }

  render() {
    const {details} = this.state
    let characterDetails

    details === null
      ? characterDetails = (
        <div className="row border mb-1 justify-content-md-center align-middle">
            <Spinner/>
        </div>)
      : characterDetails = (
        <div className="row border mb-1">
          <div className="col-2 align-middle">
            <ClassChar className={details.profession}/>
          </div>
          <div className="col-8 border-x">
            <div className="row">
              <h4>{details.name}</h4>
            </div>
            {console.log(details)}
            <div>
              <TitleChar id={details.title}/>
            </div>
          </div>
          <div className="col-2">
            <h2>{details.level}</h2>
          </div>
        </div>
      )

    return(
      <div>
        {characterDetails}
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
        <div className="row justify-content-md-center mb-3">
          <h1 className="">Characters :</h1>
        </div>
          { characters.map((name, key) =>
            <CharactersForm key={key} charName={name}/>
          )
        }
    </Fragment>
  )
}
}

export default ProfileCharacters
