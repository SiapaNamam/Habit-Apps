if(localStorage.getItem('localUsername')==null)
    setInterval(function(){
        window.location.href = 'NewUser/User.html';
    },111500);
else{
    setInterval(function(){
        window.location.href = 'Home/Home.html';
    },111500);
}
