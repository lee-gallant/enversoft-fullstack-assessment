using System.ComponentModel.DataAnnotations;

namespace SupplierManagement.API.Models
{
    public class Supplier
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int SupplierCode { get; set; }

        [Required]
        [MaxLength(255)]
        public string CompanyName { get; set; } = string.Empty;

        [Required]
        [MaxLength(50)]
        public string TelephoneNo { get; set; } = string.Empty;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
