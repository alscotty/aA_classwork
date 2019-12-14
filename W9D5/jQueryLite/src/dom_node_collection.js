module.exports=domNodeCollection;

class domNodeCollection{
    constructor(nodes){
        //created internal array of nodes
        this.nodes=nodes;
    }

    html(optionalstring){
        if (optionalstring){
            this.nodes.forEach(node =>{
                node.innerHTML='optionalstring';
            });
        } else{
            this.nodes[0].innerHTML='optionalstring';
        }
    }

    empty(){
        this.nodes.forEach(node=>{
            node.html('');
        });
    }

    append(children){
        //should be checking the type for children to see if we need to coerce them into Domnodecollections or not, 
        this.nodes.forEach(node=>{
            node.innerHTML+=children.outerHTML;
        });
    }

    attr(attr_type,set_type){
        if(set_type){
        this.nodes.forEach(node=>{
            node.setAttribute(attr_type,set_type);
        });} else{
            return this.nodes[0].getAttribue(attr_type);
        }
    }

    addClass(class_name){
        this.nodes.forEach(node => {
            node.classList.add(classname);
        });
    }

    removeClass(class_name){
        this.nodes.forEach(node => {
            node.classList.remove(classname);
        });
    }
    
    //Traversal!!
    children(){
        let childrenNodes=[];
        this.nodes.forEach(node=>{
            childrenNodes.concat(node.children);
        });
        return new domNodeCollection(childrenNodes);
    }

  
}