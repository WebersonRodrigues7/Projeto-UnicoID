# Projeto Dashboard

Uma dashboard com autenticação para fins de teste técnico

## Tecnologias

- NextJS
- Prisma
- SqLite
- Git

## Como rodar

- git clone https://github.com/WebersonRodrigues7/Projeto-UnicoID.git
- cd Projeto-UnicoID
- npm i
- npx prisma migrate dev --name Banco
- npx prisma generate
- npm run dev

**_ Login de acesso _**

email: admin@gmail.com
senha: 123456

## Variáveis de ambiente

Crie um arquivo .env na raiz do projeto com as variáveis:

- DATABASE_URL="file:./example.db"
- JWT_SECRET=SeuJWTSecret

## Estrutura de pastas

```
src/
├── app/
│   ├── api/
│   │   ├── auth/login/
│   │   └── customers/
│   ├── dashboard/
│   └── login/
├── components/
└── lib/
```