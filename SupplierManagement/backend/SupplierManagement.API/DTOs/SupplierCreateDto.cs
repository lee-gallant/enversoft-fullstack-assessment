using System.ComponentModel.DataAnnotations;

namespace SupplierManagement.API.DTOs
{
    public class SupplierCreateDto
    {
        [Required(ErrorMessage = "Supplier code is required")]
        public int SupplierCode { get; set; }

        [Required(ErrorMessage = "Company name is required")]
        [MaxLength(255)]
        public string CompanyName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Telephone number is required")]
        [MaxLength(50)]
        public string TelephoneNo { get; set; } = string.Empty;
    }
}
