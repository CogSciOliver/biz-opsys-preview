import { MemberStatusBadge } from "./MemberStatusBadge";

type MemberListProps = {
	members: Array<{
		id: string;
		name: string;
		plan: string;
		status: string;
		lastCheckIn: string;
		goal?: string;
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
							{member.plan} • {member.goal}
							{showLastCheckIn ? ` • Latest note: ${member.lastCheckIn}` : ""}
						</span>
					</div>
					<MemberStatusBadge status={member.status} />
				</li>
			))}
		</ul>
	);
}
