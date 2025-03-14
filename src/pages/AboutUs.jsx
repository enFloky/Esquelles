import React from 'react';
import '../styles/body.css'; // Importa el CSS global

function AboutUs() {
  return (
    <section className="pageContainer">
      <h2>Sobre nosaltres</h2>
      <p>
        El Grup Excursionista Amerenc Esquelles és una entitat sense ànim de lucre que des de fa prop de 50 anys es dedica a programar i executar activitats relacionades amb l’excursionisme i la cultura a la vila d'Amer, fent que aquestes activitats adquireixin una importància clau per a l’educació dins l’àmbit no formal.
      </p>
      <br />
      <h2>La junta</h2>
      <p>
        La junta del grup és l'equip que pren les decisions i organitza les múltiples activitats que es realitzen durant l'any, algunes de les quals amb l'ajuda d'inestimables col·laboradors. Aquesta junta va variant, sobretot per circumstàncies personals, però durant els últims anys s'ha caracteritzat per un equip molt heterogeni i sobretot intergeneracional. Així que si esteu interessats o interessades en col·laborar i/o formar part de la junta, no dubteu a posar-vos en contacte amb nosaltres!
      </p>
    </section>
  );
}

export default AboutUs;
