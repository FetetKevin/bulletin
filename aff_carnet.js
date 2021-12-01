export function aff_carnet(d){


    let elem = document.createElement('h3');
    elem.innerHTML = 'Carnet';
    let anchor = document.getElementById('carnet');
    anchor.appendChild(elem);


    for(let i=0; i<Object.values(d.carnet.info).length;i++){

        let carnet =    `<div class="row">
                            <div class="carnet">
                                <p>Note: ${d.carnet.info[i].note}</p>
                                <p>Date: ${d.carnet.info[i].date}</p>
                                <p>Autheur: ${d.carnet.info[i].author.lastName}</p>
                                <p>Role: ${d.carnet.info[i].author.role.join(" / ")}</p>
                            </div>
                        </div>`;


        let elem2 = document.createElement('div');
        elem2.className = 'container-carnet';
        elem2.innerHTML = carnet;
        anchor.appendChild(elem2);

    }
        
}
