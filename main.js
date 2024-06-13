const URL="https://api.github.com/users/Er-Kal/repos" // api link

fetch (URL) // GET from url
    .then(response => {  // if responded
        if (!response.ok){
            throw new Error("Response not ok");
        }
        return response.json(); // return json
    })
    .then(data=>{  // if data exists
        data.forEach(addRepo);   // run function for each element in json array
    })
    .catch(error =>{  // if error then log it
        console.log(error);
}); 

function addRepo(index){ // function to add repo card
    const cont = document.getElementById("container"); 
    const newRepo = document.createElement("div"); 
    cont.append(newRepo); 
    newRepo.classList.add("repoCard") 
    const repoTitle = document.createElement("h3");
    repoTitle.innerHTML=`<a href=https://www.github.com/Er-Kal/${index.name}>${index.name}</a>`;
    newRepo.append(repoTitle);
    const repoDesc = document.createElement("p");
    repoDesc.innerHTML = index.description;
    newRepo.append(repoDesc);
}