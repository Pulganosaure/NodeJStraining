import React, {Fragment} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getGw2Characters } from '../../actions/guildwars2Actions'
import CharactersForm from './characters/characterform'


class ProfileCharacters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
    }
  }
  async componentDidMount() {
    const data = await axios.get(`/api/gwinfos/characters/${this.props.apiKey}`)

    this.setState({
      characters: data.data,
    })
  }

  render() {
    const { characters } = this.state

    return (
      <Fragment>
        <div className="row mt-5 justify-content-md-center mb-3">
          <h1 className="">Characters :</h1>
        </div>
        { characters
          ? characters.map( (name, key) =>
              <CharactersForm key={key} apiKey={this.props.apiKey} charName={name}/>
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
