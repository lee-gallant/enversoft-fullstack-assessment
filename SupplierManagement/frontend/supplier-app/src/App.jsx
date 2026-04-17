import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import AddSupplier from './components/AddSupplier';
import SearchSupplier from './components/SearchSupplier';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<AddSupplier />} />
                        <Route path="/search" element={<SearchSupplier />} />
                    </Routes>
                </main>
                <footer className="footer">
                    <p>2024 Supplier Management System - Cleaning Products Inc. | POC v1.0</p>
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
        </Router>
    );
}

export default App;
