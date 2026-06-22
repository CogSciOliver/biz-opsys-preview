import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../../components/AppShell";
import { CommunicationPreview } from "../../components/CommunicationPreview";
import { DashboardCard } from "../../components/DashboardCard";
import { demoMessages } from "../../data/demoBusiness";

export const Route = createFileRoute("/admin/announcements")({
	component: AdminCommunicationsPage,
});

function AdminCommunicationsPage() {
	return (
		<AppShell
			variant="admin"
			eyebrow="Admin tools"
			title="Messages"
			description="A message center preview for consultation follow-ups, client reminders, popup announcements, product guidance, and owner-approved broadcasts."
		>
			<div className="grid gap-4 md:grid-cols-2">
				<DashboardCard
					eyebrow="Message center"
					title="Ready-to-send and scheduled messages"
					description="Admin can see what needs attention without hunting through texts, inboxes, or social posts."
				>
					<CommunicationPreview messages={demoMessages} />
				</DashboardCard>

				<DashboardCard
					eyebrow="Workflow"
					title="Communication pipeline"
					description="Draft, approve, schedule, and send messages from the same operating system that tracks services and clients."
				>
					<ul className="list">
						<li>
							<div>
								<strong>Draft</strong>
								<br />
								<span>Admin prepares the message.</span>
							</div>
						</li>
						<li>
							<div>
								<strong>Approve</strong>
								<br />
								<span>Owner reviews high-impact broadcasts.</span>
							</div>
						</li>
						<li>
							<div>
								<strong>Send</strong>
								<br />
								<span>Clients receive clear next steps.</span>
							</div>
						</li>
					</ul>
				</DashboardCard>
			</div>
		</AppShell>
	);
}
