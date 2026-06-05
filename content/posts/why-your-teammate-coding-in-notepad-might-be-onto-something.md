---
title: "Why Your Teammate Coding in Notepad++ Might Be Onto Something"
date: "2026-06-04"
youtubeUrl: "https://youtu.be/f5_6OBLz8Qw"
excerpt: "I use AI for everything. My teammate uses Notepad++. We're both incomplete engineers—and that's the real lesson."
pillar: "ai-workflows-for-learning"
---

There's someone on my team who makes code changes in Notepad++. No IDE. No AI. No agents. And he understands the codebase better than I do in some ways.

This bothers me, and it's forced me to be honest about how I actually work.

## The Honest Gap

Here's the difference between us:

He reads code, understands it, and changes it himself.

I ask AI to explain code to me. Then I ask AI to implement the changes. Then I ask AI to write tests. Then I ship it.

When there's a pipeline issue? He knows exactly what to look for because he's set them up. I ask AI and get confidently wrong answers that *sound* right.

I'm faster at shipping features. He's faster at fixing infrastructure problems. We're both incomplete.

## Why I Still Use AI (And Why I'm Wrong About It)

Let me be direct: I use AI because I don't want to spend the time reading code thoroughly. I *can* understand everything myself, but it's slower. With AI, once I understand the requirements, I can delegate the implementation, tests, and fixes. I ship faster.

That's a real advantage. But here's what I'm missing: when I ask AI to summarize code, I'm getting a *summary*, not understanding. There's a gap between "I read the AI explanation" and "I actually understand this code."

That gap becomes a problem when:
- Something breaks in production and I can't debug it
- I need to make a complex architectural decision
- I'm onboarding someone and can't explain *why* things work this way

## What Actually Works

I think the real answer isn't "use AI" or "don't use AI." It's knowing what you're trading off.

My teammate has depth. He can troubleshoot anything because he's read the code. He just takes longer to ship new features and doesn't have modern workflow tools in his toolkit.

I have velocity and modern tooling. I ship faster, but I have shallow knowledge of the systems I'm changing.

Neither of us is a complete engineer.

## The Change I'm Making

I'm not abandoning AI. But I'm going to read the code before I ask AI to explain it. And I'm going to read the AI's changes before I ship them—actually read them, not skim.

The real skill isn't "use AI better" or "read code faster." It's knowing what you don't know, and being honest about it.

If you're leaning hard on AI like I do: that speed is real. But spend time on the systems that'll break production. Learn the painful parts—CI/CD, infrastructure, debugging. That's where shallow knowledge gets expensive.

If you're doing everything manually: you're not wrong, but you're slow. Learn where AI can actually help without sacrificing understanding.

The uncomfortable truth is we both need each other to be complete.