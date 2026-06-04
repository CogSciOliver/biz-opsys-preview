import { createFileRoute } from "@tanstack/react-router"
import { AppShell } from "../components/AppShell"
import { CheckInKiosk } from "../components/CheckInKiosk"
import { DashboardCard } from "../components/DashboardCard"
import { MemberStatusBadge } from "../components/MemberStatusBadge"
import { TrialLeadCard } from "../components/TrialLeadCard"
import { demoClasses, demoMembers, demoTrialLeads } from "../data/demoBusiness"

export const Route = createFileRoute("/staff/check-in")({
	component: StaffCheckInPage,
})

function StaffCheckInPage() {
	const activeClass = demoClasses[1]

	return (
		<AppShell
			variant="staff"
			eyebrow="Staff kiosk"
			title="Check students in fast."
			description="A front-desk and mat-side preview for attendance, trial visitors, member status, and class capacity."
		>
			<div className="genesis-grid">
				<CheckInKiosk activeClass={activeClass} checkedInCount={14} />

				<DashboardCard eyebrow="Member lookup" title="Recent check-ins">
					<ul className="genesis-list">
						{demoMembers.map((member) => (
							<li key={member.id}>
								<div>
									<strong>{member.name}</strong>
									<br />
									<span>
										{member.plan} • {member.belt}
									</span>
								</div>
								<MemberStatusBadge status={member.status} />
							</li>
						))}
					</ul>
				</DashboardCard>
			</div>

			<div style={{ marginTop: "1rem" }}>
				<DashboardCard
					eyebrow="Trial visitors"
					title="People staff should greet intentionally"
				>
					<ul className="genesis-list">
						{demoTrialLeads.map((lead) => (
							<TrialLeadCard key={lead.id} lead={lead} showNextStep />
						))}
					</ul>
				</DashboardCard>
			</div>
		</AppShell>
	)
}
