---
layout: post
title: EmilyBot
categories: ["Python", "JSON", "Discord Bot"]
---

After my previous experience with Neximator as my first discord bot, it was inevitable that I'd eventually make another one.

Coincidentally, my good friend Caleb approached me wanting to get into programming.  He didn't really care what kind of program he wrote, he was just interested, much like I was.  That's when I had the idea to colaborate with him on a discord bot.

We got to brainstorming.  There wasn't a problem we were trying to solve like the first time I had made a bot. This would simply be just making something from scratch.  After playing around on a few servers, there were a couple of bots that I thought could be fun to recreate.  The bots in question were pretty simple.  They were mostly emote bots, so bots that users could type a command and recieve a gif of how they were feeling.  A bot like that was perfect for what my friend wanted to learn.  It would also give me an excuse to play around with APIs and see what I could do with them.

Now that we had an idea, the final piece of the puzzle came in to decide what we were going to make.  My online friend Emily happened to shoot me a direct message.  We were joking about her first time on Discord and how her messages felt forced and overly enthusiastic.  That's when it hit me: we could theme the bot around my friend Emily and how she was when she first joined the site.  With her permission, we started coding.

From start to finish, making the bot took us only three days, and I'd say we both learned a lot along the way.

![Help - Emilybot](/assets/img/emilybot/image9.jpeg)

Above is the help command's output, showing everything you can do with the bot.  Note the large amount of reaction commands.  We split up the work mostly in half.  I did most of the "fun" commands and a good portion of the reaction commands, as well as all the moderation and general commands.  The image is from my phone, so it's kind of ugly, but the embed is properly formatted as well.  The bot does have an info command that gives all the necessary credits.  Emily helped test the bot as well as one of my other friends.

![Info - Emilybot](/assets/img/emilybot/image8.jpeg)

The bot's profile picture features a character named Kirino from a Japanese anime called *Oreimo* because this is the character featured in Emily's profile picture from when she first joined Discord.

Beginning the feature showcase are, of course, the emotion commands.  The emotion commands make up the largest part of the bot's code, but that's mostly because of how many gif images were used.  Note that we do not own the rights to any of the material used by the bot.

As mentioned previously, the purpose of the emotion commmands is to allow users to type a command that reflects how they are feeling and recieve a gif image based on it.  The commands can also be used to show virtual interactions with other users such as a hug or a tickle.

![Tickle - Emilybot](/assets/img/emilybot/image6.jpeg)

Just for fun, we also added a random change of any emotion command to return a rickroll too.

![Rick - Emilybot](/assets/img/emilybot/image7.jpeg)

While there are many emotion commands, they're all mostly the same.

The "fun" commands, however, are where some more interesting things happen.  Starting with the useless websites command.  Pretty much all this one does is return a random useless website.  It uses the same list of websites used by [The Useless Web](https://theuselessweb.com).  Here's the output of the command:

![Useless - Emilybot](/assets/img/emilybot/image5.jpeg)

The pair of *osu!* commands allow you to use a person's *osu!* username to find stats and best plays.  *osu!* is a competitive rhythm game created by Peppy.  I made these commands to test out a Python wrapper of an *osu!* API.  Plays in *osu!* are given a certain amount of performance points (pp) depending on various aspects of how well someone did in the play.  The higher the pp count the better.  The highest currently recorded pp score is 1253.18, scored by player Kalanluu (as of 08-05-2022).  The following outputs show my stats and plays from 2020.

![Plays - Emilybot](/assets/img/emilybot/image3.jpeg)
![Stats - Emilybot](/assets/img/emilybot/image2.jpeg)

Another wrapper I experiemented with was a MyAnimeList scraper.  Using this, I created a command that allowed users to search for any anime or manga and recieve information about it.  This information includes when it aired, a brief description, and what type of content it was.  Also provided is a link to the page where the information was gathered.

![MAL - Emilybot](/assets/img/emilybot/image4.jpeg)

The final API I tried to use was an Urban Dictionary scraper.  Similar to the previous wrapper, users were able to search for Urban Dictionary entries straight from the website.  These could be anything you can think of because of the community-based nature of Urban Dictionary.  Here's an entry of my own name:

![Urban - Emilybot](/assets/img/emilybot/image1.jpeg)

The other two "fun" commands, ship (matchmaking) and 8ball, didn't use an API because they're both just glorified random number pickers.  Unfortunately, I couldn't find an old output of the 8ball command, and the bot no longer works due to `discord.py` being outdated.

![Ship - Emilybot](/assets/img/emilybot/image0.jpeg)

The moderation commands all do exactly what you'd expect them to do.  The clean command purges a certain number of messages specified by the user.  The prefix command just changes the prefix used by the server the command was ran in.  This bot was also made before slash commands became normalized.

Overall, this bot was a good exercise for me and my friend.  He learned a lot about Python just as I had for my first bot.