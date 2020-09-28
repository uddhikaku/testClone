function formvalidation() 
{
			
	var email=document.getElementById('email').value;
	var regx=/[\da-zA-Z0-9._!]@[\da-zA-Z].[A-Za-z]/;

			
	
	if (regx.test(email))
	{
		alert("Email is Valid");
		return false;
	}
	else
	{
		alert("Email is Not Valid");
		return false;
	}
}
