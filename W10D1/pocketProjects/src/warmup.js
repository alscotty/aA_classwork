

const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let node = document.createElement('P');
  let textnode = document.createTextNode(`${string}`);
  node.appendChild(textnode);
        
    //method attempt for making child array...
    let child_array=Array.from(htmlElement.children);

    while (child_array.length > 0) {
      // console.log(child_array[0]); 
      htmlElement.removeChild(child_array.shift()); 
    }
    // for (let i = 0; i < child_array.length; i++) {
    //   console.log(child_array[i]); 
    //   htmlElement.removeChild(child_array[i]); 
    // }
    
      //method for removing child by node
  // while (htmlElement.firstChild) {
  // htmlElement.removeChild(htmlElement.firstChild);
  // }

  htmlElement.appendChild(node);
};

//partyHeader ?
// htmlGenerator('Party Time.', 'party');

htmlGenerator('Party Time.', partyHeader);

