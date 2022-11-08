using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BlogTrackerApp.Models
{
    public class AdminModel
    {
        public string EmailID { get; set; }
        public string Password { get; set; }
    }
}