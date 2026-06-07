import type { ReactNode } from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardKicker,
	CardTitle,
} from "@/components/ui/card";

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
		<Card>
			<CardHeader>
				{eyebrow ? <CardKicker>{eyebrow}</CardKicker> : null}
				<CardTitle>{title}</CardTitle>
				{description ? <CardDescription>{description}</CardDescription> : null}
			</CardHeader>

			{children ? <CardContent>{children}</CardContent> : null}

			{footer ? (
				<CardFooter className="flex-wrap gap-3">{footer}</CardFooter>
			) : null}
		</Card>
	);
}
