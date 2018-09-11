import React from 'react';
import '../Bootstrap/bootstrap.min.css'


class NotifMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: [],
      display: false,
    }
  }

  async componentDidMount()
  {
    this.setState({
      datas: [
        {
          message: "Pulgan a publier un nouveau sondage",
          isImportant: false,
          url: null,
        },
        {
          message: "un nouveau événement a était publié.",
          isImportant: true,
          url: null,
        }]
    })
  }

  render() {
    return (

        <div className="position">
          <button onClick={() => this.setState({display: !this.state.display })}>
            <p>N</p>
          </button>
          {this.state.display
            ? <div className="position-absolute border mt-3 " style={{width: "18%", color: "black", "zIndex": "1000"}}>
              {this.state.datas.map((entry, key) =>
                <div  key={key}>
                  <button type="button"
                    className="list-group-item list-group-item-action p-1">
                    { entry.isImportant
                      ? <h6 className="text-danger">!</h6>
                      : null
                    }
                    <p>{entry.message}</p>
                  </button>
              </div>
              )}
            </div>
            : null}
      </div>
    )
  }
}

export default NotifMenu
