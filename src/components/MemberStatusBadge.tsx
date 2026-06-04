type MemberStatusBadgeProps = {
	status: string;
};

export function MemberStatusBadge({ status }: MemberStatusBadgeProps) {
	return <span className="status-pill">{status}</span>;
}
