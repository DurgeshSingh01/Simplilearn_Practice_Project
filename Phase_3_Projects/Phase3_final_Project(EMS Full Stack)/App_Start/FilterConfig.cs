﻿using System.Web;
using System.Web.Mvc;

namespace EMS_Full_Stack
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
