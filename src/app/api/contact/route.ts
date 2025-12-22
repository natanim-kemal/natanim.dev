import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        const text = `
<b>🚀 New Contact Form Submission!</b>

<b>👤 Name:</b> ${name}
<b>📧 Email:</b> ${email}

<b>💬 Message:</b>
${message}

<i>Sent from natanim.dev</i>
    `.trim();

        const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

        const telegramResponse = await fetch(telegramUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: process.env.TELEGRAM_CHAT_ID,
                text,
                parse_mode: 'HTML',
            }),
        });

        if (!telegramResponse.ok) {
            const errorData = await telegramResponse.json();
            console.error('Telegram API error:', errorData);
            throw new Error('Failed to send to Telegram');
        }

        return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
