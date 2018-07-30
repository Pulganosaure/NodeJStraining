import React from 'react'



class StationsDetails extends React.Component {

  constructor(props){
    super(props)

    this.station_card = this.station_card.bind(this)
    this.check_service = this.check_service.bind(this)
    this.search_value = this.search_value.bind(this)
  }

  station_card(station)
  {
    const service_list = ['Black Market', 'Restock', 'Refuel', 'Repair', 'Contacts', 'Universal Cartographics', 'Missions', 'Crew Lounge', 'Tuning', 'Search and Rescue', 'Material Trader']
    return(
      <div className="card mb-4" style={{width: '22rem'}}>
        <div className="row">
          <div className="col">
            <img class="card-img-top" src={"Stations_Icons/" +station.type} alt="Card image cap"></img>
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
          {this.check_service(station.haveMarket, "Market")}
          {this.check_service(station.haveOutfitting, "Outfitting")}
          {this.check_service(station.haveShipyard, "Shipyard")}
          {service_list.map(service => {
            console.log(this.search_value(service, station.otherServices))
              if(this.search_value(service, station.otherServices) == true )
                return <p className="my-1 text-success" >{service}</p>
              return <p className="my-1 text-danger" >{service}</p>
            }
            )}

        </div>
      </div>)
    }

    search_value(service_to_check, service_list)
    {
      service_list.map(service => {
        if(service_to_check == service) {
          return service
        }
        })
      return false
    }

    check_service(service, name)
    {
      if(service)
      return (<p className="text-success my-1">{name}</p>)
      return (<p className="text-danger my-1">{name}</p>)

    }


//bonjour
    render()
    {
      return(
        this.station_card(this.props.data)
      )
    }
  }
  export default StationsDetails;
