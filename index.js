// https://randomuser.me/api/?results=24


fetch('https://randomuser.me/api/?results=24')
.then((rep) => rep.json()
.then((data) => console.log(data[0])) )
   
let userData = [];

const fetchUser = async () => {
   await fetch("https://randomuser.me/api/?results=24")
    .then((rep) => rep.json()
    .then((data) =>  userData = data.results ))

    console.log(userData);
    // setTimeout(() => {
    //     console.log(userData);
    // }, 2000);
}


const userDisplay = async () => {
    await fetchUser();

    const dateParser = (date) => {
        let newdate = new Date(date).toLocaleDateString("fr-FR", {
            year : "numeric",
            month : "long",
            day : "numeric",
            // hour : "numeric",
            // minute : "numeric",
            // second : "numeric"

        })
    
        return newdate;
    }

    
    const dayCalc = (date) => {
        let today = new Date();
        let todayTime = Date.parse(today)
        let timestamp = Date.parse(date);

        return Math.ceil((todayTime - timestamp) / 8.64e7) ;
    }

    document.body.innerHTML = userData
    .map((user) => 
    `
    <div class="card">
        <img src="${user.picture.large}" alt="${user.name.title} " ></img>
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.location.city}, ${dateParser(user.dob.date) }</p>
        <em>Membre depuis ${dayCalc(user.registered.date)} jours</em>

        
    </div>

    `).join("")
}

userDisplay();
// setTimeout(() => {
    
// }, timeout);

let heure = new Date().toISOString().split('T')[0]

console.log(heure);



// document.body.textContent = 


// job is good
