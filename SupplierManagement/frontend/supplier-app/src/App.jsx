import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import AddSupplier from './components/AddSupplier';
import SearchSupplier from './components/SearchSupplier';
import './App.css';

function HeaderIcon({ type }) {
    if (type === 'directory') {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm4.5 2.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Zm0 4a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
                    fill="currentColor"
                />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 3a.75.75 0 0 1 .75.75v7.5h7.5a.75.75 0 0 1 0 1.5h-7.5v7.5a.75.75 0 0 1-1.5 0v-7.5h-7.5a.75.75 0 0 1 0-1.5h7.5v-7.5A.75.75 0 0 1 12 3Z"
                fill="currentColor"
            />
        </svg>
    );
}

function DashboardLayout() {
    const location = useLocation();
    const currentDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(new Date());

    const pageMeta = {
        '/': {
            title: 'Supplier Intake',
            description: 'Capture a new supplier record and store it in the system.',
            icon: 'intake'
        },
        '/search': {
            title: 'Supplier Directory',
            description: 'Search suppliers by company name and view contact information.',
            icon: 'directory'
        }
    };

    const meta = pageMeta[location.pathname] || pageMeta['/'];

    return (
        <div className="app dashboard-shell">
            <Navbar />
            <div className="dashboard-main">
                <header className="topbar">
                    <div>
                        <h1 className="topbar-title">
                            <span className="title-icon">
                                <HeaderIcon type={meta.icon} />
                            </span>
                            {meta.title}
                        </h1>
                        <p>{meta.description}</p>
                    </div>
                    <div className="topbar-date">{currentDate}</div>
                </header>

                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<AddSupplier />} />
                        <Route path="/search" element={<SearchSupplier />} />
                    </Routes>
                </main>

                <footer className="footer">
                    <p>Supplier Management System | Cleaning Products Inc.</p>
                </footer>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    theme="colored"
                />
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <DashboardLayout />
        </Router>
    );
}

export default App;
