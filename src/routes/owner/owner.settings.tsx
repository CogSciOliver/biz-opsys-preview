import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../../components/AppShell";
import { DashboardCard } from "../../components/DashboardCard";
import { MemberStatusBadge } from "../../components/MemberStatusBadge";
import { demoBusiness } from "../../data/demoBusiness";

const settingGroups = [
	{
		name: "Business profile",
		description:
			"Name, location, contact details, public website copy, and brand controls.",
		status: "Prototype",
	},
	{
		name: "Consultation flow",
		description:
			"Phone, text, Zoom, in-person, admin notifications, lead stages, and follow-up timing.",
		status: "Prototype",
	},
	{
		name: "Admin permissions",
		description:
			"Control who can view clients, check appointments in, send messages, and see owner reports.",
		status: "Future build",
	},
	{
		name: "Service rules",
		description:
			"Capacity, location rules, consultation requirements, popup visibility, pricing notes, and booking limits.",
		status: "Future build",
	},
];

export const Route = createFileRoute("/owner/owner/settings")({
	component: OwnerSettingsPage,
});

function OwnerSettingsPage() {
	return (
		<AppShell
			variant="owner"
			eyebrow="Owner dashboard"
			title="Settings"
			description="A future owner control center for business details, admin roles, consultation flows, service rules, location rules, and brand settings."
		>
			<div className="grid gap-4 md:grid-cols-2">
				<DashboardCard
					eyebrow="Business"
					title={demoBusiness.name}
					description={`${demoBusiness.location} • ${demoBusiness.website} • ${demoBusiness.phone}`}
				/>

				<DashboardCard
					eyebrow="System mode"
					title="Static prototype"
					description="No auth, billing, real client records, or live communications are connected in this preview."
				>
					<MemberStatusBadge status="Demo only" />
				</DashboardCard>
			</div>

			<div className="mt-4">
				<DashboardCard
					eyebrow="Configurable areas"
					title="What the owner could control"
				>
					<ul className="list">
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
