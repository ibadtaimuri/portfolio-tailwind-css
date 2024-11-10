import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => (
    <>
        <Navbar />
        <main className="container mx-auto mt-6 mb-6 p-4 text-center rounded-md text-gray-50">
            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
            <p className="text-lg mb-4">
                If you’d like to get in touch, feel free to reach out via email or phone.
            </p>
            <div className="flex flex-col items-center mt-6 space-y-4">
                <p className="text-lg">
                    <strong>Email:</strong> <a href="mailto:ibad.taimuri@icloud.com" className="text-[#563A9C] hover:underline hover:text-[#FA4032]">ibad.taimuri@icloud.com</a>
                </p>
                <p className="text-lg">
                    <strong>Phone:</strong> +92 (332) 062-2777
                </p>
            </div>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Socials</h2>
                <div className="flex justify-center space-x-6 text-gray-600">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-pink-500">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-600">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-700">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </main>
        <Footer />
    </>
);

export default Contact;