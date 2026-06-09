import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { ClassScheduleList } from "../components/ClassScheduleList";
import { DashboardCard } from "../components/DashboardCard";
import { TrialLeadCard } from "../components/TrialLeadCard";
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
			title="Book your first class"
			description="Without calling the front desk, preview the kind of guided trial flow Heritage could use to turn website visitors into scheduled intro students."
		>
			<div className="grid">
				<DashboardCard eyebrow="Static form preview" title="Trial request">
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
				</DashboardCard>

				<DashboardCard eyebrow="Lead preview" title="What staff would see">
					<ul className="list">
						<TrialLeadCard lead={featuredLead} />
						<li>
							<div>
								<strong>Next step</strong>
								<br />
								<span>{featuredLead.nextStep}</span>
							</div>
						</li>
					</ul>
				</DashboardCard>
			</div>

			<div style={{ marginTop: "1rem" }}>
				<DashboardCard
					eyebrow="Available trial-friendly classes"
					title="Intro-ready schedule"
				>
					<ClassScheduleList classes={demoClasses.slice(0, 3)} />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
