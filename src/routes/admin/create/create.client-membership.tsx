import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../../../components/AppShell";
import { DashboardCard } from "../../../components/DashboardCard";
import { MemberStatusBadge } from "../../../components/MemberStatusBadge";

const carePlanOptions = [
	"Consultation First",
	"Single Treatment",
	"Rooted Care Plan",
	"Popup Interest",
];

export const Route = createFileRoute("/admin/create/create/client-membership")({
	component: CreateClientCarePlanPage,
});

function CreateClientCarePlanPage() {
	return (
		<AppShell
			variant="admin"
			eyebrow="Create workflow"
			title="Create client care plan"
			description="A future workflow for turning a new client into a structured care path with appointments, notes, product recommendations, and billing visibility."
		>
			<div className="grid gap-4 md:grid-cols-2">
				<DashboardCard eyebrow="Client profile" title="Care plan draft">
					<div className="fake-form">
						<div className="fake-field">
							<span className="fake-label">Client name</span>
							<div>Name, phone, email, and preferred contact method</div>
						</div>
						<div className="fake-field">
							<span className="fake-label">Body goal</span>
							<div>Sculpt, flow, recover, glow, reset, or product support</div>
						</div>
						<div className="fake-field">
							<span className="fake-label">Care notes</span>
							<div>Consultation notes and service-fit guidance</div>
						</div>
					</div>
				</DashboardCard>

				<DashboardCard eyebrow="Care plan options" title="Assign status">
					<div className="hero-actions">
						{carePlanOptions.map((option) => (
							<MemberStatusBadge key={option} status={option} />
						))}
					</div>
				</DashboardCard>
			</div>
		</AppShell>
	);
}
