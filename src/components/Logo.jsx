
import { FaBlog } from 'react-icons/fa'; // Import the desired icon from Font Awesome

function BloggrLogo() {
  return (
    <div className="flex items-center text-white">
      <FaBlog className="text-4xl mr-2" /> {/* Icon */}
      <span className="text-xl font-bold">Bloggr</span> {/* Bloggr text */}
    </div>
  );
}

export default BloggrLogo;
