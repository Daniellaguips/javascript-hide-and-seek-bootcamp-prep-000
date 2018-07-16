function getFirstSelector(selector){
  return  document.querySelector(selector)
}

function nestedTarget(){
 const idul = document.getElementById('nested').querySelectorAll('div.target')
 return idul
}