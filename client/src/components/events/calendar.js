import '../../style/test.css'
import React from "react";
import dateFns from "date-fns";
var eoLocale = require('date-fns/locale/fr')


class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    locale: eoLocale,

    datesEvent: ['1' ,'4' ,'5'],

  };

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="headercal rowcal flex-middle">
        <div className="colcal colcal-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="colcal colcal-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>

        </div>
        <div className="colcal colcal-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = []

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="colcal colcal-center" key={i}>

          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      )
    }

    return <div className="days rowcal">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate, datesEvent } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`colcal cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
              <span className="number">{formattedDate}</span>

              {(datesEvent.includes(formattedDate) && dateFns.isSameMonth(day, monthStart))
              ?
              <div className="eventlist">
                <p>2 événements prévu</p>
              </div>
              : null
            }
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="rowcal" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (

      <div className="calendar">
        {window.__localeId__ = 'fr'}
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;
