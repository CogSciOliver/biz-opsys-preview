type MetricCardProps = {
	label: string;
	value: string;
	trend?: string;
};

export function MetricCard({ label, value, trend }: MetricCardProps) {
	return (
		<section className="genesis-card">
			<p className="card-kicker">{label}</p>
			<h2>{value}</h2>
			{trend ? <p>{trend}</p> : null}
		</section>
	);
}
