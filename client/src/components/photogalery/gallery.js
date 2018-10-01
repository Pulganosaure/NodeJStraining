import React from 'react';
import axios from 'axios'
import '../../style/photodisplayer.css'
class PhotoCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pictureid: this.props.data.id,
      display: false,
      liked: false,
      like: 3,
      commentary: 4,
      commentaryData: {},
    }
    this.displayPhotocom = this.displayPhotocom.bind(this)
  }
  displayPhotocom()
  {
    this.setState({
      display: !this.state.display,
    })
  }

  componentDidMount()
  {

  }

  render()
  {
    return (
      <div className="card mx-0" style={{width: "16rem", height: "100%"}}>
        <img className="card-img-top" src={this.props.data.url} alt="incorrect url" onClick={() => this.displayPhotocom()}></img>
        {this.state.display
          ? <div className="PhotoDisplayer">
            <div className="flexline">
              <div className="col-9 p-0">
                <img className="card-img-top" src={this.props.data.url} alt="incorrect url"></img>
              </div>
              <div className="col-3 p-0 chatbox">
                <div className="closeicon">
                  <img className="card-img-top" src="http://blueseadivers.com/wp-content/plugins/itro-popup/images/close-icon-white-border.png"
                   alt="incorrect url"
                   onClick={() => this.setState({ display: !this.state.display})}></img>

                </div>
                <div className="descbox border-bottom">
                  <h5>{this.props.data.title}</h5>
                  <p>{this.props.data.description}</p>
                </div>
                <div className="iconslist">
                  <div className="icondiv">
                    { this.state.liked
                    ? <img className="icon" src="https://image.freepik.com/free-icon/like-heart-symbol-of-ios-7-interface_318-36651.jpg" alt=" rer"></img>
                    : <img className="icon" src="https://media.discordapp.net/attachments/422173451474960386/491943578122321922/redheart.jpg" alt=" rer"></img>
                    }

                    <label>{this.state.like + " likes"}</label>

                  </div>
                  <div className="icondiv ">
                    <img className="icon" src="https://image.flaticon.com/icons/svg/54/54761.svg" alt=" rer"></img>
                    <label>{this.state.commentary + " coms"}</label>

                  </div>
                </div>
                <div className="coms">

                </div>
              </div>
            </div>

          </div>
          : null
        }
        <div className="card-body">
          <div className="row">
          <div className="col-10">
            <h4>{this.props.data.title}</h4>
            <p className="card-text">{this.props.data.description}</p>
          </div>
            <div className="col-1 px-0 ">
              <div className="row">
                <h6>111</h6>
              </div>
              <div className="row">
                <h6>+999</h6>
              </div>
              <div className="row">
                <h6>1</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
  )}
}




  class PhotoGaleryDisplayer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        datas: [],
        page: 0,
      }
    }

    async componentWillReceiveProps(newProps) {
      const data = await axios.get(`http://192.168.1.26:5000/api/pictures/${newProps.page}`)
      this.setState({
        datas: data.data,
      })
    }

    render() {
      return (
        <div className="row justify-content-center mt-5">
          {this.state.datas.map((picture, key) =>
            <div  key={key} className="mx-2 mb-4">
              <PhotoCard data={picture}/>
            </div>
          )}
        </div>
      )
    }
  }

  export default PhotoGaleryDisplayer
