  window.addEventListener('load',function init(){
    var links=document.querySelectorAll('nav>ul>li')
    for(var i=0;i<links.length;i++){
      links[i].setAttribute('class','fechado')
      links[i].querySelector('a').addEventListener('click',function(e){
        if(this.parentNode.className==''){
          this.parentNode.className='fechado'
        }else{
          this.parentNode.className=''
        } 
        e.preventDefault()
      })
    }
  })
