 // Business logic

    function noAnswer(){
        
        if (!$('[name=Q1]').is(':checked') || !$('[name=Q2]').is(':checked') || !$('[name=Q3]').is(':checked') || !$('[name=Q4]').is(':checked') || !$('[name=Q5]').is(':checked') || !$('[name=Q6]').is(':checked') || !$('[name=Q7]').is(':checked') || !$('[name=Q8]').is(':checked') || !$('[name=Q9]').is(':checked')){
  
            return true;
  
        }       
  
    }
  
    function answersChecked(questions, answers){
  
        if (questions === answers){
            return true;
        }
    
    }

   // User interface logic
  
  $(document).ready(function() {
  
    var total = 0;
  
    $("#quiz").submit(function(event) {
  
    var Q1 = $("input:radio[name='Q1']:checked").val();
    var Q2 = $("input:radio[name='Q2']:checked").val();
    var Q3 = $("input:radio[name='Q3']:checked").val();
    var Q4 = $("input:radio[name='Q4']:checked").val();
    var Q5 = $("input:radio[name='Q5']:checked").val();
    var Q6 = $("input:radio[name='Q6']:checked").val();
    var Q7 = $("input:radio[name='Q7']:checked").val();
    var Q8 = $("input:radio[name='Q8']:checked").val();
    var Q9 = $("input:radio[name='Q9']:checked").val();
   
  
   
    if(noAnswer())
    {
        alert("please answer all questions!");
    }
  
    else{
  
        
        if (answersChecked(Q1, "HTML")) {
            total += 10;
        }
  
        if (answersChecked(Q2, "Js")) {
            total += 10;
        }
      
        if (answersChecked(Q3, "Yes")) {
            total += 10;
        }
        
        if (answersChecked(Q4, "cascading style sheets")) {
            total += 10;
        }
  
        if (answersChecked(Q5, "script")) {
            total += 10;
        }
        if (answersChecked(Q6, "pattern")) {
          total += 10;
      }
    
      if (answersChecked(Q7, "local storage")) {
          total += 10;
      }
      
      if (answersChecked(Q8, "Markup language")) {
          total += 10;
      }
  
      if (answersChecked(Q9, "User defined tags")) {
          total += 10;
      }
        
        $("#quiz").hide();
        $("#marks").text("Your score is: "+ total+ "/90");
        $("#results").show();
     
      }
      event.preventDefault();
  });
  
  });