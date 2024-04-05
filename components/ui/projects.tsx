import { ProjectCard } from './project-card'
import { SectionText } from './section-text'

export default function Projects() {
  return (
    <div id="projects" className="py-20 max-md:py-10">
      <SectionText>Meus projetos</SectionText>
      <div className="flex flex-wrap gap-14 1xl:justify-center max-x1:gap-8">
        <ProjectCard
          image={'/projects/fswstore.png'}
          name="Fsw Store"
          topics="react - next - tailwind - typescript - shadcn - context-api"
          deploy="https://fsw-store-02.vercel.app/"
          github="https://github.com/MateusGustavo22/fsw-store-02"
          description="Projeto de um e-commerce de periféricos para computador feito utilizando as principais tecnologias de front-end atuais. O design do projeto foi desenvolvido por Felipe Rocha (YouTube)."
        />
        <ProjectCard
          image={'/projects/screens.png'}
          name="Screens"
          topics="react - next - tailwind - shadcn - react-query - storybook"
          deploy="https://screens-five.vercel.app/"
          github="https://github.com/MateusGustavo22/screens"
          description="Streaming de filmes utilizando a API do TMDB, incluindo funcionalidades como skeletons para carregamento e um campo de busca para filmes."
        />
        <ProjectCard
          image={'/projects/typeweather.png'}
          name="Type Weather"
          topics="react - next - tailwind - typescript - api-rest"
          deploy="https://type-weather-zeta.vercel.app/"
          github="https://github.com/MateusGustavo22/type-weather"
          description="Neste projeto, é possível consultar dados sobre o clima de qualquer cidade, incluindo temperatura atual, previsão para os próximos dias, entre outros. Utilizei a API Open-Meteo."
        />
        <ProjectCard
          image={'/projects/weather.png'}
          name="Weather App"
          topics="react - next - tailwind - typescript - api-rest"
          deploy="https://previsao-do-tempo-flame.vercel.app/"
          github="https://github.com/MateusGustavo22/Weather-App"
          description="Um dos meus primeiros projetos que utiliza uma API, neste caso, para consultar informações sobre o clima de qualquer lugar. "
        />
      </div>
    </div>
  )
}
