import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../../components/AppShell";
import { DashboardCard } from "../../components/DashboardCard";
import { MemberStatusBadge } from "../../components/MemberStatusBadge";
import { demoBusiness } from "../../data/demoBusiness";

const settingGroups = [
	{
		name: "Service catalog",
		description:
			"Control treatment names, consultation types, service windows, pricing notes, and booking rules.",
		status: "Prototype",
	},
	{
		name: "Locations + popups",
		description:
			"Manage Long Island, NYC, Dallas, Austin, and touring popup availability.",
		status: "Prototype",
	},
	{
		name: "Client workflows",
		description:
			"Set intake fields, care-plan statuses, check-in steps, and follow-up tasks.",
		status: "Future build",
	},
	{
		name: "Product recommendations",
		description:
			"Connect products, tools, and at-home ritual sets to client goals and services.",
		status: "Future build",
	},
];

export const Route = createFileRoute("/admin/settings")({
	component: AdminSettingsPage,
});

function AdminSettingsPage() {
	return (
		<AppShell
			variant="admin"
			eyebrow="Admin tools"
			title="Settings"
			description="A future admin control center for services, locations, consultation rules, client workflows, and product guidance."
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
					title="What admin could manage"
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
