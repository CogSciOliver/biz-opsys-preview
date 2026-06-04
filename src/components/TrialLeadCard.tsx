import { MemberStatusBadge } from "./MemberStatusBadge";

type TrialLeadCardProps = {
	lead: {
		id: string;
		name: string;
		interest: string;
		status: string;
		nextStep: string;
	};
	showNextStep?: boolean;
};

export function TrialLeadCard({
	lead,
	showNextStep = false,
}: TrialLeadCardProps) {
	return (
		<li>
			<div>
				<strong>{lead.name}</strong>
				<br />
				<span>{showNextStep ? lead.nextStep : lead.interest}</span>
			</div>
			<MemberStatusBadge status={lead.status} />
		</li>
	);
}
