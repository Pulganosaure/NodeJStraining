import React from 'react'
import * as EDSMAPI from '../../API/EDSM.js'

class ExpansionCardResult extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
    this.systemisFull = this.systemisFull.bind(this)
    this.systemisEmpty = this.systemisEmpty.bind(this)
  }

  //check si le système dispose de factions
  systemisEmpty()
  {
    const data = EDSMAPI.factionsData(this.props.system.name)
    this.setState({
      data: data
    })
    //on renvoi si l'attribut factions est vide
    return (this.state.data.factions === '')
  }
  //check si le système dispose de 7 factions
  systemisFull()
  {
    var activefaction = 0
    this.state.data.factions.map(faction => {
       if(faction.influence !== 0)
        activefaction++
        return 0
      })
    return (activefaction === 7)
  }


  render(){
    return(
      <div>
        {
          (this.systemisEmpty()) //si le système est vide :
          ? <h1>{this.props.system.name + " is empty"}</h1>
          : (this.systemisFull()) //sinon si il est plein :
            ? <h1>{this.props.system.name + " is full"}</h1>
            : <h1>{this.props.system.name + " can receive your faction"}</h1>
        }
      </div>
    )
  }
}
 export default ExpansionCardResult
