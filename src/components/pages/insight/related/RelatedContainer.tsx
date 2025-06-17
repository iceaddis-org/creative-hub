import { RelatedPresentation } from "./";

const sampleBlogs = [
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
  {
    id: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1736532849780-798bede68961?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fEJKSk10dGVESkE0fHxlbnwwfHx8fHw%3D",
    title: "Design Trends for Modern Workspaces",
    description:
      "Discover the latest trends in workspace design that enhance creativity and productivity.",
    dateTime: "2025-02-18T15:00:00",
  },
  {
    id: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1736532850073-c339d8336975?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8QkpKTXR0ZURKQTR8fGVufDB8fHx8fA%3D%3D",
    title: "Community Collaboration Projects",
    description:
      "An overview of our latest community projects and how you can get involved.",
    dateTime: "2025-02-19T11:00:00",
  },
  {
    id: "6",
    imageUrl:
      "https://images.unsplash.com/photo-1725266114143-637776246fae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfEJKSk10dGVESkE0fHxlbnwwfHx8fHw%3D",
    title: "Boosting Creativity Through Collaboration",
    description:
      "Learn how collaborative efforts at Creative Hub are driving innovation and inspiring new ideas.",
    dateTime: "2025-02-20T10:00:00",
  },
];

const RelatedContainer = () => {
  return <RelatedPresentation blogs={sampleBlogs} />;
};

export default RelatedContainer;
