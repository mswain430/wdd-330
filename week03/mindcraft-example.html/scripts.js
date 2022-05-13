window.addEventListener('load', loadData);

function loadData() {
    // when coming from details
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.scrollTo(0,0);
    document.querySelector('#pageTitle').innerText = "Minecraft Mobs";

    // hide back button
    document.querySelector('#backButton').hidden = true;

    minecraftData.forEach( (mob, i) => {
        const mobNode = createMobNode(mob, i);
        mobNode.addEventListener('click', viewMob);

        app.appendChild(mobNode);
    })
}

function createMobNode(mob, i, showDetails = false) {
    const div = document.createElement('div');
    const h1 = document.getElementById('pageTitle');
    const img = document.createElement('img');

    div.classList.add('mob');
    div.id = i;
    img.src = mob.img;


    if (showDetails) {
        h1.innerText = mob.type;
        const desc = document.createElement('div');
        desc.innerHTML = `<h2>Description</h2>
                            ${mob.desc}`;

        const spawn = document.createElement('div');
        spawn.innerHTML = `<h2>Spawning</h2>
                            ${mob.spawning}`;


        div.appendChild(img);
        div.appendChild(desc);
        div.appendChild(spawn);
    } else {
        const h2 = document.createElement('h2');
        h2.innerText = mob.type;

        div.appendChild(h2);
        div.appendChild(img);
    }

    return div;
}

function viewMob(event) {
    // Clear the screen and scroll to the top
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.scrollTo(0, 0);

    // Pull id out of the event
    const id = event.currentTarget.id;

    // Get mob node
    const mobDetails = createMobNode(minecraftData[id], id, true);
    app.appendChild(mobDetails);

    // Show back button
    document.querySelector('#backButton').hidden = false;
}