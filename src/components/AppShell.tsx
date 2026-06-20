

			import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { RoleNav, type RoleNavVariant } from "./RoleNav";
import { ThemeToggle } from "./ThemeToggle";

type AppShellProps = {
	children: ReactNode;
	variant?: RoleNavVariant;
};

export function AppShell({ children, variant = "public" }: AppShellProps) {
	const isPublic = variant === "public";

	return (
		<div className="shell">
			<div className="notice">
				<p>Now booking in Long Island, NYC, Dallas, Austin, & Touring Popups &rarrow;</p>
			</div>

			<header className="app-header">
				<Link to="/" className="brand-lockup" aria-label="Raw Body home">
					<span className="brand-mark">R</span>
					<span>
						<strong>Raw Body Essentials</strong>
						<small>Body care · Booking · Client operations</small>
					</span>
				</Link>

				<div className="app-header-actions">
					{isPublic ? (
						<>
							<Link to="/website/services">Services</Link>
							<Link to="/website/consultations">Consultations</Link>
							<Link to="/website/locations">Locations</Link>
							<Link to="/website/products">Products</Link>
						</>
					) : (
						<>
							<Link to="/client">Client Portal</Link>
							<Link to="/admin">Admin Dashboard</Link>
						</>
					)}

					<ThemeToggle />
				</div>
			</header>

			<div className="app-main">
				<aside className="app-sidebar">
					<p className="sidebar-label">
						{variant === "admin"
							? "Admin Navigation"
							: variant === "client"
								? "Client Navigation"
								: "Public Navigation"}
					</p>

					<RoleNav variant={variant} />
				</aside>

				<section className="page-panel">{children}</section>
			</div>
		</div>
	);
}