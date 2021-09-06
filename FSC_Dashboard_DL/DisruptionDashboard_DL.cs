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
    public class DisruptionDashboard_DL
    {

        SqlHelper sqlHelper;

        FlightSection obj_FlightSection;
        DelayAnalysis obj_DelayAnalysis;

        public DisruptionDashboard_DL()
        {
            string connStr = ConfigurationManager.AppSettings["dbConnection"].ToString();
            sqlHelper = new SqlHelper(connStr);
            // logEx = new LogExceptionDL();
        }


        public List<FlightSection> Get_Flight_Type_Wise_Delay_chart(SearchCriteria search)
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

        public List<FlightSection> Get_Delay_Wise_Flight_Count_chart(SearchCriteria search)
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

        public List<FlightSection> Get_Flight_Wise_Delay_chart(SearchCriteria search)
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

        public List<FlightSection> Get_Flight_Type_Wise_Diverted_chart(SearchCriteria search)
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

        public List<FlightSection> Get_Diverted_Flight_Details_chart(SearchCriteria search)
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

        public List<FlightSection> Get_Flight_Type_Wise_Cancelled_chart(SearchCriteria search)
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

        public List<FlightSection> Get_Cancellation_Flight_Details_chart(SearchCriteria search)
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

    }
}
