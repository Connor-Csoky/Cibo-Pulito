$( document ).ready(function() {
    let currentLogin = localStorage.getItem('currentLogin')
    let isMan = manChecker(currentLogin);

    if(isMan == true){
        $('.manageOnly').css('display', 'inline')
    }
    
    if(currentLogin != '' && currentLogin != null){
        $('.authenticationButt').text('Logout').attr('onclick', 'logout()')
    }else{
        localStorage.setItem('currentLogin','');
    }
});

function manChecker(login) {
    if(login == 'aryon' || login == 'connor' || login == 'javon' || login == 'mainul'){
        return true;
    }else{
        return false;
    }
}

function logout() {
    localStorage.setItem('currentLogin','');
}