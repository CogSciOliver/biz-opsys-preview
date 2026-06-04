type HeroStatsProps = {
	stats: Array<{
		label: string;
		value: string;
	}>;
};

export function HeroStats({ stats }: HeroStatsProps) {
	return (
		<div className="stat-stack">
			{stats.map((stat) => (
				<div className="stat-card" key={stat.label}>
					<strong>{stat.value}</strong>
					<span>{stat.label}</span>
				</div>
			))}
		</div>
	);
}
