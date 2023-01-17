$(document).ready(function(){
        $('.send-message').click(function(e){
            
            //Stop form submission & check the validation
            e.preventDefault();
            
            // Variable declaration
            var error = false;
            var name = $('#name').val();
            var email = $('#email').val();
            var subject = $('#subject').val();
            var message = $('#message').val();
            
            var error = false;
            
            // If there is no validation error, next to process the mail function
            if(error == false){
               // Disable submit button just after the form processed 1st time successfully.
                $('.send-message').attr({'disabled' : 'true', 'value' : 'Sending...' });
                
				/* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
                $.post("sendmail.php", $("#form-home").serialize(),function(result){
                    //Check the result set from email.php file.
                         $('#form-home').fadeOut();
                        //Display the success message
                        $('.thanks').fadeIn(1000);
                        $('.thanks').fadeOut(500);
                        $('#form-home input, textarea').val('');
                        $('#form-home').fadeIn(3000);
                        $('.send-message').removeAttr('disabled').attr('value', 'Send');
                });
            }
        });    
    });