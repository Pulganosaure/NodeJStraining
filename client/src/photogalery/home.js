import React from 'react';
import '../Bootstrap/bootstrap.min.css'
import PhotoGalerySlideShow from './slideshow.js'
import PhotoGaleryDisplayer from './gallery.js'
import * as PictureAPI from '../API/pictures.js'


class PhotoGaleryHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: [],
      page: 1,
      maxpage: 1,
    }
    this.pagenav = this.pagenav.bind(this)
  }

  pagenav(value)
  {
    switch (value) {
      case 0:
        this.setState({
          page: 1
        })
      return true
      case 1:
        if(this.state.page - 1 > 0)
          this.setState({
            page: this.state.page - 1
          })
        return true
      case 2:
        if(this.state.page + 1 <= this.state.maxpage)
          this.setState({
            page: this.state.page + 1
          })
        return true
      case 3:
        this.setState({
          page: this.state.maxpage
        })
        return true
      default:
        return false
    }

  }

  async componentDidMount()
  {
    const data = await PictureAPI.getPicturesCount()
    this.setState({
      maxpage: Math.ceil(data.total / 20)
    })
  }

  render() {
    return (
      <div className="mt-5">
        <div className="row">
          <div className="col">
            <PhotoGalerySlideShow/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <PhotoGaleryDisplayer page={this.state.page}/>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="btn-group border" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary"
              onClick={() => this.pagenav(0)}>
              {"<<"}
            </button>
            <button type="button" className="btn btn-secondary"
              onClick={() => this.pagenav(1)}>
              {"<"}
            </button>
            <button type="button" className="btn btn btn-light">{this.state.page}</button>
            <button type="button" className="btn btn-secondary"
              onClick={() => this.pagenav(2)}>
              {">"}
            </button>
            <button type="button" className="btn btn-secondary"
              onClick={() => this.pagenav(3)}>
              {">>"}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoGaleryHome
