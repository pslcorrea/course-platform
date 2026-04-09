import { Card, ICardProps } from "../card/Card";

interface ISectionProps {
  title: string;
  variant: "grid" | "h-list";
  items: ICardProps[];
}

export const Section = ({ title, items, variant = "grid" }: ISectionProps) => {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <ul
        data-variant={variant}
        className="grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
      >
        {items.map((item) => (
          <li
            key={item.title}
            data-variant={variant}
            className="w-full data-[variant=h-list]:sm:w-72"
          >
            <Card
              href="/cursos/123"
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </li>
        ))}

        <Card
          href="/cursos/123"
          image="https://i.ytimg.com/vi/SVepTuBK4V0/default.jpg"
          title="Curso de API Rest, Node e Typescript"
          description={`Curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.`}
        />
      </ul>
    </section>
  );
};
