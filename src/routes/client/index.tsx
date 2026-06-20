import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/client/")({
	component: ClientPage,
});

const careSummary = [
	{
		label: "Next care step",
		value: "Body Goals Consultation",
		detail: "Confirm service fit before booking.",
	},
	{
		label: "Preferred location",
		value: "Long Island",
		detail: "Studio care by appointment.",
	},
	{
		label: "Current focus",
		value: "Lymphatic + Sculpting",
		detail: "Support flow, comfort, and visible body goals.",
	},
];

const carePlan = [
	{
		title: "Consultation",
		status: "Ready to book",
		description:
			"Talk through goals, service fit, location, and at-home support.",
	},
	{
		title: "First Treatment",
		status: "Pending consult",
		description:
			"Choose sculpting, lymphatic care, massage, facial, or combined care.",
	},
	{
		title: "At-Home Ritual",
		status: "Recommended",
		description:
			"Pair the service path with simple product and tool support between visits.",
	},
];

const productRecommendations = [
	"Body oil for daily moisture",
	"At-home body tool for care rhythm",
	"Skin ritual support after facial",
];

function ClientPage() {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<section className="border-b border-border bg-card px-4 py-16 md:px-12 lg:px-24">
				<p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">
					Client Portal
				</p>

				<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
					<div>
						<h1 className="max-w-5xl font-display text-6xl font-medium leading-[0.88] tracking-[-0.075em] text-primary md:text-8xl">
							Your body care path.
						</h1>

						<p className="mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
							A client-facing view for consultations, service planning,
							appointments, care notes, and at-home ritual recommendations.
						</p>
					</div>

					<div className="flex flex-wrap gap-3 lg:justify-end">
						<Link
							to="/website/book"
							className="inline-flex min-h-12 items-center justify-center border border-primary bg-primary px-5 text-xs font-black uppercase tracking-[0.18em] text-primary-foreground"
						>
							Book care
						</Link>

						<Link
							to="/website/services"
							className="inline-flex min-h-12 items-center justify-center border border-primary px-5 text-xs font-black uppercase tracking-[0.18em] text-primary"
						>
							View services
						</Link>
					</div>
				</div>
			</section>

			<section className="grid gap-4 px-4 py-8 md:grid-cols-3 md:px-12 lg:px-24">
				{careSummary.map((item) => (
					<article
						key={item.label}
						className="border border-border bg-card p-5"
					>
						<p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
							{item.label}
						</p>
						<h2 className="mt-4 font-display text-4xl font-medium leading-none tracking-[-0.06em] text-primary">
							{item.value}
						</h2>
						<p className="mt-3 leading-6 text-muted-foreground">
							{item.detail}
						</p>
					</article>
				))}
			</section>

			<section className="grid gap-4 px-4 pb-12 md:px-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(20rem,0.6fr)] lg:px-24">
				<div className="border border-border bg-card p-5 md:p-7">
					<p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-accent">
						Care plan
					</p>

					<div className="grid gap-4">
						{carePlan.map((item) => (
							<article
								key={item.title}
								className="grid gap-3 border border-border bg-background p-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start"
							>
								<div>
									<h2 className="font-display text-4xl font-medium leading-none tracking-[-0.06em] text-primary">
										{item.title}
									</h2>
									<p className="mt-2 leading-6 text-muted-foreground">
										{item.description}
									</p>
								</div>

								<span className="inline-flex w-fit border border-accent px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-accent">
									{item.status}
								</span>
							</article>
						))}
					</div>
				</div>

				<aside className="border border-border bg-card p-5 md:p-7">
					<p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-accent">
						At-home support
					</p>

					<h2 className="font-display text-5xl font-medium leading-[0.9] tracking-[-0.07em] text-primary">
						Ritual recommendations.
					</h2>

					<ul className="mt-6 grid gap-3">
						{productRecommendations.map((item) => (
							<li
								key={item}
								className="border border-border bg-background p-4 text-muted-foreground"
							>
								{item}
							</li>
						))}
					</ul>

					<Link
						to="/website/products"
						className="mt-6 inline-flex min-h-12 items-center justify-center border border-primary bg-primary px-5 text-xs font-black uppercase tracking-[0.18em] text-primary-foreground"
					>
						View products
					</Link>
				</aside>
			</section>
		</main>
	);
}
