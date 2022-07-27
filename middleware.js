module.exports= {
    admin: function(r,s,n){
        if (r.query.pass!=1234) {
           return s.redirect("/home")
            
        }
        else{ 
             n()
        }
    }
}