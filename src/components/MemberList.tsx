import { MemberStatusBadge } from "./MemberStatusBadge";

type MemberListProps = {
	members: Array<{
		id: string;
		name: string;
		plan: string;
		status: string;
		lastCheckIn: string;
		belt: string;
	}>;
	showLastCheckIn?: boolean;
};

export function MemberList({
	members,
	showLastCheckIn = false,
}: MemberListProps) {
	return (
		<ul className="list">
			{members.map((member) => (
				<li key={member.id}>
					<div>
						<strong>{member.name}</strong>
						<br />
						<span>
							{member.plan} • {member.belt}
							{showLastCheckIn ? ` • Last check-in: ${member.lastCheckIn}` : ""}
						</span>
					</div>
					<MemberStatusBadge status={member.status} />
				</li>
			))}
		</ul>
	);
}
