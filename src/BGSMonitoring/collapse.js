import React from 'react';

class Collapse extends React.Component {


  render(props)
  {
    const {ownerName, fData} = this.props
    if(ownerName == fData.name) {
      var star = "\u2605"
    }
    else {
      var star = ""
    }
var influenceValues = Object.values(fData.influenceHistory).map(Number).slice(-2)
    return (
      <div>
        <h1>{this.props.ownerName.name}</h1>
        <div className="faction_data_spoiler text-primary">
          <p className="mb-1 mt-0">
            <button className="btn btn-primary border-secondary text-primary bg-light btn-block" type="button" data-toggle="collapse" data-target="#faction_informations1" aria-expanded="false" aria-controls="faction_informations">
              <div className="row justify-content-between px-3">
                <h5 className="text-primary">
                  {star + fData.name + " " +(fData.influence * 100).toFixed(2)}
                </h5>
                <h5 className="text-primary">
                  { ((influenceValues[1] - influenceValues[0]) * 10000).toFixed(2)}
                </h5>
              </div>
            </button>
          </p>
          <div className="collapse show" id="faction_informations1">
            <div className="card card-body mb-2">
              <div className="row">
                <div className="col">
                  <div className="row">
                    <h6> Etat : {fData.state}
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
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Collapse;
