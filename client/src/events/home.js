import React, {Fragment} from 'react'
import EventCalendars from './calendars.js'
import EventForm from './eventform.js'
import Countdown from 'react-countdown-now'
import Calendar from 'react-calendar';

class EventHome extends React.Component {
  state = {
    date: new Date(),
  }

  render()
  {
    const event_list = [{name: "blabla1", desc: "blabladesc1", date:"00:00:00"}, {name: "blabla2", desc: "blabladesc2", date:"00:00:00"}]
    return (
      <Fragment>
        <div className="row">
          <div className="col-3">
            <div className="row mt-5">
              <Calendar
                onChange={this.onChange}
                value={this.state.date}
              />
            </div>
            <div className="row mt-5">
              <Countdown date={Date.now() + 1000000} />
            </div>
          </div>
          <div className="col-8 ml-3">
            <div className="row justify-content-md-center" >
              <div className="col">
                {event_list.map(event => {
                  return (
                    <EventForm EventDetails={event}/>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>)
  }
}

export default EventHome
