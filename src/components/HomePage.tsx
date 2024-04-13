import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import TopGames from "@/components/games/top-games";

export default function HomePage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Celsia Dashboard es una aplicación web que permite a los usuarios
          <br className="hidden sm:inline" />
          monitorear su consumo y producción de energía.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Este dashboard es una aplicación web que permite a los usuarios y
          administradores de Celsia monitorear su consumo y producción de
          energía. La aplicación es fácil de usar y proporciona una visión
          general de los datos de energía en tiempo real.
        </p>
      </div>
      <div className="flex gap-4">
        <a href={siteConfig.links.docs} className={buttonVariants()}>
          Documentación
        </a>
        <a
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </a>
      </div>

      <div className="py-12">
        <h2 className="text-2xl font-extrabold text-foreground mb-4">
          Top Games 🎮
        </h2>
        <p className="mb-8 text-muted-foreground">
          Top picks for you. Updated daily.
        </p>
        <TopGames />
      </div>
    </section>
  );
}
