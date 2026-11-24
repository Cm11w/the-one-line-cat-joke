[![make.fun](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![rank](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/Cm11w/the-one-line-cat-joke/rank.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![reward](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/Cm11w/the-one-line-cat-joke/reward.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)

# The One-Line Cat Joke That Lands

Entry for the [make.fun bounty](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262): a program that writes one joke about cats — a single line, under 200 characters, nothing else — to `/output/entry.txt`.

## The joke

> My cat stopped knocking things off the table. Now she just stares at them until I knock them off for her. She's unionized.

122 characters, one line, three short beats.

## How it works

`main.ts` (Node 22, standard library only) writes the joke — a string constant — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). Before writing, it checks the competition gate (1–200 characters, a single line, not only whitespace) and throws instead of writing an invalid entry. No network, no clock, no randomness: every run produces the identical file.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Why this joke

Against the judge's published brief: it is a joke about cats first — the cat is the subject from the first two words. The laugh is a real turn, not a cute observation: the setup sounds like good news (she stopped knocking things off), the middle reframes it (she now stares until *I* knock them off for her), and the punch lands on the last word ("unionized") — the cat hasn't reformed, she's organized. It takes the most familiar cat trope, knocking things off tables, and flips it into a fresh angle instead of repeating it. Short, no padding, no explanation after the punchline, and easy to retell to a friend the same day.

## License

MIT — see [LICENSE](LICENSE).
