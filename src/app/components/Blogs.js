import Image from "next/image";
import blog1 from "/public/img/blog/1.jpeg";
import blog2 from "/public/img/blog/2.jpg";

const blogs = [
  {
    id: 1,
    title: "Tips Belajar Programming",
    category: "Programming",
    alt: "Programming",
    image: blog1,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta numquam natus aperiam iusto?",
  },
  {
    id: 1,
    title: "Review Mechanical Keyboard",
    category: "Teknologi",
    alt: "Mechanical Keyboard",
    image: blog2,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repellendus, unde recusandae nesciunt rem optio.",
  },
  {
    id: 1,
    title: "Menikmati Secangkir Kopi",
    category: "Gaya Hidup",
    alt: "Coffee",
    image: blog2,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, reprehenderit.",
  },
];
export default function Blogs() {
  return (
    <section id="blog" className="pt-36 pb-32 bg-slate-100 dark:bg-dark">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
            <h2 className="font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
              Tulisan Terbaru
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
              numquam natus aperiam iusto?
            </p>
          </div>
        </div>
        <div className="flex flex-wrap" id="blog-content">
          {blogs.map((item) => (
            <Blog blog={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog({ blog }) {
  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-800">
        <Image src={blog.image} alt={blog.alt} />
        <div className="py-8 px-4">
          <h3>
            <a
              href="#"
              className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white"
            >
              {blog.title}
            </a>
          </h3>
          <p className="font-medium text-base text-secondary mb-4">
            {blog.content}
          </p>
          <a
            href="#"
            className="font-medium text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
          >
            Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
}
