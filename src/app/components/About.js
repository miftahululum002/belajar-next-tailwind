import SocialMedia from "./SocialMedia";

export default function About() {
  return (
    <section id="about" className="pt-36 pb-32 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className="font-bold uppercase text-lg text-primary mb-3">
              Tentang Saya
            </h4>
            <h2 className="font-bold text-3xl text-dark mb-5 max-w-md lg:text-4xl dark:text-white">
              Yuk, belajar web programming bersama CodoProID
            </h2>
            <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              repellendus, at totam repudiandae similique aperiam animi tempora
              expedita.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
              Mari berteman
            </h3>
            <p className="font-medium text-balance text-secondary mb-6 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              ex incidunt saepe, hic neque tenetur voluptatem? Error assumenda
              velit dolore.
            </p>
            <div className="flex items-center">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
