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
            </PieChart>
        </ResponsiveContainer>
    )
}

export default Grafico