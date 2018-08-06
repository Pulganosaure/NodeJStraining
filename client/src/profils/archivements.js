import React from 'react';


class ProfileArchivements extends React.Component {
  constructor(props) {
    super(props)

    this.archivementCard = this.archivementCard.bind(this)
  }

  archivementCard(archivement)
  {
    return (
      <div className="card" style={{width: "12rem", height: "100%"}}>
        <img className="card-img-top"  style={{height: "150px"}} src={archivement.icon} alt="icon not found"></img>
        <div className="card-body">
          <h5 className="card-title">{archivement.name}</h5>
          <p className="card-text">{archivement.desc}</p>
        </div>
      </div>
    )
  }
  render()
  {

    const  archivements = [
      {name: "Master",
      desc: "Get 500 Archivements points.",
      unlock: false,
      icon: "url/picture.jpg"
    },
    {
      name: "Fana des événements",
      desc: "Participate at 20 events",
      unlock: true,
      icon: "url/picture.jpg"
    },
    {
      name: "Grand fana des événements",
      desc: "Participate at 50 events",
      unlock: false,
      icon: "url/picture.jpg"

    },
    {
      name: "Grand fana des événements",
      desc: "Participate at 50 events",
      unlock: false,
      icon: "url/picture.jpg"

    },
    {
      name: "Grand fana des événements",
      desc: "Participate at 50 events",
      unlock: false,
      icon: "url/picture.jpg"

    }
  ]

  return (
    <div>
      <div className="row justify-content-md-center">
        <h1 className="">Archivements :</h1>
      </div>
      <div className="row mt-4 justify-content-md-center">
        {
          archivements.map(archivement =>
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
