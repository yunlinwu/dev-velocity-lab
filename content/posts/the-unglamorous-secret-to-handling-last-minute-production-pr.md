---
title: "The Unglamorous Secret to Handling Last-Minute Production Pressure"
date: "2026-07-02"
youtubeUrl: "https://youtu.be/-7OkQdKmKmU"
excerpt: "I deployed resiliency automation code to production under pressure and didn't panic. Here's what actually prepared me: three repetitions of boring, deliberate practice."
pillar: "ai-workflows-for-learning"
---

Last week, I got pulled into a call with the App team, their PLC, and managers from other teams. They needed to know: could my code handle fail-over and fail-back testing in production? I'd never deployed resiliency automation to prod before. My first instinct was panic. But I wasn't nervous. I was ready—and I didn't even realize I'd been training for it.

## The Thing Nobody Tells You About Pressure

When you're new to something, urgent requests feel like a trap. You assume that if you haven't done it before, you'll fail. But here's what actually happened: I'd been preparing every single day without treating it as preparation.

For weeks, I'd been reviewing code changes. Understanding what each part did. Documenting what validation checks I'd need to run. I wasn't studying for an exam. I was just being careful about work I was already doing.

Then the ask came. And instead of freezing, I moved.

## Three Times Is the Magic Number

I'd deployed to a slower environment twice before. Both times felt foreign. Both times I asked questions: *Why does this piece go here? What changes when it's planned versus unplanned? What scenarios behave differently?*

By the third time—in production—I wasn't looking at Terraform files like it was my first time. I knew what would happen. I knew which services to check during fail-over and fail-back. I'd been in three of those calls now, either listening in or as the support POC. Each call gave me more foundation.

The work itself? Grabbing code templates, applying them to the App team's environments. Boring. Repetitive. That repetition is exactly why it worked.

## You'll Make Mistakes. That's the Point

I did mess up. I didn't increase the ECS task count to six—kept it at three—because I couldn't find the right variable in my resiliency automation script. 

And it was fine.

I wasn't sure where to look *then*. Now I know exactly where that change lives. Most of the other changes stuck. The concepts stuck. The validation process stuck. The mistake turned into something I'll never forget.

## What This Actually Means for You

You don't need to be ready for pressure. You need to be ready for repetition. Do the boring thing three times. Ask questions every time. Document what you learn. Review your own notes. When a high-urgency request comes—and it will—you won't be executing blind. You'll be executing from muscle memory you built by accident.

The story isn't exciting because the real work never is. It's just showing up, being focused, and letting repetition compound. Then when it matters, you don't break.