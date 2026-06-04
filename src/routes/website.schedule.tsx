import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { ClassScheduleList } from "../components/ClassScheduleList";
import { DashboardCard } from "../components/DashboardCard";
import { demoClasses } from "../data/demoBusiness";

export const Route = createFileRoute("/website/schedule")({
	component: WebsiteSchedulePage,
});

function WebsiteSchedulePage() {
	return (
		<AppShell
			variant="public"
			eyebrow="Public website"
			title="Class Schedule"
			description="A clean class schedule preview for families comparing age groups, times, and trial-friendly entry points."
		>
			<DashboardCard
				eyebrow="Weekly schedule"
				title="Find the right first class"
				description="This prototype turns class data into a public schedule that can guide visitors toward a good first visit."
				footer={
					<Link to="/join" className="button-primary">
						Book a trial class
					</Link>
				}
			>
				<ClassScheduleList classes={demoClasses} />
			</DashboardCard>
		</AppShell>
	);
}
