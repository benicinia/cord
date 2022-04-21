if (sess.bz==true) {
    if (ezp.bnk==='ab') {
     res.render('invnt', { title: 'Inventory',ab:true});

    }  else if (ezp.bnk==='com') {
     res.render('invnt', { title: 'Inventory',com:true});
    }   if (ezp.bnk==='nb'){
     res.render('invnt', { title: 'Inventory',nb:true});

    }
    if (ezp.bnk==='dash'){
     res.render('invnt', { title: 'Inventory',dash:true});

    }
    if (ezp.bnk==='zmn'){
     res.render('invnt', { title: 'Inventory',zmn:true});
    }
} else if (sess.usr==true) {
 res.redirect('home')
}



if (sess.gen==='fem') {
           
} else if (sess.gen==='male') {
  
}
{var gen; var tyEr; }
vars={err:tyEr, title: title,[ezp.bnk]:true}
 tyre='';
 var home = '';
var title ='Inventory';
if (sess.bz==true) {
       if (ezp.bnk===ezp.bnk) {
        res.render(home, {err:tyEr, title: title,[ezp.bnk]:true});

       }  else if (ezp.bnk==='com') {
        res.render('invnt', {vars, title: tyEr, gen:gen,[ezp.bnk]:true});
       }   if (ezp.bnk==='nb'){
        res.render('invnt', { title: 'Inventory',nb:true});

       }
       if (ezp.bnk==='dash'){
        res.render('invnt', { title: 'Inventory',dash:true});

       }
       if (ezp.bnk==='zmn'){
        res.render('invnt', { title: 'Inventory',zmn:true});
       }
} else if (sess.usr==true) {
    res.redirect('home')
}