import React, {Fragment} from 'react'


class ProfileAccount extends React.Component {

  render()
  {
    const { user, profil } = this.props
    return (


      <Fragment>
        <div className="row justify-content-md-center">
          <h1 className="">Account :</h1>
        </div>
        <div className="row mt-4">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>username :</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>email :</td>
                <td>{this.props.user.email}</td>
              </tr>
              <tr>
                <td>mastery :</td>
                <td>{"null"}</td>
              </tr>
              <tr>
                <td>Archivements Points :</td>
                <td>{profil.Informations.archivementPoints}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}

export default ProfileAccount
