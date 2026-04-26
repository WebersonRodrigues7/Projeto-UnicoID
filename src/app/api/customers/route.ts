import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const getAll = await prisma.customer.findMany();
    return NextResponse.json(getAll)
    
  } catch (err) {
    console.error(err);
  }
}
