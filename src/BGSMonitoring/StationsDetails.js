import React from 'react';

class StationsDetails extends React.Component {

  constructor(props){
    super(props)

    this.station_card = this.station_card.bind(this)
    this.check_service = this.check_service.bind(this)
  }

  station_card(station)
  {
    console.log("station_card")
    return(
    <div className="card mb-4" style="width: 22rem;">
      <div className="row">
        <div className="col">
          <img className="card-img-top" src={"Stations_Icons/" + station.type} alt="Card image cap"></img>
        </div>
        <div className="col">
          <h5 className="card-title"> {station.name}</h5>
          <h6 className="card-subtitle mb-2 border-bottom text-muted"> {station.controllingFaction.name}</h6>
          <h6 className="card-subtitle my-1">{station.allegiance}</h6>
          <h6 className="card-subtitle my-1">{station.government}</h6>
          <h6 className="card-subtitle my-1">{station.economy}</h6>
          <h6 className="card-subtitle mt-2"> {station.distanceToArrival.toFixed(2)}</h6>
        </div>
      </div>
      <div className="card-body border-top">
        {this.check_service(station.otherServices, station.haveMarket, station.haveOutfitting, station.haveShipyard)}
      </div>
    </div>)
  }
  check_service(station_services, have_market, have_outfitting, have_shipyard)
  {
    var check_services = ("Restock", "Refuel", "Repair", "Black Market", "Interstellar Factors Contact", "Material Trader")
    if(have_market)
    return <p class="my-1 text-success">Market</p>
    else
    return <p class="my-1 text-danger ">Market</p>
    if(have_outfitting)
    return <p class="my-1 text-success">Outfitting</p>
    else
    return <p class="my-1 text-danger ">Outfitting</p>
    if(have_shipyard)
    return <p class="my-1 text-success">Shipyard</p>
    else
    return <p class="my-1 text-danger ">Shipyard</p>
  }



  render()
  {
    console.log('stationsdetails.js')
    return(
      this.props.stationsDetails.map(station =>
        this.station_card(station)
    )
  )
  }
}
export default StationsDetails;
