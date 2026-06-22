import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../../components/AppShell";
import { CheckInKiosk } from "../../components/CheckInKiosk";
import { DashboardCard } from "../../components/DashboardCard";
import { MemberList } from "../../components/MemberList";
import { TrialLeadList } from "../../components/TrialLeadList";
import {
	demoClasses,
	demoMembers,
	demoTrialLeads,
} from "../../data/demoBusiness";

export const Route = createFileRoute("/admin/check-in")({
	component: AdminCheckInPage,
});

function AdminCheckInPage() {
	const activeClass = demoClasses[1];

	return (
		<AppShell
			variant="admin"
			eyebrow="Admin kiosk"
			title="Check clients in fast."
			description="A front-desk and treatment-room preview for appointment arrival, consultation visitors, client status, and service capacity."
		>
			<p className="mb-4 border border-primary bg-primary px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground">
				DEV CREATE: mock check-in workflow with signed-up client list, waitlist,
				and consultation lead list.
			</p>

			<div className="grid gap-4 md:grid-cols-2">
				<CheckInKiosk activeClass={activeClass} checkedInCount={3} />

				<DashboardCard eyebrow="Client lookup" title="Recent check-ins">
					<MemberList members={demoMembers} />
				</DashboardCard>
			</div>

			<div className="mt-4">
				<DashboardCard
					eyebrow="Consultation visitors"
					title="People admin should greet intentionally"
				>
					<TrialLeadList leads={demoTrialLeads} showNextStep />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
