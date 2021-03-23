let query = ""
let req = {}
let results = []
let pw = "Albatro$$19"
let netID = "dbs15065"

btnCustomerDelete1.onclick=function(){
  ChangeForm(customerDelete)
}

customerSelect.onshow = function() {
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(`The results are \n ${results}`)
    if (results.length == 0)
      lblMessage.value = "There are no customers in the database."
    else {
      let message = ""
      for (i = 0; i < results.length; i++)
        message = message + results[i][1] + "\n"
      txtResults.value = message
    }
  } else
    lblMessage.value = "Error code: " + req.status
}


/*  SELECT CODE Cleaned up
        
    query = "SELECT * FROM pets"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "clc90595&pass=" + pw + "&database=clc90595&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblMessage1.textContent = "There are no pets in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtResults.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage1.textContent = "Error code: " + req.status
}
*/

/* 
btnDemoSelectPetTypes.onclick=function(){
  ChangeForm(DemoSelectTypePets)
}
btnActivitySelectPetTypes.onclick=function(){
    ChangeForm(activitySelectTypePets)
}
btnDemoInsertPets.onclick=function(){
  ChangeForm(DemoInsertPets)
}
btnActivityInsertPets.onclick=function(){
  ChangeForm(activityInsertPets)
}
btnDemoDeletePets.onclick=function(){
  ChangeForm(DemoDelPets)
}
btnActivityDeletePets.onclick=function(){
  ChangeForm(activityDelPets)
}
btnDemoUpdatePets.onclick=function(){
  ChangeForm(DemoUpdatePets)
}
btnActivityUpdatePets.onclick=function(){
    ChangeForm(activityUpdatePets)
}
*/









