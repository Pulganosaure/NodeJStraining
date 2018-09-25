import React, {Fragment} from 'react'


class MentionsRecap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render()
  {

    return (
      <Fragment>
        <h1>Last mentions :</h1>
        <p>0 new commentary</p>
        <p>3 peoples liked your photos</p>
        <p>0 private message recived</p>
      </Fragment>
    )
  }
}

export default MentionsRecap
