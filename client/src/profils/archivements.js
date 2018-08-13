import React from 'react';
import * as archivementsAPI from '../API/archivements'


class ProfileArchivements extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      archivements: [],
    }
    this.archivementCard = this.archivementCard.bind(this)
  }
  componentDidMount() {
    archivementsAPI.getArchivements()
    .then(data => {
      data.push({
        title: "more comming soon",
        description: "and more trophy gonna be added soon...",
        unlock: false,
        rank: "none",
        icon: "url/picture.jpg",
        value: "0",
      })
      this.setState({
        archivements: data,
      })
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
      <div>
        <div className="row justify-content-md-center">
          <h1 className="">Archivements :</h1>
        </div>
        <div className="row mt-4 justify-content-md-center">
          {
            this.state.archivements.map(archivement =>
              {
                return <div className="col mb-4">
                  {this.archivementCard(archivement)}
                </div>
              })
            }
          </div>
        </div>)
      }
    }

    export default ProfileArchivements
