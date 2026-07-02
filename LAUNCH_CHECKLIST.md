# 🚀 NextForge Launch Checklist

Complete this checklist to go from code to cash in 7-14 days.

---

## ✅ PHASE 1: SETUP (Day 1-2)

### Technical Setup
- [ ] Clone repository locally
- [ ] Run `npm install`
- [ ] Copy `.env.example` to `.env.local`
- [ ] Run `npm run dev` - verify it works locally
- [ ] Review all sections on localhost:3000

### Lemon Squeezy Account
- [ ] Create account at lemonsqueezy.com
- [ ] Complete store setup (name, domain, payout)
- [ ] Create products:
  - [ ] Starter: $0 (or GitHub link)
  - [ ] Pro: $149
  - [ ] Pro+: $299 (optional)
- [ ] Get checkout URLs for each product
- [ ] Get API key (Settings → API)
- [ ] Create webhook (Settings → Webhooks)
- [ ] Add webhook URL: `https://yourdomain.com/api/webhook/ls`
- [ ] Copy webhook secret

### Environment Variables
Add to `.env.local`:
```bash
# Your domain
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Lemon Squeezy
NEXT_PUBLIC_LS_STORE_ID=12345
LS_API_KEY=your-api-key
LS_WEBHOOK_SECRET=your-webhook-secret
NEXT_PUBLIC_LS_CHECKOUT_PRO=https://yourstorename.lemonsqueezy.com/checkout/buy/xxxxx
NEXT_PUBLIC_LS_CHECKOUT_STANDARD=https://yourstorename.lemonsqueezy.com/checkout/buy/yyyyy

# Resend (for newsletter - optional)
RESEND_API_KEY=re_xxxxxxxxxxxx
```

### Test Locally
- [ ] Click "Buy Now" - LS checkout opens?
- [ ] Submit newsletter form - no errors?
- [ ] Navigate all pages - everything loads?
- [ ] Test on mobile (Chrome DevTools)
- [ ] Check console for errors

---

## ✅ PHASE 2: CUSTOMIZATION (Day 3-4)

### Branding
- [ ] Update site name in `lib/seo.ts`
- [ ] Change logo: replace `/public/logo.png`
- [ ] Update favicon: replace `/public/favicon.ico`
- [ ] Create OG image: `/public/og-image.png` (1200×630px)

### Content (lib/dictionary.ts)
- [ ] Hero section:
  - [ ] Update headline (title1, title2)
  - [ ] Update description (desc)
  - [ ] Update CTA button text (buyBtn)
  - [ ] Update benefits bullets
- [ ] Products section:
  - [ ] Update product names, prices
  - [ ] Update features lists
  - [ ] Verify checkout URLs
- [ ] About section:
  - [ ] Add your story
  - [ ] Update founder info
- [ ] Footer:
  - [ ] Update social links
  - [ ] Update contact info
  - [ ] Update tagline

### Colors (app/globals.css)
- [ ] Choose brand color (default: indigo)
- [ ] Update CSS variables if needed
- [ ] Test in light/dark mode
- [ ] Verify contrast (accessibility)

### Testimonials i statystyki (components/landing/WallOfLove.tsx, Hero)
- [ ] **Opcjonalnie**: Zostaw domyślne statystyki i testimoniale na start – są w porządku na launch.
- [ ] Jeśli kiedyś zechcesz: zamień na prawdziwe opinie, zdjęcia, metryki (revenue, time to launch).

**Tip**: Strona może iść w świat z obecnymi statystykami (500+ devs, rating, revenue). Prawdziwe testimoniale dodaj później, gdy będziesz ich mieć.

---

## ✅ PHASE 3: CONTENT (Day 5-6)

### Blog Posts
- [ ] Review all 11 blog posts in `/content/blog/`
- [ ] Update author name
- [ ] Customize examples to match your brand
- [ ] Replace `[NextForge]` with your product name
- [ ] Add your own insights/experiences (optional)
- [ ] Create blog post images (Midjourney, Canva)

### Documentation
- [ ] Review 7 doc files in `/content/docs/`
- [ ] Update setup instructions with your specifics
- [ ] Add screenshots of YOUR dashboard
- [ ] Update links to YOUR resources
- [ ] Test all code examples

