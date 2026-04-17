using SupplierManagement.API.Models;

namespace SupplierManagement.API.Repositories
{
    public interface ISupplierRepository
    {
        Task<Supplier> AddSupplierAsync(Supplier supplier);
        Task<IEnumerable<Supplier>> SearchByCompanyNameAsync(string companyName);
        Task<IEnumerable<Supplier>> GetAllSuppliersAsync();
    }
}
