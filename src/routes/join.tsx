import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { demoClasses, demoTrialLeads } from "../data/demoBusiness";

export const Route = createFileRoute("/join")({
	component: JoinPage,
});

function JoinPage() {
	const featuredLead = demoTrialLeads[0];

	return (
		<AppShell
			variant="public"
			eyebrow="Trial class signup"
			title="Book a first class without calling the front desk."
			description="This page previews the kind of guided trial flow Genesis could use to turn website visitors into scheduled intro students."
		>
			<div className="genesis-grid">
				<section className="genesis-card">
					<p className="card-kicker">Static form preview</p>
					<h2>Trial request</h2>

					<div className="fake-form">
						<div className="fake-field">
							<span className="fake-label">Name</span>
							<div>Parent or student name</div>
						</div>
						<div className="fake-field">
							<span className="fake-label">Interested class</span>
							<div>
								Family Jiu Jitsu, Kids Foundations, or Adult Fundamentals
							</div>
						</div>
						<div className="fake-field">
							<span className="fake-label">Best contact</span>
							<div>Phone or email</div>
						</div>
						<div className="fake-field">
							<span className="fake-label">Preferred first visit</span>
							<div>Choose from available intro-friendly classes</div>
						</div>
					</div>
				</section>

				<section className="genesis-card">
					<p className="card-kicker">Lead preview</p>
					<h2>What staff would see</h2>
					<ul className="genesis-list">
						<li>
							<div>
								<strong>{featuredLead.name}</strong>
								<br />
								<span>{featuredLead.interest}</span>
							</div>
							<span className="status-pill">{featuredLead.status}</span>
						</li>
						<li>
							<div>
								<strong>Next step</strong>
								<br />
								<span>{featuredLead.nextStep}</span>
							</div>
						</li>
					</ul>
				</section>
			</div>

			<section className="genesis-card" style={{ marginTop: "1rem" }}>
				<p className="card-kicker">Available trial-friendly classes</p>
				<ul className="genesis-list">
					{demoClasses.slice(0, 3).map((classItem) => (
						<li key={classItem.id}>
							<div>
								<strong>{classItem.name}</strong>
								<br />
								<span>
									{classItem.audience} • {classItem.days} • {classItem.time}
								</span>
							</div>
							<span>{classItem.spots} spots</span>
						</li>
					))}
				</ul>
			</section>
		</AppShell>
	);
}
