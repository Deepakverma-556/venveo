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
import { Traffic, Campaigns, Leads, Disconnect, EyeIcon, DollarIcon, ToolIcon, StickerIcon, ResultIcon } from "./icons"
import homeDepot from "../assets/images/webp/home-depot.webp"
import aia from "../assets/images/webp/aia.webp"
import lowes from "../assets/images/webp/lowes.webp"
import risinger from "../assets/images/webp/risinger.webp"
import houzz from "../assets/images/webp/houzz.webp"
import jon from "../assets/images/webp/Jon-vaughan.webp"
import michael from "../assets/images/webp/michael.webp"
import grantFarnsWorth from "../assets/images/webp/grant-farnsworth.webp"

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

export const MY_TAB = [
    {
        title: "Industury Expertise",
        domain: "industry expertise"
    },
    {
        title: "ROI Focused",
        domain: "roi focused",
    },
    {
        title: "Proprietary Technology",
        domain: "proprietary technology"
    }
]

export const ACTUAL_RESULT_LIST = [
    {
        image: jon,
        myAlt: "jon",
        description: "\“They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.\”",
        name: <Description myClass="!text-white !text-center" text="Jon Vaughan," />,
        address: <Description myClass="!text-white !text-center" text="REGIONAL VP-SE AT US LBM" />,
        logo: usLbm,
    },
    {
        image: michael,
        myAlt: "michael",
        description: "\“They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.\”",
        name: <Description myClass="!text-white !text-center" text="Michael," />,
        address: <Description myClass="!text-white !text-center" text="REGIONAL VP-SE AT US LBM" />,
        logo: usLbm,
    },
    {
        image: grantFarnsWorth,
        myAlt: "grant-farnsworth",
        description: "\“They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.\”",
        name: <Description myClass="!text-white !text-center" text="grant Farnsworth," />,
        address: <Description myClass="!text-white !text-center" text="REGIONAL VP-SE AT US LBM" />,
        logo: usLbm,
    },
]

export const MULTI_CHANNEL_LIST = [
    {
        myOption: "MULTI-CHANNEL-MARKETING",
        title: "How to Get Your Product into Lowe's",
        description: <Description text="Understanding the process and maximize the opportunities" />,
    },
    {
        myOption: "MULTI-CHANNEL-MARKETING",
        title: "Get Your Sales Team Ready for Digital Leads",
        description: <Description text="unlock substantial business growth by enhancing collaboration skills and digital marketing expertise" />,
    },
    {
        myOption: "MULTI-CHANNEL-MARKETING",
        title: "How to Sell Building Materials Online",
        description: <Description text="Explore how selling building materials online opens up wider audiences, efficient sales and insightful data," />,
    },
]

export const FOOTER_LINK_LIST = [
    {
        title: "HOW WE HELP",
        linkOne: "Drive More Awareness",
        linkTwo: "Get More Customers",
        linkThree: "Build Your Brand",
        linkFour: "Improve Your Reputation",
        linkFive: "Track Results"
    },
    {
        title: "WHO WE HELP",
        linkOne: "Digital Advertising",
        linkTwo: "Search Engine Ranking",
        linkThree: "Contact Marketing",
        linkFour: "Programic Advertising",
        linkFive: "Email Marketing"
    },
    {
        title: "WHY VENVEO",
        linkOne: "About Us",
        linkTwo: "Careers",
        linkThree: "Growth Studies",
        linkFour: "Testimonials",
        linkFive: ""
    },
    {
        title: "RESOURCES",
        linkOne: "Articals",
        linkTwo: "News",
        linkThree: "Webinars",
        linkFour: "EBooks",
        linkFive: "Podcast"
    },
]

export const HELP_LIST = [
    {
        title: "How We Help",
        iconOne: <EyeIcon />,
        iconTwo: <DollarIcon />,
        iconThree: <ToolIcon />,
        iconFour: <StickerIcon />,
        iconFive: <ResultIcon />,
        descriptionOne: "Drive More Awareness",
        descriptionTwo: "Get More Customers",
        descriptionThree: "Build Your Brand",
        descriptionFour: "Improve Your Reputation",
        descriptionFive: "Track Results",
    },
    {
        title: "Who We Help",
        descriptionOne: "Digital Advertising",
        descriptionTwo: "Search Engine Ranking",
        descriptionThree: "Contact Marketing",
        descriptionFour: "Programic Advertising",
        descriptionFive: "Email Marketing",
    },
    {
        title: "Why Venveo",
        descriptionOne: "About Us",
        descriptionTwo: "Careers",
        descriptionThree: "Growth Studies",
        descriptionFour: "Testimonials",
    }
]
