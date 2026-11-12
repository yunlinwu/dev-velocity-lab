---
title: "Claude Code Made Me Faster. It Also Exposed My Biggest Gap."
date: "2026-11-11"
youtubeUrl: "https://youtu.be/2U8dW1IA4iA"
excerpt: "AI let me ship a Spring Boot project I couldn't explain, so I switched Claude into learning mode and started writing my own unit tests one template at a time."
pillar: "ai-workflows-for-learning"
---

AI made me faster at building things. It also made it easy to build things I didn't understand, and that turned out to be my real gap.

## The problem wasn't output. It was understanding.

I came up through the early part of my career learning everything the hard way. Then AI showed up, and I could describe what I wanted and get a working project back. I could have a bug fixed in a few minutes. I could review the diff, run it locally, push, and commit.

But when someone asked me *why* the bug happened, I couldn't answer without seeing Claude's explanation first. I could follow the fix. I couldn't reconstruct the reasoning. And when I had to make architecture decisions at the start of a project, I was choosing tools I'd never actually used.

## The weekend that made it obvious

I was working on an LLM evaluation harness in Java and Spring Boot. It ran. Tests passed when I ran them, mostly. But I couldn't walk through it file by file or service by service and explain how things connected. I didn't know how to write a test for it from scratch.

So I changed how I was building. Instead of "build it, learn it as I go," I slowed down on purpose. I wanted to understand how the files, services, and tests fit together before adding more.

## Switching Claude into learning mode

I told Claude directly: if you do all the work, I won't learn, and I still won't know why something is right or wrong.

It shifted into a learning mode that connected to my project and walked me through writing the tests myself, using templates. It wasn't handing me finished code. It was asking questions and giving guidance when I got stuck.

It was still slow. I got stuck a lot, partly because I'd written that code a couple of months earlier and had forgotten most of it. But I kept going. Eventually I could write the test from the template, ask better questions, and run it myself to see what changed when I modified an input. That loop of write, run, break, and understand was the part I'd been skipping.

## What I'm doing differently now

I've stopped treating shipping speed as the goal. Speed without understanding means I can't debug, can't explain, and can't make good design decisions later. Here's the system I'm using:

- **Use AI to ask questions, not just produce code.** Tell it you want to learn, not just finish.
- **Write the code yourself, even if it's slow.** Templates and guided prompts are fine. Copy-paste-and-move-on is not.
- **Run your own experiments.** Change an input, predict what will happen, then check. If you're wrong, that's where the learning is.
- **Test yourself on concepts in a few bullet points.** If you can't explain embeddings or chunking in a RAG app without looking at notes, you don't know them yet. I'm working on exactly that: explaining why those pieces exist, in plain terms, without the tool.
- **Document as you go.** Writing about how you set something up forces you to understand it.

## The honest version

I'm still early in this. AI is useful, but for junior and mid-level engineers it can quietly replace the struggle that builds skill. The fix isn't to stop using it. It's to make it teach you instead of doing the work for you, and to check whether you can explain the result without it.

I'll keep sharing what I learn as I go, including the parts where I'm still stuck.