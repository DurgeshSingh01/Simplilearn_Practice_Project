using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BlogTrackerApp.Models
{
    public class EmpModel
    {
        [Required()]
        [Key]
        public int Passcode { get; set; }
        public string EmailID { get; set; }
        public string Name { get; set; }
        public DateTime DateOfJoining { get; set; }
    }
}