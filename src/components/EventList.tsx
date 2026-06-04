import { MemberStatusBadge } from "./MemberStatusBadge";

type EventListProps = {
	events: Array<{
		id: string;
		name: string;
		date: string;
		time: string;
		type: string;
	}>;
};

export function EventList({ events }: EventListProps) {
	return (
		<ul className="list">
			{events.map((event) => (
				<li key={event.id}>
					<div>
						<strong>{event.name}</strong>
						<br />
						<span>
							{event.date} • {event.time}
						</span>
					</div>
					<MemberStatusBadge status={event.type} />
				</li>
			))}
		</ul>
	);
}
