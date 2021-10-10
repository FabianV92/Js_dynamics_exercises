/*
Java Script:

include a "Anrede" Attribute to the contact.
The script shall generate the anrede "Sehr geehrter Herr Müller"
Das Script soll eine Briefanrede, abhängig von „Herr oder Frau“ generieren.
*/


function Anrede()
{   
    var attributeType = Xrm.Page.getAttribute("tsc_anrede").getValue();
    var firstname = Xrm.Page.getAttribute("firstname").getValue();
    var lastname = Xrm.Page.getAttribute("lastname").getValue();

    // Female txt
    if (attributeType === true) {
        Xrm.Page.getAttribute("tsc_briefanrede").setValue("Sehr geehrte Frau" + firstname + " " + lastname);
    }
    // Male txt
    else
        Xrm.Page.getAttribute("tsc_briefanrede").setValue("Sehr geehrter Herr" + firstname + " " + lastname);
}