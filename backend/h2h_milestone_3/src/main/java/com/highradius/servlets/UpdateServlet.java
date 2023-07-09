//**** UPDATE DATA ****

package com.highradius.servlets;

import java.io.BufferedReader;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.highradius.model.*;
import com.google.gson.Gson;
import com.highradius.implementation.*;
import java.util.*;


@WebServlet("/UpdateServlet")
public class UpdateServlet extends HttpServlet {
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Invoice invoice = null;
		InvoiceDao dao = new InvoiceDaoImpl();
		Gson gson = new Gson();
		
		
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
	   
	    
		//Read Request data from the Request object
				StringBuffer requestBody = new StringBuffer();
				BufferedReader reader = request.getReader();
				String line = null;
				
				while ((line = reader.readLine()) != null) {
					requestBody.append(line);
				}
				
				Invoice i = gson.fromJson(requestBody.toString(), Invoice.class);
				
				
				boolean insert = dao.updateInvoice(i);
				
				Map<String, String> responseJson = new HashMap<String, String>();
				responseJson.put("message", "Data not updated");
				if (insert) {
					responseJson.put("message", "Data updated");
				}
				response.getWriter().append(gson.toJson(responseJson));
	}
}