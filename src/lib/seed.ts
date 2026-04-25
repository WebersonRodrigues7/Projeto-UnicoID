import bcrypt from 'bcryptjs';
import { prisma } from './prisma';

async function main() {
  const hash = await bcrypt.hash('123456', 10);

  await prisma.user.create({
    data: {
      email: 'admin@gmail.com',
      password: hash
    },
  });

  console.log("Usuário criado com sucesso")
}

main()
.catch(console.error)
.finally(() => prisma.$disconnect())