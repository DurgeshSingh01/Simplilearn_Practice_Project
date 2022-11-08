using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BlogTrackerApp.Models
{
    public class BlogModel
    {
        [Required()]
        [Key]
        public int BlogID { get; set; }
        public string Title { get; set; }
        public string Subject { get; set; }
        public DateTime DateOfCreation { get; set; }
        public string BlogURL { get; set; }
        public string EmpEmailID { get; set; }
    }
}