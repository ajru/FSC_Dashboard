using FSC_Dashboard_Entity;
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


        #region Disruption Dashboard

        public JsonResult Get_Flight_Type_Wise_Delay_chart(string fromDate, string toDate, string ddValue)
        {
            List<FlightSection> LstFlightTypeAnalysis = new List<FlightSection>();

            SearchCriteria search = new SearchCriteria();
            search.FromDate = fromDate;
            search.ToDate = toDate;
            search.DateDropDownValue = ddValue;

            LstFlightTypeAnalysis = BusinessHelper.BusinessHelper.Get_Flight_Type_Wise_Delay_chart(search);
            var json = from rs in LstFlightTypeAnalysis
                       select new
                       {
                           Pid = rs.Pid.ToString(),
                           FlightType = rs.FlightType.ToString(),
                           Value = rs.Value.ToString(),

                       };

            return Json(json, JsonRequestBehavior.AllowGet);
        }



        public JsonResult Get_Delay_Wise_Flight_Count_chart(string fromDate, string toDate, string ddValue)
        {
            List<FlightSection> LstFlightTypeAnalysis = new List<FlightSection>();

            SearchCriteria search = new SearchCriteria();
            search.FromDate = fromDate;
            search.ToDate = toDate;
            search.DateDropDownValue = ddValue;

            LstFlightTypeAnalysis = BusinessHelper.BusinessHelper.Get_Delay_Wise_Flight_Count_chart(search);
            var json = from rs in LstFlightTypeAnalysis
                       select new
                       {
                           Pid = rs.Pid.ToString(),
                           FlightType = rs.FlightType.ToString(),
                           Value = rs.Value.ToString(),

                       };

            return Json(json, JsonRequestBehavior.AllowGet);
        }



        public JsonResult Get_Flight_Wise_Delay_chart(string fromDate, string toDate, string ddValue)
        {
            List<FlightSection> LstFlightTypeAnalysis = new List<FlightSection>();

            SearchCriteria search = new SearchCriteria();
            search.FromDate = fromDate;
            search.ToDate = toDate;
            search.DateDropDownValue = ddValue;

            LstFlightTypeAnalysis = BusinessHelper.BusinessHelper.Get_Flight_Wise_Delay_chart(search);
            var json = from rs in LstFlightTypeAnalysis
                       select new
                       {
                           Pid = rs.Pid.ToString(),
                           FlightType = rs.FlightType.ToString(),
                           Value = rs.Value.ToString(),

                       };

            return Json(json, JsonRequestBehavior.AllowGet);
        }



        public JsonResult Get_Flight_Type_Wise_Diverted_chart(string fromDate, string toDate, string ddValue)
        {
            List<FlightSection> LstFlightTypeAnalysis = new List<FlightSection>();

            SearchCriteria search = new SearchCriteria();
            search.FromDate = fromDate;
            search.ToDate = toDate;
            search.DateDropDownValue = ddValue;

            LstFlightTypeAnalysis = BusinessHelper.BusinessHelper.Get_Flight_Type_Wise_Diverted_chart(search);
            var json = from rs in LstFlightTypeAnalysis
                       select new
                       {
                           Pid = rs.Pid.ToString(),
                           FlightType = rs.FlightType.ToString(),
                           Value = rs.Value.ToString(),

                       };

            return Json(json, JsonRequestBehavior.AllowGet);
        }



        public JsonResult Get_Diverted_Flight_Details_chart(string fromDate, string toDate, string ddValue)
        {
            List<FlightSection> LstFlightTypeAnalysis = new List<FlightSection>();

            SearchCriteria search = new SearchCriteria();
            search.FromDate = fromDate;
            search.ToDate = toDate;
            search.DateDropDownValue = ddValue;

            LstFlightTypeAnalysis = BusinessHelper.BusinessHelper.Get_Diverted_Flight_Details_chart(search);
            var json = from rs in LstFlightTypeAnalysis
                       select new
                       {
                           Pid = rs.Pid.ToString(),
                           FlightType = rs.FlightType.ToString(),
                           Value = rs.Value.ToString(),

                       };

            return Json(json, JsonRequestBehavior.AllowGet);
        }



        public JsonResult Get_Flight_Type_Wise_Cancelled_chart(string fromDate, string toDate, string ddValue)
        {
            List<FlightSection> LstFlightTypeAnalysis = new List<FlightSection>();

            SearchCriteria search = new SearchCriteria();
            search.FromDate = fromDate;
            search.ToDate = toDate;
            search.DateDropDownValue = ddValue;

            LstFlightTypeAnalysis = BusinessHelper.BusinessHelper.Get_Flight_Type_Wise_Cancelled_chart(search);
            var json = from rs in LstFlightTypeAnalysis
                       select new
                       {
                           Pid = rs.Pid.ToString(),
                           FlightType = rs.FlightType.ToString(),
                           Value = rs.Value.ToString(),

                       };

            return Json(json, JsonRequestBehavior.AllowGet);
        }



        public JsonResult Get_Cancellation_Flight_Details_chart(string fromDate, string toDate, string ddValue)
        {
            List<FlightSection> LstFlightTypeAnalysis = new List<FlightSection>();

            SearchCriteria search = new SearchCriteria();
            search.FromDate = fromDate;
            search.ToDate = toDate;
            search.DateDropDownValue = ddValue;

            LstFlightTypeAnalysis = BusinessHelper.BusinessHelper.Get_Cancellation_Flight_Details_chart(search);
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