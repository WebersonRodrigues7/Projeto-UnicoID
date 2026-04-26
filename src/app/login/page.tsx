"use client"

import { useState } from 'react';
import Style from './login.module.css'
import { useForm } from "react-hook-form"
import z from "zod"
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { HiMiniChartBarSquare } from 'react-icons/hi2';

const schema = z.object({
  email: z.string().email("Email inválido!"),
  password: z.string().min(6, "Senha inválida")
})

type LoginSchema = z.infer<typeof schema>

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginSchema>({
    resolver: zodResolver(schema)
  })

  async function onSubmitForm(data: LoginSchema) {
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      const json = await res.json()

      if (!res.ok) {
        setError(json.error)
        return
      }
      reset()
      router.push("/dashboard")
    } catch {
      setError("Erro ao conectar com o servidor")
    }
    finally {
      setLoading(false)
    }
  }



 return (
  <main className={Style.main}>
    <div className={Style.card}>
      <aside className={Style.aside}>
        <header>
          <p><HiMiniChartBarSquare size={30} color='white' /></p>
          <h1>Dashboard</h1>
        </header>
        <ul>
          <li>
            <p><span><strong>Visão completa</strong></span> de todos os dados e métricas em tempo real</p>
          </li>
          <li>
            <p><span><strong>Gestão centralizada</strong></span> de clientes, leads e oportunidades</p>
          </li>
          <li>
            <p><span><strong>Relatórios detalhados</strong></span> exportáveis com filtros avançados</p>
          </li>
        </ul>
        <footer>
          <p>© 2025 Dashboard. Todos os direitos reservados.</p>
        </footer>
      </aside>

      <section className={Style.sectionLogin}>
        <header>
          <h1>Entrar na sua conta</h1>
          <p>Acesse o painel com suas credenciais</p>
        </header>

        <form onSubmit={handleSubmit(onSubmitForm)}>
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="email" placeholder="seu@email.com" />

          <label htmlFor="password">Senha</label>
          <input {...register("password")} type="password" placeholder="••••••••" />

          <button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </section>
    </div>
  </main>
);
}