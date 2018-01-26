import React, { Component } from "react";
import CommentsList from "./CommentsList";

const results = {
  id: 16150777,
  title: "Yuzu – Nintendo Switch Emulator",
  points: 199,
  user: "hising",
  time: 1516027551,
  time_ago: "3 hours ago",
  type: "link",
  url: "https://github.com/yuzu-emu/yuzu",
  domain: "github.com",
  comments: [
    {
      id: 16151105,
      level: 0,
      user: "Jack5500",
      time: 1516030713,
      time_ago: "2 hours ago",
      content:
        "<p>Even if you don&#x27;t believe in emulation due to piracy, having an emulator around for the sake of archiving is good for the future, I think.",
      comments: [
        {
          id: 16151297,
          level: 1,
          user: "dtech",
          time: 1516032352,
          time_ago: "2 hours ago",
          content:
            "<p>Also historically emulation only gets into a state usable for pirates after the end of the console&#x27;s lifetime, or at the least near the tail end.<p>So right at the time emulators are good enough to enable piracy the impact is significantly less because you can&#x27;t buy the original console and games anymore.",
          comments: [
            {
              id: 16151918,
              level: 2,
              user: "laurent123456",
              time: 1516037394,
              time_ago: "7 minutes ago",
              content:
                "<p>&gt; Also historically emulation only gets into a state usable for pirates after the end of the console&#x27;s lifetime, or at the least near the tail end.<p>The Nintendo 64 was an exception since Ultra64 was released quite early and worked impressively well on PCs of that time (as long as you had a 3Dfx card).",
              comments: []
            },
            {
              id: 16151579,
              level: 2,
              user: "chrisper",
              time: 1516034750,
              time_ago: "an hour ago",
              content:
                "<p>Since the Switch is similar to the 3DS and it uses a well documented chip (Nvidia Tegra) development should be faster.",
              comments: [
                {
                  id: 16151641,
                  level: 3,
                  user: "delroth",
                  time: 1516035211,
                  time_ago: "43 minutes ago",
                  content:
                    "<p>Recent consoles are well abstracted from the hardware. The only case where this is usually not true is the GPU, and it&#x27;s rare to have something completely custom there nowadays (the 3DS and its weird PICA chip is very much the exception). Most of the difficulty is in properly emulating the operating system, and this is not helped by having SoC datasheets.",
                  comments: [
                    {
                      id: 16151865,
                      level: 4,
                      user: "MBCook",
                      time: 1516036986,
                      time_ago: "14 minutes ago",
                      content: "<p>Plus timing issues, bugs &amp; errata, etc.",
                      comments: [
                        {
                          id: 16151910,
                          level: 5,
                          user: "delroth",
                          time: 1516037289,
                          time_ago: "9 minutes ago",
                          content:
                            "<p>Meh. Timing issues become almost irrelevant in a world where consoles have dynamic clock scaling, deep sleep modes, etc. Games are usually not written around specific timings anymore.<p>Bugs and errata can be a concern (I think I remember some issues regarding PowerPC atomic instructions misbehaving on the Wii U for example) but I would expect them to be fairly minor compared to the whole work of REing a custom microkernel and its associated services.",
                          comments: []
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 16151909,
                  level: 3,
                  user: "pizza234",
                  time: 1516037289,
                  time_ago: "9 minutes ago",
                  content:
                    '<p>Hopefully it will be comparatively easy. But (presumed) similarity is not a guarantee - see the XBox emulation: <a href="http:&#x2F;&#x2F;emulation.gametechwiki.com&#x2F;index.php&#x2F;Xbox_emulators#Emulation_issues" rel="nofollow">http:&#x2F;&#x2F;emulation.gametechwiki.com&#x2F;index.php&#x2F;Xbox_emulators#E...</a>',
                  comments: []
                }
              ]
            }
          ]
        },
        {
          id: 16151608,
          level: 1,
          user: "chrisper",
          time: 1516035016,
          time_ago: "an hour ago",
          content:
            '<p>Emulators are not illegal. Sony even lost a lawsuit:\n<a href="https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Bleem!#Sony_lawsuit" rel="nofollow">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Bleem!#Sony_lawsuit</a>',
          comments: [
            {
              id: 16151874,
              level: 2,
              user: "slg",
              time: 1516037045,
              time_ago: "13 minutes ago",
              content:
                "<p>This the equivalent of &quot;this pipe is for tobacco use only&quot; or &quot;BitTorrent is used to share Linux distros&quot;.<p>Yes, emulators are legal.  But we all know that the overwhelming use of them is in illegal situations.",
              comments: []
            }
          ]
        },
        {
          id: 16151596,
          level: 1,
          user: "heywire",
          time: 1516034933,
          time_ago: "an hour ago",
          content:
            '<p>Although most here probably know this already, I&#x27;ll take this opportunity to point out that the Internet Archive has a great collection of games playable in your browser.<p><a href="https:&#x2F;&#x2F;archive.org&#x2F;details&#x2F;consolelivingroom" rel="nofollow">https:&#x2F;&#x2F;archive.org&#x2F;details&#x2F;consolelivingroom</a>',
          comments: [
            {
              id: 16151715,
              level: 2,
              user: "distantsounds",
              time: 1516035732,
              time_ago: "35 minutes ago",
              content:
                "<p>bless the internet archive for having an exception to the DMCA clause!",
              comments: []
            }
          ]
        },
        {
          id: 16151212,
          level: 1,
          user: "ben-schaaf",
          time: 1516031668,
          time_ago: "2 hours ago",
          content:
            "<p>Emulators are also great for the speedrunning community. They especially help in developing TAS&#x27;s (Tool Assisted Speedruns), which contribute strats back to the human runners and push the boundaries of how fast games can be beaten.",
          comments: [
            {
              id: 16151244,
              level: 2,
              user: "0xcde4c3db",
              time: 1516031936,
              time_ago: "2 hours ago",
              content:
                "<p>The kind of insight offered by TAS experimentation and reverse engineering enables some really impressive stuff, like manual arbitrary code execution. There are multiple ACE exploits in Super Mario World, which have been used for credit warp runs and even poking code into RAM to turn the game into a Flappy Bird clone.",
              comments: []
            }
          ]
        },
        {
          id: 16151220,
          level: 1,
          user: "laumars",
          time: 1516031715,
          time_ago: "2 hours ago",
          content:
            '<p>I completely agree. In that regard reading the replies to the Twitter announcement[1] was an exercise in frustration<p>[1] <a href="https:&#x2F;&#x2F;twitter.com&#x2F;yuzuemu&#x2F;status&#x2F;952461671368478721" rel="nofollow">https:&#x2F;&#x2F;twitter.com&#x2F;yuzuemu&#x2F;status&#x2F;952461671368478721</a>',
          comments: [
            {
              id: 16151397,
              level: 2,
              user: "reificator",
              time: 1516033342,
              time_ago: "an hour ago",
              content:
                "<p>I shouldn&#x27;t have clicked that link, it was very frustrating.  It&#x27;s like when watching AVGN, any time they bring up emulators it&#x27;s always in a negative way. &quot;Yeah, this is where people on emulators would cheat and make a save state&quot; etc...<p>I&#x27;ve got a Switch, I buy all the games that I play, and I am extremely excited for this emulator to come out.<p>In my Steam library I have several games that are DOSBox wrappers around the original title.  They&#x27;re emulators, and I paid money for them, and they&#x27;re perfectly legal.<p>Digital archival is a growing problem, so much of our culture is going to be lost without efforts like these.<p>On a side note:<p>When I talk to fellow gamers about my history of modding games, there&#x27;s generally two groups.  The ones who play on PC ask what I added, new levels, skins, etc....  And the ones who play only on consoles typically get upset because they think it means I made cheats for online play.",
              comments: [
                {
                  id: 16151967,
                  level: 3,
                  user: "bsimpson",
                  time: 1516037728,
                  time_ago: "a minute ago",
                  content:
                    "<p>When I was in film school (2004-8), there was a huge concern about what the growth of digital formats would mean for archiving.  Film from the 1800s can still be projected (so long as it&#x27;s in physically-good condition), but tape formats (at least at the time) went obsolete every few years.",
                  comments: []
                }
              ]
            }
          ]
        },
        {
          id: 16151355,
          level: 1,
          user: "snausages",
          time: 1516032938,
          time_ago: "an hour ago",
          content:
            "<p>True, but lets not forget when a fully playable version of Breath of the Wild became available on Wii-U emulators last year just after release.<p>It&#x27;s a tricky area.",
          comments: [
            {
              id: 16151402,
              level: 2,
              user: "cuckcuckspruce",
              time: 1516033400,
              time_ago: "an hour ago",
              content:
                "<p>The WiiU has been dead since the Switch released.  Nintendo put out BotW on the WiiU because they hadn&#x27;t put out a Zelda game on it yet and Switch supplies were short.  I wouldn&#x27;t say that it&#x27;s hurt sales for the game for the Switch - BotW had an above 100% attach rate at launch on the Switch.",
              comments: [
                {
                  id: 16151727,
                  level: 3,
                  user: "excalibur",
                  time: 1516035784,
                  time_ago: "34 minutes ago",
                  content:
                    "<p>BotW was developed for the Wii U. They&#x27;ve been promoting it to fans almost since the console&#x27;s debut. Releasing it on that system was them living up to their promise. It&#x27;s just a shame that it turned out to be the console&#x27;s final major release.",
                  comments: []
                },
                {
                  id: 16151664,
                  level: 3,
                  user: "astura",
                  time: 1516035383,
                  time_ago: "40 minutes ago",
                  content:
                    "<p>It&#x27;s not entirely true they didn&#x27;t put out any Zelda games for the WiiU, just not any &quot;flagship titles that were WiiU exclusives.&quot; They rereleased The Wind Waker and Twilight Princess. Hyrule Warriors was a WiiU Zelda title but it wasn&#x27;t a flagship action RPG title, it was a hack and slash.<p>(I also believe that Breath of the Wild was originally developed for the WiiU)",
                  comments: []
                }
              ]
            }
          ]
        },
        {
          id: 16151695,
          level: 1,
          user: "balls187",
          time: 1516035622,
          time_ago: "36 minutes ago",
          content:
            "<p>I bought my Switch after playing BotW via CEMU.<p>I have a WiiU, but trying out BotW at 1600p was intriguing.",
          comments: []
        },
        {
          id: 16151466,
          level: 1,
          user: "rplnt",
          time: 1516033864,
          time_ago: "an hour ago",
          content:
            "<p>Emulators don&#x27;t make piracy legal. So it would be the same argument as for DRM-enabled videos or music. And that is a pretty bad argument.",
          comments: [
            {
              id: 16151477,
              level: 2,
              user: "astura",
              time: 1516033972,
              time_ago: "an hour ago",
              content:
                '<p>And there&#x27;s great legal uses for emulation:<p><a href="https:&#x2F;&#x2F;hyperkin.com&#x2F;Retron5&#x2F;" rel="nofollow">https:&#x2F;&#x2F;hyperkin.com&#x2F;Retron5&#x2F;</a> (it was pointed out to me they violate open source licenses, so forget this one.)<p>every game system&#x27;s &quot;virtual store&quot;<p>wrapping old games around an emulator to make them (seamlessly) compatible with current computers. Allows the publisher to continue to sell decades old games with vert minimal effort.<p>I don&#x27;t know how much rereleases of games use emulation vs rewrites, but I assume at least some use emulation.<p>I believe I heard that the xbox360 contains an Xbox emulator for backwards compatibility. If it wasn&#x27;t the Xbox360 it was some other console.<p>Then there&#x27;s the failed bleem! commercial emulator.',
              comments: [
                {
                  id: 16151570,
                  level: 3,
                  user: "jsheard",
                  time: 1516034705,
                  time_ago: "an hour ago",
                  content:
                    '<p>Funnily enough the Retron5 <i>is</i> illegal. Not because it emulates games, but because the emulators it uses are stolen from open source projects that forbid commercial use.<p><a href="https:&#x2F;&#x2F;www.libretro.com&#x2F;index.php&#x2F;appeal-to-game-journalists-about-retro-bit-and-about-the-new-retro-emulation-industry-in-general&#x2F;" rel="nofollow">https:&#x2F;&#x2F;www.libretro.com&#x2F;index.php&#x2F;appeal-to-game-journalist...</a>',
                  comments: [
                    {
                      id: 16151617,
                      level: 4,
                      user: "astura",
                      time: 1516035054,
                      time_ago: "an hour ago",
                      content:
                        "<p>Wow, I didn&#x27;t know that. I don&#x27;t know much about the product other than it&#x27;s pretty mainstream so I assumed they played by the rules.",
                      comments: []
                    },
                    {
                      id: 16151643,
                      level: 4,
                      user: "Karunamon",
                      time: 1516035241,
                      time_ago: "43 minutes ago",
                      content:
                        "<p>Aren’t open source licenses that forbid commercial use kind of rare? All of the big name ones I can think of have no such provisions.",
                      comments: [
                        {
                          id: 16151703,
                          level: 5,
                          user: "jsheard",
                          time: 1516035668,
                          time_ago: "36 minutes ago",
                          content:
                            '<p>It&#x27;s more common in the emulation scene. The Retron5 infringes on two emulators that use MIT&#x2F;BSD-ish licenses with added no-commercial-use clauses.<p><a href="https:&#x2F;&#x2F;github.com&#x2F;snes9xgit&#x2F;snes9x&#x2F;blob&#x2F;master&#x2F;docs&#x2F;snes9x-license.txt" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;snes9xgit&#x2F;snes9x&#x2F;blob&#x2F;master&#x2F;docs&#x2F;snes9x-...</a><p><a href="https:&#x2F;&#x2F;github.com&#x2F;ekeeke&#x2F;Genesis-Plus-GX&#x2F;blob&#x2F;master&#x2F;LICENSE.txt" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;ekeeke&#x2F;Genesis-Plus-GX&#x2F;blob&#x2F;master&#x2F;LICENS...</a>',
                          comments: []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 16151532,
              level: 2,
              user: "criddell",
              time: 1516034403,
              time_ago: "an hour ago",
              content: "<p>Copyrights don&#x27;t last forever.",
              comments: []
            },
            {
              id: 16151590,
              level: 2,
              time: 1516034837,
              time_ago: "an hour ago",
              content: "[deleted]",
              deleted: true,
              comments: []
            }
          ]
        },
        {
          id: 16151164,
          level: 1,
          user: "Cthulhu_",
          time: 1516031307,
          time_ago: "2 hours ago",
          content:
            "<p>I&#x27;m inclined to agree, but it&#x27;s a debatable grey area. Archive.org has emulators for some older systems, so that&#x27;s great. I&#x27;ve also heard of the big console manufacturers actually using community-built &#x2F; open-source emulators themselves to allow for re-releasing their own games on newer systems.<p>I think every console manufacturer should release their own legal emulators; companies like Nintendo could make a lot of money off of a NES or GB(A) emulator on smartphones, they can keep selling their classics for $1-$5 apiece.",
          comments: [
            {
              id: 16151214,
              level: 2,
              user: "davweb",
              time: 1516031675,
              time_ago: "2 hours ago",
              content:
                '<p>Nintendo have been doing exactly this for years [1], albeit only on their own hardware and not on smartphones.<p>[1] <a href="https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Virtual_Console" rel="nofollow">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Virtual_Console</a>',
              comments: []
            },
            {
              id: 16151345,
              level: 2,
              user: "dtech",
              time: 1516032835,
              time_ago: "an hour ago",
              content:
                "<p>Even with Virtual Console and backward-compatibility around emulators are still a good thing.<p>Backwards-compatibility is usually only 1 generation, so it just pushes the bitrot forward 5-10 years.<p>Relying on original manufacturers to re-release old games depends fully on that manufacturer&#x27;s ability and willingness, and up to now the only manufacturer doing it, Nintendo, has been very selective in which games they re-release. And it&#x27;s a separate release per console so again only pushes the rot for that game forward to that console&#x27;s lifespan.<p>Thanks to emulators I&#x27;m willing to bet that in 100 years you will be able to play currently-emulatable games since I expect a good Windows&#x2F;PC emulator to exist at that time.",
              comments: []
            }
          ]
        },
        {
          id: 16151169,
          level: 1,
          user: "syaz1",
          time: 1516031324,
          time_ago: "2 hours ago",
          content:
            "<p>I don&#x27;t think you need an excuse, really. Could be educational, or other honorable things (or not), so long as they&#x27;re open source for others to hack on top of or learn from.",
          comments: []
        },
        {
          id: 16151588,
          level: 1,
          user: "iClaudiusX",
          time: 1516034824,
          time_ago: "an hour ago",
          content:
            "<p>History is full of examples where a developer&#x2F;publisher decided to port or remaster a game from its back catalog only to realize they have lost the source code and need to rely on an emulator ROM. Sega, Nintendo, and Capcom I think are the most infamous examples.<p>Of course the hypocrisy is lost on these same companies who for decades have used piracy as the boogeyman to vilify archival work and fair use.",
          comments: []
        },
        {
          id: 16151319,
          level: 1,
          user: "OptionX",
          time: 1516032550,
          time_ago: "an hour ago",
          content:
            "<p>I operate under this as a guideline. If the game can&#x27;t be bought anymore in a way where money gets to the devs then (you can always get random box copy&#x27;s from eBay or some such) then it&#x27;s OK to use an emulator.",
          comments: [
            {
              id: 16151563,
              level: 2,
              user: "astura",
              time: 1516034625,
              time_ago: "an hour ago",
              content:
                "<p>You&#x27;re confusing (pirated) ROMs with &quot;emulators.&quot;<p>There are emulator products that you can <i>only</i> play with original games (such as bleem!) and&#x2F;or ROMs provided by the publisher (such as Nintendo&#x27;s eStore)<p>The devs at mainstream game studios are salaried, they&#x27;ve already been paid for their work performed no matter if the game sells or not. If the game is never released (which happens) they still get a paycheck.",
              comments: []
            }
          ]
        },
        {
          id: 16151350,
          level: 1,
          user: "frik",
          time: 1516032895,
          time_ago: "an hour ago",
          content:
            '<p>Exactly, emulator are good for archiving. It allows on to play decades old games. Even some museums use emulators.<p>Yuzu Switch emulator is made by devs of a 3DS emulator Crita: <a href="https:&#x2F;&#x2F;citra-emu.org" rel="nofollow">https:&#x2F;&#x2F;citra-emu.org</a><p>3DS is unique with its 3D display that doesn&#x27;t need a 3D glass. The &quot;New 3DS XL&quot; is especially great, as it has a stable 3D effect because of infrared eye-tracking. While most gamer got a bad impression from the first gen 3DS 3D effect without eye-tracking. I would pay premium for such a 3D PC monitor. Unfortunately Nintendo Switch doesn&#x27;t feature such a 3D display nor does any other device available.',
          comments: []
        }
      ]
    },
    {
      id: 16151155,
      level: 0,
      user: "degenerate",
      time: 1516031162,
      time_ago: "2 hours ago",
      content:
        "<p>&quot;At this time, yuzu does not run any commercial Switch games. yuzu can boot some games, to varying degrees of success, but does not implement any of the necessary GPU features to render 3D graphics&quot;<p>In case anyone thought it was a full-blown emulator",
      comments: [
        {
          id: 16151193,
          level: 1,
          user: "speps",
          time: 1516031517,
          time_ago: "2 hours ago",
          content:
            '<p>Actually, it can render some graphics now: <a href="https:&#x2F;&#x2F;twitter.com&#x2F;notfunnei&#x2F;status&#x2F;952460754996944896" rel="nofollow">https:&#x2F;&#x2F;twitter.com&#x2F;notfunnei&#x2F;status&#x2F;952460754996944896</a><p>I guess they didn&#x27;t update the website.',
          comments: [
            {
              id: 16151209,
              level: 2,
              user: "elliottcarlson",
              time: 1516031647,
              time_ago: "2 hours ago",
              content:
                "<p>The README specifically says 3D graphics, which still seems to be lacking.",
              comments: []
            }
          ]
        },
        {
          id: 16151172,
          level: 1,
          user: "ReverseCold",
          time: 1516031337,
          time_ago: "2 hours ago",
          content:
            "<p>There&#x27;s already an &quot;emulator&quot; that&#x27;s used to make Homebrew. It has zero graphics support, only enough to debug basic homebrew tools.<p>This is the first one that is &quot;marketed&quot; as an emulator.",
          comments: []
        }
      ]
    },
    {
      id: 16151591,
      level: 0,
      user: "ry_ry",
      time: 1516034851,
      time_ago: "an hour ago",
      content:
        "<p>Much of the Switch&#x27;s appeal for me was the interesting hardware configuration, I wonder if Nintendo focused less on obfuscating its inner workings compared to other current-gen consoles based on that?<p>Edit: urgh, was supposed to be a reply to another comment. I guess the point still stands though.",
      comments: [
        {
          id: 16151776,
          level: 1,
          user: "amaranth",
          time: 1516036219,
          time_ago: "26 minutes ago",
          content:
            '<p>It&#x27;s an almost stock Tegra X1 reference system. The hacks that got access to the system recently started with a Tegra backdoor&#x2F;debug option Nvidia and Nintendo apparently forgot about.<p><a href="https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=Ec4NgWRE8ik" rel="nofollow">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=Ec4NgWRE8ik</a>',
          comments: []
        }
      ]
    },
    {
      id: 16151452,
      level: 0,
      user: "Fej",
      time: 1516033733,
      time_ago: "an hour ago",
      content:
        "<p>Glad that the first major Switch emulator is open-source, it sets the standard.",
      comments: [
        {
          id: 16151971,
          level: 1,
          user: "kakarot",
          time: 1516037744,
          time_ago: "a minute ago",
          content:
            "<p>Agreed! Cemu is a great piece of software, but coming after Dolphin, the premiere open source console emulation project, it was pretty lame that they opted for closed source.<p>In the case of Cemu, I understand that closed source = $20k&#x2F;mo in Patreon subscriptions which enabled a blistering pace of development in 2017. It&#x27;s my hope that the developers eventually open up the source after the subscriptions dry up.<p>For long-term support, something that is extremely important when you&#x27;re dealing with games that will eventually be decades old, open source is critical.",
          comments: []
        }
      ]
    },
    {
      id: 16151687,
      level: 0,
      user: "rkuska",
      time: 1516035552,
      time_ago: "38 minutes ago",
      content:
        '<p>&gt; don&#x27;t hesitate to join our Discord and talk to bunnei<p>Is that you bunnie? Or someone from Boston who was inspired by bunnie?<p>(bunnie = <a href="https:&#x2F;&#x2F;www.bunniestudios.com&#x2F;" rel="nofollow">https:&#x2F;&#x2F;www.bunniestudios.com&#x2F;</a> reverse engineer too, graduate from MIT)',
      comments: []
    },
    {
      id: 16151540,
      level: 0,
      user: "hellbanner",
      time: 1516034491,
      time_ago: "an hour ago",
      content:
        '<p>&quot;It&#x27;s just Emulation!&quot; - The Challenge of Selling old Games\n<a href="https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=16151538" rel="nofollow">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=16151538</a>',
      comments: [
        {
          id: 16151638,
          level: 1,
          user: "drngdds",
          time: 1516035188,
          time_ago: "44 minutes ago",
          content:
            "<p>That&#x27;s an hour long video, can you summarize its arguments?",
          comments: []
        }
      ]
    },
    {
      id: 16151159,
      level: 0,
      user: "jpmoyn",
      time: 1516031256,
      time_ago: "2 hours ago",
      content:
        "<p>Hopefully this gets developed more and is actually able to run games",
      comments: []
    },
    {
      id: 16151678,
      level: 0,
      user: "jlebrech",
      time: 1516035496,
      time_ago: "38 minutes ago",
      content:
        "<p>the appeal of the switch is portability, if you need a powerful gaming laptop to run it it&#x27;s defeating the purpose, but for posterity it&#x27;s a good project to keep an eye on.",
      comments: [
        {
          id: 16151963,
          level: 1,
          user: "drngdds",
          time: 1516037703,
          time_ago: "2 minutes ago",
          content:
            "<p>This is good for some other reasons too:<p>- There are some good Switch exclusives that are worth playing even non-portably<p>- Eventually, this will probably let us play Switch games in higher resolutions with better textures, post-processing, etc.<p>- In the long-term, emulators let gamers get around eternally renewing copyrights, which are basically just rent-seeking.",
          comments: []
        }
      ]
    }
  ],
  comments_count: 52
};

export default class CommentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const commentResponse = await fetch(
      "http://node-hnapi.herokuapp.com/item/16210834"
    );
    const commentData = await commentResponse.json();
    this.setState({
      data: commentData
    });
  }

  render() {
    // const CommentsList = ({ data }) =>
    //   data.comments.map(c => <Comment key={c.id} {...c} />);

    // const Comment = ({ level, user, content, time_ago, comments }) => (
    //   <div className={`comment level-${level}`}>
    //     <h2>
    //       <span className="has-text-weight-semibold">{user}</span> // {time_ago}
    //     </h2>
    //     <p dangerouslySetInnerHTML={{ __html: content }} class="is-size-7" />

    //     {comments && (
    //       <div className="comments">
    //         <CommentsList comments={comments} />
    //       </div>
    //     )}
    //   </div>
    // );

    return (
      <div>
        <h1>{this.state.data.title}</h1>
        <p>Posted by {this.state.data.user}</p>
        <h3>Comments ({this.state.data.comments_count})</h3>
        <CommentsList comments={this.state.data.comments} />
      </div>
    );
  }
}
