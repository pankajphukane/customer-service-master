using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public partial class TblManualCreatedRso
    {
        public long Id { get; set; }
        public string CustomerNo { get; set; }
        public string Dispatch { get; set; }
        public string RefScheduleNo { get; set; }
        public string ReceiverNo { get; set; }
        public string ReceiverAddress { get; set; }
        public string CustomerPartNo { get; set; }
        public string OrderQuantity { get; set; }
        public string ChassisNo { get; set; }
        public string ReceiverOrderNumber { get; set; }
        public string MaterialNumber { get; set; }
        public string UnloadingPointCustomer { get; set; }
        public string CylinderNo { get; set; }
        public string Carrier { get; set; }
        public string Text { get; set; }
        public string Comment { get; set; }
        public string Plant { get; set; }
        public string SenderId { get; set; }
        public string DispatchAddress { get; set; }
        public DateTime? OrderDate { get; set; }

        public string DealerNo { get; set; }
        public string ReceiverInfo { get; set; }
        public string HufPartNoOrDescription { get; set; }
        public string CodeEqColorClosure { get; set; }
        [RegularExpression(@"^[a-zA-Z''-'\s]{1,40}$", ErrorMessage = "special characters are not allowed.")]
        public string BasicAgreementNumber { get; set; }
        public string Packaging { get; set; }
        public string ReceivingPoint { get; set; }
    }
}
