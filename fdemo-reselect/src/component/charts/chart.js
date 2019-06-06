import React from 'react'
import { Chart } from "react-charts";

class ChartDemo extends React.Component {

    render() {
        const data = {
            axis: [1, 2, 3],
            lines: [
                { data: [{ value: 10 }, { value: 10 }, { value: 10 }] },
                { data: [{ value: 10 }, { value: 10 }, { value: 10 }] },
                { data: [{ value: 10 }, { value: 10 }, { value: 10 }] }
            ]
        };

        return(
            <div
                style={{
                    width: "400px",
                    height: "300px"
                }}
            >
                <Chart
                    data={[
                        {
                            label: "Series 1",
                            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                        },
                        {
                            label: "Series 2",
                            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
                        }
                    ]}
                    series={{
                        showPoints: true,
                    }}
                    axes={[
                        { primary: true, type: "linear", position: "bottom" },
                        { type: "linear", position: "left" }
                    ]}
                    tooltip
                />
            </div>
        )
    }
}
export default ChartDemo
