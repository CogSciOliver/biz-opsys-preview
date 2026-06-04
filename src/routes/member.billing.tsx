import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";

export const Route = createFileRoute("/member/billing")({
	component: MemberBillingPage,
});

function MemberBillingPage() {
	return (
		<AppShell
			variant="member"
			eyebrow="Member portal"
			title="Billing"
			description="Preview page for plan status, payment history, and membership renewal visibility."
		>
			<section className="genesis-card">
				<p className="card-kicker">Coming next</p>
				<h2>Billing summary</h2>
				<p>This route is wired and ready for member billing preview cards.</p>
			</section>
		</AppShell>
	);
}
