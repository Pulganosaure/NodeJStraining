import React, {Fragment} from 'react';


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

        <Fragment>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bell_font_awesome.svg/768px-Bell_font_awesome.svg.png" alt="N" style={{width: "2%"}}
            onClick={() => this.setState({display: !this.state.display })}
            >

          </img>

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
      </Fragment>
    )
  }
}

export default NotifMenu
