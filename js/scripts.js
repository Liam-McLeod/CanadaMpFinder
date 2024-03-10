let submitBtn = document.querySelector(".submit-btn");
let searchBar = document.querySelector('input');
let ShowAllBtn = document.querySelector('.show-all-btn');

async function getData(name) {

    try {
        const res = await fetch(`https://represent.opennorth.ca/representatives/house-of-commons/?name=${name}`);
        json = await res.json();
        data = json.objects[0];
        console.log(data)
        
        /* Reveal MP Overview*/
        document.querySelector(".MP-Overview").classList.remove("hidden")

        document.querySelector(".MP-photo").setAttribute('src',data.photo_url);
        document.querySelector(".MP-name").innerText = data.name;
        document.querySelector(".MP-party").innerText = data.party_name;
        document.querySelector(".MP-constituency").innerText = data.district_name;
    } catch(error) {
        console.log(error);
        /* Keep MP Overview Hidden */
        document.querySelector(".MP-Overview").classList.add("hidden")
    }
}

/* Show Particular MP by name */
submitBtn.addEventListener("click", e => {
    var name = searchBar.value;
    getData(name);
})

/* Show all current MPs */
ShowAllBtn.addEventListener("click", e => {
    window.location.href = '/html/MPList.html'
})