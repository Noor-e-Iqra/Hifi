import icons from "../../assets/icons";
import images from "../../assets/images";

export const grades = [
  {
    category: "Grade 1 - 5",
  },
  {
    category: "Grade 6 - 9",
  },
  {
    category: "Grade 10 - 11",
  },
  {
    category: "Grade 12 - 13",
    options: [
      {
        name: "Arts",
        icon: icons.arts,
      },
      {
        name: "Science",
        icon: icons.science,
      },
      {
        name: "Maths",
        icon: icons.maths,
      },
      {
        name: "Commerce",
        icon: icons.commerce,
      },
    ],
  },
];

export const srilankaProvinces = [
  "Central",
  "Eastern",
  "North Central",
  "Northern",
  "North Western",
  "Sabaragamuwa",
  "Southern",
  "Uva",
  "Western",
];

export const popular_teachers = [
  {
    name: "Cassie Valdez",
    image: images.cassie,
    subject: "Biology",
    bg: "#CF687D",
  },
  {
    name: "Paul Simons",
    image: images.paul,
    subject: "Chemistry",
    bg: "#413535C4",
  },
  {
    name: "Graham Osbor",
    image: images.graham,
    subject: "Physics",
    bg: "#E7E7E7",
  },
  {
    name: "Simon Patrick",
    image: images.veer,
    subject: "Computer Science",
    bg: "#B77E6B",
  },
];

export const popular_institutions = [
  {
    name: "Victory College",
    image: images.victory,
    subject: "Bio Science",
    rating: 4.5,
    rating_num: 413,
    bg: "#DDE1FF",
    desc: "Studying how CBD awareness and availability as it related to pain management alternatives.",
  },

  {
    name: "New Montana",
    image: images.montana,
    subject: "Bio Science",
    rating: 4.1,
    rating_num: 354,
    bg: "#FF9F92",
    desc: "Montana Higher Educational Institute. Gampaha\nmontana.gampaha@gmail.com",
  },
  {
    name: "Susipwan Institute",
    image: images.susipwan,
    subject: "Bio Science",
    rating: 3.0,
    rating_num: 745,
    bg: "#BFDDEC",
    desc: "This is a private higher education center which conducting classes for GCE AL Students.",
  },
];

export const filters = [
  { category: "Area", options: ["Island", "Province", "Districts"] },
  {
    category: "Subject",
    options: [
      "All Subjects",
      "Biology",
      "Chemistry",
      "Physics",
      "Science for Technology",
    ],
  },
];
