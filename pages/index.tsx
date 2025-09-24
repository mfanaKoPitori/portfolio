import Image from "next/image";

export default function Home() {
  return (
    <section className="grid space-y-2 py-4 bg-gray-100 lg:space-y-8 text-xs w-11/12 sm:w-3/4 md:w-3/5 2xl:w-3/6 mt-2 mb-2 justify-self-center rounded-md">
      <header className="grid justify-center justify-items-center space-y-4">
        <Image
          src="/headshot.jpg"
          width={120}
          height={120}
          alt="picture of raymond Mawina"
          className="rounded-full"
        />

        <section className="grid justify-self-center text-left space-y-2 w-2/3 p-2 border-2 border-green-400/40 rounded-md">
          <h1 className="text-center font-bold">
            Raymond Mawina / GlaringWizard
          </h1>
          <p>I am a Software Developer based in Pretoria, South Africa.</p>

          <p>
            I specialize in backend because I love tinkering with complex
            systems that enable to the web and other systems.
          </p>

          <p>
            When not in my technical wizardry mode, you will find that I am
            sleeping, walking the trails, or deep into a book.
          </p>
        </section>
      </header>
    </section>
  );
}
