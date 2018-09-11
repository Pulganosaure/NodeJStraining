import React, {Fragment} from 'react'


class ProfileSecurity extends React.Component {

  render()
  {
    return (
      <Fragment>
        <div className="row justify-content-md-center">
          <h1 className="">Security :</h1>
        </div>
        <div className="row">
          <div className="col">
          <form>
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input type="password" className="form-control" id="password"></input>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" className="form-control" id="confirmPassword"></input>
            </div>
            <div className="form-group">
              <label htmlFor="currentPassword">Current Password</label>
              <input type="password" className="form-control" id="currentPassword"></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        </div>
      </Fragment>)
    }
  }

  export default ProfileSecurity
