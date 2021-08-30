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

        public static List<DelayAnalysis> Get_Delay_analysis_chart(SearchCriteria search)
        {
            Dashboard_BL BL = new Dashboard_BL();
            return BL.Get_Delay_analysis_chart(search);
        }



    }
}