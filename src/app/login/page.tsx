"use client"

import { useEffect, useState } from 'react';
import Style from './login.module.css'
import { useForm } from "react-hook-form"
import z from "zod"
import { useRouter } from 'next/router';

const schema = z.object({
  email: z.email("Email inválido!"),
  password: z.string("Senha inválida")
})

type LoginSchema = z.infer<typeof schema>

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  


  return (
    <main>

      <aside>
        <header>
          <figure>
            {}
          </figure>
          <span>Dashboard</span>
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
          <small>© 2025 Dashboard. Todos os direitos reservados.</small>
        </footer>
      </aside>

      <section>
        <header>
          <h1>Entrar na sua conta</h1>
          <p>Acesse o painel com suas credenciais</p>
        </header>

  

        <form>
          <fieldset>
            <legend>Credenciais de acesso</legend>

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seu@email.com"
              autoComplete="email"
              required
              
            />

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
              
            />
          </fieldset>

          <label htmlFor="remember">
            <input type="checkbox" id="remember" name="remember" />
            <span>Lembrar de mim</span>
          </label>

          <a href="#">Esqueci a senha</a>

          <button type="submit">Entrar</button>
        </form>
      </section>

    </main>
  );
}