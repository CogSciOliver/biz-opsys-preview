import {
	Card,
	CardDescription,
	CardHeader,
	CardKicker,
	CardTitle,
} from "@/components/ui/card";

type MetricCardProps = {
	label: string;
	value: string;
	trend?: string;
};

export function MetricCard({ label, value, trend }: MetricCardProps) {
	return (
		<Card size="sm">
			<CardHeader>
				<CardKicker>{label}</CardKicker>
				<CardTitle>{value}</CardTitle>
				{trend ? <CardDescription>{trend}</CardDescription> : null}
			</CardHeader>
		</Card>
	);
}