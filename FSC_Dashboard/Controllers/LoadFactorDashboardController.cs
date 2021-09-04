using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FSC_Dashboard.Controllers
{
    public class LoadFactorDashboardController : Controller
    {
        // GET: LoadFactorDashboard
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Load_Factor_Dashboard()
        {
            if (String.IsNullOrEmpty(Convert.ToString(Session["Username"])))
                return RedirectToAction("login", "User");

            return View();
        }
       
    }
}