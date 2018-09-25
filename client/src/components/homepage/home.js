import React, {Fragment} from 'react'


class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render()
  {

    return (
      <Fragment>
        <div className="no-container">

          <div className="description">
            <div className="contain">
              <h1>Qui Sommes nous ? </h1>
              <p>nous sommes une faction qui blablabla...</p>
            </div>
          </div>
          <div  className="details">
            <div className="contain">
              <h1>Qui Sommes nous ? </h1>
              <p>Dans une ambiance chaleurese et patatipatata...</p>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default MainPage
