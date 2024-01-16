
const sgMail = require('@sendgrid/mail')
const {SENDGRID_API_KEY, FROM_EMAIL, EMAIL_TO} = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

export default async function handler(req, res){
  const {name, lastName, email, company, phone, notes, project} = JSON.parse(req.body);
  if (!name || !email ) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }
  const message = `
    Name:${name}\r\n
    Last Name:${lastName}\r\n
    Email:${email}\r\n
    Company: ${company}\r\n
    Phone: ${phone}\r\n
    Project: ${project}\r\n
    How Did You Hear About Us: ${notes}
  `
  const data ={
    to: EMAIL_TO,
    from: FROM_EMAIL,
    subject: 'New web form message',
    text: message,
    html: `<h3>Name: <strong>${name}</strong></h3>
    <h3>Email: <strong>${email}</strong></h3>
    <h3>Company: <strong>${company}</strong></h3>
    <h3>Phone: <strong>${phone}</strong></h3>
    <h3>Project: <strong>${project}</strong></h3>
    <h3>Source: <strong>${notes}</strong></h3>
    `
  }
 
  await sgMail.send(data)
  res.json({success: true})
}