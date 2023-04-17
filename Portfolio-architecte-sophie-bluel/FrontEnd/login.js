// création de la fonction login pour récupérer le token
 function loginForm(){
    //on appel la route pour aller sur l'api
    const url = "http://localhost:5678/api/users/login";
    //on créé une constante qui appel la classe du formulaire de login
    const form = document.getElementById("login-form")

    //on ajoute un event sur le bouton submit
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        //on prend la valeur du mail
        const email = document.querySelector("#email").value
        //on prend la valeur du password
        const password = document.querySelector("#password").value
        //on enregistre les données précédentes dans la constante user
        const user = {
            "email": email,
            "password": password
        }

        //const test = await sendLogin(url, user);
    

        
        //on appel la méthode fetch/post pour vérifier les identifiants lors du login
         fetch(url, {
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            //on récupére les données et on les transformes au format Json
            body: JSON.stringify(user),
            //on récupere alors la clé "token"
        })
        .then((data)  =>  {
            //console.log(data)
                if (!data.ok) throw alert("Erreur dans l’identifiant ou le mot de passe");
                    
                console.log(data)
                return data.json();
                
        })
        .then((responseData)  => {
            

                if(responseData.status !== 200){
            
                localStorage.setItem('token',responseData.token)  //window.localStorage.getItem('token'); <= méthode pour le récupérer
                
                
                console.log(responseData);
                //console.log(token);
                location.href="index.html";
                
                }
                else {
                    alert("Erreur dans l’identifiant ou le mot de passe");
                    return  
                } 
        
        })   
    })
}
// on appel la fonction pour la faire fonctionner 
loginForm()
