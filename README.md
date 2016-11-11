## What?
This is a concept (not even named yet - "Docker workbench", "toolset as code", "workbench as code"? we **REALLY** need to name it =p) created after a conversation with [@gomex](https://github.com/gomex) about running GUI applications with [Docker](https://www.docker.com) at a [meetup](https://www.docker.com/community/meetup-groups) (actually i don't know if this is original, but i couldn't find it in my web searches).

It's basically a Docker Compose file with the complete toolset that will be used by the team, so it's easier to maintain (fix, update, etc) and to fresh install them when a newcomer joins the team (it will be already set up).

## The concept
Let's suppose you work at [Foobar](https://en.wikipedia.org/wiki/Foobar) Inc and have a problem to solve: When a newcomer arrive (or when a new config is need to be set or even change the version of a tool) the team loses too many time setting up (installing, configuring, etc) the toolset (text editor, db managing tool, etc - you got the idea) required to *real* work start.

And your team already uses Docker as environment building tool.

How about run the toolset with Docker too? You can set a Docker Compose file with the needed tools as images, with their setting already done and the team members will (theorically) only need Docker, and the Docker Compose file will "do  the trick" for you ;). Need to update/fix something? Just rebuild (or make a new tag) the image (or change a file that will be volume mounted) and they will only need to run a `docker-compose pull` (well, if you change files that are mounted they will need to get the files somehow - how about git?)

You can even version control this, and the Docker Compose file can be used even as documentation of your team toolset!

## Couldn't i do that with (*some automation tool here*)?
Sure! We are just showing a "Docker approach" :) (besides, you can use the automation tool to automate this too ;)).

## Does it work at Windows/Mac OS X?
Theorically with some hacking, yes (well, if you think about it, even with linux we do a little hacking).
* [Mac OS X](https://github.com/docker/docker/issues/8710#issuecomment-71113263)  

```
brew install socat
brew cask install xquartz
open -a XQuartz

socat TCP-LISTEN:6000,reuseaddr,fork UNIX-CLIENT:\"$DISPLAY\"
DISPLAY=hostip:0 docker-compose up [-d]
```  
* [Windows](https://github.com/docker/docker/issues/8710#issuecomment-135109677)  

1) Install xming  
2) Install Docker for Windows

```
xming :0 -ac -clipboard -multiwindow
DISPLAY=hostip:0 docker-compose up [-d]
```

P.S.: I haven't tested it yet, a friend did a quick test at Mac OS X and said it worked just fine.

### Is there any downside doing that?
Well, as far as i know sound won't work, and you have to remember that docker will run in a VM in this OS's (but in my tests it affects only games and stuff that uses hardware a lot).

## Suggestions, feedback and complaints
Feel free to send PRs, Issues, etc :)
