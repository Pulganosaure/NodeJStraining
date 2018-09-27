import React, {Fragment} from 'react'
import gw2 from '../../API/gw2.js'
import loadcircle from '../../assets/loading/loadcircle.gif'
import { connect } from 'react-redux'
import { getGw2Characters } from '../../actions/guildwars2Actions'
import CharactersForm from './characters/characterform'


class ProfileCharacters extends React.Component {

  componentDidMount() {
    // if(this.props.gw2.characters.length === 0)
    this.props.getGw2Characters()
  }

  render() {
    const { characters } = this.props.gw2

    return (
      <Fragment>
        <div className="row mt-5 justify-content-md-center mb-3">
          <h1 className="">Characters :</h1>
        </div>
        { characters
          ? characters.map( (name, key) =>
              <CharactersForm key={key} charName={name}/>
            )
          : <h5>Failed to load your characters. Please verify your Guild wars 2 Api key</h5>
      }
    </Fragment>
  )}
}



const mapStateToProps = (state) => ({
  gw2: state.gw2,
})

export default connect(mapStateToProps, { getGw2Characters })(ProfileCharacters)
