import { Link } from "@tanstack/react-router";

type RoleNavProps = {
	variant?: "public" | "member" | "staff" | "owner";
};

export function RoleNav({ variant = "public" }: RoleNavProps) {
	if (variant === "member") {
		return (
			<nav className="role-nav" aria-label="Member navigation">
				<Link to="/member/dashboard">Dashboard</Link>
				<Link to="/member/classes">Classes</Link>
				<Link to="/member/billing">Billing</Link>
			</nav>
		);
	}

	if (variant === "staff") {
		return (
			<nav className="role-nav" aria-label="Staff navigation">
				<Link to="/staff/dashboard">Dashboard</Link>
				<Link to="/staff/check-in">Check-in</Link>
				<Link to="/staff/members">Members</Link>
				<Link to="/staff/announcements">Announcements</Link>
				<Link to="/staff/create/event">Create Event</Link>
				<Link to="/staff/create/membership">Create Membership</Link>
				<Link to="/staff/create/schedule">Schedule</Link>
				<Link to="/staff/settings">Settings</Link>
				{/* <Link to="/staff/reports">Reports</Link> */}
				{/* <Link to="/staff/analytics">Analytics</Link> */}
				{/* <Link to="/staff/retention">Retention</Link> */}
				{/* <Link to="/staff/feedback">Feedback</Link> */}
				{/* <Link to="/staff/tasks">Tasks</Link> */}
				{/* <Link to="/staff/lead-management">Lead Management</Link> */}
			</nav>
		);
	}

	if (variant === "owner") {
		return (
			<nav className="role-nav" aria-label="Owner navigation">
				<Link to="/owner/overview">Overview</Link>
				<Link to="/owner/revenue">Revenue</Link>
				<Link to="/owner/retention">Retention</Link>
				<Link to="/owner/settings">Settings</Link>
			</nav>
		);
	}

	return (
		<nav className="role-nav" aria-label="Public website navigation">
			<Link to="/website">Website</Link>
			<Link to="/website/memberships">Memberships</Link>
			<Link to="/website/schedule">Schedule</Link>
			<Link to="/website/events">Events</Link>
			<Link to="/join">Trial Class</Link>
		</nav>
	);
}
