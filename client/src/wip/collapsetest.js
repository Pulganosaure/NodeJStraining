import React from 'react';
import { NavLink } from 'react-router-dom'
import Collapse from 'react-collapse';

class Collapsetest extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        isOpened: false
      }
  }

  render()
  {
    const {isOpened} = this.state;

    return (
      <div>
        <div className="config">
              <p className="mb-1 mt-0">
                <button className="btn btn-primary border-secondary text-primary bg-light btn-block"
                  type="button"
                  onClick={() => this.setState({isOpened: !isOpened})} >
                  <div className="row justify-content-between px-3">
                    <h5 className="text-dark">
                      not me
                    </h5>
                      10%
                  </div>
                </button>
              </p>

          </div>
          <Collapse isOpened={isOpened}>
            <div>
              <div className="faction_data_spoiler">

                <div className="collapse show" id="faction_informations1">
                  <div className="card card-body mb-2">
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <h6> Etat : none
                          </h6>
                        </div>
                        <div className="row">
                          <h6> faction de joueur : yes
                          </h6>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col ">
                            <h6>états en attente :
                              none
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
        </div>

      )
    }
  }

export default Collapsetest;
