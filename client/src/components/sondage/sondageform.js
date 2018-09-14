import React, {Fragment} from 'react'

class SondageForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    const data = {
      multichoice: false,
      editable: false,
      tite: "title",
      desc: "desc",
      data: [ {
        text: "box 1"
      },
      {
        text: "box 2"
      },
      {
        text: "box 3"
      }
    ]
  }
  return (
    <Fragment>

    </Fragment>
  )
}
}

export default SondageForm
