using FSC_Dashboard_Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FSC_Dashboard.Controllers
{
    public class PlannedVsActualDashboardController : Controller
    {
        // GET: PlannedVsActualDashboard
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Planned_Vs_Actual_Block_Hours_Dashboard()
        {
            if (String.IsNullOrEmpty(Convert.ToString(Session["Username"])))
                return RedirectToAction("login", "User");

            return View();
        }

        public JsonResult PVAGet_PannedVsActual_chart(string fromDate, string toDate, string ddValue)
        {
            List<DelayAnalysis> LstFlightTypeAnalysis = new List<DelayAnalysis>();

            SearchCriteria search = new SearchCriteria();
            search.FromDate = fromDate;
            search.ToDate = toDate;
            search.DateDropDownValue = ddValue;

            LstFlightTypeAnalysis = BusinessHelper.BusinessHelper.PVAGet_PannedVsActual_chart(search);
            var json = from rs in LstFlightTypeAnalysis
                       select new
                       {
                           FlightDate = rs.FlightDate.ToString(),
                           ActualFlightTime = rs.ActualFlightTime.ToString(),
                           PlannedFlightTime = rs.PlannedFlightTime.ToString()
                       };

            return Json(json, JsonRequestBehavior.AllowGet);
        }

        public JsonResult PVAGet_DayWiseBlockHours_chart(string fromDate, string toDate, string ddValue)
        {
            List<DelayAnalysis> LstFlightTypeAnalysis = new List<DelayAnalysis>();

            SearchCriteria search = new SearchCriteria();
            search.FromDate = fromDate;
            search.ToDate = toDate;
            search.DateDropDownValue = ddValue;

            LstFlightTypeAnalysis = BusinessHelper.BusinessHelper.PVAGet_DayWiseBlockHours_chart(search);
            var json = from rs in LstFlightTypeAnalysis
                       select new
                       {
                           FlightDate = rs.FlightDate.ToString(),
                           ActualFlightTime = rs.ActualFlightTime.ToString(),
                           PlannedFlightTime = rs.PlannedFlightTime.ToString()
                       };

            return Json(json, JsonRequestBehavior.AllowGet);
        }

    }
}