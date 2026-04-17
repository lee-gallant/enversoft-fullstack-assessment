import { useState } from 'react';
import supplierService from '../services/supplierService';
import { toast } from 'react-toastify';

function SearchIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M10.5 3a7.5 7.5 0 0 1 5.93 12.09l4.24 4.23a.75.75 0 1 1-1.06 1.06l-4.23-4.24A7.5 7.5 0 1 1 10.5 3Zm0 1.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
                fill="currentColor"
            />
        </svg>
    );
}

function DirectoryIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm4.5 2.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Zm0 4a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
                fill="currentColor"
            />
        </svg>
    );
}

function SearchSupplier() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchTerm.trim()) {
            toast.error('Please enter a company name to search');
            return;
        }

        setIsLoading(true);
        setHasSearched(true);
        try {
            const data = await supplierService.searchSuppliers(searchTerm.trim());
            setResults(data);
            if (data.length === 0) {
                toast.info('No suppliers found matching your search.');
            }
        } catch (error) {
            toast.error('Search failed. Please try again.');
            console.error(error);
            setResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClear = () => {
        setSearchTerm('');
        setResults([]);
        setHasSearched(false);
    };

    return (
        <div className="page-container">
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">
                        <span className="heading-icon">
                            <SearchIcon />
                        </span>
                        Search Suppliers
                    </h2>
                    <p className="card-description">
                        Search for a supplier by company name to find their telephone number.
                    </p>
                </div>

                <form onSubmit={handleSearch} className="form search-form">
                    <div className="form-group">
                        <label htmlFor="searchTerm">Company Name</label>
                        <input
                            type="text"
                            id="searchTerm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Enter company name to search..."
                            disabled={isLoading}
                        />
                    </div>
                    <div className="button-group">
                        <button type="submit" className="btn btn-primary" disabled={isLoading}>
                            {isLoading ? 'Searching...' : 'Search'}
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleClear}
                            disabled={isLoading}
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>

            {!hasSearched && (
                <div className="card empty-state">
                    <p className="empty-state-icon" aria-hidden="true">
                        <DirectoryIcon />
                    </p>
                    <h3>No search yet</h3>
                    <p>Enter a company name above and click Search to view supplier matches.</p>
                </div>
            )}

            {hasSearched && (
                <div className="card results-card">
                    <h3>
                        Search Results {results.length > 0 && !isLoading && '(' + results.length + ' found)'}
                    </h3>

                    {isLoading ? (
                        <div className="loading-state" role="status" aria-live="polite">
                            <span className="loading-dot" />
                            Fetching suppliers...
                        </div>
                    ) : results.length > 0 ? (
                        <div className="table-wrap">
                            <table className="results-table">
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Company Name</th>
                                        <th>Telephone Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((supplier) => (
                                        <tr key={supplier.id}>
                                            <td className="supplier-code">{supplier.supplierCode}</td>
                                            <td>{supplier.companyName}</td>
                                            <td className="phone-number">{supplier.telephoneNo}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="empty-state compact">
                            <p className="empty-state-icon" aria-hidden="true">
                                <SearchIcon />
                            </p>
                            <p className="no-results">No suppliers found matching your search.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchSupplier;
