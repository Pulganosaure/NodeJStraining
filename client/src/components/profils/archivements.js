import React, {Fragment} from 'react';
import axios from 'axios'


class ProfileArchivements extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      archivements: [],
    }
    this.archivementCard = this.archivementCard.bind(this)
  }
  async componentDidMount() {
    const data = await axios.get("api/archivements")
    this.setState({
      archivements: data.data,
    })
  }

  archivementCard(archivement)
  {
    return (
      <div className="card" style={{width: "12rem", height: "100%"}}>
        <img className="card-img-top"  style={{height: "150px"}} src={archivement.icon} alt="icon not found"></img>
        <div className="card-body">
          <h5 className="card-title">{archivement.title}</h5>
          <p className="card-text">{archivement.description}</p>
        </div>
      </div>
    )
  }
  render()
  {
    return (
      <Fragment>
        <div className="row mt-5 justify-content-md-center">
          <h1 className="">Archivements :</h1>
        </div>
        <div className="row mt-4 justify-content-md-center">
          {
            this.state.archivements.map((archivement, index) =>

            <div key={index} className="col mb-4">
              {this.archivementCard(archivement)}
            </div>
          )
        }
      </div>
    </Fragment>
  )}
}
export default ProfileArchivements
