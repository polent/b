---
title: Tracking like ‘The Hare and the Hedgehog…’
description: Holger Hellinger advocates for ethical web tracking, emphasizing user privacy, consent, and first-party data use over invasive third-party methods, aligning with GDPR and enhancing customer trust.
date: 2020-03-19
tags:
  - tracking
  - Performance
  - cookies
---

## …should we play this?\*

Will this blog explain how your customers shall be tracked bypassing current local or EU laws and browser vendor settings? [GDPR](https://gdpr-info.eu/), or third-party cookies, for example?

No, I’m afraid, you can stop reading if you expected this. I will also not give any legal advice on how to stay safe. Connect with your local legal office if you need such help.

### Is it about how we track, and why people protect themselves?

Yes, it is. I want to help you think about satisfying solutions that meet your customer’s needs and appreciate local law. (What is obviously also global).

## What we track and how tracking happens

A quick check of a German Newspaper and their current state. Reason enough for me to do a quick check on the loaded resources with and without tracking protection — only with a view on requests and data transferred — triggered me again to take care of how we track our clients. We overload the web with tracking and advertisement (what also tracks), and other third-party stuff, that harms privacy and performance.

### Without Protection

{% image "./Clipboard01.png", "Shows Firefox Performance Tab with 395 Requests, 25 MB Data, and loading Time of 23 seconds — with tracking protection off", [], "(min-width: 40em) 960px, 100vw" %}

### Without Protection

{% image "./Clipboard02.png", "451 requests, 40MB, finished after 1,61 seconds", [], "(min-width: 40em) 960px, 100vw" %}

### With Protection

{% image "./Clipboard03.png", "100 requests, 14MB, finished after 1,47 seconds", [], "(min-width: 40em) 960px, 100vw" %}

So, why is this a problem for your customers and yourself?

### This is a risk for your customers and yourself.

- We steal bandwidth, they pay for their internet contracts, [especially on mobile](https://www.statista.com/chart/17247/the-average-cost-of-mobile-data-in-selected-countries/), where costs are still quite high. **They pay two times, their tariff and the products you sell**.
- Reduced performance, pages and so customers carry useless weight and event systems — **a client doesn’t care if you want to track them. Adding tracking to webpages without noticing your client is like packing a backpack with a GPS system on the back of your client every time when they enter your physical store, to see where they go**.
- Open privacy issues with third parties, that we can’t trust — **we do not know what the tools we include to our page do additionally with the customer’s data**.
- Loyalty and other issues for yourself, as customers visit you, not the third-party — your customers **get related advertisement after leaving your internet shop with a risk to lose them to a contributor**.
- Not matching advertisement at all — **just because you searched for something, you might not need it**.
- No control over what is executed in the context of your third party — **cryptocurrency miners, or similar tools are side-loaded**.

## Governments’ and customers’ activities

Governments create laws that protect their residents. Customers protect themselves using **safe** browsers.

### The laws

The EU and California created laws that protect their residents. In California, it is covered by several [privacy laws](https://oag.ca.gov/privacy/privacy-laws). In Europe, we have the [GDPR](https://gdpr-info.eu/) rules. In a nutshell, they make it mandatory to inform your customers what you store, and where, and how you can ask for deleting it again.

### The reasons

Look around and you will see a lot of reasons. [Cambridge Analytica](https://www.theguardian.com/technology/2019/mar/17/the-cambridge-analytica-scandal-changed-the-world-but-it-didnt-change-facebook) is an [ongoing issue](https://www.theguardian.com/uk-news/2020/jan/04/cambridge-analytica-data-leak-global-election-manipulation). Customers data is sold, companies like Facebook earn money with it. Google’s whole advertisement system relies on shared knowledge about your customers. And these are only examples.

Also, searching for “a product” — buying it — and in the next weeks, you get an advertisement for this all over, without any need for this product anymore. The data collected often does not work as intended.

There is a lot of lost trust in the pages your customers visit. They want to know what data they share and in a first try, they often just block all data to prevent the above issues.

### Questions asked

Customers and client contacts of Publicis Sapient reach out to us to get help to track their customers’ journeys and monetize their web. Asked why they have the need to track better, the answer is often: **they can’t track the ones they want anymore**. This is caused by a couple of reasons:

- Customers were tracked massively and the performance of pages went down, so they installed third-party protection.
- Usage of third-party (sic) tools for applying and asking for allowance to add cookies, created its own legal issues.
- Trust on popups setting or allowing cookies or notifications declines or is getting prevented.
- Local law restricted tracking and so third parties were not able to provide the needed data anymore.
- Their legal departments recognized that there are severe risks of paying a lot of fines for tracking customers without notifying them.
- There is no meaningful data available anymore, as the current way of tracking does not work at all.

### Getting back trust

How can customers get trust back, to allow them using your web and enable us to get to know them?

## My harsh assumption

> If the tracking and advertising industry does not start providing privacy-respecting tools that keep the data where it is generated and match it on the first-party side, they will get less important, like stagecoaches when delivery cars and digital transportation were invented. <cite>- Holger Hellinger</cite>

## The browser vendors

Browsers like Firefox, Brave, Edge, Opera, and Safari try to help their users to prevent getting tracked, as they recognized that even [asking politely for not tracking](https://en.wikipedia.org/wiki/Do_Not_Track) does not help. If you use the latest Firefox, it already shows you what they prevented you from with visiting: about:protections.

### Side Effect

A side effect of this is, browser vendors like [Brave](https://brave.com/) get strong as they provide full protection of their users with not sharing anything. Their users even accept to be kept out of some pages. Brave created its own business model of selling ads that relies on users' attention only. Marketers do not know about potential customers until these hit their pages and interact directly. And Brave offers publishers to get part of the Basic Attention Network and get paid by people using the browser on their published web pages.

## The bypass business

### Civility does not work anymore

> Will companies find other workarounds that Apple will have to cordon off? Probably.<cite>- Quote from by-passers</cite>

The issue with politeness, for the wish to not getting tracked, apparently is getting visible. Reading [such articles, that blame browser vendors](https://digiday.com/marketing/wtf-apples-itp-2-3-update/) protecting their users, or [comments in tracking tools documentation](https://gist.github.com/mbaersch/677cfad72592631eea4d385116c91a63), that claim that bypass is nearly impossibly using local storage, are showing the dilemma. There is a lot of energy in trying to bypass users who do not want to get tracked.

{% image "./Clipboard04.png", "The Hare and the Hedgehog Source: https://commons.wikimedia.org/wiki/File:Joseph-Albert_wettlauf-des-igels-und-des-hasen-1862.jpg ", [], "(min-width: 40em) 960px, 100vw" %}

The more the industry bypasses, the more the game of “The Hare and the Hedgehog” starts. In the end, your client loses: Trust in you, speed and quality time on the internet, financially as stolen bandwidth and more.

### What is done to bypass?

- Storing session information in local storage where this [should not reside](https://dev.to/rdegges/please-stop-using-local-storage-1i04)
- Trying to detect targets via browser settings
- Installing scripts that create a [fingerprint](https://blog.mozilla.org/internetcitizen/2018/07/26/this-is-your-digital-fingerprint/)
- Trying to get “first-party” with using local scripts
- Fetching query strings and referrers

Other ways of actions against user privacy are by advertisers like Google, who [start to remove the possibility to use ad blockers](https://9to5google.com/2019/05/29/chrome-ad-blocking-enterprise-manifest-v3/) in their own Chrome. Ad-blocking, as we were used to, will not work anymore for community browsers with their V3 manifest, as this harms their core business model. On the other hand, [Google also rethinks their usage of cookies](https://blog.chromium.org/2019/05/improving-privacy-and-security-on-web.html), too.

## Options for you

Instead of luring your customers into tracking and possibly losing this race, we need to do it differently again.

Give your customers trust back when they visit your web pages. Do not rely on third parties that directly interact with your clients. Store only relevant data and make it visible for your customers why you store something and what advantages they have from this action.

### What do you expect your customers to like more?

**Getting asked with several confirm boxes if they want to accept cookies, notifications and newsletters? Or keep their experience clean and collect the data you need after a login, interacting with a form, etc.?**

I think it is obvious.

### Make data first-party again

One could be the rebirth of server-side logs. There is no need to set client-side cookies to track users. All servers write log files; they are first-party data. You can install software that evaluates this data. Getting information about click paths, user journeys does not need any third-party. It was just too convenient to let all this work be done by third-party, but they also sold and used **your** customer’s data.

This requires a bit of preparation of your services to write proper log files when your client interacts with your application. But compared with the price of losing trust, this is negotiable.

Instead of pushing states to a `dataLayer` of third parties, keep this private by your own services, or your client-side applications might need to update the server asynchronous instead of pushing to third parties.

You will not get this for free, but your data engineers with better customer data will love you and in the end, your customer.

Besides this, you could even keep your users’ data tracked across your own services. Use, for example, unique property and user IDs in your first-party cookies and make it your data.

### Explain customers why you exceptionally want more of their data

If you want your customer’s detailed data, ask them for this. Offer them a benefit when they provide this, and not only the twentieth newsletter subscription with a shuffle competition every three months.

See for what price you gain client or customer data, maybe less is again more.

Be creative. Your legal team for sure will find some ways to make your customers share information with you. But don’t use third parties to collect this. Your customers will see if you redirect them somewhere else.

### Adledger as advertisement network to monetize your web

[Publicis Media](https://www.publicisgroupe.com/en/services/services-publicis-media-en) is a member of [Adledger](https://adledger.org/). It is a non-profit research and development consortium responsible for implementing global technical standards and solutions for the digital media and blockchain industry. AdLedger’s goal is to promote trust and transparency in the digital media space. Publicis Sapient can support you in finding the right way of doing things.
Monetizing your applications differently

Get a Publisher at the [Basic Attention Network](https://publishers.basicattentiontoken.org/). Users visiting your applications with Brave can monetize you.

## Finally

If you get data from customers who trust you, you have more value than just having data from the ones who do not know how to prevent themselves from being tracked. So maybe using single sign-on on your applications, not sharing with others, can make your user data more valuable again. As it is not only your customers’ data, it is also yours!

### Side note

Tracking your users’ data across small businesses may not even be helpful. This is even truer on private webpages.
Best practices and other things to read

- [https://dev.to/rdegges/please-stop-using-local-storage-1i04](https://dev.to/rdegges/please-stop-using-local-storage-1i04)
- [https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Privacy/Storage_access_policy](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Privacy/Storage_access_policy)
- [https://webkit.org/blog/9521/intelligent-tracking-prevention-2-3/](https://webkit.org/blog/9521/intelligent-tracking-prevention-2-3/)
- [https://www.getadvanced.net/technology-blog/article/sharing-personal-data-when-you-become-the-product](https://www.getadvanced.net/technology-blog/article/sharing-personal-data-when-you-become-the-product)
- [https://blog.chromium.org/2019/05/improving-privacy-and-security-on-web.html](https://blog.chromium.org/2019/05/improving-privacy-and-security-on-web.html)
- [https://blog.chromium.org/2020/01/building-more-private-web-path-towards.html](https://blog.chromium.org/2020/01/building-more-private-web-path-towards.html)

## \* Why ‘The Hare and the Hedgehog’?

I have chosen this as a fairy tale that shows the fighting against the more intelligent or always step ahead analogy. ‘The Hare and the Hedgehog’ in detail.
