using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppEmpresa.Models
{
    public class Product
    {
        [Key]
        public int productId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? productName { get; set; }

        [Column(TypeName = "nvarchar(250)")]
        public string? productDescription { get; set; }

        //mm/dd/aaaa
        [Column(TypeName = "nvarchar(10)")]
        public string? productDateIn { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string? productDateOut { get; set; }

        public int? productPrice { get; set; }
        public int? productQuantity { get; set; }
        public bool? productIsFaulty { get; set; }
    }
}
