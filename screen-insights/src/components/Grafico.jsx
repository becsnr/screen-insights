import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

import { formatMinutes } from "../utils/formatMinutes";

function Grafico({ data, nameKey }) {
    const COLORS = [
        "#7E3AF2",
        "#6ED4D4",
        "#60A5FA",
        "#F59E0B",
        "#FB7185"
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie 
                    data={data}
                    dataKey="minutes"
                    nameKey={nameKey}
                    innerRadius="35%"
                    outerRadius="80%"
                >
                    {data.map((entry, index) => (
                        <Cell 
                            key={index}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>

                <Tooltip 
                    formatter={(value) => `${formatMinutes(value)}`}
                    contentStyle={{
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#eee6f8d8"
                    }}
                />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default Grafico