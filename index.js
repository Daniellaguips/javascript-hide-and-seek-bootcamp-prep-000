function getFirstSelector(selector){
  return  document.querySelector(selector)
}

function nestedTarget(){
 const idul = document.getElementById('nested').querySelector('.target')
 return idul
}

function deepestChild(){
  var deep = document.getElementById('grand-node')
  var test = deep.children[0]
  while (test){
    deep = test
    test = deep.children[0]
  } 
  return test
 // for (let i = 0; i<deep.length; i++){
   //  test = deep[i].querySelector("div")
//  }
}

function increaseRankBy(n){
  var rank = document.getElementById("app")
 var test =  rank.document.querySelectorAll("ul.ranked-list li")
 for (let i = 0; i<test.length;i++){
   test = parseInt(test[i].children[0])+n
 }
 return test
}