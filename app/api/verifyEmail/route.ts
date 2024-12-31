"use server";
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

 
  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  try {
 
    const response = await fetch(`https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${process.env.HUNTER_API_KEY}`);
    const data = await response.json();

    // Check for errors in the response
    if (data.errors) {
      return NextResponse.json({ message: data.errors[0].details }, { status: 500 });
    }

    // Extract relevant information from the response
    const { status, result, score } = data.data;

    // Create a custom response based on the status
    if (status === "valid" && result === "deliverable") {
      return NextResponse.json({
        message: "The email address is valid and deliverable.",
        score: score,
        status: status,
      }, { status: 200 });
    } else {
      return NextResponse.json({
        message: "The email address is not valid or deliverable.",
        score: score,
        status: status,
      }, { status: 400 });
    }
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}