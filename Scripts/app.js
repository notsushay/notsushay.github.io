/*
    Shuchi Nayak
    100774666
    2022/02/21
*/

"use strict";

//Functions called anonymously when index.html is executed

(function(){    

    //Injecting text in HomePage elements
    function DisplayHomePage()
    {
      //get parent by id
      let textArea = document.getElementById("mainContent");
      //assigning h1 element to h1 variable
      let h4 = document.createElement("h6");
      //welcome message
      h4.textContent = "This page serves as the home page for WEBD 6201 - Lab Assignment 1.";

      //append the new node to the parent mainContent div
      textArea.appendChild(h4);  

    }

    //Injecting text in Our Projects Page elements
    function DisplayProjectsPage()
    {
      //Insert Project titles by indexing through array elements of class card-title
      let cardTitles = document.getElementsByClassName("card-title");
      cardTitles[0].textContent = "Durak Game";
      cardTitles[1].textContent = "COBOL Report";
      cardTitles[2].textContent = "Java Doc Website";

      //Insert Project descriptions by indexing through array elements of class card-text
      let cardTexts = document.getElementsByClassName("card-text");
      cardTexts[0].textContent = "Created a Unity C# game featuring Russian card game Durak.";
      cardTexts[1].textContent = "Created a COBOL program with pagination outputing detailed calculations.";
      cardTexts[2].textContent = "Created a heirarchy of classes implementing JavaDocs.";
    }

    //Injecting text in Our Services Page elements
    function DisplayServicesPage()
    {
      //get an array of slide title elements by tag name
      let slideTitle = document.getElementsByTagName("h5");
      //insert slide titles using array index
      slideTitle[0].textContent = "Website Development";
      slideTitle[1].textContent = "Mobile App Development";
      slideTitle[2].textContent = "Custom Software Development";
    }

    //Injecting text in About Page elements
    function DisplayAboutPage()
    {
      //insert title
      let title = document.getElementsByClassName("card-title")[0];
      title.textContent = "Shuchi Nayak";

      //insert text
      let mainText = document.getElementsByClassName("card-text")[0];
      mainText.textContent = "This site was created by Shuchi Nayak.";
      let secondaryText = document.getElementsByClassName("card-text")[1];
      secondaryText.textContent = "Shuchi is currently a student of Computer Programming at Durham College.";
    }

    //Manipulating Contact Page elements
    function DisplayContactPage()
     {
        //get a reference to submit button relevant to this page
        let btnSubmit = document.getElementById("btnSubmit");
        
        /*****************
         * Function that displays contact information to the console 
         * as well as redirects to index.html in 3 seconds.
         * Linked to click event of btnSubmit on contact.html
         */
        //Link event listener to click event of the button
        btnSubmit.addEventListener("click", function()
        {
            //get text values from form input fields
            let name = document.getElementById("fullName").value;        
            let number = document.getElementById("contactNumber").value;
            let email = document.getElementById("emailAddress").value;
            let message = document.getElementById("message").value;

            //print values to console
            console.log("Contact Form Submitted: \nCustomer Name: " + name +
            "\nContact Number: " + number + 
            "\nEmail Address : " + email +
            "\nMessage: " + message);

            setTimeout(location.href = "index.html", 3000)
        });
    }
    
    /*****************
     * Function to dynamically inject header on every page
     * Linked to function Start() called on load event
     */
    function DisplayHeader()
    {
        //get parent by id
        let headingArea = document.getElementById("contentArea");
        //assigning h1 element to h1 variable
        let h1 = document.createElement("h1");
        //welcome message
        h1.textContent = "Welcome to the " + document.title + " page";

        //append the new node to the parent mainContent div
        headingArea.appendChild(h1);  
    }

    /*****************
     * Function to dynamically change the href link and text content from "Products" to "Projects"
     * Linked to function Start() called on load event
     */
    function ChangeToProjects()
    {
        //hook into tab element for Products
        let toChange = document.getElementsByClassName("nav-item")[1];
        //replace HTML content of the tab element
        toChange.innerHTML = `
        <a class="nav-link" href="projects.html">
        <i class="fas fa-project-diagram"></i> 
        Projects</a>
        `;
    }

    /*****************
     * Function to dynamically add the Human Resources tab on NavBar
     * Linked to function Start() called on load event
     */
     function SeeHRTab()
     {       
         //get reference to the entry point
         let parentNode = document.getElementsByClassName("navbar-nav")[0];
         //create element to be inserted
         let hRTab = document.createElement('li');
         //modify element
         hRTab.className = "nav-item";
         hRTab.innerHTML = `
         <a class="nav-link" href="humanresources.html">
         <i class="fas fa-users"></i>
          Human Resources</a>
         `;
         //insert element
         parentNode.insertBefore(hRTab, parentNode.lastElementChild);
     }

    //Determine the page being displayed and inject text accordingly
    //trigerred at load
    function Start()
    {
        switch (document.title) {
          case "Home":
            DisplayHomePage();            
            break;
          case "About Us":
            DisplayAboutPage();
            break;
          case "Our Projects":
            DisplayProjectsPage();
            break;
          case "Our Services":
            DisplayServicesPage();
            break;
          case "Contact Us":
            DisplayContactPage();
            break;
        }
        //Call header on every page
        DisplayHeader();
        //Change to Projects link on every page
        ChangeToProjects();
        //Add Human Resource in nav bar on every page
        SeeHRTab();
    }
    //Event Listener for Text injection at load event
    window.addEventListener("load", Start);    
})();