"use client"

// O conteúdo real do projeto Athena vive em /atenas (fora de /portfolio, como
// os outros projetos). Essa rota existe só porque o card "Atenas" na Home
// (app/page.tsx) linka para "portfolio/atenas" — em vez de duplicar o
// conteúdo aqui (o mesmo problema que existia em /portfolio/constructor),
// redirecionamos para a página real.

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function PortfolioAtenasRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/atenas")
  }, [router])

  return (
    <div className="container px-4 py-24 text-center text-muted-foreground">
      <p>
        Redirecionando para{" "}
        <Link href="/atenas" className="text-primary hover:underline">
          a página do projeto Atenas
        </Link>
        ...
      </p>
    </div>
  )
}
