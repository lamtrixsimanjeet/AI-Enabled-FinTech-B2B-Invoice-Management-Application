package com.highradius.implementation;
import com.highradius.connection.DatabaseConnection;
import com.highradius.model.Invoice;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
public  class InvoiceDaoImpl implements InvoiceDao {
	Connection connection = null;
	PreparedStatement ps = null;
	List<Invoice> invoices = new ArrayList<Invoice>();
	//insert invoice function to add single invoice to databse
	@Override
	public boolean insertInvoice(Invoice invoice) {
		
	
		String sql ="INSERT INTO h2h_oap (Sl_no, CUSTOMER_ORDER_ID, SALES_ORG, DISTRIBUTION_CHANNEL, DIVISION, RELEASED_CREDIT_VALUE, PURCHASE_ORDER_TYPE, COMPANY_CODE, ORDER_CREATION_DATE, ORDER_CREATION_TIME, CREDIT_CONTROL_AREA, SOLD_TO_PARTY, ORDER_AMOUNT, REQUESTED_DELIVERY_DATE, ORDER_CURRENCY, CREDIT_STATUS, CUSTOMER_NUMBER, AMOUNT_IN_USD, UNIQUE_CUST_ID) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";	
		
		try {
			connection = DatabaseConnection.getConnection();
			if(connection == null)
				return false;
			
			ps =connection.prepareStatement(sql);
			
			ps.setInt(1, invoice.getSlNo());
			ps.setInt(2, invoice.getCustomerOrderId());
			ps.setInt(3, invoice.getSalesOrg());
			ps.setString(4, invoice.getDistributionChannel());
			ps.setString(5, invoice.getDivision());
			ps.setDouble(6, invoice.getReleasedCreditValue());
			ps.setString(7, invoice.getPurchaseOrderType());
			ps.setInt(8, invoice.getCompanyCode());
			ps.setString(9, invoice.getOrderCreationDate());
			ps.setString(10, invoice.getOrderCreationTime());
			ps.setString(11, invoice.getCreditControlArea());
			ps.setInt(12, invoice.getSoldToParty());
			ps.setDouble(13, invoice.getOrderAmount());
			ps.setString(14, invoice.getRequestedDeliveryDate());
			ps.setString(15, invoice.getOrderCurrency());
			ps.setString(16, invoice.getCreditStatus());
			ps.setInt(17, invoice.getCustomerNumber());
			ps.setDouble(18, invoice.getAmountInUSD());
			ps.setLong(19, invoice.getUniqueCustId());
			
			
			int insert = ps.executeUpdate();
			return insert>0 ? true : false;
		}catch (Exception e) {
			e.printStackTrace();
			try {
				connection.close();
			}catch (SQLException e1) {
				e1.printStackTrace();
			}
			
			return false; 
		}
	}
	//Returns Invoice list from database
	@Override
	public List<Invoice> getInvoice() {
		String sql ="SELECT * FROM h2h_oap LIMIT 1000";
		try {
			connection = DatabaseConnection.getConnection();
			if(connection == null)
				return null;
			
			ps =connection.prepareStatement(sql);
	
			ResultSet resultSet = ps.executeQuery();
			while(resultSet.next()) {
				
				
				invoices.add(new Invoice(resultSet.getInt(1),resultSet.getInt(2),resultSet.getInt(3),resultSet.getString(4)
						,resultSet.getString(5),resultSet.getDouble(6),resultSet.getString(7)
						,resultSet.getInt(8),resultSet.getString(9),resultSet.getString(10)
						,resultSet.getString(11),resultSet.getInt(12),resultSet.getDouble(13)
						,resultSet.getString(14),resultSet.getString(15),resultSet.getString(16)
						,resultSet.getInt(17),resultSet.getDouble(18),resultSet.getLong(19)));
			}
			
		}catch (Exception e) {
			e.printStackTrace();
			try {
				connection.close();
			}catch (SQLException e1) {
				e1.printStackTrace();
			}
			
			
		}
		return invoices;
	}
	//updates in the database
	@Override
	public boolean updateInvoice(Invoice invoice) {
	
String sql ="UPDATE h2h_oap SET CUSTOMER_ORDER_ID=? , SALES_ORG =?, DISTRIBUTION_CHANNEL=?, DIVISION =?, RELEASED_CREDIT_VALUE =?, PURCHASE_ORDER_TYPE =?, COMPANY_CODE =?, ORDER_CREATION_DATE =?, ORDER_CREATION_TIME =? , CREDIT_CONTROL_AREA =?, SOLD_TO_PARTY =?, ORDER_AMOUNT =?, REQUESTED_DELIVERY_DATE =?, ORDER_CURRENCY =?, CREDIT_STATUS =?, CUSTOMER_NUMBER =?, AMOUNT_IN_USD =?, UNIQUE_CUST_ID =? WHERE Sl_no =?";		
		try {
			connection = DatabaseConnection.getConnection();
			if(connection == null)
				return false;
			
			ps =connection.prepareStatement(sql);
			
			
			ps.setInt(1, invoice.getCustomerOrderId());
			ps.setInt(2, invoice.getSalesOrg());
			ps.setString(3, invoice.getDistributionChannel());
			ps.setString(4, invoice.getDivision());
			ps.setDouble(5, invoice.getReleasedCreditValue());
			ps.setString(6, invoice.getPurchaseOrderType());
			ps.setInt(7, invoice.getCompanyCode());
			ps.setString(8, invoice.getOrderCreationDate());
			ps.setString(9, invoice.getOrderCreationTime());
			ps.setString(10, invoice.getCreditControlArea());
			ps.setInt(11, invoice.getSoldToParty());
			ps.setDouble(12, invoice.getOrderAmount());
			ps.setString(13, invoice.getRequestedDeliveryDate());
			ps.setString(14, invoice.getOrderCurrency());
			ps.setString(15, invoice.getCreditStatus());
			ps.setInt(16, invoice.getCustomerNumber());
			ps.setDouble(17, invoice.getAmountInUSD());
			ps.setLong(18, invoice.getUniqueCustId());
			ps.setInt(19, invoice.getSlNo());
			
			
			int insert = ps.executeUpdate();
			return insert>0 ? true : false;
		}catch (Exception e) {
			e.printStackTrace();
			try {
				connection.close();
			}catch (SQLException e1) {
				e1.printStackTrace();
			}
			
			return false; 
		}
		
	}
// Deletes rows as per the Sl_no
	@Override
	public boolean deleteInvoice(int id) {
		String sql ="DELETE FROM h2h_oap WHERE Sl_no = ?;";		
		try {
			connection = DatabaseConnection.getConnection();
			if(connection == null)
				return false;
			ps =connection.prepareStatement(sql);
			ps.setInt(1,id);
			int insert = ps.executeUpdate();
			return insert>0 ? true : false;
		}catch (Exception e) {
			e.printStackTrace();
			try {
				connection.close();
			}catch (SQLException e1) {
				e1.printStackTrace();
			}
			
			return false; 
		}
		
	}
// To Insert a list of data
	@Override
	public boolean insertInvoiceList(List<Invoice> invoices) {
		String sql ="INSERT INTO CUSTOMERS (username,passwords) VALUES(?,?)";
		try {
			connection = DatabaseConnection.getConnection();
			if(connection == null)
				return false;
			
			ps =connection.prepareStatement(sql);
			int n = 0;
			int insert =0;
			while(n<invoices.size()) {
				ps.setInt(1, invoices.get(n).getSlNo());
				ps.setInt(2, invoices.get(n).getCustomerOrderId());
				ps.setInt(3, invoices.get(n).getSalesOrg());
				ps.setString(4, invoices.get(n).getDistributionChannel());
				ps.setString(5, invoices.get(n).getDivision());
				ps.setDouble(6, invoices.get(n).getReleasedCreditValue());
				ps.setString(7, invoices.get(n).getPurchaseOrderType());
				ps.setInt(8, invoices.get(n).getCompanyCode());
				ps.setString(9, invoices.get(n).getOrderCreationDate());
				ps.setString(10, invoices.get(n).getOrderCreationTime());
				ps.setString(11, invoices.get(n).getCreditControlArea());
				ps.setInt(12, invoices.get(n).getSoldToParty());
				ps.setDouble(13, invoices.get(n).getOrderAmount());
				ps.setString(14, invoices.get(n).getRequestedDeliveryDate());
				ps.setString(15, invoices.get(n).getOrderCurrency());
				ps.setString(16, invoices.get(n).getCreditStatus());
				ps.setInt(17, invoices.get(n).getCustomerNumber());
				ps.setDouble(18, invoices.get(n).getAmountInUSD());
				ps.setLong(19, invoices.get(n).getUniqueCustId());
				
				insert = ps.executeUpdate();
				n++;
			}
			
			
			return insert>0 ? true : false;
		}catch (Exception e) {
			e.printStackTrace();
			try {
				connection.close();
			}catch (SQLException e1) {
				e1.printStackTrace();
			}
			
			return false; 
		}
	}
    
       
}