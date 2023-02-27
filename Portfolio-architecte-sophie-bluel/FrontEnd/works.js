/*
const dataApi = fetch('http://localhost:5678/api/works');


dataApi
.then(async (responseData) => {
    //console.log(responseData);

    const response = await responseData.json();
    console.log(response[11]);


try {
const title = response[0].title;
const imageUrl = response[0].imageUrl;

const affichage_Title = document.querySelector("#title");
affichage_Title.innerHTML = title;

const imageElement = document.querySelector("#img");
const imageImageUrl = `<img src="${imageUrl}">`;

imageElement.insertAdjacentHTML("afterbegin", imageImageUrl); 

}
catch(err) {
    console.log(err);
}
})
*/


const reponse = await fetch('http://localhost:5678/api/works');
const works = await reponse.json();

for (let i = 0; i< works.length; i++){


const article = works[i];

const worksElement = document.createElement("article");

const imageUrlElement = document.createElement("img");
imageUrlElement.src = article.imageUrl;

const titleElement = document.createElement("p");
titleElement.innerText = article.title;

const categoryIdElement = document.createElement("null");
categoryIdElement.innerHTML = article.categoryId;
       
const categoryElement = document.createElement("null");
categoryElement.innerHTML = article.category ;
       
const userIdElement = document.createElement("userId");
userIdElement.innerHTML = article.userId ;
      
const nameElement = document.createElement('name');
nameElement.innerHTML = article.name ;

const sectionFiches = document.querySelector(".gallery");


    sectionFiches.appendChild(worksElement);
    worksElement.appendChild(imageUrlElement);
    worksElement.appendChild(titleElement);
//    worksElement.appendChild(categoryIdElement);
//    worksElement.appendChild(categoryElement);
//    worksElement.appendChild(userIdElement);
//    worksElement.appendChild(nameElement);

}
/*

 let works = window.localStorage.getItem('works');

 if (works === null) {
    // Récupération des pièces depuis l'API
    const reponse = await fetch('works.json');
    works = await reponse.json();
    // Transformation des pièces en JSON
    const valeurWorks = JSON.stringify(works);
    // Stockage des informations dans le localStorage
    window.localStorage.setItem("works", valeurWorks);
} else {
    works = JSON.parse(works);
}
// on appel la fonction pour ajouter le listener au formulaire


 function genererWorks(works) {
    for (let i = 0; i < works.length; i++) {

        const article = works[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".gallery");
        // Création d’une balise dédiée à une pièce automobile
        const worksElement = document.createElement("article");
        worksElement.dataset.id = works[i].id
        // Création des balises 
        const imageUrlElement = document.createElement("img");
        imageUrlElement.src = article.imageUrl;

        const titleElement = document.createElement("h2");
        titleElement.innerText = article.title;

        const categoryIdElement = document.createElement("p");
        categoryIdElement.innerText = article.categoryId;
       
        const categoryElement = document.createElement("p");
        categoryElement.innerText = article.category ;
       
        const userIdElement = document.createElement("p");
        userIdElement.innerText = article.userId ;
      
        const nameElement = document.createElement("p");
        nameElement.innerText = article.name ;
      
        //Code ajouté
        const avisBouton = document.createElement("button");
        avisBouton.dataset.id = article.id;
        avisBouton.textContent = "Afficher les avis";

        // On rattache la balise article a la section Fiches
        sectionFiches.appendChild(worksElement);
        sectionFiches.appendChild(imageUrlElement);
        sectionFiches.appendChild(titleElement);
        sectionFiches.appendChild(categoryIdElement);
        sectionFiches.appendChild(categoryElement);
        sectionFiches.appendChild(userIdElement);
        sectionFiches.appendChild(nameElement);
        //Code aJouté
        worksElement.appendChild(avisBouton);

    }
} 


genererWorks(works);

for (let i = 0; i < works.length; i++) {
    const id = works[i].id;
    const avisJSON = window.localStorage.getItem(`avis-works-${id}`);
    const avis = JSON.parse(avisJSON);

    if (avis !== null) {
        const worksElement = document.querySelector(`article[data-id="${id}"]`);
        afficherAvis(worksElement, avis)
    }
}
*/
/*
 fetch('http://localhost:5678/api/works')
    .then(data => data.json())
    .then(jsonListWorks => {
        console.log(jsonListWorks);

        

    }); */