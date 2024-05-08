let clearBtn = document.querySelector('button')

async function getAllMPs() {
    /* Total number of MPs is 336 */
    const res = await fetch(`https://represent.opennorth.ca/representatives/house-of-commons/?limit=336`);
    json = await res.json();
    
    json.objects.forEach(element => {
        document.querySelector('.MP-grid').innerHTML += `
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
}

// Clear Event
clearBtn.addEventListener("click", e => {
    window.location.reload();
});

getAllMPs()