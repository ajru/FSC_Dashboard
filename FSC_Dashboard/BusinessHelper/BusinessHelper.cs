using FSC_Dashboard_BL;
using FSC_Dashboard_Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FSC_Dashboard.BusinessHelper
{
    public static class BusinessHelper
    {
        #region Dashboard
        public static FlightSection Get_Flight_International_Domastic_Departs(SearchCriteria search)
        {
            Dashboard_BL BL = new Dashboard_BL();
            return BL.Get_Flight_International_Domastic_Departs(search);
        }

        public static List<FlightSection> Get_flight_type_analysis_chart(SearchCriteria search)
        {
            Dashboard_BL BL = new Dashboard_BL();
            return BL.Get_flight_type_analysis_chart(search);
        }
        public static List<FlightSection> Get_disruption_chart(SearchCriteria search)
        {
            Dashboard_BL BL = new Dashboard_BL();
            return BL.Get_disruption_chart(search);
        }
        public static List<FlightSection> Get_Aircraft_Utilization_chart(SearchCriteria search)
        {
            Dashboard_BL BL = new Dashboard_BL();
            return BL.Get_Aircraft_Utilization_chart(search);
        }
        public static List<DelayAnalysis> Get_Delay_analysis_chart(SearchCriteria search)
        {
            Dashboard_BL BL = new Dashboard_BL();
            return BL.Get_Delay_analysis_chart(search);
        }

        public static List<DelayAnalysis> Get_PannedVsActual_chart(SearchCriteria search)
        {
            Dashboard_BL BL = new Dashboard_BL();
            return BL.Get_PannedVsActual_chart(search);
        }
        #endregion Dashboard

        #region OTP Dashboard
        public static List<DelayAnalysis> OTPGet_Delay_analysis_chart(SearchCriteria search)
        {
            OTPDashboard_BL BL = new OTPDashboard_BL();
            return BL.OTPGet_Delay_analysis_chart(search);
        }
        public static List<DelayAnalysis> OTPGetSector_Delay_analysis_chart(SearchCriteria search)
        {
            OTPDashboard_BL BL = new OTPDashboard_BL();
            return BL.OTPGetSector_Delay_analysis_chart(search);
        }
        public static List<DelayAnalysis> OTPGetFlight_Delay_analysis_chart(SearchCriteria search)
        {
            OTPDashboard_BL BL = new OTPDashboard_BL();
            return BL.OTPGetFlight_Delay_analysis_chart(search);
        }
        public static List<DelayAnalysis> OTPGetRegion_Delay_analysis_chart(SearchCriteria search)
        {
            OTPDashboard_BL BL = new OTPDashboard_BL();
            return BL.OTPGetRegion_Delay_analysis_chart(search);
        }
        public static List<FlightSection> OTPGet_flight_type_analysis_chart(SearchCriteria search)
        {
            OTPDashboard_BL BL = new OTPDashboard_BL();
            return BL.OTPGet_flight_type_analysis_chart(search);
        }
        #endregion OTP Dashboard

        #region LoadFactor Dashboard
        #endregion LoadFactor Dashboard

        #region PlannedVsActual Dashboard
        public static List<DelayAnalysis> PVAGet_PannedVsActual_chart(SearchCriteria search)
        {
            PvADashboard_BL BL = new PvADashboard_BL();
            return BL.PVAGet_PannedVsActual_chart(search);
        }
        public static List<DelayAnalysis> PVAGet_DayWiseBlockHours_chart(SearchCriteria search)
        {
            PvADashboard_BL BL = new PvADashboard_BL();
            return BL.PVAGet_DayWiseBlockHours_chart(search);
        }
        #endregion PlannedVsActual Dashboard

        #region AircraftUtilization Dashboard
        public static List<FlightSection> AUGet_Aircraft_Utilization_chart(SearchCriteria search)
        {
            AUDashboard_BL BL = new AUDashboard_BL();
            return BL.AUGet_Aircraft_Utilization_chart(search);
        }
        public static List<FlightSection> AUGet_FleetWiseBifurcation_chart(SearchCriteria search)
        {
            AUDashboard_BL BL = new AUDashboard_BL();
            return BL.AUGet_FleetWiseBifurcation_chart(search);
        }
        public static List<FlightSection> AUGet_AircraftTailNoWise_chart(SearchCriteria search)
        {
            AUDashboard_BL BL = new AUDashboard_BL();
            return BL.AUGet_AircraftTailNoWise_chart(search);
        }




        #endregion AircraftUtilization Dashboard

        #region Disruption Dashboard

        public static List<FlightSection> Get_Flight_Type_Wise_Delay_chart(SearchCriteria search)
        {
            DisruptionDashboard_BL BL = new DisruptionDashboard_BL();
            return BL.Get_Flight_Type_Wise_Delay_chart(search);
        }

        public static List<FlightSection> Get_Delay_Wise_Flight_Count_chart(SearchCriteria search)
        {
            DisruptionDashboard_BL BL = new DisruptionDashboard_BL();
            return BL.Get_Delay_Wise_Flight_Count_chart(search);
        }

        public static List<FlightSection> Get_Flight_Wise_Delay_chart(SearchCriteria search)
        {
            DisruptionDashboard_BL BL = new DisruptionDashboard_BL();
            return BL.Get_Flight_Wise_Delay_chart(search);
        }

        public static List<FlightSection> Get_Flight_Type_Wise_Diverted_chart(SearchCriteria search)
        {
            DisruptionDashboard_BL BL = new DisruptionDashboard_BL();
            return BL.Get_Flight_Type_Wise_Diverted_chart(search);
        }

        public static List<FlightSection> Get_Diverted_Flight_Details_chart(SearchCriteria search)
        {
            DisruptionDashboard_BL BL = new DisruptionDashboard_BL();
            return BL.Get_Diverted_Flight_Details_chart(search);
        }

        public static List<FlightSection> Get_Flight_Type_Wise_Cancelled_chart(SearchCriteria search)
        {
            DisruptionDashboard_BL BL = new DisruptionDashboard_BL();
            return BL.Get_Flight_Type_Wise_Cancelled_chart(search);
        }

        public static List<FlightSection> Get_Cancellation_Flight_Details_chart(SearchCriteria search)
        {
            DisruptionDashboard_BL BL = new DisruptionDashboard_BL();
            return BL.Get_Cancellation_Flight_Details_chart(search);
        }


        #endregion Disruption Dashboard

    }
}