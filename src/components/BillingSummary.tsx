import { MemberStatusBadge } from "./MemberStatusBadge";

type BillingSummaryProps = {
	payments: Array<{
		id: string;
		member: string;
		plan: string;
		amount: string;
		status: string;
		date: string;
	}>;
};

export function BillingSummary({ payments }: BillingSummaryProps) {
	return (
		<ul className="genesis-list">
			{payments.map((payment) => (
				<li key={payment.id}>
					<div>
						<strong>{payment.member}</strong>
						<br />
						<span>
							{payment.plan} • {payment.amount} • {payment.date}
						</span>
					</div>
					<MemberStatusBadge status={payment.status} />
				</li>
			))}
		</ul>
	);
}
