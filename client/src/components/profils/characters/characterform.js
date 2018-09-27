import React from 'react'
import loadcircle from '../../../assets/loading/loadcircle.gif'
import TitleChar from './titlecharacter'
import ClassChar from './classcharacter'

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
  export default CharactersForm
