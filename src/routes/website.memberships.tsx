import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { DashboardCard } from "../components/DashboardCard";

const membershipPlans = [
	{
		name: "Kids Foundations",
		price: "$119/mo",
		description:
			"For younger students building confidence, mat awareness, listening skills, and beginner jiu jitsu habits.",
	},
	{
		name: "Adult Unlimited",
		price: "$159/mo",
		description:
			"For adults who want consistent fundamentals, fitness, self-defense, and skill progression.",
	},
	{
		name: "Family Unlimited",
		price: "$219/mo",
		description:
			"For households training together with one simple membership view and shared family scheduling.",
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
			title="Memberships"
			description="A simple public pricing page that helps families understand the best path before they ever talk to staff."
		>
			<div className="genesis-grid-3">
				{membershipPlans.map((plan) => (
					<DashboardCard
						key={plan.name}
						eyebrow={plan.name}
						title={plan.price}
						description={plan.description}
						footer={
							<Link to="/join" className="button-primary">
								Start with a trial
							</Link>
						}
					/>
				))}
			</div>
		</AppShell>
	);
}
