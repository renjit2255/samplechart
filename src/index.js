import React  from "react";
import ReactDOM from 'react-dom';
import SalaryChart from './SalaryChart';
import SalaryTable from './SalaryTable';

let initialState = {
    data: [
        {
            id: 1,
            name: "Employee 1",
            salary: 100
        }, {
            id: 2,
            name: "Employee 2",
            salary: 90
        }, {
            id: 3,
            name: "Employee 3",
            salary: 80
        }, {
            id: 4,
            name: "Employee 4",
            salary: 100
        }, {
            id: 5,
            name: "Employee 5",
            salary: 110
        },
    ]
}
class App extends React.Component {
    constructor() {
        super();
        this.updateData = this.updateData.bind(this);
    }
    state = {
        data: initialState.data
    }
    updateData() {
        console.log("Logging..");
    }
    render() {
        return (
            <div>
                <SalaryTable
                    data={this.state.data}
                    updateData={this.updateData}
                />
                <SalaryChart data={this.state.data} />
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
