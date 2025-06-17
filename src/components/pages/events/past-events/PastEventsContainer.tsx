import { PastEventsPresentation } from "./";

const sampleEvents = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1604646357333-ecb1f24b2d21?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfEJKSk10dGVESkE0fHxlbnwwfHx8fHw%3D",
    title: "Creative Spaces: Redefining Work Environments",
    description:
      "Explore how innovative coworking spaces are transforming traditional work environments.",
    dateTime: "2025-02-15T10:00:00",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1725610588070-ad71868a9928?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fEJKSk10dGVESkE0fHxlbnwwfHx8fHw%3D",
    title: "Spotlight on Local Artists",
    description:
      "A feature on the emerging artists in our community and how they are shaping the local art scene.",
    dateTime: "2025-02-16T12:00:00",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1734200468967-8d515e2c788f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fEJKSk10dGVESkE0fHxlbnwwfHx8fHw%3D",
    title: "Networking Events at Creative Hub",
    description:
      "Highlights from our recent networking events and tips for making the most out of them.",
    dateTime: "2025-02-17T09:30:00",
  },
];

const PastEventsContainer = () => {
  return <PastEventsPresentation events={sampleEvents} />;
};

export default PastEventsContainer;
