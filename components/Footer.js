import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4 flex-shrink-0 mt-auto">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap justify-center">
        
        </nav>
        <p className="text-center mt-4">&copy;<Link className='hover:text-yellow-400' href="https://github.com/SmiteshArolkar"> Smitesh Arolkar </Link>  . All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
