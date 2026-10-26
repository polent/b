---
title: Ad Blockers and Pi-hole Are Digital Self Defense
description: Ad blockers, Pi-hole, and IVPN protect privacy, stop zero-click malvertising attacks, and reduce tracking at home and on the move.
date: 2026-10-26 
tags:
  - Security
  - Privacy
  - Pihole
  - Firefox
  - VPN
---

## Digital Self Defense Starts in the Browser

Ad blockers mean privacy, freedom, and protection from hackers. For many years, I use Firefox whenever possible. You can run websites as apps on the desktop and mobile. This is very comfortable. 

Firefox is not based on Chromium. While Google restricts ad blockers in Chrome with Manifest V3—a cat-and-mouse game I already covered in [Tracking like 'The Hare and the Hedgehog'](/blog/TrackingLike/)—Firefox gives you full control over what ads and trackers get blocked. As IT security expert Mike Kuketz points out, using an ad blocker is pure digital self defense[^1]. Even the German Federal Office for Information Security (BSI) recommends ad blockers to protect systems from malicious online advertising[^2].

## How Ad Networks Help Hackers

Online advertising is a big security risk. The BSI warns about malvertising, where attackers hide malware like ransomware or trojans inside regular ad banners. Website operators often do not even know this happens. They load content from dozens of external servers and lose control over their own pages.

Research by Citizen Lab reported on netzpolitik.org shows how dangerous this is[^3]. Attackers use a method called AdFection to infect devices with spyware through normal ad banners. It is a zero click attack. You do not even have to click the banner. When the ad shows up on your screen, it is already too late.

Attackers use Real Time Bidding in ad networks to find targets. Every time you open an app or website, your IP address and device data go to hundreds of bidding companies. Just like with [careless prompts in public AI tools](/blog/WhyUncheckedTrustInAIPutsCriticalThinkingAtRisk/), once your data leaves your device, you cannot take it back. Less data in those networks means a smaller attack surface. If ad networks do not get your data, they cannot target and hack your device.

## Stopping Smart Home Devices With Pi-hole

A good browser setup is not enough in a home network. Smart TVs, [smart assistants, and other connected gadgets](/blog/YetAnotherAssistantAndASearchEngine/) constantly send data home. Many televisions display unwanted ads straight on the screen. 

A local DNS filter fixes this. While running heavy private cloud servers at home can be an [environmental trap](/blog/TheDIDitParadoxWhenDigitalSovereigntyBurnsThePlanet/), a lightweight DNS filter on a NAS that already runs in your network makes complete sense. I run Pi-hole on my NAS. It works as the DNS server inside my Fritz!Box. Since then, I see block rates of up to 50 percent. Out of 36,005 total queries across 27 active clients, 12,475 queries are blocked, which is 34.6 percent with 613,430 domains on my blocklists. It is startling how much traffic you can save. More importantly, it stops apps and smart devices from talking to external ad servers.

## Image How to

{% image "./pihole-stats.png", "Pi-hole Dashboard showing 47.3 percent of queries blocked", [], "(min-width: 40em) 960px, 100vw" %}

## Staying Protected on the Move With IVPN

At home, Pi-hole protects all devices. When I travel, I also want protection on the move. A VPN connection back into my own home network is too slow for daily work. 

I now use [IVPN](https://www.ivpn.net/) when traveling. It includes tracker and ad blocking directly in the connection. Before that, I used Mozilla VPN. Mozilla VPN uses the infrastructure from Mullvad VPN. After it became public that one of the Mullvad founders supported right wing parties, I moved away. I cannot support that with my money. IVPN gives me fast connections and clean privacy on the road.

## Publishers Need to Take Back Control

I already hear website operators complain that they lose money. That is true. If publishers delivered selected ads from their own local servers without sharing data with [US tech billionaires](/blog/UniversalCommerceProtocolSoundsOpenItIsNot/), things would look different. As I wrote in my post on [first-party data and ethical tracking](/blog/TrackingLike/), keeping data and delivery on your own servers builds trust instead of destroying it. The BSI explicitly notes that hosting ads locally on the publisher server keeps technical control and security in the hands of the website owner.

Many providers also ignore user choices. You reject cookies in the GDPR banner, and they still load ads from affiliate networks. 

Not every ad is bad. Every unwanted ad steals my data, wastes my time, costs money, and puts my security at risk.

## Related Reading

* [Tracking like ‘The Hare and the Hedgehog…’](/blog/TrackingLike/): Why invasive third-party tracking harms performance and trust, and why first-party data is the better path.
* [The DIDit Paradox: When Digital Sovereignty Burns the Planet](/blog/TheDIDitParadoxWhenDigitalSovereigntyBurnsThePlanet/): Balancing digital independence from Big Tech with sustainable infrastructure.
* [Tech Titans Unveil New Gadgets: Innovation or Intrusion?](/blog/YetAnotherAssistantAndASearchEngine/): How smart assistants and new search tools act as data collection engines.
* [Why Unchecked Trust in AI Puts Critical Thinking at Risk](/blog/WhyUncheckedTrustInAIPutsCriticalThinkingAtRisk/): Why data protection and careful judgment start before your data leaves your device.

## References

[^1]: Mike Kuketz: [Kommentar: Adblocker sind digitale Selbstverteidigung](https://www.kuketz-blog.de/kommentar-adblocker-sind-digitale-selbstverteidigung/)
[^2]: Bundesamt für Sicherheit in der Informationstechnik (BSI): [Ad-Blocker & Tracking](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Updates-Browser-Open-Source-Software/Der-Browser/Adblocker-Tracking/adblocker_tracking.html)
[^3]: netzpolitik.org: [Werbeblocker obligatorisch: Geräte lassen sich ohne Klick per Werbeanzeige hacken](https://netzpolitik.org/2026/werbeblocker-obligatorisch-geraete-lassen-sich-ohne-klick-per-werbeanzeige-hacken/)

