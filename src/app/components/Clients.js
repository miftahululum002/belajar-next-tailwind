import Image from "next/image";
import client1 from "/public/img/clients/gojek.png";
import client2 from "/public/img/clients/google.webp";
import client3 from "/public/img/clients/shopee.svg";
import client4 from "/public/img/clients/tokopedia.png";
const clients = [
  { id: 1, name: "Gojek", image: client1 },
  { id: 2, name: "Google", image: client2 },
  { id: 3, name: "Shopee", image: client3 },
  { id: 4, name: "Tokopedia", image: client4 },
];
export default function Clients() {
  return (
    <section id="client" className="pt-36 pb-32 bg-slate-900 dark:bg-slate-300">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Klien</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
              Yang Pernah Bekerja Sama
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate obcaecati asperiores quaerat.
            </p>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            {clients.map((item) => (
              <Client client={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Client({ client }) {
  return (
    <a
      href="#"
      className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
    >
      <Image src={client.image} alt={client.name}></Image>
    </a>
  );
}
