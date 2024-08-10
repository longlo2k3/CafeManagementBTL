using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CafeManagement.Models.Entities
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        [RegularExpression(@"^\d[A-Za-z0-9]{9}$", ErrorMessage = "VerifiKey must be 10 characters long and start with a digit.")]
        public string VerifiKey { get; set; }

    }
}
