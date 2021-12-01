export function generale(d){
    
    let globale = [];

    for(let i=0; i<Object.keys(d.bulletin).length;i++){

        let notes = Object.values(d.bulletin)[i].note;
        let total = 0;
        let total2 = 0;
        let moyenne = 0;
        let moyenne2 = 0;
        

        for(let j=0;j<notes.length;j++){
            total = total + notes[j];
            moyenne = total / notes.length;        
        }
        
        globale.push(moyenne);
    
        for(let k=0; k<globale.length;k++){
            total2 = total2 + globale[k];
            moyenne2 = total2 / globale.length;
        

            let generale = `<div class="container-mat">
                                <div class="row">
                                    <div class="matiere">
                                        <p>Moyenne generale: ${moyenne2}</p>
                                    </div>
                                </div>
                            </div>`;
            

            let elem = document.createElement('div');
            elem.className = 'container-mat';
            let general = document.getElementById('generale');
            general.innerHTML = generale;
            general.appendChild(elem);

        }    
    }
}