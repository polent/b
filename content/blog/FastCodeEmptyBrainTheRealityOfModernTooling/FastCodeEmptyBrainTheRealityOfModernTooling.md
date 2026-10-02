---
title: "Fast Code, Empty Brain: The Reality of Modern Tooling"
description: Automated agents give high velocity and green builds. When we stop understanding code flow, our core engineering instincts erode.
date: 2026-10-01
tags:
  - Software Engineering
  - Artificial Intelligence
  - AI Agents
  - Dark Factory
  - Web Development
  - Architecture
  - Craftsmanship
---

## The Illusion of Knowing

I see more and more developers talk about this problem. They do not really know what they build anymore.

You can check if input A creates output B. You can verify that the page is accessible, fast, and indexed properly. Automated tests pass. Security scans pass. Everything looks green.

Then a real bug happens.

{% image "./fast.png", "A developer at a modern workstation with multiple monitors displaying code, terminals, and glowing 3D wireframe brains. One hand operates a dial controller while the other holds a coffee mug, with a skyscraper skyline visible through the panoramic window.", [], "(min-width: 40em) 960px, 100vw" %}

Tracing the bug gets tricky immediately. Reading Dynatrace logs and figuring out what broke takes double the effort. When you do not know how your code flows, you cannot fix it with intuition. You just feed the log back to the agent and hope it understands. That is where the brain starts rotting. You create an empty bubble in your head. Research already shows this effect on [memory and unaided thinking](/blog/WhyUncheckedTrustInAIPutsCriticalThinkingAtRisk/).

## The Ready Meal Dilemma

Using an agent is like opening a ready meal package. You mix the ingredients, put it in the oven, and eat. It tastes okay. The delivery is fast. Cooking from scratch always tastes better, and you actually know what went inside.

I see the commercial reality. In my current client work, we would not finish on time without automated agents. I ran a full code review with Claude while writing this note. The agent checks code, suggests changes, and catches errors. We deliver value for clients, make money, and hit tight schedules.

I like working this way. The tools are good, and I use them every day. This is not a complaint. It is a look back at how it used to feel.

Burning hundreds of thousands of tokens in two minutes is a different kind of fun. I remember adjusting CSS pixels directly. I remember reloading the browser thirty times while tuning TypeScript logic. That feeling of handcraft is slowly leaving daily delivery, and sometimes I miss it.

## See What I Have Done

