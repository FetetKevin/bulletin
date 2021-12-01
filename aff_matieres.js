export function aff_matiere(d){

    for(let i=0; i<Object.keys(d.bulletin).length;i++){

        function calcul_moyenne(){

            let notes = Object.values(d.bulletin)[i].note;
            let total = 0;
            let moyenne = 0;

            for(let j=0;j<notes.length;j++){
                total = total + notes[j];
                moyenne = total / notes.length;
            }
            
            return moyenne.toFixed(2);
            
        }
       
        let matieres = 
            ` <div class="row">
                <div class="matiere">
                    <h2>${Object.keys(d.bulletin)[i]} :</h2>
                    <p>Notes: ${Object.values(d.bulletin)[i].note.join(" / ")}</p>
                    <p>Commentaires: ${Object.values(d.bulletin)[i].comment}</p>
                    <p>Moyenne: ${calcul_moyenne()}</p>
                </div>
            </div>
            `;

            let elem = document.createElement('div');
            elem.className= "container-mat";
            elem.innerHTML = matieres;
            let notes = document.getElementById('matieres');
            notes.appendChild(elem);

    }

}