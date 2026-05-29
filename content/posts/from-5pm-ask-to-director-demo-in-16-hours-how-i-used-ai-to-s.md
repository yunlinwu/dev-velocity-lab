---
title: "From 5PM Ask to Director Demo in 16 Hours: How I Used AI to Ship a Real Feature"
date: "2026-05-09"
youtubeUrl: "https://youtu.be/zI1PNKPxqhY"
excerpt: "My manager gave me a banner management system to build Thursday night. I demoed working code to directors Friday afternoon. Here's exactly how I did it with AI—and why the speed mattered less than what it let me say yes to."
pillar: "ai-workflows-for-learning"
---

Thursday at 5 p.m., my manager messaged me about an opportunity. Friday afternoon, I was demoing working code to a room of managers and directors. Sixteen hours in between.

This is what most people get wrong about AI in engineering: they think it's about the code. It's not. It's about the decision-making speed.

## The Setup: Architecture I Didn't Understand Yet

The requirement was straightforward—build a centralized banner management system where users and publishers across the enterprise could manage their banners. My manager outlined the architecture. I understood it conceptually. I had no idea how to execute it in one evening and one morning.

I had one advantage: I wasn't building from scratch. My teammate had already built the AWS side—SNS to SQS to Lambda to S3 and DynamoDB. He walked me through it in 10 minutes. I didn't need to become an AWS expert. I needed to understand the flow well enough to connect my piece to it. That's a different problem.

## The Move: Roadmap Before Code

I took the architecture my manager described and fed it straight into ChatGPT. I asked for one thing: a POC roadmap I could execute in hours, not weeks.

What came back was a scoped sequence plan I could actually follow. Instead of spending Friday morning deciding where to start—frontend first? backend?—I had a step-by-step roadmap in minutes. That's the move. The roadmap was worth more than any code snippet.

## The Build: GitHub Copilot Agent Mode

I built the actual application in VS Code using GitHub Copilot's agent mode. I told it exactly what I wanted:
- Brand new repo
- HTML and JavaScript frontend
- Python backend

Thirty minutes later, I had a working dashboard. Not a prototype. Not pseudocode. A functional application with real features—text inputs for banner start and end times, banner data display, and a working publish flow.

A publisher could actually come in, manage a banner, and submit it.

## The Connection: The Real Work

Here's what people miss: building the UI wasn't the hard part. Connecting it to the existing AWS infrastructure my teammate built—*that* required understanding. I had to read the SNS-to-SQS-to-Lambda flow, trace where my data went, and make sure my frontend's API calls matched what the backend expected.

AI got me the skeleton fast. Understanding the integration took focus. That's not AI's job. That's engineering.

## Friday Afternoon: The Demo

I walked into a room with managers and directors less than 24 hours after the ask. I demoed a real dashboard. I showed how a publisher would actually use it. I answered technical questions because I'd had to understand the system, not just generate code.

## Why This Mattered

Here's the thing: I might have said no to this opportunity before. Twenty-four-hour turnaround demos feel impossible. AI didn't make the impossible possible—it made the impossible *feel* possible. That confidence to say yes? That's what matters.

This isn't about AI hype. It's about using the tool to collapse the decision loop so you can take shots you'd normally pass on.