
// let toggle = false;
// function toggle(){
//     if(!toggled){
//         toggled = true;
//         document.getElementById('none').style.display='none';
//         return;
//     }
// }  if(toggled){
//         toggled = false;
//         document.querySelector('.test').style.display="block";
        
       
// }

let toggle = document.getElementById('toggle');
let content = document.getElementById('content');

toggle.addEventListener('click', function(){
    content.classList.toggle('sho');
});



// let copywrite = document.querySelector('#write')
// let copybtn = document.querySelector('.btn')

// copybtn.addEventListener('click',function(){
//     document.querySelector('#write') .select()
//     document.execCommand('copy')
// })

//  let copywrite = document.querySelector('#write')
//  let copybtn = document.querySelector('.btn')

//  copybtn.addEventListener('click',function() {
//     copywrite.select()
//     document.execCommand('copy')
//     //  document.execCommand('copy')

//  })
