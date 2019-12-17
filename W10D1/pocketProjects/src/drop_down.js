
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

//val via dogs[key]
//for (let key in dogsj) { }


 function dogLinkCreator(){
  let dogLinks = [];
  Object.keys(dogs).forEach( dogKey => {
    let anchorNode = document.createElement('A');
    anchorNode.innerHTML=`${dogKey}`;
    anchorNode.setAttribute('href', `${dogs[dogKey]}`);
    let listNode = document.createElement('LI');
    listNode.setAttribute('class', 'dog-link');
    listNode.appendChild(anchorNode);
    dogLinks.push(listNode);
  });
  return dogLinks;
}

function attachDogLinks(){
 let dogLinks= dogLinkCreator();
//  debugger
  let dropdownUl = document.getElementsByClassName('drop-down-dog-list');
 for (let i=0; i<dogLinks.length; i++){
  dropdownUl[0].appendChild(dogLinks[i]);
 }
}

attachDogLinks();

function handleEnter(){
  let dropdownUl = document.getElementsByClassName('drop-down-dog-nav');
  let dropdownLi = document.getElementsByClassName('dog-link');
  dropdownUl[0].addEventListener("mouseenter", e => {
    let dropdownLiArr = Array.from(dropdownLi);
    dropdownLiArr.forEach(li => {
      li.classList.remove("dog-link");
      li.classList.add("dog-link-open");
    });
  });
}

handleEnter();

function handleLeave(){
  let dropdownUl = document.getElementsByClassName('drop-down-dog-nav');
  let dropdownLi = document.getElementsByClassName('dog-link-open');
  dropdownUl[0].addEventListener("mouseleave", e => {
    let dropdownLiArr = Array.from(dropdownLi);
    dropdownLiArr.forEach(li => {
      li.classList.remove("dog-link-open");
      li.classList.add("dog-link");
    });
  });
}

handleLeave();