var allWorks = new Set()
var allCategory = new Set()
var image = ""


// fonction qui permet de récupérer tous les projets sur l'api
async function getAllWork() {
    // la reponse de l'api stock les données venant de l'api
    let response = await fetch('http://localhost:5678/api/works');
    if (response.ok) {
        // si la réponse est bonne, les fichiers sont transformés au format json
        return response.json()
        //sinon la console nous indique une autre réponse
    } else {
        //console.log(response);
    }
}

async function init() {
    let works = await getAllWork()
    for (let work of works) {
        allWorks.add(work)
    }
    genererWorks(allWorks)
    genererWorksModal(allWorks)
    let cats = await getAllCategory()
    for (let cat of cats) {
        allCategory.add(cat)
    }
    genererCategory(cats)

}
init()

//on créé une une fonction asyncrone pour générer les projets actuels
async function genererWorks(works) {
    // on crée la zone d'apparitions dans la section gallery
    let sectionFiches = document.querySelector(".gallery");
    sectionFiches.innerHTML = ""
    // on fragmente la formation du document dans la section gallery
    let fragment = document.createDocumentFragment()
    //on créé la constante work des works pour ensuite l'appeler
    for (let work of works) {
        //On nomme l'élément qui va recevoir les instructions des projets
        let worksElement = document.createElement("figure");
        //on appel l'userId pour appliquer a chaque travaux leurs Id et donc les reconnaitres
        worksElement.id = "figure-" + work.id;
        //on donne la forme des éléments créés
        worksElement.innerHTML = `<img src="${work.imageUrl}" alt="${work.title}">
        <figcaption>${work.title}</figcaption>`;
        //on attache la constante fragment a son parent
        fragment.appendChild(worksElement);

    }
    //Permet d'appliquer la création des figures des projets apres avoir récupérer toutes les données des projets par la fragmentation obtenu
    sectionFiches.appendChild(fragment)
}

async function getAllCategory() {
    // la reponse de l'api stock les données venant de l'api
    let response = await fetch('http://localhost:5678/api/categories');
    if (response.ok) {
        // si la réponse est bonne, les fichiers sont transformés au format json
        return response.json()
        //sinon la console nous indique une autre réponse
    } else {
        //console.log(response);
    }
}

//on créé une une fonction asyncrone pour générer les projets actuels
async function genererCategory(categories) {
    // on crée la zone d'apparitions dans la section gallery
    let sectionCategory = document.querySelector(".filtres");
    // on fragmente la formation du document dans la section gallery
    let fragment = document.createDocumentFragment()
    //on créé la constante work des works pour ensuite l'appeler
    for (let category of categories) {
        //On nomme l'élément qui va recevoir les instructions des projets
        let worksCategory = document.createElement("div");
        //on appel l'userId pour appliquer a chaque travaux leurs Id et donc les reconnaitres
        worksCategory.dataset = category;
        //on donne la forme des éléments créés
        worksCategory.innerHTML =
            `<button class="btn-filtres" data-type="${category.id}">${category.name}</button>`
        //on attache la constante fragment a son parent
        fragment.appendChild(worksCategory);

    }
    //Permet d'appliquer la création des figures des projets apres avoir récupérer toutes les données des projets par la fragmentation obtenu
    sectionCategory.appendChild(fragment)
    //une fois le code éxécuter on appel la function de filtre des boutons pour appliquer les filtres actif selectionnés
    filterBtn()
}

//création de la fonction des boutons filtres
async function filterBtn() {
    //on créé la constante pour pouvoir l'appeler, on désigne les boutons avec la meme classe
    let buttonsFilter = document.querySelectorAll(".btn-filtres");
    //on récupere les données de la fonction getallworks pour récupérer les projets avant de continuer a éxécuter le code suivant
    //on ajoute une condition qui s'applique sur des boutons spécifiques
    for (let buttonFilter of buttonsFilter) {

        //on donne au bouton actif actuel un event sur le clique
        buttonFilter.addEventListener("click", function (e) {
            
            //on crée la constante qui désigne le bouton cliqué
            let clickedBtn = e.target
            //on récupérer les Id communs affilié au bouton cliqué
            let type = parseInt(clickedBtn.dataset.type)
            //on indique que si aucun type de projet est selectionné, tous les projets apparaitronts
            if (type == 0) {
                genererWorks(allWorks);
                // on indique une condition si un type est actif
            } else {
                //On applique un filtre sur les projets
                let filtredWorks = [...allWorks].filter(function (works) {
                    //on demande de retourner les projets qui remplissent la condition du type demander
                    return works.category.id == type;
                });
                //on appel alors les projets filtré et donc de les faire apparaitre
                genererWorks(filtredWorks);

            }
            document.querySelector(".active").classList.remove("active")
            e.target.classList.add("active")
        });
    }
}


