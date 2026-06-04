import type { ReactNode } from "react";

type DashboardCardProps = {
	eyebrow?: string;
	title: string;
	description?: string;
	children?: ReactNode;
	footer?: ReactNode;
};

export function DashboardCard({
	eyebrow,
	title,
	description,
	children,
	footer,
}: DashboardCardProps) {
	return (
		<section className="card">
			{eyebrow ? <p className="card-kicker">{eyebrow}</p> : null}
			<h2 className="card-title">{title}</h2>
			{description ? <p>{description}</p> : null}
			{children}
			{footer ? <div className="hero-actions">{footer}</div> : null}
		</section>
	);
}
