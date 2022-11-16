using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public partial class TblCustomerPartMaster
    {
        public int CustomerPartId { get; set; }


        [RegularExpression(@"^[a-zA-Z''-'\s]{1,40}$", ErrorMessage = "special characters are not allowed.")]
        public string CustomerPartNumber { get; set; }
    }
}
