# Netlify CMS Admin Access Guide / Udhëzues për Qasje në Admin

## English

### How to Access the Admin Panel

The admin interface at `/admin` uses **Netlify Identity** for authentication. There are NO default username/password credentials - you must set up authentication through Netlify first.

### Setup Steps

#### 1. Deploy to Netlify

First, ensure your site is deployed to Netlify (e.g., https://oradore.netlify.app)

#### 2. Enable Netlify Identity

1. Go to your Netlify dashboard: https://app.netlify.com
2. Select your site (oradore)
3. Go to **Site settings** → **Identity**
4. Click **Enable Identity**

#### 3. Enable Git Gateway

1. Still in Identity settings, scroll down to **Services**
2. Click **Enable Git Gateway**
3. This allows the CMS to commit directly to your GitHub repository

#### 4. Configure Identity Settings (Optional but Recommended)

1. Under **Registration preferences**, you can choose:
   - **Open** - Anyone can sign up (not recommended for production)
   - **Invite only** - Only invited users can access (recommended)
2. Under **External providers**, you can enable:
   - GitHub
   - Google
   - GitLab

#### 5. Invite Yourself as Admin

1. In Netlify Identity, click **Invite users**
2. Enter your email address
3. Click **Send invitation**
4. Check your email for the invitation link
5. Click the invitation link and set your password
6. You're now registered as an admin user!

### How to Log In

1. Go to: https://oradore.netlify.app/admin
2. Click **Login with Netlify Identity**
3. Enter the email and password you set up during invitation
4. You'll be logged into the CMS!

### Managing Users

- Go to Netlify dashboard → Identity → Users
- Here you can:
  - Invite new users
  - Remove users
  - See who has access

---

## Shqip (Albanian)

### Si të Hyni në Panelin e Administratorit

Ndërfaqja e administratorit në `/admin` përdor **Netlify Identity** për autentifikim. NUK ka kredenciale të paracaktuara username/password - ju duhet të konfiguroni autentifikimin përmes Netlify fillimisht.

### Hapat e Konfigurimit

#### 1. Vendosni në Netlify

Së pari, sigurohuni që faqja juaj është e vendosur në Netlify (p.sh., https://oradore.netlify.app)

#### 2. Aktivizoni Netlify Identity

1. Shkoni te dashboard-i juaj i Netlify: https://app.netlify.com
2. Zgjidhni faqen tuaj (oradore)
3. Shkoni te **Site settings** → **Identity**
4. Klikoni **Enable Identity**

#### 3. Aktivizoni Git Gateway

1. Ende në cilësimet e Identity, rrëshqitni poshtë te **Services**
2. Klikoni **Enable Git Gateway**
3. Kjo i lejon CMS të commit-ojë direkt në repository-n tuaj të GitHub

#### 4. Konfiguroni Cilësimet e Identity (Opsionale por e Rekomanduar)

1. Nën **Registration preferences**, mund të zgjidhni:
   - **Open** - Kushdo mund të regjistrohet (nuk rekomandohet për production)
   - **Invite only** - Vetëm përdoruesit e ftuar mund të hyjnë (e rekomandueshme)
2. Nën **External providers**, mund të aktivizoni:
   - GitHub
   - Google
   - GitLab

#### 5. Ftoni Veten si Admin

1. Në Netlify Identity, klikoni **Invite users**
2. Shkruani adresën tuaj të email-it
3. Klikoni **Send invitation**
4. Kontrolloni email-in tuaj për link-un e ftesës
5. Klikoni link-un e ftesës dhe vendosni fjalëkalimin tuaj
6. Tani jeni regjistruar si përdorues admin!

### Si të Hyni (Login)

1. Shkoni te: https://oradore.netlify.app/admin
2. Klikoni **Login with Netlify Identity**
3. Shkruani email-in dhe fjalëkalimin që keni vendosur gjatë ftesës
4. Do të hyni në CMS!

### Menaxhimi i Përdoruesve

- Shkoni te Netlify dashboard → Identity → Users
- Këtu mund të:
  - Ftoni përdorues të rinj
  - Hiqni përdorues
  - Shihni kush ka qasje

---

## Troubleshooting / Zgjidhja e Problemeve

### Issue: "Login with Netlify Identity" button doesn't appear
**Solution:** Make sure Netlify Identity is enabled in your Netlify dashboard.

### Issue: Can't receive invitation email
**Solution:** 
- Check spam folder
- Make sure the email address is correct
- Try resending the invitation from Netlify dashboard

### Issue: "Git Gateway Error"
**Solution:** 
- Ensure Git Gateway is enabled in Netlify
- Check that your GitHub repository permissions are correct
- Verify that Netlify has access to your GitHub account

### Problemi: Butoni "Login with Netlify Identity" nuk shfaqet
**Zgjidhja:** Sigurohuni që Netlify Identity është aktivizuar në dashboard-in tuaj të Netlify.

### Problemi: Nuk mund të marr email-in e ftesës
**Zgjidhja:** 
- Kontrolloni dosjen e spam
- Sigurohuni që adresa e email-it është e saktë
- Provoni të ridërgoni ftesën nga dashboard-i i Netlify

### Problemi: "Git Gateway Error"
**Zgjidhja:** 
- Sigurohuni që Git Gateway është aktivizuar në Netlify
- Kontrolloni që lejet e repository-t tuaj të GitHub janë të sakta
- Verifikoni që Netlify ka qasje në llogarinë tuaj të GitHub

---

## Important Notes / Shënime të Rëndësishme

⚠️ **Security / Siguria:**
- Always use "Invite only" mode in production
- Use strong passwords
- Enable 2FA on your Netlify account for extra security

⚠️ **Siguria:**
- Gjithmonë përdorni modalitetin "Invite only" në production
- Përdorni fjalëkalime të forta
- Aktivizoni 2FA në llogarinë tuaj të Netlify për siguri shtesë

## Support / Mbështetje

For more information about Netlify Identity:
- https://docs.netlify.com/visitor-access/identity/

For Netlify CMS documentation:
- https://www.netlifycms.org/docs/

Për më shumë informacion rreth Netlify Identity:
- https://docs.netlify.com/visitor-access/identity/

Për dokumentacionin e Netlify CMS:
- https://www.netlifycms.org/docs/
