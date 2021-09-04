using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FSC_Dashboard.Controllers
{
    public class DisruptionDashboardController : Controller
    {
        // GET: DisruptionDashboard
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Disruption_Dashboard()
        {
            if (String.IsNullOrEmpty(Convert.ToString(Session["Username"])))
                return RedirectToAction("login", "User");

            return View();
        }
    }
}