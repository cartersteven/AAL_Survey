$(document).ready(function(){
    
    //Hides all content accept the homepage on load.
    $("#about, #quote, #survey, #elevation, #where, #contact").hide();
    
    //Home
    $("#homeButton").click(function(){
        
        $(".pageThing").hide("fast");
        $("#home").show("fast");
        
    });
    
    //About
    $("#aboutButton").click(function(){
        
        $(".pageThing").hide("fast");
        $("#about").show("fast");
        
    });
    
    //Quote
    $("#quoteButton").click(function(){
        
        $(".pageThing").hide("fast");
        $("#quote").show("fast");
        
    });
    
    //Survey
    $("#surveyButton").click(function(){
        
        $(".pageThing").hide("fast");
        $("#survey").show("fast");
        
    });
    
    //Elevation
     $("#elevationButton").click(function(){
        
        $(".pageThing").hide("fast");
        $("#elevation").show("fast");
        
    });
    
    //Where
    $("#whereButton").click(function(){
        
        $(".pageThing").hide("fast");
        $("#where").show("fast");
        
    });
    
    //Contact
    $("#ContactButton").click(function(){
        
        $(".pageThing").hide("fast");
        $("#Contact").show("fast");
        
    });
    
    
    
    
    
    
});