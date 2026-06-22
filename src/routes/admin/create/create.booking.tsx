import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../../../components/AppShell";
import { ClassScheduleList } from "../../../components/ClassScheduleList";
import { DashboardCard } from "../../../components/DashboardCard";
import { demoClasses } from "../../../data/demoBusiness";

export const Route = createFileRoute("/admin/create/create/booking")({
	component: CreateBookingPage,
});

function CreateBookingPage() {
	return (
		<AppShell
			variant="admin"
			eyebrow="Create workflow"
			title="Create booking"
			description="A future admin workflow for creating a service booking from a consultation request, client call, text inquiry, or popup waitlist."
		>
			<div className="grid gap-4 md:grid-cols-2">
				<DashboardCard eyebrow="Booking details" title="Service booking draft">
					<div className="fake-form">
						<div className="fake-field">
							<span className="fake-label">Client</span>
							<div>Select or create client</div>
						</div>
						<div className="fake-field">
							<span className="fake-label">Service</span>
							<div>
								Consultation, sculpting, lymphatic care, massage, or facial
							</div>
						</div>
						<div className="fake-field">
							<span className="fake-label">Location</span>
							<div>Long Island, NYC, Dallas, Austin, Zoom, or popup</div>
						</div>
					</div>
				</DashboardCard>

				<DashboardCard
					eyebrow="Available windows"
					title="Choose appointment window"
				>
					<ClassScheduleList classes={demoClasses} />
				</DashboardCard>
			</div>
		</AppShell>
	);
}
