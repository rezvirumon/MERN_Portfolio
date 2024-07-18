import React, { useState, useEffect } from 'react';
import { MdOutlineDeviceHub } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const logoData = {
        icon: <MdOutlineDeviceHub className="" />,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNKJddOzxVMDPogvH0eKfHAe0d7Bp3jjunA&s', // Replace with your image path
        alt: "Logo"
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'winter';
        document.documentElement.setAttribute('data-theme', savedTheme);
        setIsDarkMode(savedTheme === 'night');
    }, []);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            const newTheme = newMode ? 'night' : 'winter';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            return newMode;
        });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prevOpen) => !prevOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prevOpen) => !prevOpen);
    };

    return (
        <nav className="bg-base-100 dark:bg-base-100 shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-3xl font-bold">
                                {logoData.imageUrl ? (
                                    <img src={logoData.imageUrl} alt={logoData.alt} className="h-10 w-24 object-cover" />
                                ) : (
                                    logoData.icon
                                )}
                            </Link>
                        </div>
                        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                            <div className="relative">
                                {/* Projects link with dropdown */}
                                <button
                                    onClick={toggleDropdown}
                                    className="text-base-content dark:text-base-content hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Projects
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {/* Dropdown menu */}
                                <div className={`${isDropdownOpen ? 'block' : 'hidden'} absolute z-50 mt-1 bg-white shadow-lg rounded-md w-40`}>
                                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                        Networking
                                    </Link>
                                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                        Web Application
                                    </Link>
                                    {/* Add more dropdown items as needed */}
                                </div>
                            </div>
                            {/* End of dropdown */}
                            <Link to="/" className="text-base-content dark:text-base-content hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                                About Me
                            </Link>
                            <Link to="/" className="text-base-content dark:text-base-content hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                                Skill
                            </Link>
                            <Link to="/" className="text-base-content dark:text-base-content hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                                Events
                            </Link>
                            <Link to="/setting" className="text-base-content dark:text-base-content hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                                Setting
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center sm:hidden">
                        <button onClick={toggleMobileMenu} className="text-3xl">
                            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                    {/* Theme toggle */}
                    <div className="hidden sm:flex items-center">
                        <input
                            type="checkbox"
                            checked={isDarkMode}
                            onChange={toggleTheme}
                            className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
                        />
                    </div>
                </div>
            </div>
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="text-base-content dark:text-base-content hover:text-primary dark:hover:text-primary block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                        >
                            Projects
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {/* Dropdown menu */}
                        <div className={`${isDropdownOpen ? 'block' : 'hidden'} mt-1 bg-white shadow-lg rounded-md w-full`}>
                            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                Networking
                            </Link>
                            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                Web Application
                            </Link>
                            {/* Add more dropdown items as needed */}
                        </div>
                    </div>
                    <Link to="/" className="text-base-content dark:text-base-content hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                        About
                    </Link>
                    <Link to="/" className="text-base-content dark:text-base-content hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                        Skill
                    </Link>
                    <Link to="/" className="text-base-content dark:text-base-content hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                        Events
                    </Link>
                    <div className="flex justify-center pt-4">
                        <input
                            type="checkbox"
                            checked={isDarkMode}
                            onChange={toggleTheme}
                            className="toggle theme-controller border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
