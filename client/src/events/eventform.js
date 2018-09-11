import React from 'react'

class EventForm extends React.Component {

  render()
  {
    return (
      <div className="row border my-4">
        <div className="col">
          <div className="row justify-content-md-center border-bottom">
            <h3>{this.props.EventDetails.name}</h3>
          </div>
          <div className="row justify-content-md-center" style={{height:"150px"}}>
            <div className="col-3 border-right">
            </div>
            <div className="col-6">
              <p>{this.props.EventDetails.desc}</p>
            </div>
            <div className="col-3 border-left">
              <h1>{this.props.EventDetails.date}</h1>
            </div>
          </div>
        </div>

      </div>)
    }
  }

  export default EventForm
