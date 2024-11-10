import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-10 p-4">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg">I’m a passionate IT Personal with a love for creating
            beautiful and functional websites and have succeffuly managed
            IT Infrastructures for Private entities.</p>
          <div className="mt-6 flex justify-center">
            <Image
              src="/profile.jpg"
              alt="Profile Image"
              width={200}
              height={200}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-3xl font-bold text-center mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-[#FFF7D1] rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-auto h-80 overflow-hidden">
                <Image
                  src="/ppilogo.png"
                  alt="PakPoly Project"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-bold text-[#563A9C]">PakPoly</h3>
                <p className="text-[#563A9C]">Industrial website providing information and services for clients.</p>
                <a
                  href="http://pakpoly.com.pk/home.html"
                  target="_blank"
                  className="mt-4 inline-block text-[#8B5DFF] hover:text-blue-700"
                >
                  Visit Site
                </a>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-[#FFF7D1] rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-auto h-80 overflow-hidden">
                <Image
                  src="/ppcillogo.png"
                  alt="Polystyrene Project"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-bold text-[#563A9C]">Polystyrene</h3>
                <p className="text-[#563A9C]">A platform offering polystyrene-based products and solutions.</p>
                <a
                  href="https://polystyrene.com.pk/"
                  target="_blank"
                  className="mt-4 inline-block text-[#8B5DFF] hover:text-blue-700"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
