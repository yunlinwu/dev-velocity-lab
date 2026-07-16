---
title: "I Built an MCP Server Without Knowing What One Was — Here's What I Actually Learned"
date: "2026-07-15"
youtubeUrl: "https://youtu.be/eUZRB97E2Cc"
excerpt: "Landed a project gap, didn't understand the tech, built it in 2 days anyway. Here's the system I used to learn by doing instead of learning by waiting."
pillar: "ai-workflows-for-learning"
---

I got told by an AI agent analyzing job listings that I had a gap: I'd never built an MCP server. I had no idea what one was. So instead of researching for a week, I decided to build one—and document the mess.

## The Setup: Combining Two Ideas Into One Real Problem

I wanted a portfolio project. I had YouTube transcripts. I didn't have MCP experience. Instead of picking one lane, I merged them: build a YouTube transcript MCP server for Claude.

The original plan was five days. I finished in two. Here's why.

## Day One: "I Don't Understand This, So Let Me Ask Claude"

I opened a fresh Claude session and wrote out exactly what I didn't know:
- Why build an MCP server instead of just grabbing transcripts manually?
- What does "Model Context Protocol" actually *do*?
- How do I break this into phases I can finish in one hour a day?

Claude didn't give me theory. It gave me a plan: scaffold → core functionality → testing → integration.

The core functionality was simple: get transcripts from YouTube videos, search them. If captions exist, use `youtube-dlp`. If not, call Whisper to extract audio.

## The Actual Insight: Why This Matters

I was confused about MCP until I actually used it. The click came when I realized: **Claude can now access YouTube videos I share with it.** It can't watch them, but it can call two functions—grab the transcript, search the transcript—and *then* do something with that data.

Before this server? Claude couldn't touch YouTube at all. After? I can paste a link and say "summarize this," and Claude reads the transcript in seconds instead of me watching a 20-minute video.

That's the whole point.

## The Pattern That Actually Worked

1. **Write what you don't understand.** I literally told Claude: "I don't know why this is useful yet."
2. **Ship the imperfect version.** Got a working MCP server running in my Claude Desktop before I fully grasped it.
3. **Learn by using it.** Tested on my own videos. Watched it work. *Then* the pieces clicked.
4. **Ask when stuck.** When confused about flow or architecture, I asked Claude to explain the MCP pattern. Then I read. Then I searched. But I didn't wait for perfect understanding first.

## What Changed in My Head

Before this project, I didn't think I could combine:
- A personal-brand need (portfolio project)
- A skill gap (MCP servers)
- A trending concept (AI tooling)
- And actually ship something useful *while learning*.

I thought you had to master the thing first, *then* build with it.

Turns out the fastest way to learn unfamiliar tech is to build something real, break it, ask AI why it broke, fix it, and move on. Two days instead of two weeks.

## The Actual Takeaway

When you land in a role or stack you didn't choose and feel behind: **build something small that matters to you using the thing you don't understand yet.** Use Claude to unblock architecture confusion. Ship fast. Use it. Iterate.

You'll learn the tech faster than any tutorial because you have skin in the game.

It's on GitHub if you want to grab it. `pip install` and go. See what's possible when you stop waiting to be ready.