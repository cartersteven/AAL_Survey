$(document).ready(function(){
    
    //Hides all content accept the homepage on load.
    $("#about, #quote, #survey, #elevation, #where, #contact").hide();
    
    //Home
    $("#homeButton").click(function(){
        
        $(".pageThing").fadeOut("fast");
        $("#home").fadeIn("fast");
        
    });
    
    //About
    $("#aboutButton").click(function(){
        
        $(".pageThing").fadeOut("fast");
        $("#about").fadeIn("fast");
        
    });
    
    //Quote
    $("#quoteButton").click(function(){
        
        $(".pageThing").fadeOut("fast");
        $("#quote").fadeIn("fast");
        
    });
    
    //Survey
    $("#surveyButton").click(function(){
        
        $(".pageThing").fadeOut("fast");
        $("#survey").fadeIn("fast");
        
    });
    
    //Elevation
     $("#elevationButton").click(function(){
        
        $(".pageThing").fadeOut("fast");
        $("#elevation").fadeIn("fast");
        
    });
    
    //Where
    $("#whereButton").click(function(){
        
        $(".pageThing").fadeOut("fast");
        $("#where").fadeIn("fast");
        
    });
    
    //Contact
    $("#ContactButton").click(function(){
        
        $(".pageThing").fadeOut("fast");
        $("#Contact").fadeIn("fast");
        
    });
    
    
    
    
    
    
});
