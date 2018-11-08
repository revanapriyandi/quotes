var quotes=[
    {  
        no :'1',
        img :'img/1.jpg'
    },
    { 
        no :'2',
        img :'img/2.jpg'
    },
    { 
        no :'3',
        img :'img/3.jpg'
    },
    {
         no :'4',
         img :'img/4.jpg'
    },
    {  
        no :'5',
        img :'img/5.jpg'
    },
    {
         no :'6',
         img :'img/6.jpg'
    },
    { 
        no :'7',
        img :'img/7.jpg'
    },
    { 
        no :'8',
        img :'img/8.jpg'
    },
    { 
        no :'9',
        img :'img/9.jpg'
    },
    { 
        no :'10',
        img :'img/10.jpg'
    },
    { 
        no :'11',
        img :'img/11.jpg'
    },
    { 
        no :'12',
        img :'img/12.jpg'
    },
    { 
        no :'13',
        img :'img/13.jpg'
    },
    { 
        no :'14',
        img :'img/14.jpg'
    },
    { 
        no :'15',
        img :'img/15.jpg'
    },
    { 
        no :'16',
        img :'img/16.jpg'
    },
    { 
        no :'17',
        img :'img/17.jpg'
    },
    { 
        no :'18',
        img :'img/18.jpg'
    },
    { 
        no :'19',
        img :'img/19.jpg'
    },
    { 
        no :'20',
        img :'img/20.jpg'
    },
    {
        no :'111',
        img :'img/loding.gif'
    }
]

function previous(){
    var data = document.getElementById('tampil').getAttribute("src")
    if (data == 'img/loding.gif'){
        document.getElementById('tampil').setAttribute("src",'img/19.jpg')
    }else if (data == 'img/2.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/20.jpg')
    }else if (data == 'img/3.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/2.jpg')
    }else if (data == 'img/4.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/3.jpg')
    }else if (data == 'img/5.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/4.jpg')
    }else if (data == 'img/6.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/5.jpg')
    }else if (data == 'img/7.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/6.jpg')
    }else if (data == 'img/8.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/7.jpg')
    }else if (data == 'img/9.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/8.jpg')
    }else if (data == 'img/10.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/9.jpg')
    }else if (data == 'img/11.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/10.jpg')
    }else if (data == 'img/12.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/11.jpg')
    }else if (data == 'img/13.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/12.jpg')
    }else if (data == 'img/14.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/13.jpg')
    }else if (data == 'img/15.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/14.jpg')
    }else if (data == 'img/16.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/15.jpg')
    }else if (data == 'img/17.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/16.jpg')
    }else if (data == 'img/18.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/17.jpg')
    }else if (data == 'img/19.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/18.jpg')
    }else if (data == 'img/21.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/1.jpg')
    }
}


function next(){
    var data = document.getElementById('tampil').getAttribute("src")
    if (data == 'img/loding.gif'){
        document.getElementById('tampil').setAttribute("src",'img/19.jpg')
    }else if (data == 'img/2.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/20.jpg')
    }else if (data == 'img/3.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/2.jpg')
    }else if (data == 'img/4.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/3.jpg')
    }else if (data == 'img/5.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/4.jpg')
    }else if (data == 'img/6.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/5.jpg')
    }else if (data == 'img/7.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/6.jpg')
    }else if (data == 'img/8.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/7.jpg')
    }else if (data == 'img/9.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/8.jpg')
    }else if (data == 'img/10.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/9.jpg')
    }else if (data == 'img/11.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/10.jpg')
    }else if (data == 'img/12.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/11.jpg')
    }else if (data == 'img/13.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/12.jpg')
    }else if (data == 'img/14.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/13.jpg')
    }else if (data == 'img/15.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/14.jpg')
    }else if (data == 'img/16.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/15.jpg')
    }else if (data == 'img/17.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/16.jpg')
    }else if (data == 'img/18.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/17.jpg')
    }else if (data == 'img/19.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/18.jpg')
    }else if (data == 'img/21.jpg'){
        document.getElementById('tampil').setAttribute("src",'img/1.jpg')
    }
    
}
