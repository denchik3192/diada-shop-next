import { prisma } from './../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const data = await prisma.user.findMany()
    return NextResponse.json(data)
}

export async function POST(reqest: NextRequest) {
    const data = await reqest.json()
    const user = prisma.user.create(data)
    return NextResponse.json(user)
}