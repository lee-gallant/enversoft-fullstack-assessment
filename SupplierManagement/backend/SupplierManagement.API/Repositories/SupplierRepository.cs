using Microsoft.EntityFrameworkCore;
using SupplierManagement.API.Data;
using SupplierManagement.API.Models;

namespace SupplierManagement.API.Repositories
{
    public class SupplierRepository : ISupplierRepository
    {
        private readonly AppDbContext _context;

        public SupplierRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Supplier> AddSupplierAsync(Supplier supplier)
        {
            _context.Suppliers.Add(supplier);
            await _context.SaveChangesAsync();
            return supplier;
        }

        public async Task<IEnumerable<Supplier>> SearchByCompanyNameAsync(string companyName)
        {
            return await _context.Suppliers
                .Where(s => s.CompanyName.ToLower().Contains(companyName.ToLower()))
                .OrderBy(s => s.CompanyName)
                .ToListAsync();
        }

        public async Task<IEnumerable<Supplier>> GetAllSuppliersAsync()
        {
            return await _context.Suppliers
                .OrderBy(s => s.CompanyName)
                .ToListAsync();
        }
    }
}
