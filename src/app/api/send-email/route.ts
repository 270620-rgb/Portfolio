import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, projectType, timeline } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.trim().length < 30) {
      return NextResponse.json(
        { error: "Message should be at least 30 characters long" },
        { status: 400 }
      );
    }

    // Block disposable email providers
    const blockList = [
      "tempmail",
      "mailinator",
      "10minutemail",
      "guerrillamail",
    ];

    const domain = email.split("@")[1];

    if (blockList.some((blocked) => domain.includes(blocked))) {
      return NextResponse.json(
        { error: "Temporary email addresses are not allowed" },
        { status: 403 }
      );
    }

    // Google Apps Script URL
    const googleSheetsUrl =
      "https://script.google.com/macros/s/AKfycbx4XKVWkRpjAszhfQoUksTl5g0y_S1HuhPUENuH1F0ed3QhOFLPGzHhf5fpGFqgHWh/exec";

    // Send data to Google Sheets
    const response = await fetch(googleSheetsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        projectType,
        timeline,
        message,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to save data to Google Sheets" },
        { status: 500 }
      );
    }

    const result = await response.json();

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Failed to save data" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message saved successfully",
    });
  } catch (error) {
    console.error("Google Sheets Error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
