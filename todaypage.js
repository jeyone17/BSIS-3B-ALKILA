let sidebartoggle = false
$('#sidebar').addClass('close')
setTimeout(()=> {
    $('#sidebar').addClass('nowidth')
 }
 ,10);
// Sidebard Button
$('.sidebar-button').on('click', function(){
    sidebartoggle = !sidebartoggle
  if(sidebartoggle){
    $('#sidebar').addClass('open')
    $('#sidebar').removeClass('close')
    $('#sidebar').removeClass('nowidth')
  }else{
    $('#sidebar').addClass('close')
    $('#sidebar').removeClass('open')
    setTimeout(()=> {
        $('#sidebar').addClass('nowidth')
     }
     ,10);
  }
  console.log(sidebartoggle)
})
