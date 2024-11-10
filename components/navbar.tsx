import Link from 'next/link';

const Navbar = () => (
    <nav className="bg-[#563A9C] p-4">
        <div className="container mx-auto flex justify-between items-center text-white">
            <h1 className="text-2xl font-bold">Ibad Taimuri</h1>
            <ul className="flex gap-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
);

export default Navbar;