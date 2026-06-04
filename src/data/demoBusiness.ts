export const demoBusiness = {
	name: "Genesis Jiu Jitsu",
	shortName: "Genesis",
	location: "Burleson, Texas",
	phone: "(817) 555-0198",
	email: "hello@genesisjiujitsu.demo",
	website: "burlesonjiujitsu.com",
	tagline: "Whole-family jiu jitsu in a welcoming, disciplined gym.",
	heroTitle: "A modern operating system for a family-friendly jiu jitsu gym.",
	heroText:
		"Public website, trial signups, member tools, staff check-in, billing visibility, communications, and owner reporting in one branded Genesis experience.",
	stats: [
		{ label: "Active students", value: "184" },
		{ label: "Weekly classes", value: "32" },
		{ label: "Trial leads this month", value: "27" },
		{ label: "Member retention", value: "91%" },
	],
};

export const demoClasses = [
	{
		id: "kids-foundations",
		name: "Kids Foundations",
		audience: "Ages 5-8",
		days: "Mon / Wed",
		time: "4:30 PM",
		level: "Beginner",
		spots: 8,
	},
	{
		id: "family-jiujitsu",
		name: "Family Jiu Jitsu",
		audience: "Parents + kids",
		days: "Tuesday",
		time: "6:00 PM",
		level: "All levels",
		spots: 6,
	},
	{
		id: "adult-fundamentals",
		name: "Adult Fundamentals",
		audience: "Adults",
		days: "Mon / Thu",
		time: "7:00 PM",
		level: "Beginner",
		spots: 10,
	},
	{
		id: "competition-team",
		name: "Competition Team",
		audience: "Advanced students",
		days: "Friday",
		time: "6:30 PM",
		level: "Advanced",
		spots: 4,
	},
];

export const demoTrialLeads = [
	{
		id: "lead-001",
		name: "Maya Thompson",
		interest: "Family membership",
		status: "Trial booked",
		nextStep: "Confirm waiver before Tuesday class",
	},
	{
		id: "lead-002",
		name: "Jordan Lee",
		interest: "Adult fundamentals",
		status: "Needs follow-up",
		nextStep: "Send beginner class schedule",
	},
	{
		id: "lead-003",
		name: "The Ramirez Family",
		interest: "Kids + parent classes",
		status: "New inquiry",
		nextStep: "Invite to Saturday intro session",
	},
];

export const demoMembers = [
	{
		id: "mem-001",
		name: "Ari Johnson",
		plan: "Family Unlimited",
		status: "Active",
		lastCheckIn: "Today, 4:28 PM",
		belt: "Grey / White",
	},
	{
		id: "mem-002",
		name: "Chris Miller",
		plan: "Adult Unlimited",
		status: "Active",
		lastCheckIn: "Yesterday, 7:02 PM",
		belt: "Blue",
	},
	{
		id: "mem-003",
		name: "Sam Rivera",
		plan: "Kids 2x Weekly",
		status: "Payment review",
		lastCheckIn: "Monday, 4:31 PM",
		belt: "White",
	},
];

export const demoPayments = [
	{
		id: "pay-001",
		member: "Ari Johnson",
		plan: "Family Unlimited",
		amount: "$219",
		status: "Paid",
		date: "June 1",
	},
	{
		id: "pay-002",
		member: "Chris Miller",
		plan: "Adult Unlimited",
		amount: "$159",
		status: "Paid",
		date: "June 1",
	},
	{
		id: "pay-003",
		member: "Sam Rivera",
		plan: "Kids 2x Weekly",
		amount: "$119",
		status: "Needs review",
		date: "June 3",
	},
];

export const demoMessages = [
	{
		id: "msg-001",
		title: "Welcome to Genesis",
		audience: "New trial families",
		status: "Draft",
	},
	{
		id: "msg-002",
		title: "Belt testing reminder",
		audience: "Eligible students",
		status: "Scheduled",
	},
	{
		id: "msg-003",
		title: "Summer family training week",
		audience: "All members",
		status: "Ready",
	},
];

export const demoEvents = [
	{
		id: "evt-001",
		name: "Saturday Open Mat",
		date: "June 8",
		time: "10:00 AM",
		type: "Community",
	},
	{
		id: "evt-002",
		name: "Family Intro Day",
		date: "June 15",
		time: "11:30 AM",
		type: "Lead generation",
	},
	{
		id: "evt-003",
		name: "Belt Testing",
		date: "June 22",
		time: "9:00 AM",
		type: "Member milestone",
	},
];

export const ownerMetrics = [
	{ label: "Monthly recurring revenue", value: "$28.4k", trend: "+8.2%" },
	{ label: "Trial conversion", value: "62%", trend: "+4.5%" },
	{ label: "Past-due accounts", value: "7", trend: "-3 this week" },
	{ label: "Average attendance", value: "74%", trend: "+6.1%" },
];
