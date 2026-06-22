import { Link } from "@tanstack/react-router";

export type RoleNavVariant = "public" | "client" | "admin" | "owner";

type RoleNavProps = {
	variant?: RoleNavVariant;
};

export function RoleNav({ variant = "public" }: RoleNavProps) {
	if (variant === "client") {
		return (
			<nav className="role-nav" aria-label="Client navigation">
				<Link to="/client">Client Overview</Link>
				<Link to="/client/dashboard">Care Dashboard</Link>
				<Link to="/client/schedule">Appointments</Link>
				<Link to="/client/billing">Billing</Link>
				<Link to="/website/book">Book Care</Link>
			</nav>
		);
	}

	if (variant === "admin") {
		return (
			<nav className="role-nav" aria-label="Admin navigation">
				<Link to="/admin">Admin Overview</Link>
				<Link to="/admin/dashboard">Daily Dashboard</Link>
				<Link to="/admin/check-in">Check-In</Link>
				<Link to="/admin/view-members">Clients</Link>
				<Link to="/admin/announcements">Messages</Link>
				<Link to="/admin/settings">Settings</Link>
			</nav>
		);
	}

	if (variant === "owner") {
		return (
			<nav className="role-nav" aria-label="Owner navigation">
				<Link to="/owner/owner/overview">Owner Overview</Link>
				<Link to="/owner/owner/revenue">Revenue</Link>
				<Link to="/owner/owner/retention">Retention</Link>
				<Link to="/owner/owner/settings">Settings</Link>
				<Link to="/style-guide">Style Guide</Link>
			</nav>
		);
	}

	return (
		<nav className="role-nav" aria-label="Public navigation">
			<Link to="/">Home</Link>
			<Link to="/website/services">Services</Link>
			<Link to="/website/consultations">Consultations</Link>
			<Link to="/website/locations">Locations</Link>
			<Link to="/website/products">Products</Link>
			<Link to="/website/book">Book</Link>
		</nav>
	);
}
