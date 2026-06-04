import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { demoBusiness } from "../data/demoBusiness";
import { PrototypeNotice } from "./PrototypeNotice";
import { RoleNav } from "./RoleNav";
import { ThemeToggle } from "./ThemeToggle";

type AppShellProps = {
	children: ReactNode;
	eyebrow?: string;
	title: string;
	description?: string;
	variant?: "public" | "member" | "staff" | "owner";
};

export function AppShell({
	children,
	eyebrow,
	title,
	description,
	variant = "public",
}: AppShellProps) {
	return (
		<div className={`genesis-shell genesis-shell--${variant}`}>
			<PrototypeNotice />

			<header className="app-header">
				<Link to="/" className="brand-lockup">
					<span className="brand-mark">G</span>
					<span>
						<strong>{demoBusiness.name}</strong>
						<small>{demoBusiness.location}</small>
					</span>
				</Link>

				<div className="app-header-actions">
					<Link to="/website">Public View</Link>
					<span aria-hidden="true">|</span>
					<Link to="/member/dashboard">Member View</Link>
					<span aria-hidden="true">|</span>
					<Link to="/staff/check-in">Staff View</Link>
					<span aria-hidden="true">|</span>
					<Link to="/owner/overview">Owner View</Link>
					<span aria-hidden="true">|</span>
					<ThemeToggle />
				</div>
			</header>

			<main className="app-main">
				<aside className="app-sidebar">
					<p className="sidebar-label">Demo paths</p>
					<RoleNav variant={variant} />
				</aside>

				<section className="page-panel">
					<div className="page-heading">
						{eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
						<h1>{title}</h1>
						{description ? <p>{description}</p> : null}
					</div>

					{children}
				</section>
			</main>
		</div>
	);
}
