import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetForm = {
  Name: string;
  Contactdetails: string;
  Email: string;
  Howcanweimprove: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const body = req.body as SheetForm;

  // Prepare auth
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });

  const sheets = google.sheets({ auth, version: 'v4' });

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:D1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [body.Name, body.Contactdetails, body.Email, body.Howcanweimprove],
        ],
      },
    });

    return res.status(200).json({ data: response.data });
  } catch (error) {
    console.error("Error appending data to Google Sheets:", error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
