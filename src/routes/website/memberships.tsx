import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../../components/AppShell";
import { DashboardCard } from "../../components/DashboardCard";

const carePlans = [
	{
		name: "Consultation First",
		price: "$45",
		description:
			"A focused planning session to choose service fit, location, goals, and next steps before booking care.",
	},
	{
		name: "Single Treatment",
		price: "From $125",
		description:
			"Book sculpting, lymphatic care, massage, facial support, or a focused body-care session after intake.",
	},
	{
		name: "Rooted Care Plan",
		price: "Custom",
		description:
			"A multi-step path that connects appointments, at-home products, location planning, and follow-up.",
	},
];

export const Route = createFileRoute("/website/memberships")({
	component: WebsiteMembershipsPage,
});

function WebsiteMembershipsPage() {
	return (
		<AppShell
			variant="public"
			eyebrow="Public website"
			title="Care plans"
			description="A simple public pricing preview that helps clients understand the best path before they choose a service."
		>
			<div className="grid gap-4 md:grid-cols-3">
				{carePlans.map((plan) => (
					<DashboardCard
						key={plan.name}
						eyebrow={plan.name}
						title={plan.price}
						description={plan.description}
						footer={
							<Link to="/website/join" className="button-primary">
								Start with consultation
							</Link>
						}
					/>
				))}
			</div>
		</AppShell>
	);
}
