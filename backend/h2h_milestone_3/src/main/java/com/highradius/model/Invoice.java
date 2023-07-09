package com.highradius.model;

public class Invoice {
	//Data Fields
	private Integer slNo;
    private Integer customerOrderId;
    private Integer salesOrg;
    private String distributionChannel;
    private String division;
    private Double releasedCreditValue;
    private String purchaseOrderType;
    private Integer companyCode;
    private String orderCreationDate;
    private String orderCreationTime;
    private String creditControlArea;
    private Integer soldToParty;
    private Double orderAmount;
    private String requestedDeliveryDate;
    private String orderCurrency;
    private String creditStatus;
    private Integer customerNumber;
    private Double amountInUSD;
    private Long uniqueCustId;
    
    //Parameterized constructors
	public Invoice(Integer slNo, Integer customerOrderId, Integer salesOrg, String distributionChannel, String division,
			Double releasedCreditValue, String purchaseOrderType, Integer companyCode, String orderCreationDate,
			String orderCreationTime, String creditControlArea, Integer soldToParty, Double orderAmount,
			String requestedDeliveryDate, String orderCurrency, String creditStatus, Integer customerNumber,
			Double amountInUSD, Long uniqueCustId) {
		super();
		this.slNo = slNo;
		this.customerOrderId = customerOrderId;
		this.salesOrg = salesOrg;
		this.distributionChannel = distributionChannel;
		this.division = division;
		this.releasedCreditValue = releasedCreditValue;
		this.purchaseOrderType = purchaseOrderType;
		this.companyCode = companyCode;
		this.orderCreationDate = orderCreationDate;
		this.orderCreationTime = orderCreationTime;
		this.creditControlArea = creditControlArea;
		this.soldToParty = soldToParty;
		this.orderAmount = orderAmount;
		this.requestedDeliveryDate = requestedDeliveryDate;
		this.orderCurrency = orderCurrency;
		this.creditStatus = creditStatus;
		this.customerNumber = customerNumber;
		this.amountInUSD = amountInUSD;
		this.uniqueCustId = uniqueCustId;
	}
    
//	public Invoice() {
//		// TODO Auto-generated constructor stub
//	}

	//Getters & Setters
	public Integer getSlNo() {
		return slNo;
	}

	public void setSlNo(Integer slNo) {
		this.slNo = slNo;
	}

	public Integer getCustomerOrderId() {
		return customerOrderId;
	}

	public void setCustomerOrderId(Integer customerOrderId) {
		this.customerOrderId = customerOrderId;
	}

	public Integer getSalesOrg() {
		return salesOrg;
	}

	public void setSalesOrg(Integer salesOrg) {
		this.salesOrg = salesOrg;
	}

	public String getDistributionChannel() {
		return distributionChannel;
	}

	public void setDistributionChannel(String distributionChannel) {
		this.distributionChannel = distributionChannel;
	}

	public String getDivision() {
		return division;
	}

	public void setDivision(String division) {
		this.division = division;
	}

	public Double getReleasedCreditValue() {
		return releasedCreditValue;
	}

	public void setReleasedCreditValue(Double releasedCreditValue) {
		this.releasedCreditValue = releasedCreditValue;
	}

	public String getPurchaseOrderType() {
		return purchaseOrderType;
	}

	public void setPurchaseOrderType(String purchaseOrderType) {
		this.purchaseOrderType = purchaseOrderType;
	}

	public Integer getCompanyCode() {
		return companyCode;
	}

	public void setCompanyCode(Integer companyCode) {
		this.companyCode = companyCode;
	}

	public String getOrderCreationDate() {
		return orderCreationDate;
	}

	public void setOrderCreationDate(String orderCreationDate) {
		this.orderCreationDate = orderCreationDate;
	}

	public String getOrderCreationTime() {
		return orderCreationTime;
	}

	public void setOrderCreationTime(String orderCreationTime) {
		this.orderCreationTime = orderCreationTime;
	}

	public String getCreditControlArea() {
		return creditControlArea;
	}

	public void setCreditControlArea(String creditControlArea) {
		this.creditControlArea = creditControlArea;
	}

	public Integer getSoldToParty() {
		return soldToParty;
	}

	public void setSoldToParty(Integer soldToParty) {
		this.soldToParty = soldToParty;
	}

	public Double getOrderAmount() {
		return orderAmount;
	}

	public void setOrderAmount(Double orderAmount) {
		this.orderAmount = orderAmount;
	}

	public String getRequestedDeliveryDate() {
		return requestedDeliveryDate;
	}

	public void setRequestedDeliveryDate(String requestedDeliveryDate) {
		this.requestedDeliveryDate = requestedDeliveryDate;
	}

	public String getOrderCurrency() {
		return orderCurrency;
	}

	public void setOrderCurrency(String orderCurrency) {
		this.orderCurrency = orderCurrency;
	}

	public String getCreditStatus() {
		return creditStatus;
	}

	public void setCreditStatus(String creditStatus) {
		this.creditStatus = creditStatus;
	}

	public Integer getCustomerNumber() {
		return customerNumber;
	}

	public void setCustomerNumber(Integer customerNumber) {
		this.customerNumber = customerNumber;
	}

	public Double getAmountInUSD() {
		return amountInUSD;
	}

	public void setAmountInUSD(Double amountInUSD) {
		this.amountInUSD = amountInUSD;
	}

	public Long getUniqueCustId() {
		return uniqueCustId;
	}

	public void setUniqueCustId(Long uniqueCustId) {
		this.uniqueCustId = uniqueCustId;
	}
	
}