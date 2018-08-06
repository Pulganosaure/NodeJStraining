import React, {Fragment} from 'react'


class ProfileAccount extends React.Component {

  render()
  {
    var user = {
      informations: {
        username: "player_username",
        mastery: "player_mastery",
        joinDate: "player_JoinDate",
        ArchivementsPoints: "player_ArchivementsPoints",
        TotalPlaytime: "Player_TotalPlaytime",
      }
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
                <td>{user.informations.username}</td>
              </tr>
              <tr>
                <td>mastery :</td>
                <td>{user.informations.mastery}</td>
              </tr>
              <tr>
                <td>join date :</td>
                <td>{user.informations.joinDate}</td>
              </tr>
              <tr>
                <td>join date :</td>
                <td>{user.informations.ArchivementsPoints}</td>
              </tr>
              <tr>
                <td>join date :</td>
                <td>{user.informations.TotalPlaytime}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}

export default ProfileAccount
