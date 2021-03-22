query = "SELECT * FROM customer"
req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "dbs15065&pass=" + pw + "&database=dbs15065&query=" + query)

if (req.status == 200) {
  results = JSON.parse(req.responseText)
  if (results.length == 0) {
    lblMessage1.textContent = "There are no pets in the database."
} else {
    let message = ""
    for (i = 0; i < results.length; i++)
      message = message + results[i][1] + "\n"
    txtResults.value = message
    }
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