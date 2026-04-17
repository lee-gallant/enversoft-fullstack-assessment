namespace SupplierManagement.API.DTOs
{
    public class SupplierResponseDto
    {
        public int Id { get; set; }
        public int SupplierCode { get; set; }
        public string CompanyName { get; set; } = string.Empty;
        public string TelephoneNo { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
    }
}
