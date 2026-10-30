---
title: "I Built a RAG App on My Own YouTube Videos (Here's What I Learned)"
date: "2026-10-29"
youtubeUrl: "https://youtu.be/XTi5ZpSdSOk"
excerpt: "I built a tool that answers questions about 10 of my own videos with timestamped sources, and explaining each step forced me to actually understand chunking, embeddings, and similarity search."
pillar: "ai-workflows-for-learning"
---

I didn't know how retrieval-augmented generation (RAG) worked in production. So I built one on my own YouTube transcripts, deployed it, and then made a video walking through every piece. Explaining it out loud was the fastest way I found to learn it.

## What I built

You ask a question. The app searches 10 of my recent videos and sends the best matches to Claude. You get a summary answer plus sources with exact timestamps, so you can jump to the moment I talked about it. The transcripts, chunks, and embeddings all live on my machine. Only the question and the retrieved text go out to the API.

## Step 1: Chunk the transcript

A single transcript segment is too small to answer anything useful. A whole video is too big to match precisely. So I group about five segments into one chunk, which comes out to roughly 25 to 30 seconds of speech. That's enough context to answer a real question without dragging in unrelated material.

For the timestamp, I just record the start time of the first segment in each chunk. That's how every answer can point back to a specific moment.

Across 10 videos, that gave me 664 chunks.

## Step 2: Embed each chunk

An embedding turns text into a list of numbers that represents its meaning. Text with similar meaning ends up close together in that number space, even when the words are different.

That's the part that clicked for me. If one chunk says "I'll put things off until I feel like it" and another talks about procrastination, they land near each other even though they share almost no words. Search by meaning, not keywords.

## Step 3: Compare the question to the chunks

When you ask a question, the app embeds it the same way, then computes a dot product between the question vector and every chunk vector. The result is a similarity score.

Here's how I read the scores:

- **Near 1:** the chunk is about what you asked.
- **0.7 to 0.8:** a strong match. The app can confidently cite it.
- **Near 0:** nothing relevant. I asked "why is the earth round" and the chunks had nothing on it, so the app says it doesn't know.

That "I don't know" response matters. Without it, the model would make something up using whatever chunks happened to be closest.

## Step 4: Send the top four to Claude

The app takes the top four chunks by score and sends them to Claude with instructions to answer only from that text. Claude returns an answer with citations, and I map each citation back to its timestamp.

One thing I didn't expect: the instructions tell the model to refuse outside knowledge. When I asked "What's the capital of France?", the app returned a refusal before calling Claude at all, because nothing in my transcripts matched. That's a free guardrail, and it also saves an API call.

## Why there's no vector database yet

Vector databases exist to search millions of vectors quickly. I have 664. A brute-force comparison runs instantly, so adding a database would be complexity without benefit. I'll add one when the corpus grows enough to need it.

## Why I built it this way

I was moving into work with AI tooling and didn't have production experience. Reading about RAG wasn't enough. Building it, shipping it, and then explaining each step to someone else made the pieces stick. I don't need to be perfect at this on day one. I need to iterate.

## What to take from this

- **Pick a small real dataset you already have.** Your own notes, docs, or videos work better than a tutorial dataset because you'll know immediately when answers are wrong.
- **Chunk by meaning-sized units.** Test a few chunk sizes and check whether the retrieved text actually contains an answer.
- **Build in a "I don't know" path.** Set a similarity threshold and refuse below it.
- **Explain it to someone.** If you can't walk through the flow from question to answer, you don't understand it yet. A short demo video works well for this.

I plan to keep building these and documenting them. If you want to see the flow for yourself, the diagram and demo are in the video.

