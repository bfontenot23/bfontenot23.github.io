---
layout: post
title: Neximator
categories: ["Python", "JSON", "Discord Bot", "Unfinished"]
---
My first dive into programming was discord bots.  I hadn't really done anything like this before, but I knew I was interested, so I did some research and picked up python.

My friends and I were running a roleplay server called **Nexiunion** at the time in the style of *Dungeons and Dragons*.  In hindsight, we'd have probably done much better just playing *Dungeons and Dragons* instead of roughly imitating it, but we were having fun being able to come up with our own rules and such.  One of our players was the group blacksmith.  We'd bring him our materials gathered from adventuring and he'd make all of the weapons and armor.

This quickly became an issue, however.

Due to the unorganized structure of the game, our blacksmith had trouble keeping up with things.  New materials, new weapons, and new areas constantly being made made things get out of hand pretty quickly.  We did have some idea of our characters' stats and inventory because we kept track of it in a seperate channel, but nothing was automated.  If you forgot to update something in the channel, there was a good change of forgetting it.

That's where **Neximator** comes in.

Neximator was intended to be the solution to this problem.  Neximator was written using a library called `discord.py`.  It utilized several JSON files to allow players to keep track of parties, items, weapons, and more.

![Help Command - Neximator](/assets/img/neximator/image0.jpeg)