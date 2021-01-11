import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'react-bootstrap';
const tab = [
    
    {
   
      nom: "aa",
      prenom: "bb"
    },
    {
   
      nom: "cc",
      prenom: "dd"
    },
    {
   
      nom: "ee",
      prenom: "gg"
    },
    {
   
      nom: "ww",
      prenom: "ss"
    },
    {
   
      nom: "oo",
      prenom: "jj"
    },
    

  ]

function Main() {
    const [frommembre, setfrommembre] = useState(tab);
    const [indice, setindice] = useState(0);
    const [nomcomplet, setnomcomplet] = useState();
    const [tout, settout] = useState([]);
    const [filtred, setfiltred] = useState([]);
    const [start, setstart] = useState(false);


    const next = (status) => {

        if (indice == 5) {
            setfiltred((old) => [{ name: nomcomplet, status }, ...old])
            setnomcomplet(frommembre[indice - 1].prenom + " " + frommembre[indice - 1].nom);
            settout((old) => [{ name: nomcomplet, status }, ...old])
            document.getElementById('presence').innerHTML = ""
        } else {
            if (status == "go") {
                setindice(indice + 1);
                setnomcomplet(frommembre[indice].prenom + " " + frommembre[indice].nom);

            } else {
                setfiltred((old) => [{ name: nomcomplet, status }, ...old])
                setindice(indice + 1);
                setnomcomplet(frommembre[indice].prenom + " " + frommembre[indice].nom);
                settout((old) => [{ name: nomcomplet, status }, ...old])

            }
        }
    }

    const filtre = (status) => {
        if (status == "Tous") {
            setfiltred(tout)
        } else {

            const res = tout.filter(element => element.status == status);

            setfiltred(res);
        }
    }
    return (
        <div>
            <div>
            <div id="presence">
                    <div>
                        {start? null : <Button onClick={() => {
                            setstart(!start);
                            setnomcomplet(frommembre[indice].prenom + " " + frommembre[indice].nom);
                            next("go");
                        }} >Commencer</Button>}
                        <h4 style={{color:'white', margintop:'20px'}}> {nomcomplet}  </h4>
                    </div>
                    <div id="buttons"  >
                        <Button onClick={() => next("Present")} variant="success">Present</Button>
                        <Button onClick={() => next("Excusé")} variant="warning">Excusé</Button>
                        <Button onClick={() => next("Abscent")} variant="danger">Abscent</Button>
                    </div>
                </div>
                <div>
                    <div >
                        <ButtonGroup id='buttons' size="sm" >
                            <Button onClick={() => filtre("Tous")}>Tous</Button>
                            <Button onClick={() => filtre("Abscent")}>Abscent</Button>
                            <Button onClick={() => filtre("Present")} >Present</Button>
                        </ButtonGroup>

                    </div>
                </div>
                <div>
                    <ul>
                        {filtred && filtred.map((element, indice) =>
                            <div key={indice} className="card card-body mb-1">
                                <div>
                                    <div >
                                        <h6 style={{ marginBottom: 0 }}>
                                            {element.name}
                                        </h6>
                                    </div>
                                    <div style={{ float: 'right' }}>
                                        <Button variant="secondary">
                                            {element.status}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Main
