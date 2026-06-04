import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { DashboardCard } from "../components/DashboardCard";
import { MemberStatusBadge } from "../components/MemberStatusBadge";
import { demoBusiness } from "../data/demoBusiness";

const settingGroups = [
	{
		name: "Business profile",
		description:
			"Name, location, contact details, public website copy, and brand controls.",
		status: "Prototype",
	},
	{
		name: "Trial flow",
		description:
			"Intro-friendly classes, staff notifications, lead stages, and follow-up timing.",
		status: "Prototype",
	},
	{
		name: "Staff permissions",
		description:
			"Control who can view members, check students in, send messages, and see owner reports.",
		status: "Future build",
	},
	{
		name: "Class rules",
		description:
			"Capacity, age groups, belt levels, schedule visibility, and booking rules.",
		status: "Future build",
	},
];

export const Route = createFileRoute("/owner/settings")({
	component: OwnerSettingsPage,
});

function OwnerSettingsPage() {
	return (
		<AppShell
			variant="owner"
			eyebrow="Owner dashboard"
			title="Settings"
			description="A future owner control center for business details, staff roles, trial flows, schedule rules, and brand settings."
		>
			<div className="genesis-grid">
				<DashboardCard
					eyebrow="Business"
					title={demoBusiness.name}
					description={`${demoBusiness.location} • ${demoBusiness.website} • ${demoBusiness.phone}`}
				/>

				<DashboardCard
					eyebrow="System mode"
					title="Static prototype"
					description="No auth, billing, real member records, or live communications are connected in this preview."
				>
					<MemberStatusBadge status="Demo only" />
				</DashboardCard>
			</div>

			<div style={{ marginTop: "1rem" }}>
				<DashboardCard
					eyebrow="Configurable areas"
					title="What the owner could control"
				>
					<ul className="genesis-list">
						{settingGroups.map((group) => (
							<li key={group.name}>
								<div>
									<strong>{group.name}</strong>
									<br />
									<span>{group.description}</span>
								</div>
								<MemberStatusBadge status={group.status} />
							</li>
						))}
					</ul>
				</DashboardCard>
			</div>
		</AppShell>
	);
}
