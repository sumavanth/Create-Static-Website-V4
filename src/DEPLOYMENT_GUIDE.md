# Website Deployment Guide for GoDaddy

## Complete Setup Summary

Your website is now fully functional with:

✅ **Logo Integration** - Your logo appears in the header and footer
✅ **Functional Tabs** - Business, Consulting, and Tech Solution tabs work on homepage
✅ **All Services Pages** - PeopleSoft, OneStream, Workday, NetSuite
✅ **All Solutions Pages** - Enterprise, RPA, Management Consulting, Staffing
✅ **Footer Links** - All services and solutions linked in footer
✅ **Leadership Page** - Updated with Kishorkumar Ganji's information
✅ **Dropdown Navigation** - Working dropdowns for Services and Solutions

---

## How to Deploy to GoDaddy (Step-by-Step)

### Method 1: Using GoDaddy Website Builder (Easiest)

**Note:** This React application cannot be directly imported into GoDaddy's website builder. You'll need to export it as static files first.

### Method 2: Deploy as Static Website on GoDaddy Hosting (Recommended)

#### Step 1: Build Your Website

Since this is a React app running in Figma Make, you need to export it:

1. In Figma Make, click the **"Export"** or **"Download"** button
2. This will create a `.zip` file with all your website files

#### Step 2: Prepare Your Files

1. Unzip the downloaded file
2. You should see files like:
   - `index.html`
   - `assets/` folder
   - Other JavaScript and CSS files

#### Step 3: Upload to GoDaddy

##### Option A: Using File Manager (Easiest)

1. Log in to your GoDaddy account
2. Go to **"My Products"**
3. Find your hosting plan and click **"Manage"**
4. Click **"cPanel"** or **"File Manager"**
5. Navigate to the `public_html` folder (or your domain's root folder)
6. Delete any existing files in that folder
7. Click **"Upload"** and upload all your website files
8. Make sure `index.html` is in the root of `public_html`

##### Option B: Using FTP (Advanced)

1. Download an FTP client like FileZilla (free)
2. Get your FTP credentials from GoDaddy:
   - Go to your hosting dashboard
   - Look for "FTP" or "FTP Accounts"
   - Note down: hostname, username, password, port
3. Connect to your GoDaddy server using FileZilla
4. Navigate to `public_html` folder
5. Upload all your website files

#### Step 4: Configure Domain

1. Make sure your domain is pointing to your hosting account
2. In GoDaddy, go to **"Domain Settings"**
3. Ensure the domain is connected to your hosting
4. Wait 15-30 minutes for DNS propagation

#### Step 5: Test Your Website

1. Open your browser
2. Type your domain name (e.g., www.yourwebsite.com)
3. Your website should now be live!

---

## Method 3: Deploy to GoDaddy Managed WordPress (Alternative)

If you have WordPress hosting:

1. **Convert to WordPress Theme** (requires technical knowledge)
   - You'd need to convert the React app to a WordPress theme
   - This is complex and may require a developer

2. **Use as Landing Page**
   - Upload as static files to a subdirectory
   - Link from your main WordPress site

---

## Method 4: Deploy to Other Hosting Platforms (Easier Alternatives)

### Option A: Vercel (Recommended - Free & Easy)

1. Go to [vercel.com](https://vercel.com)
2. Sign up for free account
3. Click "Import Project"
4. Connect your exported files or GitHub repository
5. Deploy with one click
6. Get a free domain like `yoursite.vercel.app`
7. Optionally: Connect your GoDaddy domain to Vercel

### Option B: Netlify (Also Free & Easy)

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free account
3. Drag and drop your website folder
4. Get instant deployment
5. Connect your GoDaddy domain

### Option C: GitHub Pages (Free)

1. Create a GitHub account
2. Create a new repository
3. Upload your website files
4. Enable GitHub Pages in repository settings
5. Connect your custom domain

---

## Connecting Your GoDaddy Domain to External Hosting

If you deploy to Vercel, Netlify, or GitHub Pages:

### In Your External Host:

1. Get the DNS records or nameservers
2. Example for Vercel: `cname.vercel-dns.com`

### In GoDaddy:

1. Log in to GoDaddy
2. Go to **"My Products" → "Domains"**
3. Click your domain → **"Manage DNS"**
4. Add/Edit DNS Records:
   - **Type:** CNAME
   - **Name:** www
   - **Value:** (paste from your host, e.g., `cname.vercel-dns.com`)
   - **TTL:** 600 seconds
5. For root domain (@):
   - Add an A Record
   - Point to the IP provided by your host
6. Save changes
7. Wait 24-48 hours for full propagation

---

## Recommended Deployment Path

**For Non-Technical Users:**

```
1. Export website from Figma Make
2. Sign up for Vercel (free)
3. Upload files to Vercel
4. Connect GoDaddy domain to Vercel
✅ Done! Website is live
```

**For Technical Users with GoDaddy Hosting:**

```
1. Export website from Figma Make
2. Access GoDaddy cPanel
3. Upload to public_html via File Manager
4. Configure .htaccess for React routing (see below)
✅ Done! Website is live
```

---

## Important: React Router Configuration

Since your website uses React Router, you need to ensure all routes work correctly:

### For GoDaddy Apache Hosting:

Create a `.htaccess` file in your `public_html` folder:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures that all your routes (like `/services/peoplesoft`) work correctly.

---

## Troubleshooting

### Website shows "404 Not Found"

- Check that `index.html` is in the root of `public_html`
- Verify file permissions (should be 644 for files, 755 for folders)

### Routes don't work (e.g., /services/peoplesoft)

- Add the `.htaccess` file mentioned above
- Contact GoDaddy to ensure mod_rewrite is enabled

### Images or CSS not loading

- Check that the `assets` folder was uploaded correctly
- Verify file paths in your HTML

### Domain not working

- Wait 24-48 hours for DNS propagation
- Check DNS settings in GoDaddy
- Clear browser cache

---

## Support Resources

- **GoDaddy Support:** 480-505-8877 (US)
- **GoDaddy Help:** https://www.godaddy.com/help
- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com

---

## Quick Export Checklist

Before deploying, ensure you have:

- [ ] Downloaded/exported website files from Figma Make
- [ ] All files including index.html, assets folder, etc.
- [ ] GoDaddy hosting account (or Vercel/Netlify account)
- [ ] Domain name ready to connect
- [ ] FTP credentials (if using FTP method)

---

## Next Steps After Deployment

1. **Test all pages:** Click through every link on your website
2. **Test on mobile:** Check responsive design
3. **Submit to Google:** Add to Google Search Console
4. **Set up analytics:** Add Google Analytics tracking
5. **SSL Certificate:** Ensure HTTPS is working (most hosts provide free SSL)
6. **Email setup:** Configure email addresses using your domain

---

## Need Help?

If you're stuck at any step:

1. Contact GoDaddy support (they're very helpful)
2. Consider using Vercel/Netlify (much easier for React apps)
3. Hire a web developer for one-time setup (usually $50-100)

---

**Your website is ready to go live! Choose the deployment method that works best for you.**