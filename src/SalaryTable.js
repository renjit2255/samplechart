import React, { useEffect, useState } from "react";


class SalaryTable extends React.Component {
    constructor(props) {
        super(props);
    }
    updateEmployee = (event) => {
        console.log(event.target.value);
       // this.props.updateData();
    }
    render() {
        const { data } = this.props;
        return (
            <div>
                <table style={{ width: "50%" }}>
                    <thead>
                        <tr key="head">
                            <th>Name</th>
                            <th>Salary</th>
                        </tr>
                        {
                            data.map((emp, i) => {
                                return (
                                    <tr key={emp.id}>
                                        <td>{emp.name}</td>
                                        <td>{emp.salary}</td>
                                    </tr>
                                );
                            })
                        }
                    </thead>
                </table>
            </div>
        );
    }
}

export default SalaryTable;