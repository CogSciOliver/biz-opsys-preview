import { TrialLeadCard } from "./TrialLeadCard";

type TrialLeadListProps = {
	leads: Array<{
		id: string;
		name: string;
		interest: string;
		status: string;
		nextStep: string;
	}>;
	showNextStep?: boolean;
};

export function TrialLeadList({
	leads,
	showNextStep = false,
}: TrialLeadListProps) {
	return (
		<ul className="genesis-list">
			{leads.map((lead) => (
				<TrialLeadCard key={lead.id} lead={lead} showNextStep={showNextStep} />
			))}
		</ul>
	);
}
