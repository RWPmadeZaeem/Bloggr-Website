import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Logo Section */}
        <div className="w-full md:w-1/2 lg:w-2/12 mb-8 md:mb-0">
          <Logo width="100px" />
          <p className="text-sm mt-2">
            &copy; Copyright 2023. All Rights Reserved by DevUI.
          </p>
        </div>

        {/* Company Section */}
        <div className="w-full md:w-1/2 lg:w-2/12 mb-8 md:mb-0">
          <h3 className="text-xs font-semibold uppercase mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:text-gray-400">
                Features
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/" className="hover:text-gray-400">
                Pricing
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/" className="hover:text-gray-400">
                Affiliate Program
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                Press Kit
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="w-full md:w-1/2 lg:w-2/12 mb-8 md:mb-0">
          <h3 className="text-xs font-semibold uppercase mb-4">Support</h3>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:text-gray-400">
                Account
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/" className="hover:text-gray-400">
                Help
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/" className="hover:text-gray-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                Customer Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Legals Section */}
        <div className="w-full md:w-1/2 lg:w-3/12">
          <h3 className="text-xs font-semibold uppercase mb-4">Legals</h3>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:text-gray-400">
                Terms &amp; Conditions
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/" className="hover:text-gray-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">
                Licensing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