I remember the things I built. In 2000, I created the first real Nestlé webpage. More than ten years ago, I built the seat map for the Lufthansa mobile app. Nearly fifteen years ago, we built one of the first mobile shops for Media Saturn. It [won the Google Mobile Agency Award 2012](https://www.horizont.net/medien/nachrichten/-Mobile-Agency-Awards-Saturn-wird-ausgezeichnet-109588).

I can still point at each of them and say: I made that. I know every edge case, every hack, and every late night behind it.

That kind of pride changes. When the agent writes the code, you rarely say "see what I have done". You say "see what we built together". It is a different feeling. Not worse, just different. I still notice the difference.

## Mass Production and Price Pressure

We cannot turn back the clock. Professional delivery will not pay for manual line by line tinkering when agents do it in seconds.

It is like the automotive world. You have hand built niche cars that cost a fortune, and you have mass production factories. The agency and enterprise world will pick mass production every time. If you refuse to use these tools, the market replaces you. I accept this commercial reality. I just think it is fair to name what we trade for it.

Look at your living room. People buy a sculpture at IKEA. A hand carved one costs many times more, so almost nobody buys it. Paintings work the same way. The Picasso is for the rich. The print is for everyone else. Nobody calls the print bad. It does the job, and it looks the same in a million homes. That is exactly where generated code is going. Good enough, cheap, and [average by design](/blog/WhyAIIsMakingFrontendAverage/).

Junior engineers face the hardest barrier. If you generate boilerplate without understanding the core DOM, HTML, CSS, and basic JavaScript execution, you never build mental models. You only learn how to prompt.

## Who Fed the Machine?

One thing I keep thinking about. The tools learned from us. From developers who answered forum questions at night. From teachers who explained the box model for decades. From people who wrote tutorials, books, and documentation for free.

Now these same people hear that they are not needed anymore. Their knowledge is inside the model. Their job is gone. We push out the people who built the knowledge base in the first place.

What happens next? If nobody writes new tutorials, nobody answers questions, and nobody teaches, the source dries up. The models then learn from their own output. Research calls this [model collapse](/blog/BeyondTheHypeCodingInPractice/). Every round gets a bit more average.

So will we still innovate? Or will we only generate things the tools already know? A model can remix what it has seen. It does not invent a new layout system or a new way to make the web accessible. Humans did that. If the human brain rots away, innovation slows down with it.

## From Pixel Moving to Orchestration

So what will we do in a few years? Orchestrate only?

The nitty gritty work will vanish. Moving pixels, tuning a flex gap, fixing a z-index at midnight. Nobody will pay for that anymore. People will stop explaining how to do something. They will only say what they want.

Maybe the client will not even need us in the room. They sit in front of the [dark factory](/blog/WhyTheDarkFactoryFailsForUserInterfaces/) and describe the idea. The factory builds it. In the best case, someone [reviews the result instead of the code](/blog/TheMythOfTheCodeReaderWhyAIAgentsAreTheBetterSeniorEngineers/).

I do not believe this will be finally done properly. Software built without humans will break in ways nobody planned for. Accessibility gaps, odd edge cases, a [dialect between agents](/blog/WhenAIAgentsStartTalkingLikeJamesJoyceAtAStandupMeeting/) that nobody can read. Someone needs to step in when it goes wrong.

That is the niche we need to find. Deep expertise in one area, strong enough to fix what the factory gets wrong. Not the person who types the code. The person who knows [why it broke and how it should work](/blog/WhyCodingAgentsCannotReplaceExperienceEngineering/). That person needs the basics more than ever.

## Energy and the Planet

There is also the planetary cost. We burn massive amounts of compute and power to generate code that humans do not read. Data centers grow faster than the grids that feed them.

The tools are owned by a few very rich companies. We need to push them, by regulation and by what we buy, to work sustainably. That means renewable energy for every data center. It means an end to fossil power for AI. And it means real work on reducing the burn: smaller models, efficient inference, and no giant model for a task a small one can do.

Otherwise the tools will not only burn our jobs. They will also burn the resources we live from. The things that make this planet a nice place to live. The same trade off shows up in [self hosting and digital sovereignty](/blog/TheDIDitParadoxWhenDigitalSovereigntyBurnsThePlanet/). Good intentions do not cancel the energy bill.

## After the Bubble

I have seen a bubble before. In the [dot-com era](/blog/FromDotComToAI/), many companies burst and only a few stayed. I expect the same here. In the next years, many AI companies will run out of money. The few that remain will own the market and set the price.

When cheap compute ends, the tools get expensive. Maybe so expensive that handcraft becomes interesting again. Like the hand carved sculpture or the hand built car. Not for everything. But for the work where quality, brand, and real understanding matter.

## What We Keep

I enjoy the new way of working. I also keep baking my own bread and fixing things myself at home. For production software, agents stay in the delivery pipeline for boilerplate, scans, and [sanity checks](/blog/BeyondTheHypeCodingInPractice/). Humans stay on the merge button, verify the UI, and keep their core skills alive. Then we get both. Fast tools and a sharp brain.

## Further Reading and References

* [Engineering Excellence or Brain Rot? The AI Development Paradox](/blog/IsAIRottingOurProgrammingBrainsorFreeingUs/): My earlier take on the same question, with lessons from legacy code and greenfield work.
* [The Hidden Cost of Vibe Coding and AI Agents](/blog/TheHiddenCostOfVibeCodingAndAIAgents/): Why "it works" is not the same as "it is good".
* [Web Development Education (Mathias Schäfer)](https://molily.de/web-dev-education): A grounded perspective on web development fundamentals, highlighting why direct understanding of browser mechanics and standard web technologies matters over pure abstraction.
* [Oxford Internet Institute: The Winners and Losers of Generative AI in the Freelance Market](https://www.oii.ox.ac.uk/the-winners-and-losers-of-generative-ai-in-the-freelance-job-market/): Empirical findings showing how automated commodity outputs heavily disrupt independent knowledge workers and creative freelancers.
* [Nature: AI Models Collapse When Trained on Recursively Generated Data](https://www.nature.com/articles/s41586-024-07566-y): Study showing how models degrade when they learn from their own output.
* [IEA: Energy and AI](https://www.iea.org/reports/energy-and-ai): Report on data center power demand and the energy sources behind it.
* [DHH: Rails World 2026 Opening Keynote](https://youtube.com/watch?v=vDjW_dRyKXY&t=2355): From minute 39. A good description of this shift in how we build software.
* [Brookings Institution: Generative AI and Contract Work](https://www.brookings.edu/articles/is-generative-ai-a-job-killer-evidence-from-the-freelance-market/): Analysis of market shifts, price pressure, and employment contraction across exposed technical and creative roles.
