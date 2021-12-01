export function aff_bulletin(d){

    let bulletin = `<div class="row">
                        <div class="eleve">
                            <h2>ELEVE</h2>
                            <p>Nom: ${d.name}</p>
                            <p>Prénom: ${d.lastname}</p>
                            <p>Adresse: ${d.adresse.num} ${d.adresse.street}, ${d.adresse.city} </p>
                            <p>Classe: ${d.classRoom.className}</p>
                        </div>
                        <div class="contact">
                            <h2>CONTACT</h2>
                            <p>Nom: ${d.contact.parent.name}</p>
                            <p>Prénom: ${d.contact.parent.lastname}</p>
                            <p>Role: ${d.contact.parent.role}</p>
                            <p>Numero: +${d.contact.parent.num}</p>
                        </div>
                    </div>`;
            
    let elem = document.createElement('h1');
    elem.innerHTML = 'Bulletin';
    let elem2 = document.createElement('div');
    elem2.className = 'container';
    elem2.innerHTML = bulletin;
    let anchor = document.getElementById('bulletin');
    anchor.appendChild(elem);
    anchor.appendChild(elem2);
}