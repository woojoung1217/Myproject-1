const clickEl = document.querySelector('.inner')



clickEl.addEventListener('click',function(){
  setTimeout(function(){
    window.alert("hello")
  },3000)
})
