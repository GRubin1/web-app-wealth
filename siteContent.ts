const logo: string = '/logo.svg'
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

const logoForbes = { url: '/logo-forbes.svg', alt: 'Forbes', extLink: 'https://www.forbes.com/', size: { width: 132, height: 70 } }
const logoWsj = { url: '/logo-wsj.svg', alt: 'The Wall Street Journal', extLink: 'https://www.wsj.com/', size: { width: 212, height: 113 }  }
const logoWealthFront = { url: '/logo-wealthfront.svg', alt: 'Wealthfront', extLink: 'https://www.wealthfront.com/', size: { width: 159, height: 60 }  }

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
                    url: logoForbes.url, 
                    alt: logoForbes.alt,
                    size: logoForbes.size,
                    extLink: logoForbes.extLink
                },
                {
                    url: logoWsj.url, 
                    alt: logoWsj.alt,
                    size: logoWsj.size,
                    extLink: logoWsj.extLink
                },
                {
                    url: logoWealthFront.url, 
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
