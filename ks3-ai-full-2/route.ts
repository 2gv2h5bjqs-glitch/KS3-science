import { NextRequest } from 'next/server';
export async function POST(req: NextRequest) {
  const { messages, level } = await req.json();
  const last = messages?.[0]?.content || '';
  const answer = `(${level}) ${last}: Energy is the ability to do work or cause change.`;
  return new Response(JSON.stringify({ answer }), { status: 200 });
}
