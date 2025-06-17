import { EventCalendarPresentation } from "./";

// Define the Event interface to ensure type safety
interface Event {
  id: string;
  dateTime: string;
  duration: number;
  title: string;
  description: string;
  imageUrl: string; // Changed from imgUrl to imageUrl to match the component interface
}

const sampleEvents: Event[] = [
  {
    id: "21",
    dateTime: "2024-01-02T08:00:00Z",
    duration: 300,
    title: "Masterclass: Italian Design Day 2025",
    description:
      "An in-depth exploration of Italian design trends and history.",
    imageUrl:
      "https://images.unsplash.com/photo-1735436094320-c161c34ae5e0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "22",
    dateTime: "2024-01-05T10:00:00Z",
    duration: 120,
    title: "Workshop: Sustainable Architecture",
    description:
      "Hands-on workshop focusing on sustainable building practices.",
    imageUrl:
      "https://images.unsplash.com/photo-1733706275877-f677ec6ed9d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "23",
    dateTime: "2024-01-10T14:00:00Z",
    duration: 120,
    title: "Lecture: The Future of Urban Mobility",
    description: "A look at innovative solutions for urban transportation.",
    imageUrl: "/api/placeholder/800/600",
  },
  {
    id: "24",
    dateTime: "2024-01-15T09:00:00Z",
    duration: 120,
    title: "Panel Discussion: Creative Entrepreneurship",
    description:
      "Panelists discuss challenges and opportunities in the creative industries.",
    imageUrl:
      "https://images.unsplash.com/photo-1736267740362-0c10963c8047?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "25",
    dateTime: "2024-01-20T15:00:00Z",
    duration: 120,
    title: "Networking Event: Tech Innovators Meetup",
    description: "Connect with fellow innovators in the tech industry.",
    imageUrl:
      "https://images.unsplash.com/photo-1734887347857-28ac3b7f2dfe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    dateTime: "2024-01-02T08:00:00Z",
    duration: 300,
    title: "Masterclass: Italian Design Day 2025",
    description:
      "An in-depth exploration of Italian design trends and history.",
    imageUrl:
      "https://images.unsplash.com/photo-1735779411191-4a2f31a67686?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    dateTime: "2024-01-15T10:00:00Z",
    duration: 120,
    title: "Workshop: Sustainable Architecture",
    description:
      "Hands-on workshop focusing on sustainable building practices.",
    imageUrl:
      "https://images.unsplash.com/photo-1735975623299-16d8b5ce3e48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    dateTime: "2024-02-05T14:00:00Z",
    duration: 180,
    title: "Digital Art Exhibition Opening",
    description: "Showcasing the best of contemporary digital art and NFTs.",
    imageUrl:
      "https://images.unsplash.com/photo-1731432248706-a87c0cd386d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    dateTime: "2024-02-20T09:00:00Z",
    duration: 240,
    title: "Future of Web Development Summit",
    description:
      "Expert talks on emerging web technologies and best practices.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1673624400092-0e8fd6910570?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
  },
  {
    id: "5",
    dateTime: "2024-03-10T13:00:00Z",
    duration: 150,
    title: "Spring Innovation Showcase",
    description:
      "Celebrating breakthrough innovations in technology and design.",
    imageUrl: "/api/placeholder/800/600",
  },
  {
    id: "6",
    dateTime: "2024-03-25T15:30:00Z",
    duration: 120,
    title: "AI in Creative Industries",
    description:
      "Exploring the impact of AI on creative processes and workflows.",
    imageUrl: "/api/placeholder/800/600",
  },
  {
    id: "7",
    dateTime: "2024-04-05T11:00:00Z",
    duration: 180,
    title: "Design Systems Workshop",
    description: "Building scalable and maintainable design systems.",
    imageUrl: "/api/placeholder/800/600",
  },
  {
    id: "8",
    dateTime: "2024-04-18T14:00:00Z",
    duration: 240,
    title: "UX Research Symposium",
    description: "Latest methodologies in user experience research.",
    imageUrl: "/api/placeholder/800/600",
  },
  {
    id: "9",
    dateTime: "2024-05-07T09:30:00Z",
    duration: 300,
    title: "Typography Masterclass",
    description: "Advanced techniques in typography and font design.",
    imageUrl: "/api/placeholder/800/600",
  },
  {
    id: "10",
    dateTime: "2024-05-22T13:00:00Z",
    duration: 180,
    title: "Product Design Festival",
    description: "Celebrating excellence in product design and innovation.",
    imageUrl: "/api/placeholder/800/600",
  },
  {
    id: "11",
    dateTime: "2024-06-03T10:00:00Z",
    duration: 240,
    title: "Summer Tech Conference",
    description: "Exploring emerging technologies and their applications.",
    imageUrl: "/api/placeholder/800/600",
  },
  {
    id: "12",
    dateTime: "2024-06-18T15:00:00Z",
    duration: 150,
    title: "Creative Coding Workshop",
    description: "Hands-on session on creative coding and generative art.",
    imageUrl: "/api/placeholder/800/600",
  },
  {
    id: "13",
    dateTime: "2024-07-08T11:30:00Z",
    duration: 180,
    title: "Design Leadership Summit",
    description: "Strategies for effective design team leadership.",
    imageUrl: "/api/placeholder/800/600",
  },
  {
    id: "14",
    dateTime: "2024-07-24T14:00:00Z",
    duration: 240,
    title: "Mobile UX Conference",
    description: "Latest trends in mobile user experience design.",
    imageUrl: "/api/placeholder/800/600",
  },
  {
    id: "15",
    dateTime: "2024-08-05T09:00:00Z",
    duration: 300,
    title: "Web Animation Workshop",
    description: "Creating engaging web animations and interactions.",
    imageUrl: "/api/placeholder/800/600",
  },
  {
    id: "16",
    dateTime: "2024-08-20T13:30:00Z",
    duration: 180,
    title: "Design Systems Conference",
    description: "Building and scaling design systems for enterprise.",
    imageUrl: "/api/placeholder/800/600",
  },
  {
    id: "17",
    dateTime: "2024-09-10T10:00:00Z",
    duration: 240,
    title: "Fall Design Week",
    description: "A week-long celebration of design excellence.",
    imageUrl: "/api/placeholder/800/600",
  },
  {
    id: "18",
    dateTime: "2024-09-25T14:30:00Z",
    duration: 150,
    title: "UI Animation Masterclass",
    description: "Advanced techniques in user interface animation.",
    imageUrl: "/api/placeholder/800/600",
  },
  {
    id: "19",
    dateTime: "2024-10-08T11:00:00Z",
    duration: 180,
    title: "Design Research Symposium",
    description: "Latest methodologies in design research and testing.",
    imageUrl: "/api/placeholder/800/600",
  },
  {
    id: "20",
    dateTime: "2024-10-22T15:00:00Z",
    duration: 240,
    title: "Innovation in Design",
    description: "Exploring breakthrough innovations in design technology.",
    imageUrl: "/api/placeholder/800/600",
  },
];

const EventCalendarContainer = () => {
  return <EventCalendarPresentation events={sampleEvents} />;
};

export default EventCalendarContainer;
