import React, { Component, Fragment } from 'react'

class InscriptionForm extends Component {

  render() {
    return (
      <Fragment>
      <form method="" action="" className="mt-5 my-4">
        <div className="form-group">
          <label htmlFor="username_input">nom de commandant :</label>
          <input type="text" name="username" id="username_input" className="form-control"></input>
        </div>
        <div className="form-group">
          <label htmlFor="Password_Input">Mot de passe :</label>
          <input type="password" name="password" className="form-control" id="Password_Input" placeholder="Mot de passe"></input>
        </div>
        <button type="submit" className="btn btn-primary">Connexion</button>
        <a className="text-primary" href="">mot de passe oublié?</a>
      </form>
    </Fragment>
    )
  }
}
export default InscriptionForm
