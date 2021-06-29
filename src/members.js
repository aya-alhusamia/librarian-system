import laila from "./pics/laila.jfif";
import reem from "./pics/reem.jfif";
import male1 from "./pics/male1.jfif";
import male2 from "./pics/male2.jfif";
import male3 from "./pics/male4.png";

const members = [
  {
    id: 1,
    firstName: "Aziz",
    lastName: "AlSaffar",
    slug: "aziz-alsaffar",
    currentlyBorrowedBooks: [3, 9],
    membership: "gold", // can borrow 3 books
    img: male1,
  },
  {
    id: 2,
    firstName: "Hashim",
    lastName: "Behbehani",
    slug: "hashim-behbehani",
    currentlyBorrowedBooks: [5],
    membership: "gold", // can borrow 3 books
    img: male2,
  },
  {
    id: 3,
    firstName: "Alhamza",
    lastName: "Abdulmonem",
    slug: "alhmaza-abdulmonem",
    currentlyBorrowedBooks: [1, 2],
    membership: "silver", // can borrow 2 books
    img: male3,
  },
  {
    id: 4,
    firstName: "Reem",
    lastName: "AlHasawi",
    slug: "reem-alhasawi",
    currentlyBorrowedBooks: [],
    membership: "platinum", // can borrow 5 books
    img: reem,
  },
  {
    id: 5,
    firstName: "Laila",
    lastName: "AlKandery",
    slug: "laila-alkandery",
    currentlyBorrowedBooks: [10, 7, 8],
    membership: "platinum", // can borrow 5 books
    img: laila,
  },
];

export default members;
