import React, {Fragment} from 'react'


class ArchivementsProgress extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render()
  {

    return (
      <Fragment>
        <h1>Archivements : </h1>
        <p>fana des événements : {this.props.stats.eventParticipated}/10</p>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: (this.props.stats.eventParticipated / 10 )* 100 +"%"}}>{(this.props.stats.eventParticipated / 10) * 100 + "%"}</div>
        </div>
        <p>grand fana des évenements : {this.props.stats.eventParticipated}/20</p>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: (this.props.stats.eventParticipated / 20 )* 100 +"%"}}>{(this.props.stats.eventParticipated / 20 )* 100 + "%"}</div>
        </div>
        <p>Maitre des évenements : {this.props.stats.eventParticipated}/50</p>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: (this.props.stats.eventParticipated / 50 )* 100 +"%"}}>{(this.props.stats.eventParticipated / 50 )* 100 + "%"}</div>
        </div>
      </Fragment>
    )
  }
}

export default ArchivementsProgress
