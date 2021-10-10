/* 4.	Create a Java script for filtering a lookup 
Create a new option set in Account called Account category: Customer / Supplier / Partner

In the opportunity entity, the lookup to Account record shall have a specific filter.
When the user clicks on the lookup, only the accounts which are customers shall be displayed.
*/

var fetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
  "<entity name='account'>"+
    "<attribute name='name' />"+
    "<attribute name='primarycontactid' />"+
    "<attribute name='telephone1' />"+
    "<attribute name='accountid' />"+
    "<order attribute='name' descending='false' />"+
    "<filter type='and'>"+
    "<condition attribute='new_account_category' operator='eq' value='100000000' />"+
    "</filter>"+
    "</entity>"+
    "</fetch>";


    function CustomerLookupFilter() 
    {    
        Xrm.Page.getControl("parentaccountid").addPreSearch(function () 
        {
            Xrm.Page.getControl("parentaccountid").addCustomFilter(fetchXml);
        });
   }
   


/*
var customerCompanies = new Array();
    function RetrieveAllAccountRecords() {  
    
    Xrm.WebApi.retrieveMultipleRecords("account", "?fetchXml= " + fetchXml).then(
    
        function success(result) {
        for(let i = 0; i < result.entities.length; i++)
        {
            customerCompanies.push(result.entities[i].accountid); 
            console.log(result.entities[i].name);
            console.log(customerCompanies[i]);
        }
       Xrm.Utility.alertDialog(customerCompanies,null);    
    },
    function (error) {
    // Handle error conditions
    Xrm.Utility.alertDialog(error.message, null);
    });
   }
*/

