import React from "react";
import storage from './storage';

class Calendar extends React.Component {


    createMonth = (future) => {
        var date = new Date();
        date.setMonth((date.getMonth() + future) % 12)
        const currentMonth = date.getMonth();

        let month = []
        let table = []
        let tableHead = []
        let tableBody = []

        for (let i = 0; i < 7; i++) {
            tableHead.push(<th>{storage.lang[0].days[i]}</th>)
        }
        table.push(<thead><tr>{tableHead}</tr></thead>);

        let iDate = date;

        iDate.setDate(1);

        let week = [];
        for (let i = 0; i < ((iDate.getDay() + 6) % 7); i++) {
            week.push(<td></td>);
        }

        while (iDate.getMonth() === currentMonth) {
            if (week.length === 7) {
                tableBody.push(<tr>{week}</tr>);
                week = [];
            }
            week.push(<td>{iDate.getDate()}</td>);
            iDate.setDate(iDate.getDate() + 1);
        }

        for (let i = ((iDate.getDay() + 6) % 7); i < 7; i++) {
            week.push(<td></td>);
        }
        tableBody.push(<tr>{week}</tr>);
        table.push(<tbody>{tableBody}</tbody>);

        month.push(<h4 className="center">{storage.lang[0].month[currentMonth]}</h4>);
        month.push(<table className="centered calendarTable">{table}</table>);

        return month;
    }


    render() {
        return (
            <div>
                {this.createMonth(0)}
                {this.createMonth(1)}
                {this.createMonth(2)}
            </div>

        )
    }
}

export default Calendar;