---
title: "Stop Shipping Code You Don't Understand"
date: "2026-05-28"
youtubeUrl: "https://youtu.be/aT9bkd1_-AE"
excerpt: "You can make things work without knowing why. But that's where you get stuck—and where AI makes it worse."
pillar: "ai-workflows-for-learning"
---

I realized something lately that's been bothering me: I stopped asking why at work. And it's been quietly holding me back.

Here's what it looked like. I'd write code, verify it ran, and move on. I'd follow documentation, troubleshoot when it broke, make sure it worked, and move on. I'd ask AI about syntax, how methods connect, how the codebase was structured. But I almost never asked *why* the design existed in the first place. Why those architectural choices. What trade-offs were made. I just saw it worked and stopped there.

## Why I Stopped Asking

Sprint pressure is the obvious culprit. You need to close stories fast. Asking "why" feels like a luxury when the backlog is screaming.

But there's something else: imposter syndrome. Asking why feels like admitting you don't know something. Like you don't understand the codebase. Like you're not ready. So you take the path of least resistance—get it working, ship it, prove you belong.

And then AI showed up and made it worse.

AI gives you the solution so fast that you never have to ask the question that would have made you *understand* the approach. You get the code. It works. Done. The friction that used to force understanding is gone.

Here's the trap: **we get rewarded for things that work, not for things we understand.** So why would you bother?

## What Understanding Actually Buys You

When I moved into SRE and started asking why, everything shifted.

Why do we use those specific AWS services? Why set up alarms this way? Why is the pipeline deployed in that order? What's the strategy?

Suddenly I wasn't just executing tasks. I was understanding a system.

That's the difference. An engineer executes work. An engineer who lasts asks why.

## What to Actually Do

When someone runs a KTE (knowledge transfer event), ask about design decisions, not just the steps. Don't just take the implementation at face value. Push back: *What pattern is underneath? What architectural decision is this?*

With AI, don't accept the first solution. Ask it to explain the trade-offs. Why this approach and not another? What would break if you changed it?

Before you ping a teammate about why the current process exists, spend five minutes thinking: *What problem was this solving originally?* That context changes everything.

Shipping work that works is not the same as understanding why it works. One scales with how fast you can type. The other scales with how deep you can think.

The engineers who stay in this field are the ones who keep asking why. Everyone else gets stuck—or gets replaced by someone who does ask.