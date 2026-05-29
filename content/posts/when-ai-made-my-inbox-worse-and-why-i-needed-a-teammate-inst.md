---
title: "When AI Made My Inbox Worse (And Why I Needed a Teammate Instead)"
date: "2026-05-12"
youtubeUrl: "https://youtu.be/1g9-_GMkv2g"
excerpt: "I spent an hour prompting AI to fix my drowning SRE inbox. It made things worse. One 10-minute conversation with a teammate who'd actually lived in the role solved it. Here's what I learned about when to use AI and when to ask for help."
pillar: "ai-workflows-for-learning"
---

I just joined an SRE team. New tools, new alert systems, new company at enterprise scale. Within days, my Outlook inbox became chaos—alerts, notifications, team emails, troubleshooting tickets, all landing in the same place. I couldn't tell what actually needed my attention.

My first move: ask AI to fix it.

## The AI Solution That Failed

I fed Copilot my inbox and rules. It scanned everything, found that my manager was accidentally caught in a group rule, and suggested I add an exception. Logical, right?

Then I asked Claude. Same answer: "Set up an exception rule for your manager's emails."

Sounded helpful. But when I tried to actually implement it in Outlook, I hit a wall. The steps didn't match what I was seeing. The interface didn't have what they said it should. And even worse—the rules stayed generic. They didn't account for the *type* of emails I was actually drowning in. They made things noisier.

After an hour of prompting, I was going in circles.

## What Actually Worked: A 10-Minute Conversation

I asked my advisor on the team—someone who'd been in this environment for years. He walked me through his actual rules. Not theory. Not generic best practices. His *real system.*

In 10 minutes, I got more value than an hour of AI.

Here's what he showed me:

**Rule 1 (at the top):** Any email from managers, directors, VPs I work with goes directly to my inbox, plays a sound, gets a reminder to review at end of day. Stop processing. That's it.

Why it worked: At enterprise scale, this immediately separates signal from noise. Everything important hits my eyeballs.

**Rule 2:** Group emails (application teams, L2 support, etc.) go to their own folder. *Exception:* if my name is in To/CC, or if a manager/director is in To/CC, it goes to my inbox instead.

Why it worked: It's specific to *this environment.* It accounts for the actual noise he receives, not generic inbox problems.

**Rule 3:** Automatically delete anything older than 30 days that he'd never open anyway.

## The Lesson: Context Beats Generic Optimization

AI had direct access to my inbox. It knew the rules I'd written. But it didn't know:

- What it feels like to be new to SRE
- What an enterprise alert system actually looks like
- Which interruptions are false alarms vs. real page-outs
- What his team's actual communication patterns are

Those rules didn't come from a training model. They came from someone who'd lived in this exact inbox for years and learned through trial and error what works.

AI gave me optimization advice. My teammate gave me *context-specific wisdom*. One was generic. The other was built in his actual environment.

## When to Use Which

I'm not abandoning AI—I use it for almost everything at work. But this experience taught me the real skill isn't knowing how to prompt better. It's knowing *when* to use AI and when to walk over to someone's desk.

AI is fast for high-level patterns, research, and brainstorming. People are irreplaceable when you need to understand a specific system you've never lived in.

In a new role, learning a new stack, or drowning in a problem that's specific to *your* team? Find the person who's already figured it out. Save the AI prompts for the next problem.