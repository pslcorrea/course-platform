import Image from "next/image";
import Link from "next/link";

export const Card = () => {
  return (
    <Link href="/cursos" className="hover:no-underline">
      <article className="flex gap-2 flex-col p-2 rounded sm:hover:bg-primary">
        <Image
          src={"https://i.ytimg.com/vi/SVepTuBK4V0/default.jpg"}
          alt={"Curso de API Rest, Node e Typescript"}
          width={1000}
          height={0}
          draggable={false}
          className="aspect-video object-cover rounded-2xl"
        />
        <h4 className="font-extrabold text-lg">
          Curso de API Rest, Node e Typescript
        </h4>
        <p className="line-clamp-3">
          curso de API Rest em Node e Typescript vamos ver juntos o escopo do
          curso e se esse curso faz sentido para você ou não. Quero te
          apresentar as tecnologias e conceitos que vamos usar no projeto que
          será desenvolvido ao longo do curso, ainda vamos entender como serão
          criados os testes que usaremos para garantir a qualidade do código e
          no final vamos ver o frontend que eu vou te entregar de brinde para
          usar com esse backend.
        </p>
      </article>
    </Link>
  );
};
