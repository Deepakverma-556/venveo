import wsj from "../assets/images/webp/wsj.webp"
import entrepreneur from "../assets/images/webp/entrepreneur.webp"
import fortune from "../assets/images/webp/fortune.webp"
import forbes from "../assets/images/webp/forbes.webp"
import inc from "../assets/images/webp/inc.webp"
import darkGreen from "../assets/images/webp/dark-green.webp"
import green from "../assets/images/webp/green.webp"
import yellow from "../assets/images/webp/yellow.webp"
import amberBook from "../assets/images/webp/amber-book.webp"
import farnsWorth from "../assets/images/webp/farns-worth.webp"
import usLbm from "../assets/images/webp/us-lbm.webp"
import Description from "../common/Description"
import Heading from "../common/Heading"

export const NAV_LIST = [
    {
        title: "How We Help",
        optionOne: "link 1",
        optionTwo: "link 2",
        optionThree: "link 3",
    },
    {
        title: "Who We Help",
        optionOne: "link 1",
        optionTwo: "link 2",
        optionThree: "link 3",
    },
    {
        title: "Why Venveo",
        optionOne: "link 1",
        optionTwo: "link 2",
        optionThree: "link 3",
    },
    {
        title: "Resources",
        optionOne: "link 1",
        optionTwo: "link 2",
        optionThree: "link 3",
    },
]

export const COMAPNY_BRAND_LIST = [
    {
        image: wsj,
        alt: 'wsj',
    },
    {
        image: entrepreneur,
        alt: 'entrepreneur',

    },
    {
        image: fortune,
        alt: 'fortue',
    },
    {
        image: forbes,
        alt: 'forbes',
    },
    {
        image: inc,
        alt: 'inc',
    },
]

export const SATISIED_CLIENT_LIST = [
    {
        bgImage: darkGreen,
        logo: amberBook,
        company: "Education Company",
        title: <Description text="Driving digital revenue for over 1,000+ satisfied clients." myClass='!text-3xl !font-light !leading-[30px]' />,
        description: <Description text='Elevate your business with our top-tier services and tech' />,
        myLink: 'Learn More',
        leadsPrecent: <Heading text='80%' myClass='!text-[50px] !leading-[44px]' />,
        adLeads: <Heading text='2X' myClass='!text-[50px] !leading-[44px]' />,
        webTrafficPrecent: <Heading text='520%' myClass='!text-[50px] !leading-[44px]' />,
        leadsText: "Leads",
        adLeadsText: "Ad Leads",
        webTrafficText: "Web Traffic",
    },
    {
        bgImage: green,
        logo: farnsWorth,
        company: "HVAC Marketing",
        title: <Description text="Driving digital revenue for over 1,000+ satisfied clients." myClass='!text-3xl !font-light !leading-[30px]' />,
        description: <Description text='Elevate your business with our top-tier services and tech' />,
        myLink: 'Learn More',
        leadsPrecent: <Heading text='80%' myClass='!text-[50px] !leading-[44px]' />,
        adLeads: <Heading text='2X' myClass='!text-[50px] !leading-[44px]' />,
        webTrafficPrecent: <Heading text='520%' myClass='!text-[50px] !leading-[44px]' />,
        leadsText: "Leads",
        adLeadsText: "Ad Leads",
        webTrafficText: "Web Traffic",
    },
    {
        bgImage: yellow,
        logo: usLbm,
        title: <Description text="Driving digital revenue for over 1,000+ satisfied clients." myClass='!text-3xl !font-light !leading-[30px]' />,
        description: <Description text='Elevate your business with our top-tier services and tech' />,
        myLink: 'Learn More',
        leadsPrecent: <Heading text='80%' myClass='!text-[50px] !leading-[44px]' />,
        adLeads: <Heading text='2X' myClass='!text-[50px] !leading-[44px]' />,
        webTrafficPrecent: <Heading text='520%' myClass='!text-[50px] !leading-[44px]' />,
        leadsText: "Leads",
        adLeadsText: "Ad Leads",
        webTrafficText: "Web Traffic",
    },
]