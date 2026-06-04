import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { ClassScheduleList } from "../components/ClassScheduleList";
import { CommunicationPreview } from "../components/CommunicationPreview";
import { DashboardCard } from "../components/DashboardCard";
import { MemberStatusBadge } from "../components/MemberStatusBadge";
import { demoClasses, demoMembers, demoMessages } from "../data/demoBusiness";

export const Route = createFileRoute("/member/dashboard")({
	component: MemberDashboardPage,
});

function MemberDashboardPage() {
	const member = demoMembers[0];

	return (
		<AppShell
			variant="member"
			eyebrow="Member portal"
			title="Member Dashboard"
			description="A member home screen for classes, membership status, announcements, and family training rhythm."
		>
			<div className="grid">
				<DashboardCard
					eyebrow="Membership"
					title={`Welcome back, ${member.name}`}
					description={`${member.plan} • ${member.belt} belt`}
					footer={
						<Link to="/member/billing" className="button-primary">
							View billing
						</Link>
					}
				>
					<MemberStatusBadge status={member.status} />
				</DashboardCard>

				<DashboardCard
					eyebrow="Next class"
					title={demoClasses[1].name}
					description={`${demoClasses[1].audience} • ${demoClasses[1].days} • ${demoClasses[1].time}`}
					footer={
						<Link to="/member/classes" className="button-primary">
							View my classes
						</Link>
					}
				/>
			</div>

			<div className="grid" style={{ marginTop: "1rem" }}>
				<DashboardCard eyebrow="Recommended classes" title="This week">
					<ClassScheduleList classes={demoClasses.slice(0, 3)} />
				</DashboardCard>

				<DashboardCard eyebrow="Announcements" title="From the gym">
					<CommunicationPreview messages={demoMessages.slice(0, 2)} />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
