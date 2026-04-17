import { useState } from 'react';
import supplierService from '../services/supplierService';
import { toast } from 'react-toastify';

function AddSupplier() {
    const [supplierCode, setSupplierCode] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [telephoneNo, setTelephoneNo] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!supplierCode || !companyName.trim() || !telephoneNo.trim()) {
            toast.error('Please fill in all fields');
            return;
        }

        setIsLoading(true);
        try {
            await supplierService.addSupplier({
                supplierCode: parseInt(supplierCode),
                companyName: companyName.trim(),
                telephoneNo: telephoneNo.trim()
            });
            toast.success('Supplier "' + companyName + '" added successfully!');
            setSupplierCode('');
            setCompanyName('');
            setTelephoneNo('');
        } catch (error) {
            toast.error('Failed to add supplier. Please try again.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="page-container">
            <div className="card">
                <h2 className="card-title">Add New Supplier</h2>
                <p className="card-description">
                    Enter the supplier details below to add them to the database.
                </p>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="supplierCode">Supplier Code</label>
                        <input
                            type="number"
                            id="supplierCode"
                            value={supplierCode}
                            onChange={(e) => setSupplierCode(e.target.value)}
                            placeholder="e.g. 939"
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            type="text"
                            id="companyName"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="e.g. Focus Rooms (Pty) Ltd"
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telephoneNo">Telephone Number</label>
                        <input
                            type="tel"
                            id="telephoneNo"
                            value={telephoneNo}
                            onChange={(e) => setTelephoneNo(e.target.value)}
                            placeholder="e.g. 0820776910"
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={isLoading}>
                        {isLoading ? 'Adding...' : 'Add Supplier'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddSupplier;
