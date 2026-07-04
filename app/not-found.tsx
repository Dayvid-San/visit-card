import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(120,78,27,0.3),_transparent_45%),linear-gradient(135deg,_#150f0c_0%,_#070403_100%)] px-6 py-16 text-[#f6e6bf]">
      <div className="max-w-xl rounded-[2rem] border border-[#7b4b22]/60 bg-[#160f0a]/90 p-8 text-center shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d5ad64]">Rota perdida</p>
        <h1 className="mb-4 text-4xl font-semibold tracking-[0.12em] text-[#f7e4b1]">404</h1>
        <p className="mb-8 text-base leading-8 text-[#ebd8a6]">
          O caminho que buscava não se encontra entre as salas do castelo. Retorne à página inicial para continuar a jornada.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full border border-[#8c6034]/35 bg-[#fff3d3]/80 px-5 py-3 text-sm font-semibold text-[#5f3d1f] transition hover:bg-[#f8e0a4]"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  )
}