var tokenId = localStorage.getItem('token')


var filtresDisplay = document.querySelector(".filtres")
var filtresDisplayLogIn = document.querySelector(".log-in")
var filtresDisplayLogOut = document.querySelector(".log-out")
var filtresDisplayModif = document.querySelector(".modif-btn")
var filtresDisplayModif1 = document.querySelector(".modif-btn1")
var filtresDisplayModif2 = document.querySelector(".modif-btn2")
var filtresDisplayblocEdition = document.querySelector(".bloc-edition")




if (tokenId !== null) {

    filtresDisplay.style.display = "none";
    filtresDisplayLogIn.style.display = "none";
    filtresDisplayLogOut.style.display = "block";
    filtresDisplayModif.style.display = "block";
    filtresDisplayModif1.style.display = "block";
    filtresDisplayModif2.style.display = "block";
    filtresDisplayblocEdition.style.display = "flex";
}

var logOut = document.querySelector(".log-out")
logOut.addEventListener('click', function () {

    localStorage.removeItem('token')

})

async function genererWorksModal(worksModale) {

    // on crée la zone d'apparitions dans la section modal
    let sectionFichesMin = document.querySelector(".galerie-pictures");
    sectionFichesMin.innerHTML = ""
    // on fragmente la formation du document dans la section modal
    let fragment = document.createDocumentFragment()
    //on créé la constante workmodale des works dans la modale pour ensuite l'appeler
    for (let workModale of worksModale) {
        //On nomme l'élément qui va recevoir les instructions des projets
        let worksElementMin = document.createElement("figure");
        //on appel l'Id pour appliquer a chaque travaux leurs Id et donc les reconnaitres
        worksElementMin.dataset.id = workModale.id;
        //on donne la forme des éléments créés
        worksElementMin.innerHTML = `<div  class="fig-size">
										<img src="${workModale.imageUrl}" alt="${workModale.title}" class="img-format" >
										<i class="fa-regular fa-trash-can icone-in-picture delete-btn"></i>
										<i class="fa-solid fa-arrows-up-down-left-right icone-in-picture-arrow" > </i>
									</div>	

									<p>éditer</p>`;





        //on attache la constante fragment a son parent
        fragment.appendChild(worksElementMin);


    }
    //Permet d'appliquer la création des figures des projets apres avoir récupérer toutes les données des projets par la fragmentation obtenu
    sectionFichesMin.appendChild(fragment)

    deleteWorks()
}

var activeBtnsPictures = document.querySelectorAll("figure");
activeBtnsPictures.forEach(figure => {

    figure.addEventListener("click", function () {

        activeBtns.forEach(figures => figures.classList.remove("fa-arrows-up-down-left-right"));
        this.classList.add("fa-arrows-up-down-left-right");

    });


});


//incorporer la modal 


// fonction pour retirer l'image en preview, avant validation
function cleanPreview() {
    image = ""
    document.getElementById("file").value = "";

    let removeCuImg = document.querySelector(".miniature-add-pic")
    let btnDeleteImg = document.querySelector(".delete-img")
    let previewMin = document.querySelector(".miniature-add-pic")
    let blocDisplay = document.querySelector(".flex-bloc-pic")
    let btnValider = document.querySelector(".btn-valider-photo")


    removeCuImg.src = "";
    previewMin.style.display = "none";
    blocDisplay.style.display = "flex";
    btnValider.style.backgroundColor = " #A7A7A7 "
    btnDeleteImg.style.display = "none"
}

