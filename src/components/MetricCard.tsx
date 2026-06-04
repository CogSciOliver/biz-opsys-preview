type MetricCardProps = {
	label: string;
	value: string;
	trend?: string;
};

export function MetricCard({ label, value, trend }: MetricCardProps) {
	return (
		<section className="card">
			<p className="card-kicker">{label}</p>
			<h2 className="card-title">{value}</h2>
			{trend ? <p>{trend}</p> : null}
		</section>
	);
}
