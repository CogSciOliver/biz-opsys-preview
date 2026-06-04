import { ClassScheduleCard } from "./ClassScheduleCard";

type ClassScheduleListProps = {
	classes: Array<{
		id: string;
		name: string;
		audience: string;
		days: string;
		time: string;
		level: string;
		spots: number;
	}>;
};

export function ClassScheduleList({ classes }: ClassScheduleListProps) {
	return (
		<ul className="genesis-list">
			{classes.map((classItem) => (
				<ClassScheduleCard classItem={classItem} key={classItem.id} />
			))}
		</ul>
	);
}
