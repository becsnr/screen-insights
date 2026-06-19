import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

function Grafico({ data }) {
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
                    nameKey="name"
                    innerRadius={30}
                    outerRadius={60}
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => { //colocar a porcentagem dentro
                        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

                        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
                        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

                        return (
                            <text
                                x={x}
                                y={y}
                                textAnchor="middle"
                                dominantBaseline="central"
                                fill="white"
                            >
                                {`${(percent * 100).toFixed(0)}%`}
                            </text>
                        );
                    }}
                    labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell 
                            key={index}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default Grafico