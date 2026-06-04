import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { ClassScheduleList } from "../components/ClassScheduleList";
import { DashboardCard } from "../components/DashboardCard";
import { demoClasses } from "../data/demoBusiness";

export const Route = createFileRoute("/member/classes")({
	component: MemberClassesPage,
});

function MemberClassesPage() {
	return (
		<AppShell
			variant="member"
			eyebrow="Member portal"
			title="My Classes"
			description="A member schedule view for booked classes, recommended sessions, and family training planning."
		>
			<DashboardCard
				eyebrow="Class plan"
				title="Recommended this week"
				description="This preview gives members one place to understand where they fit into the weekly schedule."
				footer={
					<Link to="/website/schedule" className="button-primary">
						View full schedule
					</Link>
				}
			>
				<ClassScheduleList classes={demoClasses} />
			</DashboardCard>
		</AppShell>
	);
}
