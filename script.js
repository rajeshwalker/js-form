document.getElementById('enable').addEventListener('click',function(){
    document.getElementById('form').style.display='flex'
})

document.getElementById('close').addEventListener('click',function(){
    document.getElementById('form').style.display='none'
})

document.getElementById('sub').addEventListener('click',function(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    if((name != null && name!=='') && (email !=null && email !== '')){
        document.getElementById('success').innerHTML = 'form submitted successfully!'
        document.getElementById('form').style.display='none'
        document.getElementById('reset').style.display='flex'
    }else{
        alert('please fill the input properly')
    }
})

document.getElementById('ok').addEventListener('click',function(){
    location.reload()
})