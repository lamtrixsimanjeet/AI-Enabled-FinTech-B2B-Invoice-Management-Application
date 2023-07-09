package com.highradius.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.highradius.model.Invoice;
import com.google.gson.Gson;
import com.highradius.implementation.*;

// Servlet to load data from database
@WebServlet("/DataLoadingServlet")
public class DataLoadingServlet extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//Defining the requirements
		// Set the "Access-Control-Allow-Origin" header to allow requests from any domain

		response.addHeader("Access-Control-Allow-Origin", "*");
		InvoiceDao dao = new InvoiceDaoImpl();
		List<Invoice> invoices = new ArrayList<Invoice>();
		//getting invoices from database 
		invoices = dao.getInvoice();
		//If not present
		String errorString = "Sorry! No invoices found!";
		Gson gson = new Gson();
		String jsonResponse = gson.toJson(errorString);
		//If present convert to json
		if (invoices.size() > 0) {
			jsonResponse = gson.toJson(invoices);
		}
		//Displaying sucessful
		response.setHeader("Content-Type", "application/json");
		response.getWriter().append(jsonResponse);
	}


}