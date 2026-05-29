---
title: "The Best Help Is Pointing the Direction, Not Giving the Answer"
date: "2026-05-16"
youtubeUrl: "https://youtu.be/IMnhv9_MaKY"
excerpt: "I asked a teammate for help on a deployment problem. He gave me one sentence. It was the most useful thing that could've happened—and it completely changed how I use AI to learn."
pillar: "ai-workflows-for-learning"
---

I was stuck on an onboarding story about Artemis alarms and Lambda deployment. The repo already had CI/CD set up, but I was going in circles with AI, fighting the GitLab and Terraform implementation because something wasn't matching up. I felt like I was troubleshooting the wrong layer entirely.

So I did what you're supposed to do: I reached out to a teammate who'd solved this before.

He barely helped me at all. He just said: "Did you do this story through local execution instead of GitLab Terraform?"

I said no. He said: "I did it locally."

That was it. One confirmation. And it unlocked everything.

## The One Question That Changed Everything

That simple yes-or-no answer eliminated an entire wrong path. I realized I didn't need GitLab Terraform at all—I could skip that whole layer and focus on understanding how the Lambda function actually triggers the alarms.

Here's what's weird: getting *less* help was better than getting more.

If he'd walked me through the full Terraform setup, I would've learned the wrong thing. I would've spent days on infrastructure plumbing instead of understanding the actual logic. I would've been discouraged, stuck in circles, probably giving up.

Instead, he just pointed the direction. I did the learning.

## What Actually Happened After

While waiting for his confirmation, I went back to the Confluence docs—but this time I read them carefully instead of skimming. Section by section. I understood how each piece connected.

I cloned the repo, checked out the right branch, and ran the script locally.

Then I hit errors. Real ones. So I switched to GitHub Copilot in agent mode with Claude 3.5 Sonnet—it has file context, which matters. I pasted the error messages.

The agent identified that the script wasn't set up correctly for local execution. It suggested changes. I tested. Still broke. I went through a loop:

- Agent implements a small change
- I test
- Still errors
- Agent simplifies the process
- I test again

This happened several times. Some errors were IAM permissions. Some were wrong secret names. Each loop, I got faster at providing context.

Finally, the local Lambda execution worked. It gave me the alarm report.

## The System That Actually Works

I see it now: **people point the direction. AI helps me move. I do the actual learning.**

That's the whole workflow.

If you're waiting for someone to hand you the answer—or walk you through everything step by step—you might be waiting for the wrong kind of help. That's not mentorship. That's dependency.

Real help is a pointed finger. "Try local execution, not Terraform." That's it.

Then you pair with AI to do the actual work—to debug, to understand the code, to test, to fix. You're not getting the answer. You're working through the problem while having a smarter rubber duck in the room.

This is how you actually learn something and own it. Not faster, but deeper. Not discouraged, but capable.

The smallest piece of help—one sentence—unlocked the biggest step forward.