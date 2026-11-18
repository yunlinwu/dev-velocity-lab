---
title: "I Don't Make Decisions Without AI Anymore (And Why That Scares Me a Little)"
date: "2026-11-17"
youtubeUrl: "https://youtu.be/hAQQ0BDyu_4"
excerpt: "I now ask AI before almost every technical decision, and the real risk isn't that it's wrong. It's that I stop building the mental model that makes me useful."
pillar: "ai-workflows-for-learning"
---

I don't make many technical decisions without AI anymore. I used to just use it to debug. Now I ask it before I choose a library, shape a design, or review a change. That's useful, but it's also made me a little uneasy, and I think a lot of engineers in the same spot are feeling it too.

## What changed

I've used AI in the browser since 2022, mostly to paste an error and get a fix back. This year I started using agents, and that's where things got weird. A lot of technical work, the kind that used to take me a day, now happens in minutes. Changes land as merge requests faster than I can read them closely.

The problem is that speed is what gets rewarded. Shipping fast looks great. Building a real understanding of what the code does and why takes time, and nobody is measuring that.

## The decision habit

Here's my current rule:

- **If I already know 100% what I want and why**, I decide myself.
- **If it's new to me**, I ask AI for background first: options, tradeoffs, what people usually get wrong.

That second part is where I think the value is. I'm not asking "what should I do?" I'm asking "what do I need to understand before I can decide?" Then I make the call.

But I've noticed the line blurring. The more I lean on AI for the "new" stuff, the less of it stays new. If I never work through the reasoning myself, I end up with the conclusion but not the model underneath it. That's the thing I'm trying to avoid.

## The bigger worry

If agents write the code, review the merge requests, and respond to the bugs, a human can end up as little more than a bridge between systems that are talking to each other. That's a scary version of the job, and I don't know yet how much of it is coming.

What I do know is that I don't have the option to opt out. Staying employable means getting good at this. So the question I'm working on isn't whether to use AI. It's how to use it without outsourcing my understanding.

## What I'm doing about it

I'm still figuring this out, but here's what I'm trying:

1. **Write my own answer first.** Before I ask AI, I jot down what I think and why, even if it's rough. Then I compare. The gaps tell me what I'm missing.
2. **Ask for the reasoning, not just the output.** When an agent makes a change, I have it explain the diff in plain terms and tell me what could break. If I can't follow the explanation, I don't merge.
3. **Explain it back.** I try to describe the change to a teammate or to a blank doc without looking at the code. If I can't, I haven't learned it yet.
4. **Keep AI scoped to work.** I'm not handing it my whole life. For now, it stays in my job, where I can review what it does.
5. **Log the scenarios.** I keep a running note of problems I debugged with AI and what I learned from each one. Over time, that becomes my own experience instead of something I borrowed.

## The skill I actually need

I used to think my gap was technical. Now I think the skill is directing the agent: asking the right question, catching bad assumptions, troubleshooting when the output looks right but isn't, and knowing when to stop and think for myself.

That's the part I'm trying to get good at. The tools will keep changing. The habit of understanding what I ship probably won't.