 man =[
    {
        id: 1,
        name: "quần jean nam",
        img: "https://product.hstatic.net/1000210295/product/v64s2179_copy_7898a8cbd7b44beea13bc42fdbee3464_grande.jpg",
        price: "230.000"

    },
    {
        id: 2,
        name: "quần jean nam",
        img: "https://laygi.com/wp-content/uploads/2020/02/z1735955815590_7eb37f40ef60939f781ea615650c64fb.jpg",
        price: "250.000"

    },
    {
        id: 3,
        name: "quần jean nam",
        img: "https://product.hstatic.net/1000304105/product/kim05247_03ca3fdac8ca4d929e62b4ecf6b1373e_master.jpg",
        price: "250.000"

    },
    {
        id: 4,
        name: "quần jean nam",
        img: "https://product.hstatic.net/1000304105/product/xcn1__12__c6b2102185604040a5f4ca5cb29bee6d_master.jpg",
        price: "250.000"
    },
    
]
function view(){
    for(i=0; i<man.length;i++){
        var demo='<div class="cart">'
           demo += ' <img src="'+man[i].img+'" alt="">'        
           demo += ' <p>'+man[i].name+'</p>'        
           demo += ' <label>'+man[i].price+'</label><br>'        
           demo += ' <button>Đặt mua</button>'        
           demo += ' </div>'  
           
           document.getElementById("man").innerHTML +=demo
    }
    for(i=0; i<woman.length;i++){
        var demo='<div class="cart">'
           demo += ' <img src="'+woman[i].img+'" alt="">'        
           demo += ' <p>'+woman[i].name+'</p>'        
           demo += ' <label>'+woman[i].price+'</label><br>'        
           demo += ' <button>Đặt mua</button>'        
           demo += ' </div>'  
           
           document.getElementById("woman").innerHTML +=demo
    }

}

 woman =[
    {
        id: 1,
        name: "quần jean nu",
        img: "https://product.hstatic.net/1000304105/product/quan-dai-nu-xch2__3__78674dadd67d42e0b891200c58162f9b_master.jpg",
        price: "230.000"

    },
    {
        id: 2,
        name: "quần jean nu",
        img: "https://product.hstatic.net/1000304105/product/quan-dai-nu-xch2__3__78674dadd67d42e0b891200c58162f9b_master.jpg",
        price: "250.000"

    },
    {
        id: 3,
        name: "quần jean nu",
        img: "https://product.hstatic.net/1000304105/product/quan-dai-nu-xch2__3__78674dadd67d42e0b891200c58162f9b_master.jpg",
        price: "250.000"

    },
    {
        id: 4,
        name: "quần jean nu",
        img: "https://product.hstatic.net/1000304105/product/quan-dai-nu-xch2__3__78674dadd67d42e0b891200c58162f9b_master.jpg",
        price: "250.000"
    },
    
]
