import Presention_chart from "@/../public/images/presention-chart.png"
import Emoji_happy from "@/../public/images/emoji-happy.png"
import Glass from "@/../public/images/glass.png"
import Music from "@/../public/images/music.png"
import Game from "@/../public/images/game.png"
import { Experience_icon, Like_shapes_icon, People_icon, Refersh_icon, Smileys_icon, Two_user_icon, User_icon } from "@/app/componets/common/icons"
export const header = [
    {
        name: 'Experiences',
        url: "experience"
    },
    {
        name: 'Get in touch',
        url: "#"
    },
    {
        name: 'Vibe check',
        url: "vibe-check"
    },
    {
        name: 'My events',
        url: "#"
    },
]



export const category = [
    {
        name: 'Business',
        url: "#",
        src: Presention_chart
    },
    {
        name: 'gaming',
        url: "#",
        src: Game
    },
    {
        name: 'scientific',
        url: "#",
        src: Glass
    },
    {
        name: 'Fun',
        url: "#",
        src: Emoji_happy
    },
    {
        name: 'Music',
        url: "#",
        src: Music
    },
]

export const howItWork = [
    {
        title: "Join an Experience",
        description: "Every Experience is specifically intended for meeting new people.",
        Icon: Smileys_icon
    },
    {
        title: "Meet New People",
        description: "Common Ground remembers everyone you attend an Experience with.",
        Icon: Two_user_icon
    },
    {
        title: "And Meet Them Again",
        description: "Future events are recommended based on the people going whom you've already met",
        Icon: Like_shapes_icon
    },
    {
        title: "Repeat",
        description: "The more Experiences you attend, the more people you'll meet, and the more you'll reconnect with",
        Icon: Refersh_icon
    },
]


export const menu_profile = [
    {
        name: "My Experiences",
        url: "/profile",
        icon: Experience_icon
    },
    {
        name: "Connections",
        url: "/profile/connections",
        icon: Two_user_icon
    },
    {
        name: "Personal details",
        url: "/profile/personal-details",
        icon: User_icon
    },
]