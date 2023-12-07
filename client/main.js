// function loadFish(fishType) {
//     const apiUrl = `http://localhost:3000/fish/${fishType}`;

//     // let fish;
//     fetch(apiUrl)
//         .then(response => {
//             console.log('fetched, response =', response);
//             return response.json();
//         })
//         .then(fishData => {
//             console.log('parsed, fishData =', fishData);
//             fish = fishData;
//             return fish;
//         });
// }

// function populateFish(fishType) {
//     const fish = loadFish(fishType);
//     console.log(fish);

//     const nodeParent = document.getElementById(`${fishType}-fish`);
//     while (nodeParent.firstChild) {
//         nodeParent.removeChild(nodeParent.firstChild);
//     }
//     for (let f of fish) {
//         nodeParent.appendChild(createFishDisplay(f));
//     }
// }

async function loadFish(fishType) {
    const apiUrl = `http://localhost:3000/fish/${fishType}`;

    try {
        const response = await fetch(apiUrl);
        console.log('fetched, response =', response);

        const fishData = await response.json();
        console.log('parsed, fishData =', fishData);

        return fishData;
    } catch (error) {
        console.error('Error loading fish:', error);
        throw error; // Re-throw the error for handling elsewhere if needed
    }
}

async function populateFish(fishType) {
    try {
        const fish = await loadFish(fishType);
        console.log(fish);

        const nodeParent = document.getElementById(`${fishType}-fish`);
        while (nodeParent.firstChild) {
            nodeParent.removeChild(nodeParent.firstChild);
        }
        for (let f of fish) {
            nodeParent.appendChild(createFishDisplay(f));
        }
    } catch (error) {
        console.error('Error populating fish:', error);
        // Handle the error appropriately, e.g., show an error message to the user
    }
}

function createFishDisplay(fish) {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "imgContainer");

    const image = document.createElement("img");
    image.setAttribute("src", fish.imgUrl);

    const description = document.createElement("p");
    description.innerText = `${fish.name}: ${fish.sizeLimit}; ${fish.quantityLimit}`;

    wrapper.appendChild(image);
    wrapper.appendChild(description);

    return wrapper;
}
