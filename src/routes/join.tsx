import { createFileRoute } from "@tanstack/react-router"
import { ClassScheduleCard } from "../components/ClassScheduleCard"
import { DashboardCard } from "../components/DashboardCard"
import { TrialLeadCard } from "../components/TrialLeadCard"
import { AppShell } from "../components/AppShell"
import { demoClasses, demoTrialLeads } from "../data/demoBusiness"

export const Route = createFileRoute("/join")({
	component: JoinPage,
})

function JoinPage() {
	const featuredLead = demoTrialLeads[0]

	return (
		<AppShell
			variant="public"
			eyebrow="Trial class signup"
			title="Book a first class without calling the front desk."
			description="This page previews the kind of guided trial flow Genesis could use to turn website visitors into scheduled intro students."
		>
			<div className="genesis-grid">
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
					<ul className="genesis-list">
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
					<ul className="genesis-list">
						{demoClasses.slice(0, 3).map((classItem) => (
							<ClassScheduleCard classItem={classItem} key={classItem.id} />
						))}
					</ul>
				</DashboardCard>
			</div>
		</AppShell>
	)
}
