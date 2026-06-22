import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../../components/AppShell";
import { ClassScheduleList } from "../../components/ClassScheduleList";
import { CommunicationPreview } from "../../components/CommunicationPreview";
import { DashboardCard } from "../../components/DashboardCard";
import { MemberStatusBadge } from "../../components/MemberStatusBadge";
import {
	demoClasses,
	demoMembers,
	demoMessages,
} from "../../data/demoBusiness";

export const Route = createFileRoute("/client/dashboard")({
	component: ClientDashboardPage,
});

function ClientDashboardPage() {
	const client = demoMembers[0];
	const nextService = demoClasses[1];

	return (
		<AppShell
			variant="client"
			eyebrow="Client portal"
			title="Client Dashboard"
			description="A client home screen for appointments, care-plan status, recommendations, and Raw Body communication."
		>
			<div className="grid gap-4 md:grid-cols-2">
				<DashboardCard
					eyebrow="Care plan"
					title={`Welcome back, ${client.name}`}
					description={`${client.plan} • ${client.goal}`}
					footer={
						<Link to="/client/billing" className="button-primary">
							View billing
						</Link>
					}
				>
					<MemberStatusBadge status={client.status} />
				</DashboardCard>

				<DashboardCard
					eyebrow="Next appointment"
					title={nextService.name}
					description={`${nextService.audience} • ${nextService.days} • ${nextService.time}`}
					footer={
						<Link to="/client/schedule" className="button-primary">
							View appointments
						</Link>
					}
				/>
			</div>

			<div className="mt-4 grid gap-4 md:grid-cols-2">
				<DashboardCard eyebrow="Recommended services" title="This care cycle">
					<ClassScheduleList classes={demoClasses.slice(0, 3)} />
				</DashboardCard>

				<DashboardCard eyebrow="Messages" title="From Raw Body">
					<CommunicationPreview messages={demoMessages.slice(0, 2)} />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
