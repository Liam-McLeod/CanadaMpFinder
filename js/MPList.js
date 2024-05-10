let clearBtn = document.querySelector('button')
let selectParty = document.getElementById('party');
let selectGender = document.getElementById('gender');
let MPGrid = document.querySelector('.MP-grid');

async function getMPs() {
    // Seems like a hacky solution must be better way
    let party_value = 'party_name=' + selectParty.value;
    let gender_value = 'gender=' + selectGender.value[0]; // Just first letter for API

    
    if(selectParty.value == "All") {party_value = "";}
    if (selectGender.value == "All") {gender_value = "";}


    let url = `https://represent.opennorth.ca/representatives/house-of-commons/?${party_value}&${gender_value}&limit=0`
    const res = await fetch(url);
    json = await res.json();
    
    json.objects.forEach(element => {

        // Add MPs to MP grid
        MPGrid.innerHTML += `
        <div class=MP-Overview>
            <img src="${element.photo_url}" alt="MP Photo">
            <div>
                <p class=MP-name>${element.name}</p>

                <p>${element.party_name}</p>

                <p>${element.district_name}</p>
            </div>
        </div>
        `
    });


    if (!MPGrid.firstChild) {
        MPGrid.innerHTML = "No Results"
    }
}

// Select Party Event
selectParty.addEventListener("change", e=> {
    MPGrid.innerHTML = ""
    getMPs();
})

// Select Gender Event
selectGender.addEventListener("change", e=> {
    MPGrid.innerHTML = ""
    getMPs();
})

// Clear Event
clearBtn.addEventListener("click", e => {
    window.location.reload()
});

// Get all MPs on load
getMPs();
