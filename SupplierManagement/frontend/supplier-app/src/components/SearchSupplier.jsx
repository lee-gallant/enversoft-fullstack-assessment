import { useState } from 'react';
import supplierService from '../services/supplierService';
import { toast } from 'react-toastify';

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
                <h2 className="card-title">Search Suppliers</h2>
                <p className="card-description">
                    Search for a supplier by company name to find their telephone number.
                </p>
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
                        <button type="button" className="btn btn-secondary" onClick={handleClear}>
                            Clear
                        </button>
                    </div>
                </form>
            </div>

            {hasSearched && (
                <div className="card results-card">
                    <h3>Search Results {results.length > 0 && '(' + results.length + ' found)'}</h3>
                    {results.length > 0 ? (
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
                    ) : (
                        <p className="no-results">No suppliers found matching your search</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchSupplier;
