import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { RoleNav, type RoleNavVariant } from "./RoleNav";
import { ThemeToggle } from "./ThemeToggle";

type AppShellProps = {
	children: ReactNode;
	variant?: RoleNavVariant;
	eyebrow?: string;
	title?: string;
	description?: string;
};

const navigationLabels: Record<RoleNavVariant, string> = {
	public: "Public Navigation",
	client: "Client Navigation",
	admin: "Admin Navigation",
	owner: "Owner Navigation",
};

export function AppShell({
	children,
	variant = "public",
	eyebrow,
	title,
	description,
}: AppShellProps) {
	const isPublic = variant === "public";

	return (
		<div className="shell">
			<div className="notice">
				<p>
					Now booking in Long Island, NYC, Dallas, Austin, & Touring Popups
					&rarrow;
				</p>
			</div>

			<header className="app-header">
				<Link to="/" className="brand-lockup" aria-label="Raw Body home">
					<span className="brand-mark">R</span>
					<span> Raw Body Essentials </span>
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
							<Link to="/client">Client</Link>
							<Link to="/admin">Admin</Link>
							<Link to="/owner/owner/overview">Owner</Link>
						</>
					)}

					<ThemeToggle />
				</div>
			</header>

			<div className="app-main">
				<aside className="app-sidebar">
					<p className="sidebar-label">{navigationLabels[variant]}</p>
					<RoleNav variant={variant} />
				</aside>

				<section className="page-panel">
					{title ? (
						<header className="page-heading">
							{eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
							<h1>{title}</h1>
							{description ? <p>{description}</p> : null}
						</header>
					) : null}

					{children}
				</section>
			</div>
		</div>
	);
}
