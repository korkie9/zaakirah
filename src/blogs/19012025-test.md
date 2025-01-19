## I use arch btw

In my previous blog I wrote about how I had eventually settled on Mint with the XFCE desktop. In this blog I had also mentioned
how I had settled on stable releases over rolling releases like Kali. I have since made somewhat of a drastic pivot from that
decision. In fact I decided to use Arch and for reasons I will highlight below.

#### Zero bloat
If you run a young ``neofetch`` on my laptop, it will tell you this stallion is running on about 4 GHz of processing power and about 
8 GB of memory. Not much by today's standards. So little, in fact that you can forget running Chrome on Windows.

One of the core reasons I switched over to Linux from Windows is this exact issue. I simply could not wait 10 minutes every single
time I wanted to open VS Code and if I'm lucky, a browser. Windows simply had too much bloat.

Pretty much any Linux distro ships with a metric ton less bloat than Windows but not all distros are made equal. Many distros have
specific philosophies or core purposes to them. In Kali's case it is meant specifically for cybersecurity. For Ubuntu and Mint,
it's stability and user friendliness. But these purposes come with a cost. Kali has multiple preinstalled tools for cybersecurity
and it goes without saying but Mint and Ubuntu come flushed with preinstalled tools to make the user experience as seamless as
possible. Many of these preinstalled apps the user may never even need. In my case when using Kali, I had a bajallion apps I
never used and in the case of Mint, I wasn't even sure what apps or programs was on my machine.

#### Fully Customizable
It goes without saying but since Arch basically comes with nothing installed, it is up to the user to install what they want and how
they want. It takes a little extra configuration and TLC but the sky is the limit to how you may make your desktop look. I was
especially inspired by the beautiful configs I saw on [`r/unixporn`](https://www.reddit.com/r/unixporn/). Some configurations are surprisingly easy once
you fully embrace your sweaty neckbeard alter ego and sacrifice like 2 days of your life.

It sounds ridiculous but one of the big reasons I moved from Mint to Arch is the desktop manager. I like a minimal experience. As such
I ventured to find a desktop environment that was as suckless as possible. It doesn't take long to conclude that a tiling window manager
is the way to go. The problem was solutions like i3 and dwm were a little too complicated and I wanted a more user friendly slightly
more out the box wm that wouldn't take another year to configure. I fell in love with hyprland especially after seeing the beautiful wms on
[`r/unixporn`](https://www.reddit.com/r/unixporn/). The problem was at the time I was using Mint. Since hyprland is quite new, relatively speaking,
stable releases like Mint are very poorly equipped to handle it and so unfortunately for me, hyprland would not work on Mint. I would need a
distro that was a little better supported. I would need a distro like Nix or Arch.

There are a ton of tutorials online on how to configure your desktop. I finally landed on the following apps for key processes:

- Top bar: Waybar
- File manager: Thunar & Yazi
- App explorer: Rofi
- Terminal: alacritty & kitty (for when using yazi)
- Sound: PulseAudio

I also added special keybindings for key processes with the idea of fluid mouseless movement. Here is a peak at what my desktop looks like.
I decided to go full nerd with the Hatsune Miku theme for the meme.

![desktop](/desktop.png)

#### Easy install
One of the reasons Arch users are so insufferable is their infatuation with the Arch wiki which provides a guide on how to install it. They swear
that this guide is simple but fail to mention the fact that if any step on this long and quite frankly tedious process is done incorrectly,
the process will have to be done again from scratch and potentially hours of hard work will be flushed down the toilet. This can obviously 
get very old very quickly.

Luckily though in recent time, a quick cli tool is provided in newer installs, ``archinstall`` which is one of the best things to hit the world of Unix
since Linus Torvalds. With the ``archinstall`` command, you can quickly select the default apps, programs and desktop manager you want on your system. All drive partitions and mounts are handled for you. 

Arch purists will proclaim the importance of doing the 'long way' claiming that there are fundamental
concepts you learn doing it this way. Honestly it doesn't matter. All that happens when you do it the long way is you divide your hardrive's storage
into 3 partitions: a main partition, a boot partition and a swap partition. Then you mount them. Done. That's what you learn. For regular users
you may never even need this information and so ``archinstall`` is perfectly sufficient. Furthermore, for people who already know this, again there is
no other reason to do it the long way.

With that being said, the install is quite easy and serves as another great reason why I use Arch.


#### Rolling release
I may be belaboring the point here but it's worth dissecting. Arch, much like Kali is a rolling release. This means it releases regular updates and so long
as you run the update ( ``sudo pacman --Syu`` ), your system is running the latest version of whatever software you have installed from the Arch repos.

For security this is obviously important. During the Jia Tan situation, all that was needed when the fix was released was a quick ``sudo pacman --Syu`` and
you were off to the races.

Again since you're running the absolute latest software, newer things like hyperland work smoothly for the most part and you don't have to wait the way
you do on stable releases like Mint.

"But if it's constantly releasing updates won't that be annoying". The answer is no. Much like most Linux distros, it's DIY approach allows you to decide
when you want to update (unlike certain other bloated OSs that force unwanted and sometimes unnecessary updates on you). You decide when to update, whether
its now, tomorrow, a month from now or never at all. It's up to you.

#### I use arch btw
The final and most important reason I switched over to Arch is now I can tell people "I use Arch btw"
