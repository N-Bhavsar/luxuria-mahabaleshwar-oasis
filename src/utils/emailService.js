
/**
 * Email service for sending notification and confirmation emails
 */

/**
 * Sends an email notification to the admin when a user submits a contact form
 */
export const sendAdminNotification = async (data) => {
  // In a real application, this would use an email API like SendGrid, Mailgun, etc.
  console.log('Sending admin notification email:', {
    to: 'admin@ixoraresort.com',
    subject: `New Contact Form Submission: ${data.subject}`,
    body: `
      New contact form submission from ${data.name} (${data.email})
      
      Subject: ${data.subject}
      
      Message:
      ${data.message}
    `
  });
  
  // Simulate API call success
  return true;
};

/**
 * Sends a confirmation email to the user who submitted the contact form
 */
export const sendUserConfirmation = async (data) => {
  // In a real application, this would use an email API like SendGrid, Mailgun, etc.
  console.log('Sending user confirmation email:', {
    to: data.email,
    subject: `Thank you for contacting Ixora Luxury Resort`,
    body: `
      Dear ${data.name},
      
      Thank you for reaching out to Ixora Luxury Resort. We have received your message regarding "${data.subject}".
      
      Our team will review your inquiry and get back to you as soon as possible, usually within 24-48 hours.
      
      Your message:
      "${data.message}"
      
      We appreciate your interest in our resort and look forward to welcoming you soon.
      
      Best regards,
      The Ixora Luxury Resort Team
    `
  });
  
  // Simulate API call success
  return true;
};

/**
 * Combined function that sends both admin notification and user confirmation emails
 */
export const sendContactEmails = async (data) => {
  try {
    // In production, these would be API calls to an email service
    const adminEmailSent = await sendAdminNotification(data);
    const userEmailSent = await sendUserConfirmation(data);
    
    if (adminEmailSent && userEmailSent) {
      return { success: true };
    } else {
      return { 
        success: false, 
        error: 'Failed to send one or more emails. Please try again later.' 
      };
    }
  } catch (error) {
    console.error('Error sending emails:', error);
    return { 
      success: false, 
      error: 'An unexpected error occurred. Please try again later.' 
    };
  }
};
