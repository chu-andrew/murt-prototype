const headerRoutes = [
  { label: "O-Week", link: "/oweek" },
  { label: "About", link: "/about" },
  {
    label: "Events",
    link: "/events",
    links: [
      { link: "/calendar", label: "Calendar" },
      { link: "/budget", label: "Budget/Expenses" },
    ],
  },
  {
    label: "People",
    link: "/people",
    links: [
      { link: "/team", label: "McTeam" },
      { link: "/ministry", label: "McMinistry" },
      { link: "/court", label: "McCourt" },
      { link: "/committees", label: "Committees" },
      { link: "/affinity-groups", label: "Affinity Groups" },
      { link: "/associates", label: "Associates" },
      { link: "/paa", label: "Peer Academic Advisors" },
      { link: "/academic-fellows", label: "Academic Fellows" },
      { link: "/rha", label: "Rice Health Advisors" },
      { link: "/caregivers", label: "Caregivers" },
      { link: "/smr", label: "Student Maintenance Rep" },
      { link: "/divisional-advisors", label: "Divisional Advisors" },
    ],
  },
  {
    label: "Resources",
    link: "/resources",
    links: [
      { link: "/room-reservations", label: "Room Reservations" },
      { link: "/financial-inclusivity", label: "Financial Inclusivity" },
      { link: "/innovation-space", label: "McMurtry Innovation Space" },
      { link: "/documents", label: "Documents" },
      { link: "/diversity-resources", label: "Diversity Resources" },
      { link: "/work-orders", label: "Work Orders" },
      { link: "/initiative-requests", label: "Initiative Requests" },
      { link: "/feedback-forms", label: "Feedback Forms" },
    ],
  },
];

export default headerRoutes;
