import React from 'react'

class StationsDetails extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      service_list: ['Black Market', 'Restock', 'Refuel', 'Repair', 'Contacts', 'Universal Cartographics', 'Missions', 'Crew Lounge', 'Tuning', 'Search and Rescue', 'Material Trader']
    }

    this.station_card = this.station_card.bind(this)
    this.check_service = this.check_service.bind(this)
  }

  station_card(station) {
    return (
      <div className="card mb-4" style={{width: '22rem'}}>
        <div className="row">
          <div className="col">
            <img class="card-img-top" src="Station_Icons/Asteroid base.png" alt="file not found"></img>
          </div>
          <div className="col">
            <h5 className="card-title"> {station.name}</h5>
            <h6 className="card-subtitle mb-2 border-bottom text-muted"> {
              (typeof station.controllingFaction !== "undefined")
              ? station.controllingFaction.name
              : "None"
            }</h6>
            <h6 className="card-subtitle my-1">{station.allegiance}</h6>
            <h6 className="card-subtitle my-1">{station.government}</h6>
            <h6 className="card-subtitle my-1">{station.economy}</h6>
            <h6 className="card-subtitle mt-2"> {station.distanceToArrival.toFixed(2) + " ls"}</h6>
          </div>
        </div>
        <div className="card-body border-top">
          {this.check_service(station.haveMarket, "Market")}
          {this.check_service(station.haveOutfitting, "Outfitting")}
          {this.check_service(station.haveShipyard, "Shipyard")}
          { this.state.service_list.map(service => {
              if (station.otherServices.includes(service)) {
                return <p className="my-1 text-success" >{service}</p>
              } else {
                return <p className="my-1 text-danger" >{service}</p>
              }
            })
          }

        </div>
      </div>
    )
  }


//return the text for the service who are boolean
  check_service(service, name) {
    if(service)
      return <p className="text-success my-1">{name}</p>
    return <p className="text-danger my-1">{name}</p>
  }

  render() {
    return(
      this.station_card(this.props.data)
    )
  }
}

export default StationsDetails;
