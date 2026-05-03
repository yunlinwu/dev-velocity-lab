---
title: "I just got re-orged into SRE with zero SRE experience. Here's how I'm using AI to survive it."
date: "2026-05-03"
excerpt: "Last month I was a backend engineer. This month I'm on an SRE team with Kubernetes, Prometheus, and PagerDuty. Here's the exact AI workflow I'm using to not drown."
pillar: "navigating unfamiliar roles"
---

Last month I was a backend engineer writing Java services. This month I'm on an SRE team.

Nobody asked me if I wanted this. It was a re-org. The team needed headcount and I was available. That's how it works.

So now I'm sitting in a Kubernetes post-mortem, hearing acronyms I don't recognize, nodding like I understand what an HPA is. I don't.

Here's exactly what I'm doing about it.

## The honest state of things

When I landed on this team, I had:

- Zero production Kubernetes experience
- Never touched Prometheus or Grafana beyond a demo
- No on-call experience at all
- A general sense of dread

What I did have: 4 years of backend experience, decent debugging instincts, and access to Claude.

## The workflow I'm using

**Step 1: Identify the unknown unknowns first.**

The problem with being new to a domain isn't the stuff you know you don't know. It's the stuff you don't even know to ask about yet.

My first prompt wasn't "explain Kubernetes to me." It was:

> "I'm a backend engineer who just joined an SRE team at a mid-size company. What are the 10 concepts or systems I'll encounter in my first 30 days that I need to understand to not be lost? Assume I have no SRE background."

This gave me a map. Not a tutorial — a map. I now knew what to go learn.

**Step 2: Learn just-in-time, not just-in-case.**

I don't pre-study everything on the list. That's a waste of time when you're in a real role.

Instead: when something comes up in standup or in an incident — that's when I go deep. I open Claude and ask it to explain the specific thing I just encountered, in the context I encountered it.

> "In our Kubernetes cluster, someone mentioned that a pod was OOMKilled. Can you explain what that means, why it happens, and what questions I should be asking to understand if we need to fix something?"

That's learning on demand. It sticks because it's connected to a real situation.

**Step 3: Build a personal incident glossary.**

Every time I learn a new term or concept on the job, I write a two-sentence explanation in my own words, with the real example from work.

AI helps me get the definition right. I write the context myself.

After three weeks, I have 40+ entries. It's become the most useful resource I have.

## What's actually working

I'm not going to pretend I'm fully competent yet. I'm not. But I'm learning faster than I expected, and here's the honest evidence:

- I can follow incident calls without getting lost
- I contributed a real fix to a flapping alert last week
- My tech lead stopped asking me "do you know what that means?" after the first week

The key is being systematic about what you don't know, and using AI to compress the time it takes to understand it.

## What's next

I'm three weeks into this. I'll keep documenting as I go.

If you're in a similar situation — new role, unfamiliar stack, feeling behind — this is exactly what I'm building this blog for. Follow along.
