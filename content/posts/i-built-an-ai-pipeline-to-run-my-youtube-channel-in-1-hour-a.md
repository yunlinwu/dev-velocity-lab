---
title: "I Built an AI Pipeline to Run My YouTube Channel in 1 Hour a Day—Here's Exactly How"
date: "2026-08-19"
youtubeUrl: "https://youtu.be/012GXRYFf5E"
excerpt: "Stop treating AI as a writing tool. I chained 7 specialized agents together to handle transcripts, thumbnails, descriptions, overlays, LinkedIn posts, and blog posts from one raw audio file. Here's the exact workflow."
pillar: "tools and systems"
---

When I started my YouTube channel, I was drowning. Record → edit → write description → create thumbnail → post to LinkedIn → turn it into a blog. Each video took 6–8 hours.

Now it takes about 1 hour. And I'm not using some magic all-in-one platform. I built a chain of AI agents that each do one thing really well.

## The Foundation: Whisper + Your Real Transcript

This was the breakthrough nobody tells you about.

I used to feed AI a rough outline I'd write myself and ask it to generate a script. It sounded robotic. Not me.

Instead, I record my video in iMovie, export it as an MP3, and run it through Whisper via a custom agent (`mpm rom parse`). This gives me a JSON transcript with exact timestamps—my actual words, my actual delivery.

**This transcript becomes the foundation for literally half my other agents.** LinkedIn posts, YouTube metadata, blog posts—they all start here, not from a generic prompt.

The insight: AI doesn't make you sound more authentic by generating copy. It makes you sound authentic by learning how *you actually talk* and then amplifying that.

## The Pipeline (7 Agents, 1 Source)

**1. Overlay Agent**
Takes the transcript + timestamps. Spits out green-screen-ready text overlays that sync perfectly to my audio. I drag them into iMovie. Done.

**2. Hook + Thumbnail Ideas Agent**
Pulls the strongest moments from my transcript and gives me suggested hooks and thumbnail angles. Real examples from what I actually said.

**3. Thumbnail Generator Agent**
I feed it a screenshot of myself from the video. It generates 5 thumbnail options. I pick the best one. (Takes maybe 5 minutes of my time total.)

**4. YouTube Metadata Agent**
Description, tags, title—all pulled from the transcript. I paste it into YouTube settings.

**5. LinkedIn Infographics Agent**
Same transcript → 5 LinkedIn posts + 5 infographics automatically. I review and schedule them.

**6. YouTube-to-Blog Agent**
Downloads my published YouTube video, grabs the transcript again, generates a markdown blog post formatted for my website. I commit it to my repo. It goes live in under a minute.

## What Actually Matters

I spent a lot of time iterating to make this feel *mine*. Early videos used AI-generated outlines read in a generic voice. Terrible.

The fix: **Stop trying to have AI write your voice. Give it your voice first, then have it remix it.**

A few other constraints that made this feasible:

- **Minimal editing.** Mostly talking head, no heavy B-roll or sound design.
- **No screen sharing overcomplication.** Keeps the pipeline clean.
- **Practice over perfection.** I got better at speaking naturally every 5–10 videos. The AI isn't doing the hard work—consistency is.

## The Real Cost

Yeah, it's 1 hour a day. But that breaks down to:
- 15 min: Recording and exporting
- 10 min: Running agents and reviewing outputs
- 20 min: Picking thumbnails, reviewing metadata, scheduling posts
- 15 min: Tweaking anything that feels off

I'm still iterating. I'd like to consolidate these into fewer agents. But the core idea works: **one high-quality source (your transcript), then specialized agents that each own one job.**

If you're sitting on content you know you should be sharing but don't have 6 hours a day, this is the move. Not "let AI write your content." But "let AI handle the busywork once you've given it your actual voice."