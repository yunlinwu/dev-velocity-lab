---
title: "The Director's Feedback Shifted My Entire Perspective on What 'Done' Means"
date: "2026-05-21"
youtubeUrl: "https://youtu.be/qUJkfen9OVg"
excerpt: "I shipped a working dashboard in 24 hours. The director's feedback made me realize I was thinking like an IC when I needed to think like a product person."
pillar: "engineer-growth"
---

I built a dashboard POC in 24 hours. It worked. The managers liked it. I thought I was done.

Then the director gave feedback that completely reframed how I see engineering work, and I think a lot of early-career engineers need to hear this.

## What I Actually Built

The dashboard was straightforward: a single source of truth for publishing application banners. On the left side, the publisher view. On the right, two application previews. Users could update banners, take them down, publish with start/end times and custom messages. No more scattered emails, no more confusion about what's live where.

The reception was solid. Management wanted to take it to the VP. I thought we were moving forward.

## The Director's Four-Point Reality Check

Then the director said this: "Here's what we actually need."

**An approval workflow.** Publishers can draft and publish, but a business owner has to approve before any modifications or takedowns. This isn't a feature—it's governance. I hadn't thought about control at all.

**Logging and audit trail.** Who did what, when. For internal review. I shipped with zero observability around actions.

**Pre-built templates.** Don't make users start from scratch. Give them a library to work from. One decision saves hours across the org.

**AI-assisted message improvement.** This one stopped me. The director wasn't just asking for a feature—he was asking where AI could add actual value in the workflow. Validate banner messages. Improve copy. Make sure text makes sense before it ships.

That last one particularly stuck because it showed me the director was thinking six months ahead, not six hours ahead.

## The Gap I Didn't Know I Had

Here's what shifted: I was thinking like an individual contributor shipping code. The director was thinking like someone building a product the entire enterprise would use.

I understood the technical requirements (AWS services, Lambda, the stack). I could architect those. But I completely missed the *operational* requirements—the things that make a tool people actually use versus a tool that technically works.

The approval system, the audit trail, the templates—these aren't nice-to-haves. They're the difference between a prototype and something a company deploys at scale.

## What This Actually Means for How I Work Now

I'm not rebuilding the whole thing today. I don't need to implement all four features at once. But I'm now thinking about the longer architecture. Lambda functions might not cut it anymore—the scope is bigger. I need a better hosting strategy for HTML pages, a proper database layer for logs, a template engine.

More importantly, I'm looking at feedback differently. Demoing to leadership isn't about showing a polished, perfect project. It's about getting directional feedback early so the work bends toward actual business value instead of just technical correctness.

The POC was the right move. But shipping it without thinking about governance, auditability, and user experience—that was the mistake. Not in execution. In scope thinking.

If you're in that 1–3 year window and you keep wondering why senior engineers ask questions you didn't think to ask—this is why. They're already thinking about the thing after the thing you're building.