const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const sendCourseAccessEmail = async (userEmail, userName) => {
  const telegramLink = "https://t.me/insomnia_course_nails";

  const htmlTemplate = `
    <div style="font-family: Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; color: #1a1a1a;">
      <h1 style="color: #000000; text-align: center; border-bottom: 2px solid #f0f0f0; padding-bottom: 20px;">Insomnia Course Nails</h1>
      
      <p style="font-size: 16px; line-height: 1.6;">Hello <strong>${userName}</strong>,</p>
      
      <p style="font-size: 16px; line-height: 1.6;">
        Thank you for purchasing the course! Your payment has been processed successfully. 
        We are excited to have you join our community.
      </p>

      <div style="text-align: center; margin: 40px 0;">
        <a href="${telegramLink}" style="background-color: #000000; color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px; display: inline-block;">
          Join the Telegram Channel
        </a>
      </div>

      <p style="font-size: 14px; color: #666666; text-align: center; margin-top: 40px; border-top: 1px solid #f0f0f0; padding-top: 20px;">
        If you have any questions, just reply to this message.<br>
        Good luck with your studies!
      </p>
    </div>
  `;

  try {
    const data = await resend.emails.send({
      from: 'Insomnia Course <onboarding@resend.dev>',
      to: userEmail,
      subject: 'Access to Course: Insomnia Course Nails',
      html: htmlTemplate,
    });
    
    console.log(`Email sent to ${userEmail}. ID:`, data.id);
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

module.exports = { sendCourseAccessEmail };