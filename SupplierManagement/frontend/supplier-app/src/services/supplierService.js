import axios from 'axios';

const API_BASE_URL = 'http://localhost:5163/api/suppliers';

const supplierService = {
    addSupplier: async (supplierData) => {
        const response = await axios.post(API_BASE_URL, supplierData, {
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data;
    },

    searchSuppliers: async (companyName) => {
        const response = await axios.get(`${API_BASE_URL}/search`, {
            params: { companyName }
        });
        return response.data;
    },

    getAllSuppliers: async () => {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    }
};

export default supplierService;
