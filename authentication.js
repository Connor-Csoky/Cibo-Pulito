$( document ).ready(function() {

    let login = true;
    $('.signup').click(function(){
        if(login == true){ // Signup button clicked, modify form attributes to support Signup
            $('.confirm').append('')
            $('.signup').text('Click here to Login');
            $('.test').val('');
            $('.submit').prop('disabled', true);
            $('.loginsignup').text('Signup');
            $('title').text('Cibo Pulito - Signup')
            $('.submit').val('Signup')
            login = false;
        }else if(login == false){ // Login button clicked, reset all forms to default
            $('.confirm').child().remove()
            $('.signup').text('Click here to Register');
            $('.test').val('');
            $('.submit').prop('disabled', true);
            $('.loginsignup').text('Login');
            $('title').text('Cibo Pulito - Login')
            $('.submit').val('Login')
            login = true;
        };
    });
    $('.test').keyup(function(){ 
        if($('.password').val() == $('.passwordConf').val()) { // If page is set to SIGNUP then check if all forms have content
            if($('.username').val() != '' && $('.username').val() != ' ' && $('.password').val() != '' && $('.password').val() != ' '){
                $('.submit').prop('disabled', false);
            }else{
                $('.submit').prop('disabled', true);
            }
            console.log('testing signup')
        }else if(login == true) { // If page is set to LOGIN then check if all forms have content
            if($('.username').val() != '' && $('.username').val() != ' ' && $('.password').val() != '' && $('.password').val() != ' '){
                $('.submit').prop('disabled', false);
            }else{
                $('.submit').prop('disabled', true);
            }
            console.log('testing login')
        }else{
            $('.submit').prop('disabled', true);
        }
    })
});