import { Metadata } from "next";
import { Section } from "../components/section/Section";

export const metadata: Metadata = {
  title: "CodarSe - Página Inicial",
};
export default function PageHome() {
  return (
    <main className="mt-8 flex justify-center">
      <div className="min-[880px]:max-w-[880px]">
        <Section
          title="Veja mais cursos"
          variant="h-list"
          items={[
            {
              href: "/cursos/123",
              image: "https://i.ytimg.com/vi/SVepTuBK4V0/default.jpg",
              title: "Curso de API Rest, Node e Typescript",
              description: `01- Curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.`,
            },
            {
              href: "/cursos/123",
              image: "https://i.ytimg.com/vi/SVepTuBK4V0/default.jpg",
              title: "Curso de API Rest, Node e Typescript",
              description: `01- Curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.`,
            },
          ]}
        />
      </div>
    </main>
  );
}
