import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const About = () => (
    <>
        <Navbar />
        <main className="container mx-auto mt-10 p-4 text-center">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-lg mb-4">
                With years of experience in web development and IT Infrastructure Management, I have a solid foundation in various technologies.
            </p>
            <section className="text-left mb-10">
                <h2 className="text-3xl font-bold text-center mb-6 mt-6">Skills</h2>
                <div className="grid grid-cols-2 gap-4 md:gap-6 text-[#563A9C]">
                    <span className="bg-gray-100 p-3 rounded text-center">HTML</span>
                    <span className="bg-gray-100 p-3 rounded text-center">CSS</span>
                    <span className="bg-gray-100 p-3 rounded text-center">JavaScript</span>
                    <span className="bg-gray-100 p-3 rounded text-center">Python</span>
                    <span className="bg-gray-100 p-3 rounded text-center">PHP</span>
                    <span className="bg-gray-100 p-3 rounded text-center">MongoDB</span>
                    <span className="bg-gray-100 p-3 rounded text-center">Firewall Administration & Management</span>
                    <span className="bg-gray-100 p-3 rounded text-center">System Administration</span>
                    <span className="bg-gray-100 p-3 rounded text-center">Windows Server Administration</span>
                    <span className="bg-gray-100 p-3 rounded text-center">Network Administration</span>
                </div>
            </section>
        </main>
        <Footer />
    </>
);

export default About;