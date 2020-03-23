# skill-control

A super simple express server that receives commands from a running Svelte front end server and then forwards it on to a running a Cadence Virtuoso session through IPC.

[Skill Svelte Frontend](https://github.com/submicron13/skill-svelte)*

After finalizing the front end, I plan to run build then move the built html/js/css to the public folder of the express server and get rid of the Cors stuff.

I plan to use something similar to this on the Cadence side:
[Skill Server](https://community.cadence.com/cadence_technology_forums/f/custom-ic-skill/12956/sending-skill-commands-to-a-running-instance-of-icfb)*