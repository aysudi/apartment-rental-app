import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleOptionsRequest, setCorsHeaders } from "@/app/api/cors";

// Preflight CORS
export async function OPTIONS() {
  return handleOptionsRequest();
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const contact = await prisma.contact.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });

    if (!contact) {
      return setCorsHeaders(
        NextResponse.json({ error: "Contact not found" }, { status: 404 })
      );
    }

    return setCorsHeaders(NextResponse.json(contact));
  } catch (error) {
    return setCorsHeaders(
      NextResponse.json(
        {
          error: "Failed to fetch contact",
          details: error instanceof Error ? error.message : "Unknown",
        },
        { status: 500 }
      )
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await req.json();
    const { id } = await params;

    const existingContact = await prisma.contact.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
    if (!existingContact) {
      const res = NextResponse.json(
        { error: "Contact not found" },
        { status: 404 }
      );
      return setCorsHeaders(res);
    }

    const updatedContact = await prisma.contact.update({
      where: { id },
      data: body,
      include: {
        user: true,
      },
    });

    const res = NextResponse.json(updatedContact, { status: 200 });
    return setCorsHeaders(res);
  } catch (error) {
    const res = NextResponse.json(
      {
        error: "Failed to update contact",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
    return setCorsHeaders(res);
  }
}
