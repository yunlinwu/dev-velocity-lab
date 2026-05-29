---
title: "AI Accelerates Confidence, Not Competence—And That's the Problem"
date: "2026-05-14"
youtubeUrl: "https://youtu.be/Qm3sM7ke3sc"
excerpt: "I used ChatGPT every day this week and still got stuck. Here's why AI alone isn't enough when you're learning a new stack from scratch."
pillar: "ai-workflows-for-learning"
---

I used AI every single day this week and still got completely stuck.

This is the part of the AI story nobody talks about—the part where you follow the suggestions, the code looks right, the logic makes sense, but nothing actually works. And you have no idea why.

## The Setup: Too Much Documentation, Not Enough Time

I was working through onboarding stories, deploying Mac alerts using Artemis Alarm. Sounds straightforward. Except the documentation was everywhere—Confluence pages scattered across different sections, Jenkins setup, UCD, Terraform, Sentinel onboarding. I knew none of it. So I did what I always do: I opened ChatGPT.

My plan was simple: use AI to get the minimal viable understanding, make the smallest step forward, repeat. Don't get bogged down. Keep momentum.

It didn't work.

## Where AI Actually Failed Me

ChatGPT identified real errors in my CI/CD pipeline—mismatches in GitLab and Terraform. I made the fixes, deployed to development. It worked. I felt confident. Then I deployed to acceptance and everything broke.

The issue? A snapshot version mismatch in the CD repo. ChatGPT could see the problem and walk me through fixing it. But I didn't understand *why* the mismatch happened. I didn't understand the CI/CD pipeline well enough to know if I was fixing the right thing or wasting time on a symptom.

Here's what actually happened: **ChatGPT accelerated my pace, but it destroyed my foundation.**

I was following instructions without understanding them. I could move fast, but I had no idea if I was moving in the right direction. Every error felt like a dead end because I couldn't reason through what went wrong.

## The Real Problem: Confidence Isn't Competence

Using AI doesn't create real understanding. It creates the *illusion* of understanding. You get unstuck fast enough that you think you know what you're doing—until you hit a problem that doesn't have a straightforward answer.

The worst part? I had a teammate who'd already solved this exact problem. He either knew the CI/CD didn't need fixing, or he'd already figured out the real issue. I could've asked him instead of spending hours following ChatGPT down a rabbit hole.

## What Actually Worked

The stuck weeks are where learning happens. That sounds like motivational nonsense, but it's true. When everything works perfectly, you're not absorbing anything. When you fail, when you get stuck, when you have to sit with your confusion—that's when it actually sticks.

I learned more by hitting that wall in acceptance than I would have by shipping smoothly.

## The System I'm Using Now

1. **Use AI to identify the problem, not to solve it.** ChatGPT found the mismatch. That was useful.
2. **Ask a real person why the solution works.** Before you apply a fix, understand the reasoning.
3. **Accept that some weeks are stuck weeks.** They're not wasted time. They're compounding.

The people who leveled up fastest in new stacks weren't the ones who got unstuck fastest. They were the ones who got unstuck by actually learning.