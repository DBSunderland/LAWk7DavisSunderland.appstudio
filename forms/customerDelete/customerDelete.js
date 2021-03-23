btnCustomerSelect2.onclick = function() {
  ChangeForm(customerSelect)
}
btnCustomerAdd2.onclick = function() {
  ChangeForm(customerAdd)
}
btnCustomerUpdate2.onclick = function() {
  ChangeForm(customerUpdate)
}

btnDisplayCustomers.onclick = function() {
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

btnDelete.onclick = function() {
  let customerNameDelete = inptDeleteCustomer.value
  let found = false
  for (i = 0; i <= Customers.length - 1; i++) {
    if (customerNameDel == allCustomers[i][1])
      found = true
  }
  if (found == false)
    lblMessage2.textContent = "That customer name is not in the database."
  else if (found == true) {
    query = "DELETE FROM customer WHERE name = " + '"' + customerNameDel + '"'
    alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) 
      if (req.responseText == 500) 
        lblMessage2.textContent = `You have successfully deleted the customer ${customerNameDelete}`
    else
      lblMessage2.textContent = `There was a problem deleting ${customerNameDelete} from the database.`
    else
      lblMessage2.textContent = `Error: ${req.status}`
  }
}