import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../../components/AppShell";
import { ClassScheduleList } from "../../components/ClassScheduleList";
import { DashboardCard } from "../../components/DashboardCard";
import { TrialLeadCard } from "../../components/TrialLeadCard";
import { demoClasses, demoTrialLeads } from "../../data/demoBusiness";

export const Route = createFileRoute("/website/join")({
	component: JoinPage,
});

function JoinPage() {
	const featuredLead = demoTrialLeads[0];

	return (
		<AppShell
			variant="public"
			eyebrow="Consultation request"
			title="Start with a body goals consultation"
			description="Preview the guided request flow Raw Body could use to turn public interest into organized service-fit conversations."
		>
			<div className="grid gap-4 md:grid-cols-2">
				<DashboardCard
					eyebrow="Static form preview"
					title="Consultation request"
				>
					<div className="fake-form">
						<div className="fake-field">
							<span className="fake-label">Name</span>
							<div>Client name</div>
						</div>
						<div className="fake-field">
							<span className="fake-label">Service interest</span>
							<div>
								Lymphatic Sculpting, Body Sculpting, Massage, or Facials
							</div>
						</div>
						<div className="fake-field">
							<span className="fake-label">Best contact</span>
							<div>Phone, text, Zoom, or email</div>
						</div>
						<div className="fake-field">
							<span className="fake-label">Preferred care window</span>
							<div>Choose from available consultation and service windows</div>
						</div>
					</div>
				</DashboardCard>

				<DashboardCard eyebrow="Lead preview" title="What admin would see">
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

			<div className="mt-4">
				<DashboardCard
					eyebrow="Available care windows"
					title="Consultation-ready schedule"
					footer={
						<Link to="/website/book" className="button-primary">
							Continue to booking
						</Link>
					}
				>
					<ClassScheduleList classes={demoClasses.slice(0, 3)} />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
