namespace PMS.API.Models
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Titulo { get; set; }
        public string Data { get; set; }
        public string Hora { get; set; }
        public decimal Price { get; set; }
    }
}
