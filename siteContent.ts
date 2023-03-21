import { ILogo } from "./types/images"

const logo: ILogo = { src: '/logo.svg', alt: 'Wealth app', size: { width: 142, height: 29 } }
const headerBg: string = '/headerBg.jpg'

const iconLoan: string = '/icon-loan-payments.png'
const iconFinancial: string = '/icon-financial-growth.png'
const iconMortgages: string = '/icon-mortgages.png'
const iconCredit: string = '/icon-credit-cards.png'

const titleLoan: string = 'Loan payments'
const titleFinancial: string = 'Financial growth'
const titleMortgages: string = 'Mortgages'
const titleCredit: string = 'Credit cards'

const defaultDesc: string = 'Compare rates, crunch numbers and get expert guidance for life.'

const logoForbes = { src: '/logo-forbes.svg', alt: 'Forbes', extLink: 'https://www.forbes.com/', size: { width: 132, height: 70 } }
const logoWsj = { src: '/logo-wsj.svg', alt: 'The Wall Street Journal', extLink: 'https://www.wsj.com/', size: { width: 212, height: 113 }  }
const logoWealthFront = { src: '/logo-wealthfront.svg', alt: 'Wealthfront', extLink: 'https://www.wealthfront.com/', size: { width: 159, height: 60 }  }

export default {
    header: {
        siteLogo: logo,
        headerBg: headerBg
    },
    forms: {
        searchNow: {
            placeholder: 'Type In A Keyword, Interest Or Topic.'
        }
    },
    iconList: {
        asSeen: {
            title: 'As seen on',
            logos: [
                {
                    src: logoForbes.src, 
                    alt: logoForbes.alt,
                    size: logoForbes.size,
                    extLink: logoForbes.extLink
                },
                {
                    src: logoWsj.src, 
                    alt: logoWsj.alt,
                    size: logoWsj.size,
                    extLink: logoWsj.extLink
                },
                {
                    src: logoWealthFront.src, 
                    alt: logoWealthFront.alt,
                    size: logoWealthFront.size,
                    extLink: logoWealthFront.extLink
                }
            ]
        }
    },
    sectionHeader: {
        title: 'Wealth & prosperity',
        heading: 'The digital noise makers in the financial space.',
        subHeading: 'Compare rates, crunch numbers and get expert guidance for life’s biggest financial moments.'
    },
    sectionFocus: {
        title: 'Areas of focus',
        heading: 'Discover an Interest or Topic.',
        subHeading: 'Compare rates, crunch numbers and get expert guidance for life’s biggest financial moments.'
    },
    gridFocus: {
        columnTitles: [
            "Personal finance",
            "Careers",
            "Start-ups",
            "Trending"
        ],
        gridItemsFocus: [
            {   
                icon: iconLoan,
                title: titleLoan,
                desc: defaultDesc
            },
            {
                icon: iconFinancial,
                title: titleFinancial,
                desc: defaultDesc
            },
            {
                icon: iconMortgages,
                title: titleMortgages,
                desc: defaultDesc
            },
            {
                icon: iconCredit,
                title: titleCredit,
                desc: defaultDesc
            },
            {
                icon: iconLoan,
                title: titleLoan,
                desc: defaultDesc
            },
            {
                icon: iconFinancial,
                title: titleFinancial,
                desc: defaultDesc
            },
            {
                icon: iconMortgages,
                title: titleMortgages,
                desc: defaultDesc
            },
            {
                icon: iconCredit,
                title: titleCredit,
                desc: defaultDesc
            },
        ]
    },
    Cta: {
        ViewAll: 'VIEW ALL OF OUR LATEST'
    }
}
