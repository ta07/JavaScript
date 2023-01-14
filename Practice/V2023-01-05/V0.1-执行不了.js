function talksAbout(node, string){
    if (node.nodeType == Node.ELEMENT_NODE){

        for (let i = 0;i < node.childNodes.length; i++){
            if (talksAbout(node.childNodes[i], string)){
                return true;
            }
        }
        return false;

    }else if(node.nodeType == node.TEXT_NODE){
        return node.nodeValue.indexOf(string) > -1;
    }
}
console.log(talksAbout(deocument.body,"book"))