### Legal Pages
- [ ] Update company info in `/app/privacy/page.tsx`
- [ ] Update contact emails (privacy@, legal@)
- [ ] Update company address (if required)
- [ ] Review terms in `/app/terms/page.tsx`
- [ ] Update refund policy (default: 14 days)
- [ ] Consult lawyer if needed (recommended for serious business)

---

## ✅ PHASE 4: DEPLOYMENT (Day 7)

### Vercel Deployment (Recommended)
- [ ] Create Vercel account
- [ ] Connect GitHub repository
- [ ] Configure project settings:
  - Framework: Next.js
  - Root: ./
  - Build: `npm run build`
- [ ] Add all environment variables from `.env.local`
- [ ] Deploy!
- [ ] Check deployment logs for errors
- [ ] Visit production URL - test everything

### Custom Domain (Optional)
- [ ] Buy domain (Namecheap, GoDaddy, Cloudflare)
- [ ] Add to Vercel (Settings → Domains)
- [ ] Update DNS records (Vercel shows you how)
- [ ] Wait for DNS propagation (5-60 minutes)
- [ ] Update `NEXT_PUBLIC_SITE_URL` in Vercel
- [ ] Redeploy

### Post-Deployment Testing
- [ ] Homepage loads correctly
- [ ] All links work
- [ ] Lemon Squeezy checkout works
- [ ] Newsletter signup works
- [ ] Forms submit properly
- [ ] Blog posts load
- [ ] Docs site works
- [ ] Mobile responsive
- [ ] Load speed <3s (use PageSpeed Insights)

---

## ✅ PHASE 5: PRE-LAUNCH MARKETING (Day 8-10)

### Build Audience
- [ ] Tweet: "Building [Product] in public. Here's the problem I'm solving..."
- [ ] Share progress daily (screenshots, metrics)
- [ ] Create landing page teaser: "Coming soon..."
- [ ] Collect emails (50-100 pre-launch)

### Create Assets
- [ ] Record 2-3 min demo video (Loom)
- [ ] Take screenshots of dashboard, features
- [ ] Create social media graphics (Canva, Figma)
- [ ] Write launch copy (tweets, emails)

### Prepare Launch Channels
- [ ] Product Hunt:
  - [ ] Create account (if new, do 2 weeks before)
  - [ ] Prepare assets (thumbnail 240×240, gallery 1270×760)
  - [ ] Write description (300 words)
  - [ ] Line up 20-30 supporters
- [ ] Twitter:
  - [ ] Schedule launch thread
  - [ ] Prepare progress tweets
  - [ ] DM friends/supporters
- [ ] Email list:
  - [ ] Write launch email
  - [ ] Schedule for launch day
- [ ] Communities:
  - [ ] Indie Hackers post ready
  - [ ] Reddit posts ready (r/SideProject, r/alphaandbetausers)
  - [ ] Hacker News (if appropriate)

---

## ✅ PHASE 6: LAUNCH (Day 11-12)

### Product Hunt Launch Day

**12:01am PST**:
- [ ] Submit product to Product Hunt
- [ ] Post first comment (founder story)
- [ ] Share link with supporter list (email)

**Throughout the day** (every 1-2 hours):
- [ ] Respond to EVERY comment (within 15 min)
- [ ] Tweet progress updates
- [ ] Thank supporters
- [ ] Answer questions thoroughly
- [ ] Rally team if ranking drops

**End of day**:
- [ ] Screenshot final results
- [ ] Thank everyone publicly
- [ ] Celebrate! 🎉

### Other Channels

**Twitter**:
- [ ] Launch thread (morning)
- [ ] Progress updates (every 3-4 hours)
- [ ] Engage with comments
- [ ] Retweet supporters

**Email List**:
- [ ] Send launch email
- [ ] Include special launch pricing
- [ ] Track open/click rates

**Communities**:
- [ ] Post on Indie Hackers
- [ ] Share in relevant subreddits
- [ ] Discord/Slack groups
- [ ] Hacker News (if hit PH top 5)

---

## ✅ PHASE 7: POST-LAUNCH (Day 13-30)

### Week 1: Momentum
- [ ] Add "Featured on Product Hunt" badge to site
- [ ] Thank all supporters (email + tweets)
- [ ] Write launch recap blog post
- [ ] Respond to all customer questions
- [ ] Fix urgent bugs
- [ ] Collect testimonials from early customers

