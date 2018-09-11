import React, { Component, Fragment } from 'react'

class ConnexionForm extends Component {

  render() {
    return (
      <Fragment>
      <form method="" action="" className="mt-5 my-4">
        <div className="form-group">
          <label htmlFor="username_input">nom d'utilisateur : </label>
          <input type="text" name="username" id="username_input" className="form-control"></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" name="password" id="password" className="form-control"></input>
        </div>
        <button type="submit" className="btn btn-primary">Connexion</button>
        <a className="text-primary" href="">mot de passe oublié?</a>
      </form>
    </Fragment>
    )
  }
}
export default ConnexionForm
