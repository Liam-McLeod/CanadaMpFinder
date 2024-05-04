

async function getAllMPs() {
    /* Total number of MPs is 336 */
    const res = await fetch(`https://represent.opennorth.ca/representatives/house-of-commons/?limit=336`);
    json = await res.json();
    
    json.objects.forEach(element => {
        document.querySelector('main').innerHTML += `
        <div class=MP-Overview>
            <img src="${element.photo_url}" alt="MP Photo">
            <div>
                <p class=MP-name>${element.name}</p>

                <p class=label>Political Affiliation</p>
                <p>${element.party_name}</p>

                <p class=label>Constituency</p>
                <p>${element.district_name}</p>
            </div>
        </div>
        `
    });
}

getAllMPs()