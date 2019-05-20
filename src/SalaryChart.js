import React, { useEffect, useState } from "react";
import Bar from './Bar';



class SalaryChart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <div>
                    <Bar
                        data={this.props.data}
                        width={400}
                        height={200}
                        top={20}
                        bottom={30}
                        left={30}
                        right={0}
                    />
                </div>
            </div>
        );
    }
}
export default SalaryChart;