import { MemberStatusBadge } from "./MemberStatusBadge";

type ClassScheduleCardProps = {
	classItem: {
		id: string;
		name: string;
		audience: string;
		days: string;
		time: string;
		level: string;
		spots: number;
	};
};

export function ClassScheduleCard({ classItem }: ClassScheduleCardProps) {
	return (
		<li>
			<div>
				<strong>{classItem.name}</strong>
				<br />
				<span>
					{classItem.audience} • {classItem.days} • {classItem.time}
				</span>
			</div>
			<MemberStatusBadge status={classItem.level} />
		</li>
	);
}
