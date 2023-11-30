interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tools: string[];
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Description of Project 1.dasnfihainfn ajodj asopjdopasj japodjopj krenkgjsopnfgsn odsn sn pofns df",
    imageUrl: "https://placekitten.com/300/200",
    tools: [
      "meow",
      "meow2",
      "meow3",
      "meow213",
      "meow23213",
      "meow3454",
      "meow12",
      "meow23",
      "meow30",
      "meow22",
      "meow21",
      "meow31",
    ],
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2.",
    imageUrl: "https://placekitten.com/300/201",
    tools: ["meow", "meow2", "meow3"],
  },
  // Add more projects as needed
];
