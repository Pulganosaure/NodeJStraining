import React, {Fragment} from 'react'
import '../../style/ressources.css'

class RessourcesHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {name: "PVP", type: "folder", sticky: false, totalposts: 12, lastactivity: "michel"},
        {name: "MCM", type: "folder", sticky: false, totalposts: 11, lastactivity: "michel"},
      ],
      permissions: {RESSOURCE_MANAGER: false, RESSOURCE_CREATOR: false},
    }
  }
  render()
  {
    return (
      <Fragment>
        <table>
          <thead>
            <tr>
              <td>
                Catégories
              </td>
              <td>
                total posts:
              </td>
              <td>
                last reply :
              </td>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map((entry, key) =>
              <tr key={key} className="RessourceLine">
                <td className="informations">
                  <h6>{entry.name}</h6>
                  <p>desc</p>
                </td>
                <td>
                  <div className="totalposts">{entry.totalposts}</div>
                </td>
                <td>
                  <div className="lastactivity">{entry.lastactivity}</div>
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </Fragment>
    )
  }

}



export default RessourcesHome
