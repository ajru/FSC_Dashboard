using FSC_Dashboard_Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FSC_Dashboard.Controllers
{
    public class DashboardController : Controller
    {
       
        #region Charts Views
        public ActionResult Index()
        {
            if (String.IsNullOrEmpty(Convert.ToString(Session["Username"])))
                return RedirectToAction("login", "User");

            return View();
        }
        public ActionResult Onload_Dashboard()
        {
            if (String.IsNullOrEmpty(Convert.ToString(Session["Username"])))
                return RedirectToAction("login", "User");

            return View();
        }
        public ActionResult OTP_Dashboard()
        {
            if (String.IsNullOrEmpty(Convert.ToString(Session["Username"])))
                return RedirectToAction("login", "User");

            return View();
        }
        public ActionResult Load_Factor_Dashboard()
        {
            if (String.IsNullOrEmpty(Convert.ToString(Session["Username"])))
                return RedirectToAction("login", "User");

            return View();
        }
        public ActionResult Planned_Vs_Actual_Block_Hours_Dashboard()
        {
            if (String.IsNullOrEmpty(Convert.ToString(Session["Username"])))
                return RedirectToAction("login", "User");

            return View();
        }
        public ActionResult Aircraft_Utilization_Dashboard()
        {
            if (String.IsNullOrEmpty(Convert.ToString(Session["Username"])))
                return RedirectToAction("login", "User");

            return View();
        }
        public ActionResult Disruption_Dashboard()
        {
            if (String.IsNullOrEmpty(Convert.ToString(Session["Username"])))
                return RedirectToAction("login", "User");

            return View();
        }

        #endregion

        #region Chart Callbacks

        public JsonResult Get_Flight_International_Domastic_Departs(string fromDate, string toDate,string ddValue)
        {
            FlightSection flightSection = new FlightSection();

            SearchCriteria search = new SearchCriteria();
            search.FromDate = fromDate;
            search.ToDate = toDate;
            search.DateDropDownValue = ddValue;

            flightSection = BusinessHelper.BusinessHelper.Get_Flight_International_Domastic_Departs(search);         
            return Json(new { result = flightSection }, JsonRequestBehavior.AllowGet);
        }


        #endregion



    }
}