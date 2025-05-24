import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const leftNavLinks = ['Education', 'Experience', 'Contact', 'About'];
    const rightNavLinks = ['Skills', 'Profiles', 'Projects', 'Interests'];
    const allNavLinks = [...leftNavLinks, ...rightNavLinks];

    return (
        // Main navigation container: semi-transparent background, fixed at the top, full width, high z-index.
        // Added backdrop-blur-xl for the glass effect.
        <nav className="bg-white/5 text-white font-inter fixed w-full z-50 backdrop-blur-xl">

            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center border border-gray-700 rounded-md">

                <div className="hidden md:flex justify-center items-center gap-4 font-ubuntu text-lg">
                    {leftNavLinks.map((link) => (
                        <a key={link} href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-gray-300 transition-colors duration-200 cursor-pointer">
                            {link}
                        </a>
                    ))}
                </div>

                <div className="text-2xl font-bold tracking-wide font-playwrite text-center">
                    Rahul Birawat
                </div>

                <div className="hidden md:flex justify-center items-center gap-4 font-ubuntu text-lg">
                    {rightNavLinks.map((link) => (
                        <a key={link} href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-gray-300 transition-colors duration-200 cursor-pointer">
                            {link}
                        </a>
                    ))}
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white transition-transform"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <div
                className={`md:hidden bg-[#1f1f1f]/70 backdrop-blur-md px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pt-2 pb-4' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="flex flex-col space-y-4 text-lg">
                    {allNavLinks.map((link) => (
                        <li
                            key={link}
                            onClick={() => setIsOpen(false)}
                            className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                        >
                            <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`}>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
