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