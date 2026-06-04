import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { demoClasses, demoMembers, demoTrialLeads } from "../data/demoBusiness";

export const Route = createFileRoute("/staff/check-in")({
	component: StaffCheckInPage,
});

function StaffCheckInPage() {
	const activeClass = demoClasses[1];

	return (
		<AppShell
			variant="staff"
			eyebrow="Staff kiosk"
			title="Check students in fast."
			description="A front-desk and mat-side preview for attendance, trial visitors, member status, and class capacity."
		>
			<div className="genesis-grid">
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
							<strong>14</strong>
							<span>Students checked in</span>
						</div>
					</div>
				</section>

				<section className="genesis-card">
					<p className="card-kicker">Member lookup</p>
					<h2>Recent check-ins</h2>
					<ul className="genesis-list">
						{demoMembers.map((member) => (
							<li key={member.id}>
								<div>
									<strong>{member.name}</strong>
									<br />
									<span>
										{member.plan} • {member.belt}
									</span>
								</div>
								<span className="status-pill">{member.status}</span>
							</li>
						))}
					</ul>
				</section>
			</div>

			<section className="genesis-card" style={{ marginTop: "1rem" }}>
				<p className="card-kicker">Trial visitors</p>
				<h2>People staff should greet intentionally</h2>
				<ul className="genesis-list">
					{demoTrialLeads.map((lead) => (
						<li key={lead.id}>
							<div>
								<strong>{lead.name}</strong>
								<br />
								<span>{lead.nextStep}</span>
							</div>
							<span>{lead.status}</span>
						</li>
					))}
				</ul>
			</section>
		</AppShell>
	);
}
