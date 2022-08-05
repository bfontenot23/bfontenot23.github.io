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

Above is the output of the help command which displays all of the features that were made and completed.  Most of the data keeping stuff is there and working as it should be.  As of writing this, I don't have any code snippets, but I may come back and add some.

The first feature I added is the `Party` system.  While it currently serves no functional purpose other than keeping track of who is with who at which time in the game world, it would have eventually been used in a turn-based encounter system to keep track of battling.  This would have worked very similarly to D&D in which a combat order would be used to decide and roleplay out attacks.

![Party - Neximator](/assets/img/neximator/image1.jpeg)

Above is a few party command outputs.  The first shows an empty party (called "Test") with only the leader in it.  In a way, these partys could have been treated as a guild of sorts for players.  The second and third outputs show another playing being invited to a party by the leader and the player joining the party.  The final output shows the new full party.

This was made in a time before Discord created something called `slash commands` that would have shown which players ran which commands.  At the time, it was common practice to delete the message showing the command actually being invoked.

After finishing the party system, I began working on the item database.  I created various types of items.  Namely, I made weapons, materials, and entities (monsters).  Players could use various commands to create items with a unique identifier that had various data specific to which type of item it was.

![Slimeball - Neximator](/assets/img/neximator/image3.jpeg)

All of the items that were created could then be displayed in a list.

![Item Index - Neximator](/assets/img/neximator/image2.jpeg)

That, unfortunately, is as far as I was able to get with this project.  Due to school starting back up, my time to work on the bot got less and less, and eventually I shelved the project because the roleplay server became inactive over time also.  Eventually, you would have been able to add these items to a player specific inventory, and maybe even eventually been able to craft things out of your materials using specific recipes, similar to *Minecraft*.

But, naturally, the experience I got from working on the bot only made me grow as a programmer.  This bot was how I learned my first programming language, Python.  And who knows?  Maybe someday, I'll revisit it.