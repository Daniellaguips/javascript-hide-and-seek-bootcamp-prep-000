function getFirstSelector(selector){
  return  document.querySelector(selector)
}

function nestedTarget(){
  var el = document.querySelector('div#nested.target')
  return el
}