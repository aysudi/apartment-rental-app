import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { handleOptionsRequest, setCorsHeaders } from "../cors";

// Handling OPTIONS (for preflight requests)
export async function OPTIONS() {
  return handleOptionsRequest();
}

// GET Method
export async function GET(req: Request) {
  try {
    const contacts = await prisma.contact.findMany({
      include: {
        user: true,
      },
    });

    const res = NextResponse.json(contacts, { status: 200 });
    return setCorsHeaders(res);
  } catch (error) {
    return setCorsHeaders(
      NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 })
    );
  }
}

// POST Method
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, subject, message, isRead = false, userId } = body;

    if (!fullName || !email || !subject || !message) {
      return setCorsHeaders(
        NextResponse.json({ error: "Missing required fields" }, { status: 400 })
      );
    }

    const data: any = {
      fullName,
      email,
      subject,
      message,
      isRead,
    };

    if (userId) {
      data.user = {
        connect: { id: userId },
      };
    }

    const newContact = await prisma.contact.create({
      data,
      include: {
        user: true,
      },
    });

    return setCorsHeaders(NextResponse.json(newContact, { status: 201 }));
  } catch (error) {
    console.error("POST Contact Error:", error);
    return setCorsHeaders(
      NextResponse.json({ error: "Failed to create contact" }, { status: 500 })
    );
  }
}
