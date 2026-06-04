type CheckInKioskProps = {
	activeClass: {
		name: string;
		audience: string;
		time: string;
		level: string;
		spots: number;
	};
	checkedInCount: number;
};

export function CheckInKiosk({
	activeClass,
	checkedInCount,
}: CheckInKioskProps) {
	return (
		<section className="kiosk-panel">
			<p className="card-kicker">Now checking in</p>
			<h2>{activeClass.name}</h2>
			<p>
				{activeClass.audience} • {activeClass.time} • {activeClass.level}
			</p>
			<div className="stat-stack">
				<div className="stat-card">
					<strong>{activeClass.spots}</strong>
					<span>Open spots remaining</span>
				</div>
				<div className="stat-card">
					<strong>{checkedInCount}</strong>
					<span>Students checked in</span>
				</div>
			</div>
		</section>
	);
}
