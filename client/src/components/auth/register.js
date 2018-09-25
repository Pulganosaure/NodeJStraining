import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { registUser } from '../../actions/authActions'

const passwordminlength = 5


class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
    }
    this.handleQueryInput = this.handleQueryInput.bind(this)
    this.HandleSubmit = this.HandleSubmit.bind(this)
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/profil')
    }
  }

  handleQueryInput(e) {
  this.setState({
    [e.target.name]: e.target.value
  })
}
HandleSubmit(e)
{
  e.preventDefault()
  console.log("hello")
  if(this.state.password.length > 5 && this.state.username.length > 3 && this.state.password === this.state.password2 && this.state.email !== "")
  {
    console.log("check down")
    this.props.registUser({username:this.state.username, password:this.state.password, email:this.state.email})
  }

}


  render() {
    return (
      <Fragment>
        <form onSubmit={this.HandleSubmit} className="mt-5">
          <div className="form-group">
            <label htmlFor="username_input">nom d'utilisateur :</label>
            <input type="text" name="username" title="name" onChange={this.handleQueryInput} className="form-control"></input>
          </div>
          <div className="form-group">
            <label htmlFor="username_input">E-Mail :</label>
            <input type="email" name="email" className="form-control" onChange={this.handleQueryInput}></input>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label htmlFor="Password_Input">Mot de passe :</label>
                <input type="password" name="password" className="form-control" onChange={this.handleQueryInput}></input>
              </div>
              <div className="col">
                <label htmlFor="Password_Input">Mot de passe :</label>
                <input type="password" name="password2" className="form-control" onChange={this.handleQueryInput}></input>
              </div>
            </div>
          </div>
          {this.state.password !== this.state.password2
            ? <h6 className="text-danger">Passwords do not match</h6>
            : (this.state.password.length < passwordminlength && this.state.password)
              ?  <h6 className="text-danger">Password need {passwordminlength} characters minimum</h6>
              : null
          }
          <div className="row">
            <div className="col">
              <button type="submit" className="btn btn-primary">Connexion</button>
            </div>
            <div className="col"></div>
            <a className="text-primary" href="">mot de passe oublié?</a>
          </div>
        </form>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { registUser })(Register)
