using Microsoft.AspNetCore.Mvc;
using SupplierManagement.API.DTOs;
using SupplierManagement.API.Services;

namespace SupplierManagement.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SuppliersController : ControllerBase
    {
        private readonly ISupplierService _supplierService;

        public SuppliersController(ISupplierService supplierService)
        {
            _supplierService = supplierService;
        }

        [HttpPost]
        public async Task<ActionResult<SupplierResponseDto>> AddSupplier([FromBody] SupplierCreateDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = await _supplierService.AddSupplierAsync(dto);
            return CreatedAtAction(nameof(SearchSuppliers), new { companyName = result.CompanyName }, result);
        }

        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<SupplierResponseDto>>> SearchSuppliers([FromQuery] string companyName)
        {
            if (string.IsNullOrWhiteSpace(companyName))
                return BadRequest("Company name search term is required.");

            var results = await _supplierService.SearchByCompanyNameAsync(companyName);
            return Ok(results);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SupplierResponseDto>>> GetAllSuppliers()
        {
            var results = await _supplierService.GetAllSuppliersAsync();
            return Ok(results);
        }
    }
}
