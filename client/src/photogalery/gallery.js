import React from 'react';
import '../Bootstrap/bootstrap.min.css'
import * as PictureAPI from '../API/pictures.js'

class PhotoViewer extends React.Component {
  render()
  {
    return (
    <div className="position-absolute">

    </div>

  )}
}
class PhotoCard extends React.Component {
  render()
  {
    return (
      <div className="card mx-0" style={{width: "16rem", height: "100%"}}>
        <img className="card-img-top" src={this.props.data.url} alt="incorrect url"></img>
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
        <PhotoViewer/>
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
      const data = await PictureAPI.getPictures(newProps.page)
      this.setState({
        datas: data,
      })
      console.log("reloaded : " + this.props.page)
      console.log(data)
    }

    render() {
      return (
        <div className="row justify-content-center mt-5">
          <h1>{this.props.page}</h1>
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
