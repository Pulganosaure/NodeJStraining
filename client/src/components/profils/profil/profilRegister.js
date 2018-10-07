import React from 'react'
//import axios from 'axios'
import { connect } from 'react-redux'
import { createProfile } from '../../../actions/profilActions'


import '../../../style/profilRegister.css'


class ProfileRegister extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rulesAccepted: "",
      apiKey: "",
      discordUsername: "",
      error: "",
      valid: ""
    }
    this.handleQueryInput = this.handleQueryInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  componentDidMount() {

  }

  handleQueryInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e)
  {
    e.preventDefault()

    if(this.state.rulesAccepted) {
        this.setState({error: "", valid: "Votre profil a bien était enregistrer."})
        createProfile({apiKey: this.state.apiKey})
    }
    else
      this.setState({valid: "", error: "Vous devez acceptez le reglement pour continuer."})
  }

  render()
  {
    return (
      <div className="profilRegisterPopup">
        <h1 className="titleform">Il semblerait que votre profil ne soit pas encore créer !</h1>
        <div className="profilRegisterContainer">
          <form onSubmit={this.handleSubmit}>

            <label htmlFor="apiKey">clé API GW2 :</label>
            <input type="text" name="apiKey" id="apiKey" onChange={this.handleQueryInput} className="textInput"></input>

            <label htmlFor="apiKey">discord Username:</label>
            <input type="text" name="discordUsername" id="discordUsername" title="username#0000" pattern="[A-Za-z]{1,}[#]{1}[0-9]{4}" onChange={this.handleQueryInput} className="textInput"></input>

            <div className="checkboxDiv">
              <input type="checkbox" name="rulesAccepted" className="ruleCheckbox" onChange={() => this.setState({rulesAccepted: !this.state.rulesAccepted})}></input>
              <label>J'ai lu et approuvé les règles.</label>
            </div>
            <button type="submit" className="validationButton">Envoyer</button>
            <button type="button" className="validationButton">Regles</button>
          </form>
          <h6 className="errorMessage">{this.state.error}</h6>
          <h6 className="validationMessage">{this.state.valid}</h6>

        </div>
      </div>
    )}
  }
  export default connect(null , {createProfile})(ProfileRegister)
