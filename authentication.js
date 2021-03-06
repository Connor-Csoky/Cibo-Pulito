$( document ).ready(function() {

    localStorage.setItem('aryon', 'CHASE')
    localStorage.setItem('connor', 'CSOKY')
    localStorage.setItem('javon', 'LONG')
    localStorage.setItem('mainul', 'CHOWDHURY')


    let login = true;
    $('.signup').click(function(){
        if(login == true){ // Signup button clicked, modify form attributes to support Signup
            $('.confirm').removeClass('hidden');
            $('.confirm').addClass('required');
            $('.signup').text('Click here to Login');
            $('.test').val('');
            $('.submit').prop('disabled', true);
            $('.loginsignup').text('Signup');
            $('title').text('Cibo Pulito - Signup')
            $('.submit').val('Signup')
            $('.submit').attr('onclick', 'createItem()')
            $('.form').attr('action', '#')
            login = false;
        }else if(login == false){ // Login button clicked, reset all forms to default
            $('.confirm').addClass('hidden');
            $('.confirm').removeClass('required');
            $('.signup').text('Click here to Register');
            $('.test').val('');
            $('.submit').prop('disabled', true);
            $('.loginsignup').text('Login');
            $('title').text('Cibo Pulito - Login')
            $('.submit').val('Login')
            $('.submit').attr('onclick', 'findItem()')
            $('.form').attr('action', '#')
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

    

function createItem() {
    let user = $('.username').val()
    user = user.toLowerCase();
    localStorage.setItem(user, $('.password').val())
}

function findItem() {
    let user = $('.username').val();
    user = user.toLowerCase();
    let passCheck = localStorage.getItem(user)
    let pass = $('.password').val();
    
    if(passCheck != null) {
        if(passCheck === pass){
            $('.form').attr('action', 'index.html')
            localStorage.setItem('currentLogin', user)
            window.alert('Successful Login')
        }else{
            window.alert("Invalid Login");
        }
    }else{
        $('.form').attr('action', '#')
        window.alert("Invalid Login");
    }
}
