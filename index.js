function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  var root = document.querySelectorAll('#grand-node')[0];
  return findDeepestChild(root);
}

function findDeepestChild(root){
  if (root.children.length > 0) return findDeepestChild(root.children[0]);
  return root;

}

function increaseRankBy(n){
  var nodes = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < nodes.length; i++) {
    let amt = parseInt(nodes[i].innerHTML);
    nodes[i].innerHTML = (amt + n).toString();
  }
}
