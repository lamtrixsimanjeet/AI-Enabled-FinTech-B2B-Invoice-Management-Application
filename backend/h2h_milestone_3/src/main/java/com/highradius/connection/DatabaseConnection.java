package com.highradius.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
// It is used to connect the database and return connection credentials
public class DatabaseConnection {
	
	public static Connection getConnection() {
		Connection connection = null;
		
		String url="jdbc:mysql://localhost:3306/h2h"; 
		String user = "root";
		String password = "root";
		
		
		try {
			//Starting Connection
			Class.forName("com.mysql.cj.jdbc.Driver");
			connection = DriverManager.getConnection(url, user, password);
	
		} catch (ClassNotFoundException | SQLException e) {
		
			e.printStackTrace();
		}
		
			return connection;
		
	}
	
 
}