using FSC_Dashboard_Entity;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FSC_Dashboard_DL
{
    public class Dashboard_DL
    {

        SqlHelper sqlHelper;
        //LogExceptionDL logEx = null;

        FlightSection obj_FlightSection;

        public Dashboard_DL()
        {
            string connStr = ConfigurationManager.AppSettings["dbConnection"].ToString();
            sqlHelper = new SqlHelper(connStr);
            // logEx = new LogExceptionDL();
        }




        #region Flight Section

        public FlightSection Get_Flight_International_Domastic_Departs(SearchCriteria search)
        {           
            try
            {
                SqlCommand cmd = sqlHelper.GetStoreProcedureCommand("[fsc].[FSC_Dashboard_Total_Domestic_international_flightCount]");
           
                sqlHelper.AddParameter(cmd, "@FromDate", SqlDbType.VarChar, 100, ParameterDirection.Input, search.FromDate);
                sqlHelper.AddParameter(cmd, "@ToDate", SqlDbType.VarChar, 100, ParameterDirection.Input, search.ToDate);
                sqlHelper.AddParameter(cmd, "@DateDropDownValue", SqlDbType.VarChar, 100, ParameterDirection.Input, search.DateDropDownValue);

                SqlDataReader Dr = sqlHelper.ExecuteReader(cmd);
                if (Dr == null || Dr.HasRows == false)
                {
                    //logEx.LogExceptionToDB(null, "No records returned from SP-H_ValidateUser", "Login - ValidateUser", 2);
                }

                if (Dr.HasRows)
                {
                    while (Dr.Read())
                    {
                        obj_FlightSection = new FlightSection();
                        obj_FlightSection.InterNational_Flight = Convert.ToString(Dr["InterNational_Flight"]);
                        obj_FlightSection.Domestic_Flight = Convert.ToString(Dr["Domestic_Flight"]);
                        obj_FlightSection.Total = Convert.ToString(Dr["Total"]);
                        obj_FlightSection.International_FlightDeparture = Convert.ToString(Dr["International_FlightDeparture"]);
                        obj_FlightSection.Domestic_Flight_Departure = Convert.ToString(Dr["Domestic_Flight_Departure"]);
                        //obj_FlightSection.sectortype = Convert.ToString(Dr["sectortype"]);                        
                    }
                }
            }
            catch (Exception ex)
            {
                string str = ex.Message;
            }
            return obj_FlightSection;
        }


        #endregion


    }
}
