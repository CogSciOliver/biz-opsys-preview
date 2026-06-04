import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";
import { CommunicationPreview } from "../components/CommunicationPreview";
import { DashboardCard } from "../components/DashboardCard";
import { demoMessages } from "../data/demoBusiness";

export const Route = createFileRoute("/staff/communications")({
	component: StaffCommunicationsPage,
});

function StaffCommunicationsPage() {
	return (
		<AppShell
			variant="staff"
			eyebrow="Staff tools"
			title="Communications"
			description="A message center preview for trial follow-ups, member reminders, event announcements, and owner-approved broadcasts."
		>
			<div className="genesis-grid">
				<DashboardCard
					eyebrow="Message center"
					title="Ready-to-send communications"
					description="Staff can see what needs attention without hunting through texts, inboxes, or social posts."
				>
					<CommunicationPreview messages={demoMessages} />
				</DashboardCard>

				<DashboardCard
					eyebrow="Workflow"
					title="Communication pipeline"
					description="Draft, approve, schedule, and send messages from the same operating system that tracks classes and members."
				>
					<ul className="genesis-list">
						<li>
							<div>
								<strong>Draft</strong>
								<br />
								<span>Staff prepares the message.</span>
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
								<span>Members receive clear next steps.</span>
							</div>
						</li>
					</ul>
				</DashboardCard>
			</div>
		</AppShell>
	);
}
