import React, {Fragment} from 'react'


class UserDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 50
    }
  }
  render()
  {

    return (
      <Fragment>
        <div className="row justify-content-md-center">
          <h1 className="">Welcome Back username !</h1>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div className="row my-5">
              <div className="col">
                <h1>dernières notifications :</h1>
                <p>0 nouveaux commentaires</p>
                <p>3 personnes ont aimé l'un de vos images</p>
                <p>0 messages privé reçu</p>
              </div>
            </div>
            <div className="row my-5">
              <div className="col">
                <h1>Dernières actualités :</h1>
                <a href="#">patchnote du 27/08/2018</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row my-5">
              <div className="col">
                <h1>Archivements : </h1>
                <p>fana des événements : 5/10</p>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: this.state.value+"%"}}>{this.state.value + "%"}</div>
                </div>
                <p>grand fana des évenements : 5/20</p>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: this.state.value / 2+"%"}}>{this.state.value / 2 + "%"}</div>
                </div>
                <p>Maitre des évenements : 5/50</p>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: this.state.value / 5+"%"}}>{this.state.value / 5 + "%"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default UserDashboard
