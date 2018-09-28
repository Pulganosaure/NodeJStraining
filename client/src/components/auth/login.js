import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { connectuser } from '../../actions/authActions'

class Connect extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
    this.handleQueryInput = this.handleQueryInput.bind(this)
    this.connect = this.connect.bind(this)
  }

    handleQueryInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
 
    componentDidMount() {
      if(this.props.auth.isAuthenticated)
        this.props.history.push("/profil")
    }
    componentDidUpdate(prevProps) {
      if (this.props.auth.isAuthenticated) {
        this.props.history.push('/profil');
      }

    }
    connect(e)
    {
      e.preventDefault()
      if(this.state.password.length > 5 && this.state.username !== "")
      {
        this.props.connectuser({email:this.state.email, password:this.state.password})
      }

    }
  render() {
    return (
      <Fragment>
      <form onSubmit={this.connect} className=" mt-5 my-4">
        <div className="form-group">
          <label htmlFor="username_input">nom d'utilisateur : </label>
          <input type="email" name="email" id="username_input" onChange={this.handleQueryInput} className="form-control"></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" name="password" id="password" onChange={this.handleQueryInput} className="form-control"></input>
        </div>
        <button  className="btn btn-primary">Connexion</button>
        <a className="text-primary" href="">mot de passe oublié?</a>
      </form>
    </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { connectuser })(Connect)
