'use server';

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function subscribeUser(prevState: any, formData: FormData) {
    const email = formData.get('email');

    if (!email || typeof email !== 'string' || !email.includes('@')) {
        return { message: 'Please enter a valid email address.', success: false };
    }

    // Initialize Auth
    // Initialize Auth
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
        return { message: 'Configuration Error: Missing Credentials.', success: false };
    }

    try {
        const serviceAccountAuth = new JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID as string, serviceAccountAuth);

        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];

        // Check for duplicates (optional, but good practice)
        const rows = await sheet.getRows();
        const isDuplicate = rows.some((row) => row.get('Email') === email);

        if (isDuplicate) {
            return { message: '😎 We\’ve Added You to the List', success: true };
        }

        await sheet.addRow({ Email: email, Date: new Date().toISOString() });

        return { message: '💖 See You at Kshitij\'25!', success: true };
    } catch (error) {
        console.error('Subscription error:', error);
        return { message: 'Something went wrong. Please try again.', success: false };
    }
}
