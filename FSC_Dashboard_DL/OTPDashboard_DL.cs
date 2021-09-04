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
    public class OTPDashboard_DL
    {

        SqlHelper sqlHelper;
        //LogExceptionDL logEx = null;

        FlightSection obj_FlightSection;
        DelayAnalysis obj_DelayAnalysis;

        public OTPDashboard_DL()
        {
            string connStr = ConfigurationManager.AppSettings["dbConnection"].ToString();
            sqlHelper = new SqlHelper(connStr);
            // logEx = new LogExceptionDL();
        }




        #region Metro wise 

        public List<FlightSection> OTPGet_flight_type_analysis_chart(SearchCriteria search)
        {
            List<FlightSection> lstChartData = new List<FlightSection>();
            try
            {
                SqlCommand cmd = sqlHelper.GetStoreProcedureCommand("[fsc].[FSC_Dashboard_Flight_Type_Analysis_Chart]");


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

                        obj_FlightSection.Pid = Convert.ToInt32(Dr["Pid"]);
                        obj_FlightSection.FlightType = Convert.ToString(Dr["FlightType"]);
                        obj_FlightSection.Value = Convert.ToString(Dr["Value"]);
                        //obj_Dashboardchart.BaseName = Convert.ToString(Dr["Base"]);

                        lstChartData.Add(obj_FlightSection);
                    }
                }
            }
            catch (Exception ex)
            {
                string str = ex.Message;
            }
            return lstChartData;
        }


        #endregion Metro wise 

        #region Overall OTP 

        public List<DelayAnalysis> OTPGet_Delay_analysis_chart(SearchCriteria search)
        {
            List<DelayAnalysis> lstChartData = new List<DelayAnalysis>();
            try
            {
                SqlCommand cmd = sqlHelper.GetStoreProcedureCommand("[fsc].[OnLoadDelayGroupCount1]");


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
                        obj_DelayAnalysis = new DelayAnalysis();
                        obj_DelayAnalysis.GroupCode = Convert.ToString(Dr["GroupCode"]);
                        obj_DelayAnalysis.DelayCount = Convert.ToString(Dr["DelayCount"]);

                        lstChartData.Add(obj_DelayAnalysis);
                    }
                }
            }
            catch (Exception ex)
            {
                string str = ex.Message;
            }
            return lstChartData;
        }
        #endregion Overall OTP 
        #region Sector OTP 
        public List<DelayAnalysis> OTPGetSector_Delay_analysis_chart(SearchCriteria search)
        {
            List<DelayAnalysis> lstChartData = new List<DelayAnalysis>();
            try
            {
                SqlCommand cmd = sqlHelper.GetStoreProcedureCommand("[fsc].[OnLoadDelayGroupCount1]");


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
                        obj_DelayAnalysis = new DelayAnalysis();
                        obj_DelayAnalysis.GroupCode = Convert.ToString(Dr["GroupCode"]);
                        obj_DelayAnalysis.DelayCount = Convert.ToString(Dr["DelayCount"]);

                        lstChartData.Add(obj_DelayAnalysis);
                    }
                }
            }
            catch (Exception ex)
            {
                string str = ex.Message;
            }
            return lstChartData;
        }

        #endregion Sector OTP 
        #region Flight OTP 
        public List<DelayAnalysis> OTPGetFlight_Delay_analysis_chart(SearchCriteria search)
        {
            List<DelayAnalysis> lstChartData = new List<DelayAnalysis>();
            try
            {
                SqlCommand cmd = sqlHelper.GetStoreProcedureCommand("[fsc].[OnLoadDelayGroupCount1]");


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
                        obj_DelayAnalysis = new DelayAnalysis();
                        obj_DelayAnalysis.GroupCode = Convert.ToString(Dr["GroupCode"]);
                        obj_DelayAnalysis.DelayCount = Convert.ToString(Dr["DelayCount"]);

                        lstChartData.Add(obj_DelayAnalysis);
                    }
                }
            }
            catch (Exception ex)
            {
                string str = ex.Message;
            }
            return lstChartData;
        }

        #endregion Flight OTP 
        #region Region OTP 
        public List<DelayAnalysis> OTPGetRegion_Delay_analysis_chart(SearchCriteria search)
        {
            List<DelayAnalysis> lstChartData = new List<DelayAnalysis>();
            try
            {
                SqlCommand cmd = sqlHelper.GetStoreProcedureCommand("[fsc].[OnLoadDelayGroupCount1]");


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
                        obj_DelayAnalysis = new DelayAnalysis();
                        obj_DelayAnalysis.GroupCode = Convert.ToString(Dr["GroupCode"]);
                        obj_DelayAnalysis.DelayCount = Convert.ToString(Dr["DelayCount"]);

                        lstChartData.Add(obj_DelayAnalysis);
                    }
                }
            }
            catch (Exception ex)
            {
                string str = ex.Message;
            }
            return lstChartData;
        }

        #endregion Region OTP 


    }
}
