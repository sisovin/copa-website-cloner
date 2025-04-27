import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">Copa Website Cloner</div>
        <div className="flex space-x-4">
          <Link href="/">
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/cloner">
            <a className="hover:underline">Cloner</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
