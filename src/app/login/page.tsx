"use client"

import { useState } from 'react';
import Style from './login.module.css'
import { useForm } from "react-hook-form"
import z from "zod"
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { HiMiniChartBarSquare } from 'react-icons/hi2';

const schema = z.object({
  email: z.email("Email inválido!"),
  password: z.string().min(6, "Senha inválida")
})

type LoginSchema = z.infer<typeof schema>

export default function LoginPage() {
  
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginSchema>({
    resolver: zodResolver(schema)
  })

  async function onSubmitForm(data: LoginSchema) {
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      const json = await res.json()
      

      if (!res.ok) {
        console.error(json.error)
        return
      }
      reset()
      router.push("/dashboard")
    } catch {
      console.error("Erro ao conectar com o servidor")
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
              <p><strong>Visão completa</strong> de todos os dados e métricas em tempo real</p>
            </li>
            <li>
              <p><strong>Gestão centralizada</strong> de clientes, leads e oportunidades</p>
            </li>
            <li>
              <p><strong>Relatórios detalhados</strong> exportáveis com filtros avançados</p>
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
            {errors.email && <p className={Style.errors}>{errors.email.message}</p>}
            <label htmlFor="password">Senha</label>
            <input {...register("password")} type="password" placeholder="••••••••" />
            {errors.password && <p className={Style.errors}>{errors.password.message}</p>}
            <button type="submit" >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}