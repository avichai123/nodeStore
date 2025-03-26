const isLoggedIn = (request ,response , next) => {
    if(request.session.isLoggedin){
       response.cookie('isLoggedin', true);
       next();
    }
    else{
        response.cookie('isLoggedin', false);
        next();
    }
}

module.exports = {
    isLoggedIn
}