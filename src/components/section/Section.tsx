import { Card } from "../card/Card";

export const Section = () => {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="text-xl font-bold">Todos os Cursos</h2>
      <ul className="flex flex-col gap-2">
        <li>
          <Card
            href="/cursos/123"
            image="https://i.ytimg.com/vi/SVepTuBK4V0/default.jpg"
            title="Curso de API Rest, Node e Typescript"
            description={`Curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.`}
          />
        </li>
        <li>
          <Card
            href="/cursos/123"
            image="https://i.ytimg.com/vi/SVepTuBK4V0/default.jpg"
            title="Curso de API Rest, Node e Typescript"
            description={`Curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.`}
          />
        </li>
        <li>
          <Card
            href="/cursos/123"
            image="https://i.ytimg.com/vi/SVepTuBK4V0/default.jpg"
            title="Curso de API Rest, Node e Typescript"
            description={`Curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.`}
          />
        </li>
      </ul>
    </section>
  );
};
