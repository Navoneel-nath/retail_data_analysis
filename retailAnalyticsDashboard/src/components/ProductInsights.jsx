import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	PieChart,
	Pie,
	Cell,
	BarChart,
	Bar,
} from "recharts";
const topSellingProducts = [
	{ name: "Product A", revenue: 5000, volume: 200 },
	{ name: "Product B", revenue: 4200, volume: 180 },
	{ name: "Product C", revenue: 3900, volume: 160 },
];

const slowMovingProducts = [
	{ name: "Product X", stockRemaining: 50 },
	{ name: "Product Y", stockRemaining: 70 },
];

const stockLevelAlerts = [
	{ name: "Product Z", stockRemaining: 5 },
	{ name: "Product W", stockRemaining: 8 },
];

const marketBasketAnalysis = [
	{ pair: "Product A & Product B", frequency: 120 },
	{ pair: "Product C & Product D", frequency: 95 },
];

const productReturnRates = [
	{ name: "Product M", returnRate: 8 },
	{ name: "Product N", returnRate: 6 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const ProductInsights = () => {
	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">Product Insights</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="bg-white p-4 shadow-lg rounded-lg mb-6">
					<h3 className="text-lg mb-3">Top-Selling Products</h3>
					<ResponsiveContainer width="100%" height={300}>
						<BarChart data={topSellingProducts}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="revenue" fill="#8884d8" />
						</BarChart>
					</ResponsiveContainer>
				</div>

				<div className="bg-white p-4 shadow-lg rounded-lg mb-6">
					<h3 className="text-lg mb-3">Product Return Rates</h3>
					<ResponsiveContainer width="100%" height={300}>
						<PieChart>
							<Pie
								data={productReturnRates}
								dataKey="returnRate"
								nameKey="name"
								cx="50%"
								cy="50%"
								outerRadius={100}
								fill="#82ca9d"
								label
							>
								{productReturnRates.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
									/>
								))}
							</Pie>
							<Tooltip />
              <Legend />
						</PieChart>
					</ResponsiveContainer>
				</div>

				<div className="bg-white p-4 shadow-lg rounded-lg mb-6">
					<h3 className="text-lg mb-3">Slow-Moving Products</h3>
					<ResponsiveContainer width="100%" height={300}>
						<BarChart data={slowMovingProducts}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="stockRemaining" fill="#FF8042" />
						</BarChart>
					</ResponsiveContainer>
				</div>

				<div className="bg-white p-4 shadow-lg rounded-lg mb-6">
					<h3 className="text-lg mb-3">Stock Level Alerts</h3>
					<ResponsiveContainer width="100%" height={300}>
						<BarChart data={stockLevelAlerts}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="stockRemaining" fill="#FF0000" />
						</BarChart>
					</ResponsiveContainer>
				</div>

				<div className="bg-white p-4 shadow-lg rounded-lg mb-6">
					<h3 className="text-lg mb-3">Market Basket Analysis</h3>
					<ResponsiveContainer width="100%" height={300}>
						<BarChart data={marketBasketAnalysis}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="pair" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="frequency" fill="#00C49F" />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
};

export default ProductInsights;
