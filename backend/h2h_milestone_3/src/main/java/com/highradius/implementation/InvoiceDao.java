package com.highradius.implementation;
import com.highradius.model.Invoice;
import java.util.List;
//Interface Class for Dao operation
public interface InvoiceDao {
	List<Invoice> getInvoice();
    boolean deleteInvoice(int id);
	boolean insertInvoice(Invoice invoice);
	boolean insertInvoiceList(List<Invoice> invoices);
	boolean updateInvoice(Invoice invoice);

}