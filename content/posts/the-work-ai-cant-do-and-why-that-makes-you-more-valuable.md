---
title: "The Work AI Can't Do (And Why That Makes You More Valuable)"
date: "2026-07-03"
youtubeUrl: "https://youtu.be/MSlUocN07nY"
excerpt: "AI is great at writing code. But if you're in DevOps or SRE, you're doing something it still can't touch—and that's exactly why your role matters more."
pillar: "ai-workflows-for-learning"
---

I switched from full stack web development to SRE last year. Same company, completely different work. And here's what surprised me: AI made me *less* useful in my new role, not more.

## The Work Where AI Actually Works

In full stack development, I was bouncing between similar patterns. One or two apps. Front end, back end, database, AWS services. Authentication. The business logic was repetitive enough that once you knew what you needed done, tools like GitHub Copilot and ChatGPT could orchestrate most of it.

Need to connect a form to a database? Spin up an AI agent. Run unit tests? Done. Implement a feature from a spec? It's solid at that.

The catch: you have to already know what you need done. AI is excellent at *executing* a known task. It's less good at *deciding* what the task should be.

## Where AI Hits a Wall

SRE work is different. I'm not fixing bugs in isolation. I'm orchestrating entire systems—pipelines, infrastructure, observability. And here's where AI falls apart.

Take pipeline debugging. I'll get an error in our CI/CD flow, and my instinct is to paste it into ChatGPT. But the AI can't actually *see* the pipeline execute in GitLab. It reads the YAML. It reads the error. But it's working blind to how the stages connect, how they trigger, what's actually happening in the UI.

Result? It goes in circles. Confidently. It'll suggest fixes that sound reasonable but don't work because it's never actually watched the thing run. And you end up wasting time instead of saving it.

**The real work is hands-on repetition**: running pipelines, debugging them myself, learning how Terraform and AWS services actually behave in *your* specific architecture, with *your* teams.

## What I Actually Use AI For

One thing where AI genuinely helps: rebasing branches. My code branches off an older main, but the team keeps pushing commits to main. Now I've got divergence and merge conflicts.

I open VS Code and ask the agent to rebase my branch onto their latest. It pulls their commits, checks for conflicts, merges cleanly. Could I do this manually? Yeah. But it's mechanical, repetitive, and the agent handles it reliably.

That's the pattern: AI works when the task is procedural and the system is visible. It breaks when you need to think through *why* something failed and decide what to change.

## Why This Matters for Your Career

This is the honest part: AI makes full stack development more commoditized. If you can describe what you want built, an AI agent can help you build it. The barrier to entry drops.

But in DevOps and SRE? The barrier goes up. You *have* to develop critical thinking. You *have* to understand architecture, failure modes, what happens when things break unexpectedly. Can it be detected? Can it be fixed automatically? Can the system recover?

These aren't questions you can delegate to an agent yet. You have to live in the system, learn it through repetition, and train your intuition.

That's valuable. That's defensible. That's the work AI still can't touch.