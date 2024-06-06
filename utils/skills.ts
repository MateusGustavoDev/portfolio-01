import storybook from '@/public/skills/storybook.svg'
import graphql from '@/public/skills/graphql.svg'

export const skills = [
  {
    name: 'HTML',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    description:
      'HTML (HyperText Markup Language) é a linguagem padrão usada para criar e estruturar páginas da web. Ele define a estrutura básica de um site, utilizando "tags" que delimitam diferentes tipos de conteúdo, como parágrafos, cabeçalhos, links, imagens, tabelas e listas. Cada tag tem uma função específica e pode ser combinada com atributos para definir comportamentos ou estilos adicionais. HTML é fundamental para a criação de sites e funciona em conjunto com CSS e JavaScript para criar páginas web interativas e visualmente atraentes.',
  },
  {
    name: 'CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    description:
      'CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação de documentos escritos em HTML ou XML. Enquanto o HTML fornece a estrutura básica de uma página da web, o CSS controla a aparência visual, incluindo layout, cores, fontes, espaçamento, e outros aspectos estéticos.',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description:
      'JavaScript é uma linguagem de programação usada para criar conteúdos dinâmicos e interativos na web. Diferente do HTML (estrutura) e do CSS (estilo), o JavaScript permite manipular elementos da página em tempo real, validar formulários, criar animações, atualizar conteúdos sem recarregar a página e responder a eventos do usuário. Essencial no desenvolvimento web moderno, é suportado por todos os navegadores.',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description:
      'React é uma biblioteca JavaScript desenvolvida pelo Facebook para criar interfaces de usuário. Focada em componentes, permite construir UIs complexas a partir de elementos menores e reutilizáveis. React utiliza um DOM virtual para melhorar a performance das atualizações de interface, tornando o desenvolvimento de aplicações web rápidas e dinâmicas mais eficiente. É amplamente usada para desenvolver aplicações de página única (SPAs).',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description:
      'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft, que é um superconjunto de JavaScript. Isso significa que todo código JavaScript válido também é válido em TypeScript. A principal diferença é que TypeScript adiciona tipagem estática, permitindo que os desenvolvedores definam tipos de variáveis, funções e objetos. Isso ajuda a detectar erros durante o desenvolvimento, antes da execução, e melhora a manutenção e a escalabilidade do código.',
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    description:
      'Next.js é um framework de desenvolvimento web baseado em React que permite a criação de aplicações web otimizadas e de alto desempenho. Desenvolvido pela Vercel, Next.js facilita a renderização do lado do servidor (SSR), geração de sites estáticos (SSG) e a construção de aplicações de página única (SPAs). Oferece recursos como roteamento automático, suporte a CSS e Sass, e APIs integradas, tornando o desenvolvimento de aplicações complexas mais eficiente e estruturado.',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    description:
      'Tailwind CSS é um framework de CSS utilitário que permite criar designs customizados de forma rápida e eficiente. Em vez de classes predefinidas, utiliza classes utilitárias de baixo nível para construir componentes estilizados diretamente no HTML. Isso facilita a criação de layouts responsivos e consistentes com menos código.',
  },
  {
    name: 'Material-UI',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg',
    description:
      'Material-UI é uma biblioteca de componentes React que implementa o design system Material Design do Google. Fornece componentes prontos e estilizados, como botões, diálogos e barras de navegação, que seguem as diretrizes de design do Material Design. Isso facilita a criação de interfaces de usuário bonitas e responsivas com React.',
  },
  {
    name: 'Storybook',
    logo: storybook,
    description:
      'Storybook é uma ferramenta de desenvolvimento usada para construir, testar e documentar componentes de interface de usuário de forma isolada. Compatível com várias bibliotecas e frameworks, como React, Vue e Angular, permite visualizar componentes em diferentes estados e cenários, facilitando o desenvolvimento e a manutenção de UIs consistentes e bem documentadas.',
  },
  {
    name: 'API GraphQL',
    logo: graphql,
    description:
      'GraphQL é uma linguagem de consulta para APIs, oferecendo uma maneira mais eficiente e poderosa de obter e manipular dados em comparação com APIs REST tradicionais. Com GraphQL, os clientes podem solicitar apenas os dados necessários, evitando a sobrecarga de dados e reduzindo a necessidade de várias solicitações. Ele também fornece um esquema flexível e tipado, permitindo uma comunicação mais eficiente entre front-end e back-end.',
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    description:
      'Git é um sistema de controle de versão distribuído usado para rastrear alterações no código-fonte durante o desenvolvimento de software. Ele permite que várias pessoas trabalhem em um projeto simultaneamente, gerenciando mudanças, revertendo para versões anteriores e mesclando diferentes ramificações de código de forma eficiente. Git é essencial para colaboração e gerenciamento de código em equipe.',
  },
  {
    name: 'Jest',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    description:
      'Jest é um framework de teste de código aberto para JavaScript, amplamente utilizado para testar aplicações React. Ele oferece uma estrutura de testes simples e poderosa, com suporte integrado para mocks, testes de snapshot e cobertura de código. Com Jest, é possível escrever testes unitários e de integração de forma eficiente, garantindo a qualidade e a estabilidade do código.',
  },
  {
    name: 'Linux',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    description:
      'Linux é um sistema operacional de código aberto baseado no kernel Linux. Conhecido por sua estabilidade, segurança e flexibilidade, é amplamente utilizado em servidores, dispositivos embarcados e como alternativa ao Windows em desktops e laptops. Oferece uma grande variedade de distribuições, como Ubuntu, Fedora e CentOS, adaptadas para diferentes necessidades e preferências de uso. Comunidades ativas de desenvolvedores contribuem para seu constante aprimoramento e inovação.',
  },
  {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    description:
      'Figma é uma plataforma de design de interface de usuário (UI) baseada em nuvem, permitindo que equipes colaborem em tempo real na criação de designs de alta qualidade para aplicativos e sites. Com recursos avançados de prototipagem, compartilhamento e comentários, Figma simplifica o processo de design, oferecendo uma experiência intuitiva e colaborativa para designers e desenvolvedores.',
  },
]
