import React, {Fragment} from 'react'
import '../../style/calendar.css'

var moment = require('moment')


class Cal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      month: new Date().getMonth(),
      calendar: []
    }
    this.renderHeader = this.renderHeader.bind(this)
    this.renderMonth = this.renderMonth.bind(this)
    this.renderCell = this.renderCell.bind(this)
  }


  renderHeader()
  {
    let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    return (
      <tr>
        { days.map( (day, key) =>
          <td key={key} className="CalendarCell">

            <span>{day}</span>

          </td>)
        }
      </tr>
    )
  }
  renderMonth()
  {
    return (
      <div className="CalendarMonthHeader">
        <button className="brah"
          //onClick={() => this.state.month === 0 ?this.setState({month: 12}) : this.setState({month: this.state.month-1})}
          onClick={() => this.setState({month: this.state.month-1})}
          >
            Reduce
          </button>
          <h1 className="brah">{moment().month(this.state.month).format('MMMM YYYY').toString()}</h1>
          <button className="brah"
            onClick={() =>  this.setState({month: this.state.month+1})}
            //onClick={() => this.state.month === 12 ?this.setState({month: 0}) : this.setState({month: this.state.month+1})}
            >
              Augment
            </button>
          </div>
        )
      }

      renderCell()
      {
        let startWeek = moment().startOf('month').year(2019).month(this.state.month).isoWeek();
        let endWeek = moment().endOf('month').year(2019).month(this.state.month).isoWeek();
        if(endWeek < startWeek)
          endWeek = startWeek+5

        let calendar = []
        for(var week = startWeek; week <= endWeek;week++){
          calendar.push({
            week:week,
            days: Array(7).fill(0).map((n, i) => moment().isoWeek(week).startOf('isoweek').add(n + i , 'day'))
          })


        }
        return (
          calendar.map((week, key) => {
            return (
              <tr key={key}>
                {
                  week.days.map((day, key) => {
                    console.log(this.state.month + ' | ' + day.month())
                    console.log(day.year())
                    return (
                      day.month() === (this.state.month % 12)

                      ? <td key={key} className="CalendarCell">
                          <span>{day.date()}</span>
                        </td>
                      : <td key={key} className="CalendarCell disabled">
                          <span>{day.date()}</span>
                        </td>
                    )})
                  }
                </tr>
              )}))
            }

            render()
            {

              return (
                <Fragment>

                  {this.renderMonth()}
                  <table>
                    <thead>
                      {this.renderHeader()}
                    </thead>
                    <tbody>
                      {this.renderCell()}
                    </tbody>
                  </table>
                </Fragment>)
              }
            }

            export default Cal
