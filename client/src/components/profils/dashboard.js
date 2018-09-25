import React, {Fragment} from 'react'
import ArchivementsProgress from './dashboardComponents/archivementsprogress.js'
import GW2News from './dashboardComponents/news.js'
import MentionsRecap from './dashboardComponents/mentionsrecap.js'

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
        <div className="mt-5 row justify-content-md-center">
          <h1 className="">Welcome Back {this.props.user.name} !</h1>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div className="row my-5">
              <div className="col">
                <MentionsRecap/>
              </div>
            </div>
            <div className="row my-5">
              <div className="col">
                <GW2News/>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row my-5">
              <div className="col">
                <ArchivementsProgress stats={this.props.stats}/>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default UserDashboard
