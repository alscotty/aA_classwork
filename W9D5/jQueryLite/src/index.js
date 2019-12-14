module.exports=Index;
const domNodeCollection=require('./dom_node_collection');

window.$l = (arg) =>{
    if(arg instanceof 'string'){
        return getNodesFromDom(arg)
    } else if(arg instanceof 'HTMLElement'){
        return new domNodeCollection(arg);
    }



 }

//if arg is a string, should be a css selector
function getNodesFromDom(selector){
    let nodeList = Document.querySelectorAll(selector);
    const nodesArray= Array.from(nodeList);
    return new domNodeCollection(nodesArray);
}
