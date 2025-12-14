import { NextResponse } from 'next/server';

// This is a "fake" database for the hackathon (in-memory)
// In a real app, I would save this to a database like Vercel KV or Postgres
let latestRiskData = { summary: "No data yet", riskLevel: "Unknown" };

export async function POST(request: Request) {
  const data = await request.json();
  latestRiskData = data;
  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json(latestRiskData);
}