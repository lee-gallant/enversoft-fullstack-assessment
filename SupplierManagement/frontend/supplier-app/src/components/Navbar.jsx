import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>🧹 Supplier Management</h1>
                <span className="subtitle">Cleaning Products Inc.</span>
            </div>
            <div className="navbar-links">
                <Link
                    to="/"
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                    ➕ Add Supplier
                </Link>
                <Link
                    to="/search"
                    className={`nav-link ${location.pathname === '/search' ? 'active' : ''}`}
                >
                    🔍 Search Suppliers
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
