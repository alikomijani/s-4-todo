const data = [
  {
    id: 1,
    name: "bay list",
    description: "these items need for home",
    items: [
      {
        id: 1,
        title: "milk",
        status: false,
      },
      {
        id: 2,
        title: "cheese",
        status: false,
      },
    ],
  },
  {
    id: 2,
    name: "bay list",
    description: "these items need for home",
    items: [
      {
        id: 1,
        title: "milk",
        status: false,
      },
      {
        id: 2,
        title: "cheese",
        status: false,
      },
    ],
  },
];

export const makeRandomID = () => {
  return parseInt(Math.random() * 10000);
};

export default data;
