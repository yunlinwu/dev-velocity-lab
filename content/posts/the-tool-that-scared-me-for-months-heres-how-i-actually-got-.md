---
title: "The Tool That Scared Me for Months. Here's How I Actually Got Unstuck."
date: "2026-05-30"
youtubeUrl: "https://youtu.be/ol_epNk7iqc"
excerpt: "I spent months avoiding GitLab Terraform because my pipelines kept failing. Here's what actually changed—and why fear isn't the problem, repetition is."
pillar: "ai-workflows-for-learning"
---

I was terrified of GitLab Terraform. Not in the abstract way. In the "every time I touch this, the pipeline fails and I have no idea why" way.

## Why I Avoided It

On my old team, deployment was simple. We used Bitbucket and Jenkins. Someone else had set up the pipeline. My job: upload code, pick a branch, click a dropdown to select my environment (dev, staging, whatever), and deploy. Done.

When our team migrated to GitLab Terraform, everything changed. Now every time I deployed a branch or pushed code to a GitLab project, the pipeline would start automatically—and fail. The YAML configuration was never right. After a few failures, I stopped trying. I just avoided it. Fear became avoidance, avoidance became a block.

## What Actually Changed

No magic moment. No single tool saved me. It was doing three things together:

**First, I asked ChatGPT to quiz me.** I told it: "Explain CI/CD concepts to me in GitLab terms, and ask me follow-up questions if I get it wrong." This sounds basic, but it forced me to articulate what I actually understood versus what I was just nodding along to.

**Second, I read the repos myself.** I stopped waiting for someone to explain the GitLab YAML files. I looked at the CI project templates. I looked at the CD project. I started recognizing patterns.

**Third, I did it with someone.** Working with a teammate on a real resiliency automation pattern—not a tutorial, an actual feature—changed everything. We walked through multiple repos that had already implemented it. I asked "what is this doing and why?" for every instruction. Then I went home and tried it myself.

## I Still Get Stuck

I deployed changes to a new branch in our CI project. But I still can't trace how to connect CI to CD if the branch isn't in main. That's a gap I don't have filled yet.

And that's okay.

I'm not a GitLab expert. But I'm not scared anymore. The difference is confidence through familiarity, not competence through mastery.

## The Real Problem Wasn't GitLab

Fear wasn't about the tool. It was about not putting in repetition. Not breaking things myself. Not actually implementing it end-to-end.

You don't beat fear by studying harder. You beat it by doing the thing—badly, probably—over and over. Each time you deploy a pipeline, each time you read a YAML file, each time you ask "why did that break," you're not learning GitLab. You're learning how to think about GitLab.

The tool you've been avoiding? That's the one you should sit with. Not because it's worth knowing. But because the fear is actually just unfamiliarity, and unfamiliarity is fixable.

Repetition. Practice. Breaking things. That's the system.