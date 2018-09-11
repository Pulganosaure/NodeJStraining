import React from 'react';
import Collapse from 'react-collapse';

class BGSCollapse extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isOpened: false
    }

    this.OwnerSystem = this.OwnerSystem.bind(this)
    this.variation_icon_renderer = this.variation_icon_renderer.bind(this)
    this.print_color_state = this.print_color_state.bind(this)
  }

  print_color_state(statename)
  {
    switch(statename)
    {
      case "Expansion":
      return <p className="text-success">{statename}</p>
      case "Boom":
      return <p className="text-success">{statename}</p>
      case "Lockdown":
      return <p className="text-danger">{statename}</p>
      case "Civil unrest":
      return <p className="text-danger">{statename}</p>
      case "War":
      return <p className="text-warning">{statename}</p>
      case "Civil war":
      return <p className="text-warning">{statename}</p>
      default:
      return <p className="text-dark">{statename}</p>
    }
  }



  OwnerSystem()
  {
    if(this.props.ownerName === this.props.fData.name)
    return "\u2605 "
    return " "
  }

  variation_icon_renderer(value)
  {
    if(value > 0)
    return (<h5 className="text-success">
      {value + "% \u25B2"}
    </h5>)
    else if(value < 0)
    return (<h5 className="text-danger">
      {value + "% \u25BC"}
    </h5>)
    else
    return  <h5 className="text-dark">
      {value + "% -"}
    </h5>
  }

  render()
  {
    const {fData} = this.props
    const {isOpened} = this.state


    var influenceValues = Object.values(fData.influenceHistory).map(Number).slice(-2)
    return (
      <div>
        <div className="CollapseHeader">
          <h1>{this.props.ownerName.name}</h1>
          <p className="mb-1 mt-0">
            <button className="btn btn-primary border-secondary text-primary bg-light btn-block"
              type="button"
              onClick={() => this.setState({isOpened: !isOpened})}>
              <div className="row justify-content-between px-3">
                <h5 className="text-dark">
                  {this.OwnerSystem() + fData.name + " " +(fData.influence * 100).toFixed(2)+ "%"}
                </h5>
                {this.variation_icon_renderer( ((influenceValues[1] - influenceValues[0]) * 100).toFixed(2))}
              </div>
            </button>
          </p>
        </div>
        <div className="CollapseCore">
        <Collapse  isOpened={isOpened}>
          <div className="collapse show" id="faction_informations1">
            <div className="card card-body mb-2">
              <div className="row">
                <div className="col">
                  <div className="row">
                    <h6> Etat : {this.print_color_state(fData.state)}
                    </h6>
                  </div>
                  <div className="row">
                    <h6> faction de joueur : {fData.isPlayer ? "oui" : "non"}
                    </h6>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col ">
                      <h6>états en attente :
                        { fData.pendingStates.map(state => {
                          return this.print_color_state(state.state)
                        })}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </div>

    </div>
  )
}
}
export default BGSCollapse;
