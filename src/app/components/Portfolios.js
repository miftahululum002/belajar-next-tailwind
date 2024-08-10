import Image from "next/image";
import project1 from "/public/img/portfolio/1.png";
import project2 from "/public/img/portfolio/2.png";
import project3 from "/public/img/portfolio/3.png";
import project4 from "/public/img/portfolio/4.png";
import project5 from "/public/img/portfolio/5.png";
import project6 from "/public/img/portfolio/6.png";
import project7 from "/public/img/portfolio/7.png";
import project8 from "/public/img/portfolio/8.png";
import project9 from "/public/img/portfolio/9.png";
import project10 from "/public/img/portfolio/10.png";
import project11 from "/public/img/portfolio/11.png";
import project12 from "/public/img/portfolio/12.png";
import project13 from "/public/img/portfolio/13.png";
import project14 from "/public/img/portfolio/14.png";
import project15 from "/public/img/portfolio/15.png";
import project16 from "/public/img/portfolio/16.png";

let projects = [
  {
    id: 1,
    name: "Project 1",
    image: project1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quia amet quis sed nobis officiis vel quaerat rem. Recusandae?",
  },
  {
    id: 2,
    name: "Project 2",
    image: project2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quia amet quis sed nobis officiis vel quaerat rem. Recusandae?",
  },
  {
    id: 3,
    name: "Project 3",
    image: project3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quia amet quis sed nobis officiis vel quaerat rem. Recusandae?",
  },
  {
    id: 4,
    name: "Project 4",
    image: project4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quia amet quis sed nobis officiis vel quaerat rem. Recusandae?",
  },
  {
    id: 5,
    name: "Project 5",
    image: project5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quia amet quis sed nobis officiis vel quaerat rem. Recusandae?",
  },
  {
    id: 6,
    name: "Project 6",
    image: project6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quia amet quis sed nobis officiis vel quaerat rem. Recusandae?",
  },
  {
    id: 7,
    name: "Project 7",
    image: project7,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quia amet quis sed nobis officiis vel quaerat rem. Recusandae?",
  },
  {
    id: 8,
    name: "Project 8",
    image: project8,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quia amet quis sed nobis officiis vel quaerat rem. Recusandae?",
  },
  {
    id: 9,
    name: "Project 9",
    image: project9,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quia amet quis sed nobis officiis vel quaerat rem. Recusandae?",
  },
  {
    id: 10,
    name: "Project 10",
    image: project10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quia amet quis sed nobis officiis vel quaerat rem. Recusandae?",
  },
  {
    id: 11,
    name: "Project 11",
    image: project11,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quia amet quis sed nobis officiis vel quaerat rem. Recusandae?",
  },
  {
    id: 12,
    name: "Project 12",
    image: project12,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quia amet quis sed nobis officiis vel quaerat rem. Recusandae?",
  },
  {
    id: 13,
    name: "Project 13",
    image: project13,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quia amet quis sed nobis officiis vel quaerat rem. Recusandae?",
  },
  {
    id: 14,
    name: "Project 14",
    image: project14,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quia amet quis sed nobis officiis vel quaerat rem. Recusandae?",
  },
  {
    id: 15,
    name: "Project 15",
    image: project15,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quia amet quis sed nobis officiis vel quaerat rem. Recusandae?",
  },
  {
    id: 16,
    name: "Project 16",
    image: project16,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quia amet quis sed nobis officiis vel quaerat rem. Recusandae?",
  },
];

export default function Portfolios() {
  return (
    <section
      id="portfolio"
      className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portofolio
            </h4>
            <h2 className="font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
              Project Terbaru
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi quia amet quis sed nobis officiis vel quaerat rem.
              Recusandae?
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {projects.map((item) => (
            <Portfolio item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio({ item }) {
  return (
    <div className="mb-12 p-4 md:w-1/2">
      <div className="rounded-md shadow-md overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          className="relative z-10 mx-auto max-w-full"
          priority
        />
      </div>
      <h3 className="font-semibold text-xl text-dark mt-5 dark:text-white">
        {item.name}
      </h3>
      <p className="font-medium text-base text-secondary">{item.description}</p>
    </div>
  );
}
