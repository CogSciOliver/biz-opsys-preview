import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../../../components/AppShell";
import { ClassScheduleList } from "../../../components/ClassScheduleList";
import { DashboardCard } from "../../../components/DashboardCard";
import { demoClasses } from "../../../data/demoBusiness";

export const Route = createFileRoute("/admin/create/create/schedule")({
	component: CreateSchedulePage,
});

function CreateSchedulePage() {
	return (
		<AppShell
			variant="admin"
			eyebrow="Create workflow"
			title="Create service schedule"
			description="A future workflow for setting appointment windows by service, location, care provider, popup date, and consultation type."
		>
			<div className="grid gap-4 md:grid-cols-2">
				<DashboardCard eyebrow="Schedule draft" title="Service window">
					<div className="fake-form">
						<div className="fake-field">
							<span className="fake-label">Service type</span>
							<div>
								Consultation, body sculpting, lymphatic, massage, or facial
							</div>
						</div>
						<div className="fake-field">
							<span className="fake-label">Availability</span>
							<div>Days, times, capacity, provider, and location</div>
						</div>
						<div className="fake-field">
							<span className="fake-label">Booking rule</span>
							<div>Public, consult-first, existing clients, or waitlist</div>
						</div>
					</div>
				</DashboardCard>

				<DashboardCard eyebrow="Current windows" title="Existing schedule">
					<ClassScheduleList classes={demoClasses} />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
