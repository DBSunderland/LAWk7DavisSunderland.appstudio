btnCustomerSelect3.onclick = function() {
  ChangeForm(customerSelect)
}
btnCustomerDelete3.onclick = function() {
  ChangeForm(customerDelete)
}
btnCustomerUpdate3.onclick = function() {
  ChangeForm(customerUpdate)
}

btnCustomerAdd.onclick = function() {
  let name = inptNewName.value
  let address = inptNewAddress.value
  let city = inptNewCity.value
  let state = inptNewState.value
  let zipcode = inptNewZip.value
  let query = "INSERT INTO customers (`name`, `street`, `city`, `state`, `zipcode`) VALUES ('" + name + "', '" + address + "', '" + city + "', '" + state + "', '" + zipcode + "')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  if (req.status == 200) {
    if (req.responseText == 500)
      lblConfirmAdd.textContent = "You have successfully added the a new customer."
    else
      lblConfirmAdd.textContent = "There was a problem with adding the customer to the database."
  } else
    lblConfirmAdd.textContent = "Error: " + req.status
}