// fonction pour importer l'image du bouton add +
async function previewImage() {
    let fileCu = document.getElementById("file").files;
    if (fileCu.length > 0) {
        let fileCuReader = new FileReader();
        fileCuReader.onload = function (event) {


            let fileSize = fileCu[0].size / (1024 * 1024);


           
            if (fileSize <= 4) {
                image = fileCu[0]
                document.getElementById("miniature-add-pic").setAttribute("src", event.target.result);
                updatePreview()

            } else {
                cleanPreview()
                alert('fichier trop lourd')

            }
        };
        fileCuReader.readAsDataURL(fileCu[0])
    }
}



function updatePreview() {
    let previewMin = document.querySelector(".miniature-add-pic")
    let blocDisplay = document.querySelector(".flex-bloc-pic")
    let btnValider = document.querySelector(".btn-valider-photo")
    let btnDeleteImg = document.querySelector(".delete-img")
    if (previewMin.src != "") {
        previewMin.style.display = "block";
        blocDisplay.style.display = "none";
        btnValider.style.backgroundColor = " #1D6154 "
        btnDeleteImg.style.display = "block"
    }
}



async function deleteWorks() {


    // DELETE request using fetch with async/await
    let btnsDelete = document.querySelectorAll(".delete-btn")

    for (let btnDelete of btnsDelete) {
        btnDelete.addEventListener('click', async (e) => {

            let target = e.target.closest("figure");
            let id = target.dataset.id;

            let testDelete = await deleteWork(id)

            document.querySelector("#figure-" + id).remove()
            target.remove()

          
            allWorks.forEach((workCu) => {

                if (workCu.id == target.dataset.id) {
                  
                    allWorks.delete(workCu)
                }

            })
         

            alert("travail correctement supprimé")
        }
        )
    }
}

async function deleteWork(id) {
    let response = await fetch(`http://localhost:5678/api/works/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${tokenId}`
        },
    })
    if (response.status == 204) {

        return response
    } else {
        alert("erreur pour supprimer un travail")
    }
}



async function uploadFile() {


    let formData = new FormData();
    formData.append("file", file.files[0]);
    await fetch('http://localhost:5678/api/works', {
        method: "POST",
        body: formData
    });
    alert('The file has been uploaded successfully.');
}

async function postWorkDatabase(data) {
    let responseUpload = await fetch('http://localhost:5678/api/works', {
        method: "POST",
        headers: {
            Authorization: `Bearer ${tokenId}`
        },

        body: data,
    });
    if (responseUpload.ok) {
        return responseUpload.json()
    } else {
        console.log(responseUpload);
        return "error"
    }
}


async function postWorks() {
    let formData = new FormData();
    let categoryWork = document.querySelector("#multiple-select").value
    let titleWork = document.querySelector("#titre-ad").value

    formData.append("image", image)
    formData.append("title", titleWork)
    formData.append("category", categoryWork)



    responseUpload = await postWorkDatabase(formData)


    if (titleWork !== "" && image !== "") {

        allWorks.add(responseUpload)
        genererWorks(allWorks)
        genererWorksModal(allWorks)
        alert("travail correctement ajouté")
        closeModal("2")
    }
    else alert("erreur, veuillez remplir les champs nécessaires")
}


//fonctions modales 
var openModal = async function (e) {
  
    e.preventDefault()

    let target = e.target
    let href = target.getAttribute("href")
    
    let modal = document.querySelector(href)


    modal.style.display = "flex"
    modal.removeAttribute('aria-hidden')
    modal.setAttribute('aria-modal', 'true')
    modal.addEventListener('click', closeModal)
    
    let btnsModal = modal.querySelectorAll('.js-close-modal')
    for (let btnModal of btnsModal) {
        btnModal.addEventListener('click', closeModal)
    }
    modal.querySelector('.js-stop-modal').addEventListener('click', stopPropagation)


}

var closeModal = async function (info) {
    let modalInfo
    if (info instanceof Event) {
        info.preventDefault()
        let target = info.target

        modalInfo = target.closest("aside")
    } else {
        modalInfo = document.querySelector("#modal"+info)
    }

    modalInfo.setAttribute('aria-hidden', 'true')
    modalInfo.removeAttribute('aria-modal')
    let hideModal = function () {
        modalInfo.style.display = "none"
        modalInfo.removeEventListener('animationend', hideModal)
    }
    modalInfo.addEventListener('animationend', hideModal)

}


var stopPropagation = function (e) {
    e.stopPropagation()

}

document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click', openModal)

})


