import { MemberStatusBadge } from "./MemberStatusBadge";

type CommunicationPreviewProps = {
	messages: Array<{
		id: string;
		title: string;
		audience: string;
		status: string;
	}>;
};

export function CommunicationPreview({ messages }: CommunicationPreviewProps) {
	return (
		<ul className="list">
			{messages.map((message) => (
				<li key={message.id}>
					<div>
						<strong>{message.title}</strong>
						<br />
						<span>{message.audience}</span>
					</div>
					<MemberStatusBadge status={message.status} />
				</li>
			))}
		</ul>
	);
}
