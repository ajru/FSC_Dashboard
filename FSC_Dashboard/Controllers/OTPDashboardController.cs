using FSC_Dashboard_Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FSC_Dashboard.Controllers
{
    public class OTPDashboardController : Controller
    {
        // GET: OTPDashboard
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult OTP_Dashboard()
        {
            if (String.IsNullOrEmpty(Convert.ToString(Session["Username"])))
                return RedirectToAction("login", "User");

            return View();
        }
        

        #region OverallOTP
        public JsonResult OTPGet_Delay_analysis_chart(string fromDate, string toDate, string ddValue)
        {
            List<DelayAnalysis> LstFlightTypeAnalysis = new List<DelayAnalysis>();

            SearchCriteria search = new SearchCriteria();
            search.FromDate = fromDate;
            search.ToDate = toDate;
            search.DateDropDownValue = ddValue;

            LstFlightTypeAnalysis = BusinessHelper.BusinessHelper.OTPGet_Delay_analysis_chart(search);
            var json = from rs in LstFlightTypeAnalysis
                       select new
                       {
                           GroupCode = rs.GroupCode.ToString(),
                           DelayCount = rs.DelayCount.ToString(),
                       };

            return Json(json, JsonRequestBehavior.AllowGet);
        }
        #endregion OverallOTP

        #region Region wise OTP
        public JsonResult OTPGetRegion_Delay_analysis_chart(string fromDate, string toDate, string ddValue)
        {
            List<DelayAnalysis> LstFlightTypeAnalysis = new List<DelayAnalysis>();

            SearchCriteria search = new SearchCriteria();
            search.FromDate = fromDate;
            search.ToDate = toDate;
            search.DateDropDownValue = ddValue;

            LstFlightTypeAnalysis = BusinessHelper.BusinessHelper.OTPGetRegion_Delay_analysis_chart(search);
            var json = from rs in LstFlightTypeAnalysis
                       select new
                       {
                           GroupCode = rs.GroupCode.ToString(),
                           DelayCount = rs.DelayCount.ToString(),
                       };

            return Json(json, JsonRequestBehavior.AllowGet);
        }
        #endregion Region wise OTP

        #region Metro wise
        public JsonResult OTPGet_flight_type_analysis_chart(string fromDate, string toDate, string ddValue)
        {
            List<FlightSection> LstFlightTypeAnalysis = new List<FlightSection>();

            SearchCriteria search = new SearchCriteria();
            search.FromDate = fromDate;
            search.ToDate = toDate;
            search.DateDropDownValue = ddValue;

            LstFlightTypeAnalysis = BusinessHelper.BusinessHelper.OTPGet_flight_type_analysis_chart(search);
            var json = from rs in LstFlightTypeAnalysis
                       select new
                       {
                           Pid = rs.Pid.ToString(),
                           FlightType = rs.FlightType.ToString(),
                           Value = rs.Value.ToString(),

                       };

            return Json(json, JsonRequestBehavior.AllowGet);
        }


        #endregion Metro wise

        #region Sector wise OTP
      
        #endregion Sector wise OTP

        #region Flight wise OTP
      
        #endregion Flight wise OTP
    }
}