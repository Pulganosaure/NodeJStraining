import React, {Fragment} from 'react'


class ProfileAccount extends React.Component {

  render()
  {
    var user = {
      informations: {
        basicinfo: {
          username: "playerUsername",
          email: 'email@email.com',
          joindate: "playerJoinDate",
        },
        gw2account: {
          mastery: "playerMastery",
          archivementspoints: "playerArchivementsPoints",
          totalplaytime: "PlayerTotalPlaytime",
        },
      },
    }
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
                <td>{user.informations.basicinfo.username}</td>
              </tr>
              <tr>
                <td>join date :</td>
                <td>{user.informations.basicinfo.joindate}</td>
              </tr>
              <tr>
                <td>mastery :</td>
                <td>{user.informations.gw2account.mastery}</td>
              </tr>
              <tr>
                <td>Archivements Points :</td>
                <td>{user.informations.gw2account.archivementspoints}</td>
              </tr>
              <tr>
                <td>Total Playtime :</td>
                <td>{user.informations.gw2account.totalplaytime}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}

export default ProfileAccount
