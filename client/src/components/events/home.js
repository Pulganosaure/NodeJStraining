import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import Cal from './cal'
class EventHome extends React.Component {
  state = {
  }

  render()
  {
    return (
      <Fragment>
        {this.props.profil.Permissions.event_manager
          ? <div>
              <button className="ButtonCustom">Add Event</button>
            </div>
          : null
        }
        <Cal/>
    </Fragment>)
  }
}


const mapStateToProps = (state) => ({
  profil: state.profil,
  auth: state.auth,
  gw2: state.gw2,
})
export default connect(mapStateToProps)(EventHome)
