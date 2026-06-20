import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/")({
	component: AdminPage,
});

const adminStats = [
	{
		label: "Consult requests",
		value: "18",
		detail: "New requests this week",
	},
	{
		label: "Popup interest",
		value: "42",
		detail: "Across NYC, Dallas, and Austin",
	},
	{
		label: "Product follows",
		value: "27",
		detail: "Clients waiting for ritual sets",
	},
	{
		label: "Care plans",
		value: "11",
		detail: "Ready for follow-up",
	},
];

const bookingQueue = [
	{
		client: "Maya R.",
		service: "Lymphatic Sculpting",
		location: "Long Island",
		status: "Needs confirmation",
	},
	{
		client: "Ana C.",
		service: "Body Goals Consultation",
		location: "Zoom",
		status: "Ready",
	},
	{
		client: "Janelle T.",
		service: "Facial + Product Guidance",
		location: "NYC Popup",
		status: "Popup interest",
	},
	{
		client: "Rosa M.",
		service: "Massage",
		location: "Dallas Popup",
		status: "Waitlist",
	},
];

const adminTasks = [
	"Confirm Long Island appointment windows",
	"Review NYC popup interest list",
	"Prepare product recommendations for consultations",
	"Follow up with clients waiting on service fit",
];

function AdminPage() {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<section className="border-b border-border bg-card px-4 py-16 md:px-12 lg:px-24">
				<p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">
					Admin Dashboard
				</p>

				<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
					<div>
						<h1 className="max-w-5xl font-display text-6xl font-medium leading-[0.88] tracking-[-0.075em] text-primary md:text-8xl">
							Operate the care business.
						</h1>

						<p className="mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
							A business dashboard for service requests, popup planning, client
							follow-up, products, and care-plan visibility.
						</p>
					</div>

					<div className="flex flex-wrap gap-3 lg:justify-end">
						<Link
							to="/website/book"
							className="inline-flex min-h-12 items-center justify-center border border-primary bg-primary px-5 text-xs font-black uppercase tracking-[0.18em] text-primary-foreground"
						>
							View booking flow
						</Link>

						<Link
							to="/client"
							className="inline-flex min-h-12 items-center justify-center border border-primary px-5 text-xs font-black uppercase tracking-[0.18em] text-primary"
						>
							Client view
						</Link>
					</div>
				</div>
			</section>

			<section className="grid gap-4 px-4 py-8 md:grid-cols-2 md:px-12 lg:grid-cols-4 lg:px-24">
				{adminStats.map((stat) => (
					<article
						key={stat.label}
						className="border border-border bg-card p-5"
					>
						<p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
							{stat.label}
						</p>
						<strong className="mt-4 block font-display text-6xl font-medium leading-none tracking-[-0.08em] text-primary">
							{stat.value}
						</strong>
						<p className="mt-3 text-sm leading-6 text-muted-foreground">
							{stat.detail}
						</p>
					</article>
				))}
			</section>

			<section className="grid gap-4 px-4 pb-12 md:px-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(20rem,0.55fr)] lg:px-24">
				<div className="border border-border bg-card p-5 md:p-7">
					<div className="mb-5 flex flex-wrap items-end justify-between gap-4">
						<div>
							<p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-accent">
								Booking queue
							</p>
							<h2 className="font-display text-5xl font-medium leading-[0.9] tracking-[-0.07em] text-primary">
								Requests needing action.
							</h2>
						</div>
					</div>

					<div className="overflow-x-auto">
						<table className="w-full min-w-[42rem] border-collapse text-left">
							<thead>
								<tr className="border-b border-border text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
									<th className="py-3 pr-4">Client</th>
									<th className="py-3 pr-4">Service</th>
									<th className="py-3 pr-4">Location</th>
									<th className="py-3 pr-4">Status</th>
								</tr>
							</thead>

							<tbody>
								{bookingQueue.map((item) => (
									<tr
										key={`${item.client}-${item.service}`}
										className="border-b border-border"
									>
										<td className="py-4 pr-4 font-semibold text-foreground">
											{item.client}
										</td>
										<td className="py-4 pr-4 text-muted-foreground">
											{item.service}
										</td>
										<td className="py-4 pr-4 text-muted-foreground">
											{item.location}
										</td>
										<td className="py-4 pr-4">
											<span className="inline-flex border border-accent px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-accent">
												{item.status}
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<aside className="border border-border bg-card p-5 md:p-7">
					<p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-accent">
						Operator tasks
					</p>

					<h2 className="font-display text-5xl font-medium leading-[0.9] tracking-[-0.07em] text-primary">
						Keep the system moving.
					</h2>

					<ul className="mt-6 grid gap-3">
						{adminTasks.map((task) => (
							<li
								key={task}
								className="border border-border bg-background p-4 text-muted-foreground"
							>
								{task}
							</li>
						))}
					</ul>

					<Link
						to="/website/locations"
						className="mt-6 inline-flex min-h-12 items-center justify-center border border-primary bg-primary px-5 text-xs font-black uppercase tracking-[0.18em] text-primary-foreground"
					>
						Review locations
					</Link>
				</aside>
			</section>
		</main>
	);
}
