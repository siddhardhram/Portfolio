# EmailJS Setup Guide for Email Gate

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your email account
5. Copy the **Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
New Portfolio Visitor: {{visitor_name}}
```

**Body:**
```
You have a new portfolio visitor!

Name: {{visitor_name}}
Email: {{visitor_email}}
Visit Date: {{visit_date}}

---
This is an automated notification from your portfolio.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it

## Step 5: Update EmailGate.tsx
Open `src/components/EmailGate.tsx` and replace:
- `'YOUR_SERVICE_ID'` with your Service ID
- `'YOUR_TEMPLATE_ID'` with your Template ID  
- `'YOUR_PUBLIC_KEY'` with your Public Key

Example:
```typescript
await emailjs.send(
  'service_abc123',      // Your Service ID
  'template_xyz789',     // Your Template ID
  {
    visitor_name: name || 'Anonymous',
    visitor_email: email,
    visit_date: new Date().toLocaleString(),
  },
  'your_public_key_here' // Your Public Key
);
```

## Step 6: Test
1. Clear your browser's localStorage
2. Refresh your portfolio
3. Fill in the email gate form
4. Check your email for the notification

## Free Tier Limits
- 200 emails/month
- Perfect for portfolio visitor tracking

## Alternative: Simple Version (No EmailJS)
If you just want to collect emails without notifications, you can:
1. Remove the EmailJS code
2. Store emails in localStorage only
3. Or integrate with a service like Google Sheets API
