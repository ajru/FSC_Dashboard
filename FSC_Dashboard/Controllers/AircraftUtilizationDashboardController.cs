using FSC_Dashboard_Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FSC_Dashboard.Controllers
{
    public class AircraftUtilizationDashboardController : Controller
    {
        #region Aircraft Utilization
        // GET: AircraftUtilizationDashboard
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Aircraft_Utilization_Dashboard()
        {
            if (String.IsNullOrEmpty(Convert.ToString(Session["Username"])))
                return RedirectToAction("login", "User");

            return View();
        }

        public JsonResult AUGet_Aircraft_Utilization_chart(string fromDate, string toDate, string ddValue)
        {
            List<FlightSection> LstAircraftUtilization = new List<FlightSection>();

            SearchCriteria search = new SearchCriteria();
            search.FromDate = fromDate;
            search.ToDate = toDate;
            search.DateDropDownValue = ddValue;

            LstAircraftUtilization = BusinessHelper.BusinessHelper.AUGet_Aircraft_Utilization_chart(search);
            var json = from rs in LstAircraftUtilization
                       select new
                       {
                           FlightType = rs.FlightType.ToString(),
                           Value = rs.Value.ToString(),
                       };

            return Json(json, JsonRequestBehavior.AllowGet);
        }
        public JsonResult AUGet_FleetWiseBifurcation_chart(string fromDate, string toDate, string ddValue)
        {
            List<FlightSection> LstFlightTypeAnalysis = new List<FlightSection>();

            SearchCriteria search = new SearchCriteria();
            search.FromDate = fromDate;
            search.ToDate = toDate;
            search.DateDropDownValue = ddValue;

            LstFlightTypeAnalysis = BusinessHelper.BusinessHelper.AUGet_FleetWiseBifurcation_chart(search);
            var json = from rs in LstFlightTypeAnalysis
                       select new
                       {
                           Pid = rs.Pid.ToString(),
                           FlightType = rs.FlightType.ToString(),
                           Value = rs.Value.ToString(),

                       };

            return Json(json, JsonRequestBehavior.AllowGet);
        }
        public JsonResult AUGet_AircraftTailNoWise_chart(string fromDate, string toDate, string ddValue)
        {
            List<FlightSection> LstFlightTypeAnalysis = new List<FlightSection>();

            SearchCriteria search = new SearchCriteria();
            search.FromDate = fromDate;
            search.ToDate = toDate;
            search.DateDropDownValue = ddValue;

            LstFlightTypeAnalysis = BusinessHelper.BusinessHelper.AUGet_AircraftTailNoWise_chart(search);
            var json = from rs in LstFlightTypeAnalysis
                       select new
                       {
                           Pid = rs.Pid.ToString(),
                           FlightType = rs.FlightType.ToString(),
                           Value = rs.Value.ToString(),

                       };

            return Json(json, JsonRequestBehavior.AllowGet);
        }
        #endregion

    }
}