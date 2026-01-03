import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <>
            <nav className="fixed top-0 right-0 left-0 bg-black/90 backdrop-blur-xl z-20 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image 
                            src="/logo.png"
                            alt="E-Batash-logo"
                            width={500}
                            height={500}
                            className="h-11 w-auto"
                            priority
                        />
                    </Link>

                    {/* Right side actions */}
                </div>
            </nav>
        </>
    );
};

export default Header;
