import { Link } from "@tanstack/react-router";

export type RoleNavVariant = "public" | "client" | "admin";

type RoleNavProps = {
	variant?: RoleNavVariant;
};

export function RoleNav({ variant = "public" }: RoleNavProps) {
	if (variant === "client") {
		return (
			<nav className="role-nav" aria-label="Client navigation">
				<Link to="/client">Client Overview</Link>
				<Link to="/client" hash="care-plan">
					Care Plan
				</Link>
				<Link to="/client" hash="appointments">
					Appointments
				</Link>
				<Link to="/client" hash="recommendations">
					Recommendations
				</Link>
			</nav>
		);
	}

	if (variant === "admin") {
		return (
			<nav className="role-nav" aria-label="Admin navigation">
				<Link to="/admin">Dashboard</Link>
				<Link to="/admin" hash="booking-queue">
					Booking Queue
				</Link>
				<Link to="/admin" hash="client-follow-up">
					Client Follow-Up
				</Link>
				<Link to="/admin" hash="operator-tasks">
					Operator Tasks
				</Link>
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
		</nav>
	);
}