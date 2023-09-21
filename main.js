// دول اربع ارايات بيمثوا ال4 صفوف حط هنا الارقام الي عاوز تبدأ بيها
var rows1 = ['2','','','']
var rows2 = ['','','','']
var rows3 = ['','','','']
var rows4 = ['','','','']


var nodes = document.querySelectorAll('.node')


// الفانكشن الي بترندر الارقام الي في الارايز الي فوق في المربعات
function render(){
    var rows = rows1.concat(rows2).concat(rows3).concat(rows4)
    nodes.forEach(function( el , index ){
        el.innerHTML = rows[index]
    })
}
render()

// الفانكشن الي بتنشي مربع جديد فيه رقم 2 ( ملكش دعوة بيها )
function generate(){
    function a(b){
        // console.log(b)
        var allrows = [rows1,rows2,rows3,rows4]
        let free =  allrows[b].map(function (el , index ,arr){
                if(el == ''){
                    return `${index}`
                }else{
                    return ''
                }
            }
        ).filter((el)=> el != '' )

        allrows[b][free[free.length-1]] = '2'
    }
    a(Math.floor(Math.random()*4));
    render()
}



function moveX(dir){
    if(dir === 'right'){
        //first row
        function a(a){
            a.forEach(function( el , index ,arr){
                if(el == '' ){
                    arr.splice(index, 1)
                    arr.unshift('')
                
                }
               
            })
            


            a.forEach(function(el,index,arr){
                if(arr[(arr.length-1 -index)] == arr[(arr.length-1 -index)-1] && arr[(arr.length-1 -index)] != ''){
                    arr.splice((arr.length-1 -index), 1)
                    arr.unshift('')
                    arr[(arr.length-1 -index)] *=2
                }
            })  

               
        }
        a(rows1)
        a(rows2)
        a(rows3)
        a(rows4)
        render()
    }
    
    
    if(dir === 'left'){
        //first row
        function b(a){
            a.forEach(function( el , index ,arr){
                if(arr[3-index] == '' ){
                    arr.splice(3-index, 1)
                    arr.push('')
                }
                
            })

            a.forEach(function(el , index ,arr){

                if(arr[index] == arr[index+1] && arr[index] != ''){
                    arr.splice(index, 1)
                    arr.push('')
                    arr[index] *=2
                }
            })
            
            
        }
        b(rows1)
        b(rows2)
        b(rows3)
        b(rows4)
        render()
    }
}



function moveY(dir){
    if(dir === 'up'){
        function a(b){
            var col = [rows1[b],rows2[b],rows3[b],rows4[b]]
            col.forEach(function( el , index ,arr){
                if(arr[3-index] == '' ){
                    arr.splice(3-index, 1)
                    arr.push('')

                }
            })
             col.forEach(function( el , index ,arr){
                if(arr[index] == arr[index+1] && arr[index] != ''){
                    arr.splice(index, 1)
                    arr.push('')
                    arr[index] *=2
                }
                [rows1[b],rows2[b],rows3[b],rows4[b]] = arr
            })
       
            // console.log(col)   
        }
        a(0)
        a(1)
        a(2)
        a(3)
        render()
    }
    if(dir === 'down'){
        function a(b){
            var col = [rows1[b],rows2[b],rows3[b],rows4[b]]
            col.forEach(function( el , index ,arr){
                if(el == '' ){
                    arr.splice(index, 1)
                    arr.unshift('')
                }
               
            })
            col.forEach(function(el,index,arr){
                if(arr[(arr.length-1 -index)] == arr[(arr.length-1 -index)-1] && arr[(arr.length-1 -index)] != ''){
                    arr.splice((arr.length-1 -index), 1)
                    arr.unshift('')
                    arr[(arr.length-1 -index)] *=2
                }
                [rows1[b],rows2[b],rows3[b],rows4[b]] = arr
            })  
       
            // console.log(col)   
        }
        a(0)
        a(1)
        a(2)
        a(3)
        render()
    }
}


var colors = ()=>{
    nodes.forEach(function(el){
       
        if(el.innerHTML != ''){
            el.style.boxShadow ='';
        }

        switch(el.innerHTML){
            case '' :
                el.style = 'background: #ddd;box-shadow:0px 0px 0px grey'
                break
            case '2':
                el.style = 'background:#414141;'
                break
            case '4':
                el.style = 'background: #8080ff;'
                break
            case '8':
                el.style = 'background:#9900cc;'
                break
            case '16':
                el.style = 'background:#ff0066;'
                break
            case '32':
                el.style = 'background:#00cc66;'
                break
            case '64':
                el.style = 'background:#993333;'
                break
            case '128':
                el.style = 'background:#666633;'
                break
            case '256':
                el.style = 'background:#666633;'
                break
            case '512':
                el.style = 'background:#99ccff;'
                break
            case '1024':
                el.style = 'background:#cc00ff;'
                break
            default :
                el.style = 'background:#cc00ff;'
        }


    })

}

colors()

window.onkeydown = (e)=>{
    switch(e.key){
        case 'ArrowUp':
            moveY('up')
            break;
        case 'ArrowDown':
            moveY('down')
            break;
        case 'ArrowLeft':
            moveX('left')
            break;
        case 'ArrowRight':
            moveX('right')
            break;
    }

    generate()

    colors()
}


function autoPlay(){
    setInterval(()=>{
        setTimeout(()=>{
            moveY('down')
            generate()
            colors()
        },1)
        setTimeout(()=>{
            moveX('right')
            generate()
            colors()
        },100)
        setTimeout(()=>{
            moveY('up')
            generate()
            colors()
        },200)
        setTimeout(()=>{
            moveX('left')
            generate()
            colors()
        },280)
      

    },300)
}