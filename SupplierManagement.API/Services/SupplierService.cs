using SupplierManagement.API.DTOs;
using SupplierManagement.API.Models;
using SupplierManagement.API.Repositories;

namespace SupplierManagement.API.Services
{
    public class SupplierService : ISupplierService
    {
        private readonly ISupplierRepository _repository;

        public SupplierService(ISupplierRepository repository)
        {
            _repository = repository;
        }

        public async Task<SupplierResponseDto> AddSupplierAsync(SupplierCreateDto dto)
        {
            var supplier = new Supplier
            {
                SupplierCode = dto.SupplierCode,
                CompanyName = dto.CompanyName.Trim(),
                TelephoneNo = dto.TelephoneNo.Trim(),
                CreatedAt = DateTime.UtcNow
            };

            var created = await _repository.AddSupplierAsync(supplier);
            return MapToDto(created);
        }

        public async Task<IEnumerable<SupplierResponseDto>> SearchByCompanyNameAsync(string companyName)
        {
            var suppliers = await _repository.SearchByCompanyNameAsync(companyName);
            return suppliers.Select(MapToDto);
        }

        public async Task<IEnumerable<SupplierResponseDto>> GetAllSuppliersAsync()
        {
            var suppliers = await _repository.GetAllSuppliersAsync();
            return suppliers.Select(MapToDto);
        }

        private static SupplierResponseDto MapToDto(Supplier supplier)
        {
            return new SupplierResponseDto
            {
                Id = supplier.Id,
                SupplierCode = supplier.SupplierCode,
                CompanyName = supplier.CompanyName,
                TelephoneNo = supplier.TelephoneNo,
                CreatedAt = supplier.CreatedAt
            };
        }
    }
}
