import React, {Fragment} from 'react'
import '../../style/ressources.css'

class ToolsHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render()
  {
    const tools = [ {name: "gw2Efficency", url: "https://gw2efficiency.com"},  {name: "gw2Timer", url: "https://gw2timer.com"}]

    return (
      <Fragment>
        {tools.map((tool, key) => {
          return <a href={tool.url} key={key}>{tool.name}</a>
        })}
      </Fragment>
    )
  }

}



export default ToolsHome
