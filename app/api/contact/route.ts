import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    let body: any;
    try {
      body = await request.json();
    } catch (parseErr) {
      return NextResponse.json(
        { error: 'Invalid JSON payload received.' },
        { status: 400 }
      );
    }

    const { fullName, phone, email, city, spaceType, budget } = body || {};

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: 'Missing required consultation details (Full Name and Phone number).' },
        { status: 400 }
      );
    }

    const leadEmail = email || `${String(phone).replace(/[^0-9]/g, '')}@lead.houseofmeda.com`;

    // In production, save to Postgres / Prisma and dispatch Resend email to studio & confirmation auto-reply to client
    const leadRecord = {
      id: `lead_${Date.now()}`,
      fullName,
      phone,
      email: leadEmail,
      city: city || 'Bengaluru',
      spaceType: spaceType || '3BHK',
      budget: budget || '25 to 50 Lakh',
      projectStage: body.projectStage || 'Planning',
      moveInMonth: body.moveInMonth || null,
      about: body.about || '',
      selectedMood: body.selectedMood || 'meda-classic',
      deviceTier: body.deviceTier || 'tier-a',
      submittedAt: new Date().toISOString(),
      studioRecipient: 'hello@houseofmeda.com',
      status: 'NEW_INQUIRY',
    };

    console.log('[House of Meda] New Consultation Inquiry Registered:', leadRecord);

    return NextResponse.json(
      {
        success: true,
        message: 'Your consultation request has been received. Our directors will be in touch within 24 to 48 hours.',
        leadId: leadRecord.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('[House of Meda] Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing consultation request.' },
      { status: 500 }
    );
  }
}

