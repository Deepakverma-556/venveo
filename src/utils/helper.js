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
import { Traffic, Campaigns, Leads, Disconnect } from "./icons"
import homeDepot from "../assets/images/webp/home-depot.webp"
import aia from "../assets/images/webp/aia.webp"
import lowes from "../assets/images/webp/lowes.webp"
import risinger from "../assets/images/webp/risinger.webp"
import houzz from "../assets/images/webp/houzz.webp"

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
        bgImageAlt: "dark-green",
        logoAlt: "amber-book",
        company: "Education Company",
        title: <Description text="Driving digital revenue for over 1,000+ satisfied clients." myClass='!text-3xl max-md:!text-2xl max-md:!leading-7 !font-light !leading-[30px] !font-maisonLight' />,
        description: <Description text='Elevate your business with our top-tier services and tech' />,
        myLink: 'Learn More',
        leadsPrecent: <Heading text='80%' myClass='!text-[50px] max-lg:!text-4xl max-md:!text-3xl max-sm:!text-[40px] !leading-[44px]' />,
        adLeads: <Heading text='2X' myClass='!text-[50px] max-lg:!text-4xl max-md:!text-3xl max-sm:!text-[40px] !leading-[44px]' />,
        webTrafficPrecent: <Heading text='520%' myClass='!text-[50px] max-lg:!text-4xl max-md:!text-3xl max-sm:!text-[40px] !leading-[44px]' />,
        leadsText: "Leads",
        adLeadsText: "Ad Leads",
        webTrafficText: "Web Traffic",
    },
    {
        bgImage: green,
        logo: farnsWorth,
        bgImageAlt: "green",
        logoAlt: "farns-worth",
        company: "HVAC Marketing",
        title: <Description text="Driving digital revenue for over 1,000+ satisfied clients." myClass='!text-3xl max-md:!text-2xl max-md:!leading-7 !font-light !leading-[30px] !font-maisonLight' />,
        description: <Description text='Elevate your business with our top-tier services and tech' />,
        myLink: 'Learn More',
        leadsPrecent: <Heading text='80%' myClass='!text-[50px] max-lg:!text-4xl max-md:!text-3xl max-sm:!text-[40px] !leading-[44px]' />,
        adLeads: <Heading text='2X' myClass='!text-[50px] max-lg:!text-4xl max-md:!text-3xl max-sm:!text-[40px] !leading-[44px]' />,
        webTrafficPrecent: <Heading text='520%' myClass='!text-[50px] max-lg:!text-4xl max-md:!text-3xl max-sm:!text-[40px] !leading-[44px]' />,
        leadsText: "Leads",
        adLeadsText: "Ad Leads",
        webTrafficText: "Web Traffic",
    },
    {
        bgImage: yellow,
        logo: usLbm,
        bgImageAlt: "yellow",
        logoAlt: "uslbm",
        title: <Description text="Driving digital revenue for over 1,000+ satisfied clients." myClass='!text-3xl max-md:!text-2xl max-md:!leading-7 !font-light !leading-[30px] !font-maisonLight ' />,
        description: <Description text='Elevate your business with our top-tier services and tech' />,
        myLink: 'Learn More',
        leadsPrecent: <Heading text='80%' myClass='!text-[50px] max-lg:!text-4xl max-md:!text-3xl max-sm:!text-[40px] !leading-[44px]' />,
        adLeads: <Heading text='2X' myClass='!text-[50px] max-lg:!text-4xl max-md:!text-3xl max-sm:!text-[40px] !leading-[44px]' />,
        webTrafficPrecent: <Heading text='520%' myClass='!text-[50px] max-lg:!text-4xl max-md:!text-3xl max-sm:!text-[40px] !leading-[44px]' />,
        leadsText: "Leads",
        adLeadsText: "Ad Leads",
        webTrafficText: "Web Traffic",
    },
]

export const MARKETING_LIST = [
    {
        myIcon: <Traffic />,
        title: <Description text="My website isn't getting enough traffic" myClass='!text-3xl max-md:!text-2xl max-md:!leading-7 !font-light !leading-[30px] !font-maisonLight ' />,
        description: <Description text='Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.' />,
        listOne: "Boost your presence in search results",
        listTwo: "Capture targeted site traffic",
        listThree: "Turn site visitors into customers",
        myLink: "Explore SEO Service",
    },
    {
        myIcon: <Campaigns />,
        title: <Description text="My CPL from digital ad campaigns is too high" myClass='!text-3xl max-md:!text-2xl max-md:!leading-7 !font-light !leading-[30px] !font-maisonLight ' />,
        description: <Description text='Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.' />,
        listOne: "Refine ad targeting",
        listTwo: "Engage your audience where they browse online",
        listThree: "Maximize paid ad budget",
        myLink: "Explore SEO Service",
    },
    {
        myIcon: <Leads />,
        title: <Description text="My website isn’t generating enough leads" myClass='!text-3xl max-md:!text-2xl max-md:!leading-7 !font-light !leading-[30px] !font-maisonLight ' />,
        description: <Description text='Struggling to get qualified leads in your pipeline? Turn up the dial on your lead generation with digital marketing plans, tailored to your goals and budget.' />,
        listOne: "Fill up your lead pipeline",
        listTwo: "Reach your most valuable audience",
        listThree: "Maximize conversion opportunities",
        myLink: "Explore SEO Service",
    },
    {
        myIcon: <Disconnect />,
        title: <Description text="My marketing and sales data is disconnected" myClass='!text-3xl max-md:!text-2xl max-md:!leading-7 !font-light !leading-[30px] !font-maisonLight ' />,
        description: <Description text='Don’t let leads slip through the cracks. Unify your sales and marketing efforts with Nutshell and MarketingCloudFX, to provide end-to-end reporting and analysis of your data.' />,
        listOne: "Unify sales and marketing data",
        listTwo: "Prioritize leads with data-backed insights",
        listThree: "Turn opportunities into closed deals",
        myLink: "Explore SEO Service",
    },

]

export const INDUSTRY_LOGO_LIST = [
    {
        image: homeDepot,
        logoAlt: "home-depot",
    },
    {
        image: aia,
        logoAlt: "aia",
    },
    {
        image: lowes,
        logoAlt: "lowes",
    },
    {
        image: risinger,
        logoAlt: "risinger",
    },
    {
        image: houzz,
        logoAlt: "houzz",
    },
]