### Week 2: Optimization
- [ ] Review analytics (what's working?)
- [ ] A/B test headline (if enough traffic)
- [ ] Optimize checkout flow (any drop-offs?)
- [ ] Improve based on feedback
- [ ] Add more testimonials

### Week 3-4: Growth
- [ ] Publish 2 more blog posts (SEO)
- [ ] Guest post on relevant blogs
- [ ] Engage on Twitter daily
- [ ] Start email marketing (if you have list)
- [ ] Consider paid ads (if profitable)

---

## ✅ ONGOING: GROWTH & OPTIMIZATION

### Weekly Tasks
- [ ] Respond to all support emails
- [ ] Ship 1 small improvement
- [ ] Write/publish 1 blog post
- [ ] Engage on Twitter (daily)
- [ ] Review metrics dashboard

### Monthly Tasks
- [ ] Review MRR growth
- [ ] Analyze churn (why are people leaving?)
- [ ] Survey customers (what do they want?)
- [ ] Plan next month's features
- [ ] Optimize SEO (check rankings)
- [ ] Update testimonials

### Quarterly Tasks
- [ ] Major feature release
- [ ] Update pricing (if needed)
- [ ] Hire help (VA, designer, writer)
- [ ] Explore new marketing channels
- [ ] Financial review (profitable?)

---

## 🎯 SUCCESS METRICS

### Week 1 Goals:
- [ ] 100+ website visits
- [ ] 10+ email subscribers
- [ ] 3-5 sales
- [ ] $500+ revenue

### Month 1 Goals:
- [ ] 1,000+ website visits
- [ ] 50+ email subscribers
- [ ] 20-30 sales
- [ ] $3,000+ revenue
- [ ] 5+ testimonials

### Month 3 Goals:
- [ ] 5,000+ website visits
- [ ] 200+ email subscribers
- [ ] 100+ total sales
- [ ] $10,000+ MRR
- [ ] 15+ testimonials

### Month 6 Goals:
- [ ] 15,000+ website visits (organic)
- [ ] 500+ email subscribers
- [ ] 300+ total customers
- [ ] $30,000+ MRR
- [ ] Profitable without paid ads

---

## 🚨 COMMON ISSUES & FIXES

### Issue: Checkout doesn't open
**Fix**:
1. Check `NEXT_PUBLIC_LS_STORE_ID` is set
2. Verify checkout URL is correct
3. Check browser console for errors

### Issue: Newsletter doesn't work
**Fix**:
1. Verify `RESEND_API_KEY` is set
2. Check `/api/newsletter` route exists
3. Test with Postman/Insomnia first

### Issue: Build fails on Vercel
**Fix**:
1. Run `npm run build` locally
2. Fix any TypeScript errors
3. Check all imports are correct
4. Redeploy

### Issue: Images not loading
**Fix**:
1. Check images are in `/public` folder
2. Paths start with `/` (e.g., `/logo.png`)
3. Clear Vercel cache, redeploy

### Issue: SEO not working
**Fix**:
1. Verify `NEXT_PUBLIC_SITE_URL` is set
2. Check meta tags in page source
3. Submit sitemap to Google: `yourdomain.com/sitemap.xml`
4. Be patient (SEO takes 2-4 weeks)

---

## 💡 PRO TIPS

### Tip #1: Launch Imperfect
Don't wait for perfect. Ship at 80% done. Iterate based on feedback.

### Tip #2: Talk to Every Customer
First 10 customers = gold mine of insights. Ask them everything.

### Tip #3: Raise Prices Early
After 50 customers, raise price by $20-30. Grandfather existing customers.

### Tip #4: Build Email List
Email > social media. Own your audience.

### Tip #5: Focus on One Channel
Master ONE marketing channel before adding more. Twitter or SEO, not both initially.

---

## 🎁 BONUS RESOURCES

### Included in NextForge:
- ✅ This checklist
- ✅ Email templates (5-email sequence)
- ✅ Tweet templates (10+ formats)
- ✅ Blog post outlines
- ✅ Sales copy frameworks
- ✅ Product Hunt launch guide

### Recommended External Tools:
- **Design**: Figma (free), Canva ($13/mo)
- **Video**: Loom (free), Screen Studio ($89)
- **Analytics**: Vercel (free), Plausible ($9/mo)
- **Email**: Resend ($20/mo), Loops ($50/mo)
- **Support**: Plain ($49/mo), Crisp ($25/mo)

---

## 🏆 YOUR MISSION

**This week**:
1. ✅ Get it running locally
2. ✅ Customize branding
3. ✅ Deploy to Vercel
4. ✅ Test checkout flow

**Next week**:
1. ✅ Build pre-launch email list (50+ people)
2. ✅ Record demo video
3. ✅ Prepare launch assets
4. ✅ Line up supporters

**Week 3**:
1. ✅ Launch on Product Hunt
2. ✅ Share on all channels
3. ✅ Get first 10 customers
4. ✅ Celebrate! 🎉

**Weeks 4-12**:
1. ✅ Publish SEO content consistently
2. ✅ Iterate based on feedback
3. ✅ Grow to $10K MRR
4. ✅ Quit your job? 😎

---

## 🎯 LAUNCH DAY SCHEDULE

### 12:01am PST: Product Hunt
- [ ] Submit product
- [ ] Post first comment (founder story)
- [ ] Email supporter list

### 6:00am PST: Wake Up
- [ ] Check ranking, respond to comments
- [ ] Tweet morning update

### 9:00am PST: First Wave
- [ ] Share on LinkedIn
- [ ] Post in Indie Hackers
- [ ] Share in Discord/Slack groups

### 12:00pm PST: Midday Push
- [ ] Respond to all comments
- [ ] Tweet progress update
- [ ] Share milestone ("50 upvotes!")

### 3:00pm PST: Rally Troops
- [ ] If ranking drops, rally supporters
- [ ] Offer limited bonus (discount, feature)
- [ ] Tweet urgency

### 6:00pm PST: Evening Push
- [ ] Final Reddit posts
- [ ] Tweet leaderboard position
- [ ] Thank everyone

### 11:00pm PST: End of Day
- [ ] Screenshot final results
- [ ] Thank everyone publicly
- [ ] Plan tomorrow's follow-up

---

## 📊 METRICS TO TRACK

### Daily (First Week):
- Website visitors
- Newsletter signups
- Trial starts
- Purchases
- Revenue

### Weekly:
- MRR growth
- Churn rate
- Traffic sources
- Top pages
- Conversion rate

### Monthly:
- Total revenue
- Customer count
- Organic traffic
- SEO rankings
- Email list size

### Use These Tools:
- Vercel Analytics (built-in)
- Google Analytics (free)
- Lemon Squeezy dashboard (sales)
- Simple spreadsheet (track everything)

---

## 🎉 SUCCESS MILESTONES

### 🥉 Bronze ($1K MRR)
Congratulations! You're making real money. Keep shipping.

### 🥈 Silver ($5K MRR)
You have a real business. Time to optimize and scale.

### 🥇 Gold ($10K MRR)
Life-changing money. Consider quitting day job?

### 💎 Diamond ($50K MRR)
You made it. Now help others do the same.

---

## 🆘 NEED HELP?

**Resources**:
1. **FAQ**: `/content/docs/faq.md` (30+ questions answered)
2. **Discord**: [discord.gg/nextforge](https://discord.gg/nextforge)
3. **Email**: support@nextforge.app
4. **Docs**: `/content/docs/` (7 comprehensive guides)

**Don't waste time being stuck. Ask for help!**

---

## 🔥 FINAL WORDS

You have everything you need:
- ✅ Conversion-optimized landing page
- ✅ 11 SEO blog posts
- ✅ Complete documentation
- ✅ Payment integration
- ✅ Legal compliance
- ✅ This checklist

**No more excuses.**

Launch in 7 days. Get customers. Make money. 🚀

---

**Ready? Let's go!**

Built with ❤️ by NextForge Team
Last Updated: February 3, 2026

---

## 📞 QUICK LINKS

- 📖 [Installation Guide](/content/docs/installation.md)
- 💳 [Lemon Squeezy Setup](/content/docs/lemon-squeezy-setup.md)
- 🚀 [Deployment Guide](/content/docs/deployment.md)
- 🎨 [Customization Guide](/content/docs/customization.md)
- ❓ [FAQ](/content/docs/faq.md)
- 📊 [Complete Optimization Report](/SALES_OPTIMIZATION_COMPLETE.md)
