# Quick Fix for EmailGate

Since your Contact form already works, you need to create a `.env` file with your EmailJS credentials.

## Create .env file in your project root:

1. Create a new file called `.env` in: `c:\Users\2006\Desktop\Web-Development\Portfolio-Siddhu\.env`

2. Add these lines (replace with your actual values from EmailJS dashboard):

```
VITE_EMAILJS_SERVICE_ID=service_rlq4zzk
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
VITE_EMAILJS_PUBLIC_KEY=nNDmHWkPDJpYvWPDz
```

3. **To find your template ID:**
   - Go to https://dashboard.emailjs.com/admin/templates
   - Look for the template you're using for the Contact form
   - Copy the Template ID

4. **Restart your dev server** after creating the .env file:
   - Stop the current `npm run dev` (Ctrl+C)
   - Run `npm run dev` again

## Alternative: Check Browser Console

Open your browser console (F12) when the Contact form works and look for the EmailJS template ID being used.
