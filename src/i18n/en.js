const messages = {
  contato: {
    email: "contact@marcelomaia.tech",
    habitacao: "Habitation",
  },
  hobbies: {
    cozinhar: "cook",
    leitura: "read",
    musica: "music",
    exercicios: "exercises",
    aprender: "learn",
    ciclismo: "ciclism",
    natureza: "nature",
    ensinar: "teach",
  },
  principal: {
    titulo: "Who am I",
    descricao:
      "Experienced developer with nine years of experience in IT, great analytical skills and business vision. Diversified knowledge in Backend, Frontend and DevOps. Always worked in contact with customers and has an excellent ability to work collaboratively.",
  },
  linguas: {
    portugues: "Portuguese",
    ingles: "English",
  },
  habilidades: {
    titulo: "Skills",
    descricao: "(% are relative not absolute)"
  },
  educacao: {
    titulo: "Education",
    1: {
      inicio: "2009",
      fim: "2013",
      titulo: "Bachelor of Computer Science",
      lugar: "Belém-PA",
      descricao: "Federal University of Pará (UFPA)",
    },
    2: {
      inicio: "2014",
      fim: "2016",
      titulo: "Master in Computer Science",
      lugar: "Belém-PA",
      descricao: "Graduate Program in Computer Science (PPGCC)",
    },
  },
  rodape: {
    frase: "To the journey...",
  },
  experiencia: {
    1: {
      ano: "2010-12",
      titulo: "Started in the IT career.",
      html: `<div>In 2010 Linux was still a little difficult to work, the proposal of the GT-SET was to make the usability of Linux easier, where many points of usability were facilitated and regional themes were applied (Image on the side) in the product to then be widely disseminated in the UFPA, this customization accompanied a laboratory administration system and an impression share system. Also to increase access to computerization, old machines with LTSP technology were reused.</div>
      <div>&nbsp;</div>
      <div><strong>Main technologies used:</strong>
      <ul>
      <li>Python, QT, IBQUOTA, Linux, Shell Script.</li>
      </ul>
      </div>`,
    },
    2: {
      ano: "2013",
      titulo: "First formal job.",
      html: `<p>He started as a Jr developer at the company EBI Inform&aacute;tica, focused on commercial automation. Worked with a STOQ fork to serve local customers.</p>
      <p><strong>Main technologies used:</strong></p>
      <ul>
      <li>Python, Flask, SQLObject, ReportLab, Py2exe, Glade, KIWI-GTK, Pytest.</li>
      </ul>`,
    },
    3: {
      ano: "2014-16",
      titulo: "Started the academic Master's.",
      html: `<p>He completed an academic master's degree at PPGCC UFPA, where he worked mainly on methods of collecting and analyzing carbon monoxide (CO). As a result, it had a scientific publication in the <strong>SEMISH - 43&ordm; Semin&aacute;rio Integrado de Software e Hardware, </strong>called<strong> Um Ve&iacute;culo A&eacute;reo N&atilde;o Tripulado para Encontrar Focos de Polui&ccedil;&atilde;o.</strong></p>
      <p><strong>Main technologies used:</strong></p>
      <ul>
      <li>Python, Arduino, Drones.</li>
      </ul>`,
    },
    4: {
      ano: "2016-18",
      titulo: "Back to EBI Informática",
      html:
        `<p>Company where he worked most of the time, as his main activity he maintained a fork of STOQ which is a high quality Free ERP. It was there that he learned good development practices such as SOLID, Design Patterns, TDD and DDD. The Fork was very complete, meeting several typical ERP demands such as cash, accounts payable and receivable, inventory, bills, diversified hardware, android application, tax issues and much more. The system was maintained by only 2 developers and had several active customers, so the quality of the software was essential to be able to meet different internal and external demands. Often contact was made with the end customer and it was necessary to develop the ability to explain the work to lay people and to negotiate conflicting demands and interests. It also helped to maintain a ticket sales totem made in Electron and ReactJS.</p>
        <p><strong>Main technologies used:</strong></p>
        <ul>
        <li>Python, Flask, SQLObject, ReportLab, Py2exe, Glade, KIWI-GTK, Pytest.</li>
        <li>Java for android.</li>
        <li>Electron, ReactJS, HTML, CSS and JS.</li>
        </ul>`,
    },
    5: {
      ano: "2018-20",
      titulo: "Moving to SP and AMCOM.",
      html:
        `<p>He worked at AMCOM for a year and a half, where he was allocated in the city of S&atilde;o Paulo. Responsible for creating systems on demand, from the conception of the idea to the delivery of the product, and also in the maintenance of legacy systems. He worked mainly at <a href="https://github.com/prefeiturasp/SME-Terceirizadas/tree/development">SIGPAE (Backend)</a> and <a href="https://github.com/prefeiturasp/SME-Terceirizadas-Frontend/tree/development">SIGPAE (Frontend)</a> , which is a school feeding management system to serve more than 4,000 schools, facilitating a complete flow of food requests between schools and responsible entities. He managed to spread the culture of TDD and XP to his co-workers, thus improving the quality of the code.</p>
        <p><strong>Main technologies used:</strong></p>
        <ul>
        <li>Python, Django, Django REST Framework, Pytest, Weasyprint.</li>
        <li>ReactJS, Redux, Redux-Form, Jest, Enzyme, Bootstrap4, SASS, HTML, CSS e JS.</li>
        <li>Postgres, Redis, MongoDB.</li>
        <li>Docker, Sentry, NGNINX, Travis-CI.</li>
        </ul>`
    },
    6: {
      ano: "Até agora...",
      titulo: "New challenge at TIVIT.",
      html:
        `
        <div>He is currently technical leadership and works on the Design Thinking methodology, together with a multidisciplinary team.</div>
        <div>&nbsp;</div>
        <div><strong>Main technologies used:</strong>
        <ul>
        <li>Python, Django, Django REST Framework, Pytest.</li>
        <li>VueJS, Cypress, Cucumber e BDD.</li>
        <li>Flutter</li>
        <li>Postgres, Redis, MongoDB.</li>
        <li>Docker, Sentry, NGNINX, Gitlab-CI.</li>
        </ul>
        </div>`,
    },
  },
  linguagem: 'Choose your language'
};

export default messages;
