import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../../components/AppShell";
import { ClassScheduleList } from "../../components/ClassScheduleList";
import { DashboardCard } from "../../components/DashboardCard";
import { demoClasses } from "../../data/demoBusiness";

export const Route = createFileRoute("/client/schedule")({
	component: ClientSchedulePage,
});

function ClientSchedulePage() {
	return (
		<AppShell
			variant="client"
			eyebrow="Client portal"
			title="My Appointments"
			description="A client schedule view for booked services, recommended sessions, and care planning."
		>
			<DashboardCard
				eyebrow="Care plan"
				title="Recommended this week"
				description="This preview gives clients one place to understand their consultation, appointments, and next care steps."
				footer={
					<Link to="/website/book" className="button-primary">
						Book care
					</Link>
				}
			>
				<ClassScheduleList classes={demoClasses} />
			</DashboardCard>
		</AppShell>
	);
}
