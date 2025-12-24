# Quick EmailJS Setup for Portfolio Visitor Tracking

## You Already Have EmailJS Set Up!
I found your existing EmailJS configuration in the Contact form. I'm using the same service.

## What You Need to Do:

### Step 1: Create New Email Template
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click on **Email Templates**
3. Click **Create New Template**
4. Name it: `Portfolio Visitor Notification`
5. Template ID: `template_portfolio_visitor`

### Step 2: Template Content

**Subject:**
```
🎯 New Portfolio Visitor: {{visitor_name}}
```

**Body:**
```
Hi Siddhardha,

You have a new portfolio visitor!

👤 Name: {{visitor_name}}
📧 Email: {{visitor_email}}
🕐 Visit Time: {{visit_date}}

{{message}}

---
Automated notification from your portfolio
```

### Step 3: Save Template
- Click **Save**
- Make sure the Template ID is exactly: `template_portfolio_visitor`

## That's It!
The email gate is now configured to use:
- Service ID: `service_rlq4zzk` (your existing service)
- Template ID: `template_portfolio_visitor` (the one you just created)
- Public Key: `nNDmHWkPDJpYvWPDz` (your existing key)

## Test It
1. Clear browser localStorage (F12 → Application → Local Storage → Clear)
2. Refresh your portfolio
3. Fill in the email gate
4. Check your email!

## Features
✅ Name is now required
✅ Better error handling
✅ Lets users through even if email fails
✅ Beautiful gradient design
✅ Loading spinner during submission
