const messages = {
  contato: {
    email: "contato@marcelomaia.tech",
    habitacao: "Habitação",
  },
  hobbies: {
    cozinhar: "cozinhar",
    leitura: "leitura",
    musica: "musica",
    exercicios: "exercicios",
    aprender: "aprender",
    ciclismo: "ciclismo",
    natureza: "natureza",
    ensinar: "ensinar",
  },
  principal: {
    titulo: "Quem sou eu?",
    descricao:
      "Desenvolvedor experiente com nove anos de atuação em TI, grande capacidade analítica e visão de negócio. Conhecimentos diversificados em Backend, Frontend e DevOps. Sempre trabalhou em contato com clientes e tem ótima capacidade de trabalhar de forma colaborativa.",
  },
  linguas: {
    portugues: "Português",
    ingles: "Inglês",
  },
  educacao: {
    titulo: "Educação",
  },
  habilidades: {
    titulo: "Habilidades",
  },
  educacao: {
    titulo: "Educação",
    1: {
      inicio: "2009",
      fim: "2013",
      titulo: "Bacharelado em Ciência da Computação",
      lugar: "Belém-PA",
      descricao: "Universidade Federal do Pará (UFPA)",
    },
    2: {
      inicio: "2014",
      fim: "2016",
      titulo: "Mestrado em Ciência da Computação",
      lugar: "Belém-PA",
      descricao: "Programa de Pós Graduação em Ciência da Computação (PPGCC)",
    },
  },
  rodape: {
    frase: "À jornada...",
  },
  experiencia: {
    1: {
      ano: "2010-12",
      titulo: "Iniciou na carreira de TI",
      html: `<div>
        <div>Na &eacute;poca de 2010 Linux ainda era um pouco dif&iacute;cil de trabalhar, a proposta do GT-SET era tornar mais f&aacute;cil a usabilidade do Linux, onde foram facilitados muitos pontos de usabilidade e aplicado tem&aacute;tica regional (Imagem ao lado) no produto para ent&atilde;o ser amplamente difundido na UFPA, esta customiza&ccedil;&atilde;o acompanhava um sistema de administra&ccedil;&atilde;o de laborat&oacute;rio e um sistema de quota de impress&atilde;o. Tamb&eacute;m para aumentar o acesso &agrave; informatiza&ccedil;&atilde;o foi feito um reaproveitamento de m&aacute;quinas antigas com a tecnologia LTSP.</div>
        <div>&nbsp;</div>
        <div><strong>Principais tecnologias usadas:</strong>
        <ul>
        <li>Python, QT, IBQUOTA, Linux, Shell Script.</li>
        </ul>
        </div>
        </div>`,
    },
    2: {
      ano: "2013",
      titulo: "Primeiro emprego formal",
      html: `<p>Iniciou como desenvolvedor Jr, na empresa <strong>EBI inform&aacute;tica</strong>, focada em automa&ccedil;&atilde;o comercial. Trabalhou com um fork do <a href="https://github.com/stoq">STOQ</a> para atender clientes locais.</p>
      <p><strong>Principais tecnologias usadas:</strong></p>
      <ul>
      <li>Python, Flask, SQLObject, ReportLab, Py2exe, Glade, KIWI-GTK, Pytest.</li>
      </ul>
      <p>&nbsp;</p>`,
    },
    3: {
      ano: "2014-16",
      titulo: "Entrada no mestrado acadêmico",
      html: `<p>Prestou mestrado acad&ecirc;mico no PPGCC UFPA, onde trabalhou principalmente em metodologias de coleta e an&aacute;lise de mon&oacute;xido de carbono (CO). Como resultado teve uma publica&ccedil;&atilde;o cient&iacute;fica no <strong>SEMISH - 43&ordm; Semin&aacute;rio Integrado de Software e Hardware, </strong>intitulada<strong> Um Ve&iacute;culo A&eacute;reo N&atilde;o Tripulado para Encontrar Focos de Polui&ccedil;&atilde;o.</strong></p>
      <p><strong>Principais tecnologias usadas:</strong></p>
      <ul>
      <li>Python, Arduino, Drones.</li>
      </ul>`,
    },
    4: {
      ano: "2016-18",
      titulo: "De volta à EBI Informática",
      html:
        `<p>Empresa onde atuou a maior parte do tempo, como principal atividade mantinha um fork do STOQ que &eacute; um ERP Livre de alta qualidade. Foi neste que aprendeu boas pr&aacute;ticas de desenvolvimento como SOLID, Padr&otilde;es de Projeto, TDD, DDD. O Fork era bem completo, atendia v&aacute;rias demandas t&iacute;picas de um ERP como caixa, contas a pagar e receber, estoque, boletos, hardwares diversificados, aplicativo para android, emiss&otilde;es fiscais e muito mais. O sistema era mantido por somente 2 desenvolvedores e possu&iacute;a v&aacute;rios clientes ativos, por isso a qualidade do software era fundamental para conseguir atender diferentes demandas internas e externas. Muitas vezes se tinha contato com o cliente final e foi necess&aacute;rio desenvolver a capacidade de explicar o trabalho para leigos e negociar demandas e interesses conflitantes. Tamb&eacute;m ajudava a manter um totem de vendas de ingresso.</p>
        <p><strong>Principais tecnologias usadas:</strong></p>
        <ul>
        <li>Python, Flask, SQLObject, ReportLab, Py2exe, Glade, KIWI-GTK, Pytest.</li>
        <li>Java para android.</li>
        <li>Electron, ReactJS, HTML, CSS e JS.</li>
        </ul>`,
    },
    5: {
      ano: "2018-20",
      titulo: "Mudança para SP e Para AMCOM.",
      html:
        `<p>Trabalhou na AMCOM por um ano e meio, onde estava alocado na prefeitura de S&atilde;o Paulo. Respons&aacute;vel pela cria&ccedil;&atilde;o de sistemas sob demanda, desde a concep&ccedil;&atilde;o da id&eacute;ia at&eacute; a entrega do produto, e tamb&eacute;m na manuten&ccedil;&atilde;o de sistemas legado. Atuou principalmente no <a href="https://github.com/prefeiturasp/SME-Terceirizadas/tree/development">SIGPAE (Backend)</a> e <a href="https://github.com/prefeiturasp/SME-Terceirizadas-Frontend/tree/development">SIGPAE (Frontend)</a> que &eacute; um sistema de gest&atilde;o de alimenta&ccedil;&atilde;o escolar para atender mais de 4 mil escolas, facilitando um fluxo completo de solicita&ccedil;&otilde;es de alimenta&ccedil;&atilde;o entre as escolas e entidades respons&aacute;veis. Conseguiu difundir a cultura de TDD e XP para seus colegas de trabalho, melhorando assim a qualidade do c&oacute;digo.</p>
        <p><strong>Principais tecnologias usadas:</strong></p>
        <ul>
        <li>Python, Django, Django REST Framework, Pytest, Weasyprint.</li>
        <li>ReactJS, Redux, Redux-Form, Jest, Enzyme, Bootstrap4, SASS, HTML, CSS e JS.</li>
        <li>Postgres, Redis, MongoDB.</li>
        <li>Docker, Sentry, NGNINX, Travis-CI.</li>
        </ul>`
    },
    6: {
      ano: "Até agora...",
      titulo: "Novo desafio na TIVIT.",
      html:
        `
        <div>Atualmente &eacute; lideran&ccedil;a t&eacute;cnica e trabalha na metodologia Design Thinking, junto &agrave; uma equipe multi-disciplinar.</div>
        <div>&nbsp;</div>
        <div><strong>Principais tecnologias usadas:</strong>
        <ul>
        <li>Python, Django, Django REST Framework, Pytest.</li>
        <li>VUEjs, Cypress, Cucumber e BDD.</li>
        <li>Flutter</li>
        <li>Postgres, Redis, MongoDB.</li>
        <li>Docker, Sentry, NGNINX, Gitlab-CI.</li>
        </ul>
        </div>`,
    },
  },
  linguagem: 'Escolha seu idioma'
};

export default messages;
