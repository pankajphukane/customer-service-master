using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public partial class TblCustomerMaster
    {
        public long Id { get; set; }
        public int? CustomerNo { get; set; }


        [RegularExpression(@"^[a-zA-Z''-'\s]{1,40}$", ErrorMessage = "special characters are not allowed.")]

        public string CustomerName { get; set; }
    }
}
