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

export const hospitals = [
  {
    name: "Hospital New York",
    image: images.newyork_hos,
    desc: "Lorem ipsum dolor sit amet adipiscing elit, sed",
    rate: 85,
  },
  {
    name: "Care Hospital",
    image: images.care_hos,
    desc: "Lorem ipsum dolor sit amet adipiscing elit, sed",
    rate: 50,
  },
  {
    name: "Hospital Taxes",
    image: images.taxes_hos,
    desc: "Lorem ipsum dolor sit amet adipiscing elit, sed",
    rate: 30,
  },
  {
    name: "Peace City Hospital",
    image: images.peace_city_hos,
    desc: "Lorem ipsum dolor sit amet adipiscing elit, sed",
    rate: 20,
  },
];

export const chat = [
  {
    me: true,
    msg: "Hello Doctor!!",
    time: "06:25 PM",
    type: "text",
  },
  {
    msg: "Hello John, How are you now?",
    time: "06:25 PM",
    type: "text",
  },
];

export const blogs = [
  {
    name: "Dr. ABC",
    image: images.abc,
    desc: "Lorem ipsum dolor sit amet adipiscing elit, sed diam nonummy nibh euismod",
  },
  {
    name: "Dr. John",
    image: images.john,
    desc: "Lorem ipsum dolor sit amet adipiscing elit, sed diam nonummy nibh euismod",
  },
  {
    name: "Dr. Mobeen",
    image: images.mobeen,
    desc: "Lorem ipsum dolor sit amet adipiscing elit, sed diam nonummy nibh euismod",
  },
  {
    name: "Dr. Rose",
    image: images.rose,
    desc: "Lorem ipsum dolor sit amet adipiscing elit, sed diam nonummy nibh euismod",
  },
];

export const pes_student_filters = [
  "Medical Specialist",
  "Search by Hospital",
  "Search by Student",
  "Rotation Type",
  "Months",
  "Lowest Price First",
];

export const pes_student_best_result = [
  {
    name: "ABC",
    image: images.abc,
    desc: "24, M - USA",
  },
  {
    name: "Sulman Ali",
    image: images.john,
    desc: "24, M - USA",
  },
  {
    name: "Mobeen",
    image: images.mobeen,
    desc: "24, M - USA",
  },
  {
    name: "Rose",
    image: images.rose,
    desc: "24, M - USA",
  },
  {
    name: "Annie",
    image: images.abc,
    desc: "24, M - USA",
  },
  {
    name: "John",
    image: images.john,
    desc: "24, M - USA",
  },
  {
    name: "Moiz",
    image: images.mobeen,
    desc: "24, M - USA",
  },
  {
    name: "Rubika",
    image: images.rose,
    desc: "24, M - USA",
  },
];

export const clerkship = [
  "Anesthesia",
  "Family Medicine",
  "Internal Medicine",
  "Neurology",
  "Obstetrics/Gynecology",
  "Pathology",
  "Pediatrics",
  "Surgery",
];

export const hear = [
  "Employee/Transfern",
  "Website School / Career Services",
  "Advertisement / Website",
  "Government Employment Agency",
  "Referral",
  "Walk-in",
  "Private Employement Agency",
  "Social Site",
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sat",
  "Sun",
];

export const monthsScroll = [
  0, 0, 0, 200, 200, 200, 300, 400, 500, 650, 750, 800,
];

export const time = ["7:30 pm", "8:00 pm", "8:30 pm", "9:00 pm", "9:30 pm"];

export const gender = [
  { value: "Male" },
  { value: "Female" },
  { value: "Transgender" },
];

export const martialStatus = [
  { value: "Single" },
  { value: "Married" },
  { value: "Divorced" },
  { value: "Widowed" },
];
