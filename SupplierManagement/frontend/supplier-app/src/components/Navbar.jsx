import { Link, useLocation } from 'react-router-dom';

function NavIcon({ type }) {
    if (type === 'directory') {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M4.75 4A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20h14.5A2.75 2.75 0 0 0 22 17.25V6.75A2.75 2.75 0 0 0 19.25 4H4.75ZM7 9.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 7 9.25Zm0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Z"
                    fill="currentColor"
                />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M11.25 3.75a.75.75 0 0 1 1.5 0v7.5h7.5a.75.75 0 0 1 0 1.5h-7.5v7.5a.75.75 0 0 1-1.5 0v-7.5h-7.5a.75.75 0 0 1 0-1.5h7.5v-7.5Z"
                fill="currentColor"
            />
        </svg>
    );
}

function Navbar() {
    const location = useLocation();

    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <p className="brand-kicker">Operations</p>
                <h1>Supplier Admin</h1>
                <span>Cleaning Products Inc.</span>
            </div>

            <p className="sidebar-section-title">Navigation</p>
            <nav className="sidebar-links">
                <Link
                    to="/"
                    className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                    <span className="sidebar-link-icon">
                        <NavIcon type="intake" />
                    </span>
                    <span>Intake</span>
                </Link>
                <Link
                    to="/search"
                    className={`sidebar-link ${location.pathname === '/search' ? 'active' : ''}`}
                >
                    <span className="sidebar-link-icon">
                        <NavIcon type="directory" />
                    </span>
                    <span>Directory</span>
                </Link>
            </nav>
        </aside>
    );
}

export default Navbar;
