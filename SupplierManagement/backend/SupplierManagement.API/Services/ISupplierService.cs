using SupplierManagement.API.DTOs;

namespace SupplierManagement.API.Services
{
    public interface ISupplierService
    {
        Task<SupplierResponseDto> AddSupplierAsync(SupplierCreateDto dto);
        Task<IEnumerable<SupplierResponseDto>> SearchByCompanyNameAsync(string companyName);
        Task<IEnumerable<SupplierResponseDto>> GetAllSuppliersAsync();
    }
}
