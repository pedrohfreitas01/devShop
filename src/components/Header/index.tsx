import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full px-1 bg-amber-50">
      <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto">
        <Link to="/" className="font-bold text-2xl">Dev Shop</Link>
        <Link to="/cart" className="relative">
          <FiShoppingCart size={24} color="#121212" />
          <span className="absolute px-2.5 bg-amber-300 rounded-2xl w-6 h-6 flex items-center justify-center text-white text-xs -right-5 -top-3" >2</span>
        </Link>
      </nav>
    </header>
  );
}
