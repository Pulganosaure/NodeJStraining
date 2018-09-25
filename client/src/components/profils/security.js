import React, {Fragment} from 'react'


class ProfileSecurity extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPassword: '',
      newPassword: '',
      newPassword2: '',
    }
    this.handleQueryInput = this.handleQueryInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e)
  {
    e.preventDefault()
    //if(this.state.newPassword.length > 5 && this.state.newPassword2 === this.state.newPassword)
      //this.props.updatePassword({username:this.state.username, password:this.state.password})
  }

  handleQueryInput(e) {
  this.setState({
    [e.target.name]: e.target.value
    })
  }

  render()
  {
    return (
      <Fragment>
        <div className="row mt-5 justify-content-md-center">
          <h1 className="">Security :</h1>
        </div>
        <div className="row">
          <div className="col">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input type="password" name="newPassword" className="form-control" id="password"></input>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" name="newPassword2" className="form-control" id="confirmPassword"></input>
            </div>
            <div className="form-group">
              <label htmlFor="currentPassword">Current Password</label>
              <input type="password" name="currentPassword" className="form-control" id="currentPassword"></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        </div>
      </Fragment>)
    }
  }

  export default ProfileSecurity
