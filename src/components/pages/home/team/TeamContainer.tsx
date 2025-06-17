import { TeamPresentation } from ".";

const TeamContainer = () => {
  const sampleTeam = [
    {
      id: "01",
      name: "Abenezer Seife",
      position: "Creative Hub Manager",
      avatarUrl:
        "https://images.unsplash.com/photo-1730061598797-4f5f9909de87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0NHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
    },
    {
      id: "02",
      name: "Helina Tesfaye",
      position: "Creative Hub Host",
      avatarUrl:
        "https://images.unsplash.com/photo-1601317106123-d6c7b7f8e1a7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzNXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
    },
    {
      id: "03",
      name: "Mesay Bizuneh",
      position: "Stakeholders Coordinator",
      avatarUrl:
        "https://images.unsplash.com/photo-1734312621516-3d258db95e76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    },
    {
      id: "04",
      name: "Yafet Girum",
      position: "Fab Lab Manager",
      avatarUrl:
        "https://images.unsplash.com/photo-1731505183738-4987ea65caa5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1OXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
    },
  ];

  return <TeamPresentation team={sampleTeam} />;
};

export default TeamContainer;
