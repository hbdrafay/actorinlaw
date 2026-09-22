/* =========================================================
   RAFAY'S LAW ROOM
   COMPLETE APPLICATION LOGIC
========================================================= */


/* =========================================================
   EXAM DATES
========================================================= */

const EXAMS = [
    {
        id: "equity",
        name: "Equity",
        date: "2026-10-02",
        marks: 100,
        difficulty: "High"
    },
    {
        id: "transfer",
        name: "Law of Transfer of Property",
        date: "2026-10-06",
        marks: 100,
        difficulty: "High"
    },
    {
        id: "mercantile",
        name: "Mercantile Law",
        date: "2026-10-08",
        marks: 100,
        difficulty: "Very High"
    },
    {
        id: "special",
        name: "Special & Local Laws",
        date: "2026-10-12",
        marks: 100,
        difficulty: "High"
    },
    {
        id: "environment",
        name: "Environmental Laws",
        date: "2026-10-14",
        marks: 100,
        difficulty: "Medium"
    },
    {
        id: "cyber",
        name: "Cyber Laws",
        date: "2026-10-16",
        marks: 100,
        difficulty: "Very High"
    },
    {
        id: "civil",
        name: "Civil Law I",
        date: "2026-10-20",
        marks: 100,
        difficulty: "Very High"
    }
];


/* =========================================================
   COURSE DATABASE
========================================================= */

const COURSES = {


/* =========================================================
   EQUITY
========================================================= */

equity: {
    name: "Equity",
    subtitle: "Equitable principles, remedies and trusts",
    examDate: "2026-10-02",
    marks: 100,

    topics: [

        {
            id: "equity-foundations",
            title: "Foundations of Equity",
            description: "Origin, purpose, development and relationship with Common Law.",

            content: {
                what: "Equity is a body of legal principles developed historically to supplement the Common Law where rigid common law rules or remedies produced an inadequate result.",

                why: "The Common Law developed strict forms of action and often could not provide an appropriate remedy, particularly where damages were inadequate. Petitions to the Chancellor eventually produced a separate body of equitable principles.",

                explanation: "Equity does not simply mean fairness in the ordinary sense. It is a structured legal system of principles, doctrines and remedies developed through the Court of Chancery and later administered alongside Common Law.",

                statutory: "In Pakistan, equitable remedies are significantly reflected through the Specific Relief Act, 1877 and the Trusts Act, 1882, subject to their statutory requirements.",

                elements: [
                    "Equity developed historically through petitions to the Chancellor.",
                    "It addressed situations where Common Law remedies were inadequate.",
                    "Equitable relief is generally discretionary.",
                    "Modern courts administer legal and equitable principles within the statutory framework."
                ],

                examples: [
                    "If damages cannot adequately compensate for breach of a contract concerning a unique property, specific performance may be considered.",
                    "An injunction may prevent continuing conduct that causes legal injury."
                ],

                distinctions: [
                    {
                        a: "Common Law",
                        b: "Equity",
                        difference: "Common Law historically emphasized strict legal rules and damages, while Equity developed flexible principles and equitable remedies."
                    }
                ],

                memory: "COMMON LAW → RIGIDITY → INADEQUATE REMEDY → CHANCERY → EQUITY",

                exam: [
                    "Define Equity.",
                    "Explain the historical origin of Equity.",
                    "Distinguish Common Law and Equity.",
                    "Explain why Equity developed."
                ]
            }
        },

        {
            id: "equity-maxims",
            title: "Equitable Maxims",
            description: "Core principles used to understand equitable jurisdiction.",

            content: {
                what: "Equitable maxims are concise statements expressing recurring principles that guide equitable relief.",

                explanation: "The maxims are not mechanical statutory rules. Their application depends on the facts, the relevant legal right, the statutory framework and the nature of the remedy sought.",

                maxims: [
                    ["Equity follows the law", "Equity generally respects established legal rights and does not operate as a general licence to disregard statute."],
                    ["He who seeks equity must do equity", "A person asking for equitable relief may be required to act fairly in relation to the equitable relief sought."],
                    ["He who comes to equity must come with clean hands", "A claimant's own improper conduct connected with the matter may affect equitable relief."],
                    ["Equity aids the vigilant, not those who sleep on their rights", "Unreasonable delay can prejudice equitable relief. This principle is associated with laches."],
                    ["Equity will not suffer a wrong without a remedy", "Equity historically developed remedies for situations where common law relief was inadequate."],
                    ["Equity regards substance rather than form", "Equity may examine the real substance of a transaction rather than being controlled merely by its outward form."],
                    ["Equity regards as done that which ought to be done", "Where an obligation is specifically enforceable, equity may treat the obligated act as having an equitable effect before formal completion."],
                    ["Equity acts in personam", "Historically equitable orders operated against persons rather than merely determining property rights."],
                    ["Equality is equity", "Where competing equitable claims are otherwise equal, equality may be the appropriate basis for distribution."],
                    ["Where equities are equal, the law prevails", "An existing legal position may prevail where competing equitable claims are equal."],
                    ["Where equities are equal, the first in time prevails", "Priority may follow earlier equitable interest where equities are otherwise equal."],
                    ["Equity will not assist a volunteer", "A person who has provided no consideration may not automatically receive equitable assistance."],
                    ["Equity will not perfect an imperfect gift", "Equity generally will not complete a gift that was not legally completed by the donor."],
                    ["Equity will not permit a statute to be used as an instrument of fraud", "A party should not use statutory formalities to perpetrate fraud in circumstances recognized by equity."],
                    ["Equity imputes an intention to fulfil an obligation", "Equity may attribute an intention to satisfy an existing obligation where the circumstances justify it."],
                    ["Equity will not allow a person to profit from his own wrong", "A person should not obtain an equitable benefit through their own wrongful conduct."]
                ],

                memory: "LAW → FAIR CONDUCT → CLEAN HANDS → VIGILANCE → REMEDY"
            }
        },

        {
            id: "specific-relief",
            title: "Specific Relief Act, 1877",
            description: "Possession, specific performance, rectification, rescission, cancellation, declaration and injunctions.",

            content: {
                statutory: "Specific Relief Act, 1877",

                what: "Specific relief means relief directed toward enforcing or protecting a particular civil right rather than merely awarding monetary compensation.",

                sections: [
                    "s3 — Definitions",
                    "s4 — Savings",
                    "s5 — Modes of specific relief",
                    "s8 — Recovery of specific immovable property",
                    "s9 — Dispossession without consent and otherwise than in due course of law",
                    "ss10–11 — Recovery of movable property",
                    "ss12–29 — Specific performance",
                    "ss31–34 — Rectification",
                    "ss35–38 — Rescission",
                    "ss39–41 — Cancellation",
                    "ss42–43 — Declaration",
                    "s44 — Receiver",
                    "ss52–57 — Injunctions"
                ],

                concepts: [
                    ["Specific performance", "A court order requiring a party to perform the contractual obligation rather than merely paying damages."],
                    ["Rectification", "Correction of an instrument so that it expresses the actual intention of the parties where statutory requirements are satisfied."],
                    ["Rescission", "Setting aside a contract and releasing the parties from contractual obligations in circumstances recognized by law."],
                    ["Cancellation", "A court process by which an instrument may be cancelled where leaving it outstanding may cause serious injury and statutory requirements are satisfied."],
                    ["Declaration", "A judicial statement declaring a person's legal character or right without necessarily granting consequential relief."],
                    ["Injunction", "A judicial order controlling conduct, either by restraining an act or requiring an act."],
                    ["Receiver", "A person appointed by the Court to preserve, manage or receive property during litigation."]
                ],

                specificPerformance: {
                    section: "s12",
                    principle: "Specific performance may be available where the statutory conditions are fulfilled, including circumstances where monetary compensation is inadequate.",
                    related: [
                        "Trust obligations",
                        "Inadequacy of damages",
                        "Contracts requiring personal skill or volition",
                        "Continuous supervision",
                        "Uncertainty",
                        "Revocable contracts",
                        "Unauthorized trustee contracts",
                        "Ultra vires corporate contracts"
                    ]
                },

                injunctions: {
                    temporary: "Temporary injunction operates for a limited period or until further order.",
                    perpetual: "Perpetual injunction is granted by final judgment and permanently restrains the relevant conduct.",
                    mandatory: "Mandatory injunction requires a positive act to remedy or prevent a legal wrong.",
                    prohibitory: "Prohibitory injunction restrains a person from doing a specified act."
                },

                distinctions: [
                    ["Specific Performance", "Damages", "Specific performance seeks actual performance; damages provide monetary compensation."],
                    ["Rectification", "Rescission", "Rectification corrects an instrument; rescission sets aside the contractual relationship."],
                    ["Rescission", "Cancellation", "Rescission concerns setting aside a contract; cancellation concerns an instrument."],
                    ["Declaration", "Consequential Relief", "Declaration establishes a legal status or right; consequential relief gives an additional enforceable remedy."]
                ],

                memory: "POSSESSION → PERFORMANCE → RECTIFY → RESCIND → CANCEL → DECLARE → INJUNCTION"
            }
        },

        {
            id: "trusts-act",
            title: "Trusts Act, 1882",
            description: "Creation, trustees, beneficiaries, duties, breach and types of trusts.",

            content: {
                statutory: "Trusts Act, 1882",

                what: "A trust is an obligation annexed to ownership of property requiring the trustee to hold or deal with that property for the benefit of another.",

                parties: [
                    ["Author of trust", "The person who creates the trust."],
                    ["Trustee", "The person who accepts the obligation and administers trust property."],
                    ["Beneficiary", "The person for whose benefit the trust exists."],
                    ["Trust property", "The property subject to the trust."]
                ],

                sections: [
                    "s4 — Lawful purpose",
                    "s5 — Trust concerning immovable property",
                    "s6 — Creation of trust",
                    "s7 — Who may create",
                    "s8 — Subject matter",
                    "s9 — Beneficiary",
                    "s10 — Trustee",
                    "ss11–20 — Trustee duties",
                    "s23 — Compensation for breach"
                ],

                creation: [
                    "Certainty of intention",
                    "Certainty of purpose",
                    "Certainty of beneficiary",
                    "Certainty of trust property"
                ],

                duties: [
                    ["s11", "Execute the trust"],
                    ["s12", "Inform himself regarding the trust property"],
                    ["s13", "Protect title"],
                    ["s14", "Do not acquire adverse title"],
                    ["s15", "Exercise reasonable care"],
                    ["s16", "Deal properly with perishable property"],
                    ["s17", "Act impartially"],
                    ["s18", "Prevent waste"],
                    ["s19", "Maintain accounts and provide information"],
                    ["s20", "Invest trust money according to law"]
                ],

                rights: [
                    "Possession of trust property",
                    "Reimbursement",
                    "Indemnity where legally available",
                    "Court guidance",
                    "Recovery of proper expenses"
                ],

                beneficiaryRights: [
                    "Rents and profits according to the trust",
                    "Inspection of trust documents where legally entitled",
                    "Information",
                    "Compel proper performance of the trust"
                ],

                types: [
                    ["Express trust", "Created deliberately through expressed intention."],
                    ["Implied trust", "Arises from circumstances and conduct recognized by law."],
                    ["Constructive trust", "Imposed by law to prevent unjust retention or to enforce equitable obligations."],
                    ["Resulting trust", "Arises where circumstances indicate property should return beneficially to another."]
                ],

                distinction: "Trust is not ordinary ownership: the trustee holds legal title subject to fiduciary obligations while the beneficiary enjoys the beneficial interest."
            }
        }
    ]
},


/* =========================================================
   TRANSFER OF PROPERTY
========================================================= */

transfer: {
    name: "Law of Transfer of Property",
    subtitle: "Transfer, sale, mortgage, lease, gift and registration",
    examDate: "2026-10-06",
    marks: 100,

    topics: [

        {
            id: "tpa-foundations",
            title: "Foundations of Transfer",
            description: "Core principles under the Transfer of Property Act, 1882.",

            content: {
                statutory: "Transfer of Property Act, 1882",

                sections: [
                    "s5 — Transfer of property",
                    "s6 — What may be transferred",
                    "s7 — Persons competent to transfer",
                    "s8 — Operation of transfer",
                    "s9 — Oral transfers",
                    "s10 — Restraint on alienation",
                    "s13 — Transfer for benefit of unborn person",
                    "s14 — Rule against perpetuity",
                    "s19 — Vested interest",
                    "s21 — Contingent interest",
                    "s35 — Election",
                    "s41 — Ostensible owner",
                    "s43 — Feeding the grant by estoppel",
                    "s52 — Lis pendens",
                    "s53 — Fraudulent transfer",
                    "s53A — Part performance"
                ],

                concepts: [
                    ["Transfer", "An act by which a living person conveys property, in the manner recognized by law, to another living person or persons."],
                    ["Vested interest", "An interest created without making its vesting dependent upon an uncertain event, subject to statutory qualifications."],
                    ["Contingent interest", "An interest dependent upon the happening or non-happening of an uncertain event."],
                    ["Lis pendens", "A transfer made during litigation concerning immovable property is subject to the statutory rule protecting the authority of the Court and rights under the litigation."],
                    ["Part performance", "Under s53A, statutory conditions can protect possession in certain contracts where the transferee has acted in part performance."]
                ],

                memory: "5 TRANSFER → 6 WHAT → 7 WHO → 8 EFFECT → 9 ORAL → 10 RESTRAINT"
            }
        },

        {
            id: "mortgage",
            title: "Mortgages",
            description: "Six statutory forms, redemption, subrogation and mortgage remedies.",

            content: {
                statutory: "Transfer of Property Act, 1882 — s58 onward",

                definition: "A mortgage is the transfer of an interest in specific immovable property for securing payment of money advanced or to be advanced, an existing or future debt, or performance of an engagement giving rise to pecuniary liability.",

                types: [
                    ["Simple mortgage", "Mortgagor remains in possession and personally undertakes repayment; mortgagee has a right to cause sale of the property through legal process."],
                    ["Mortgage by conditional sale", "An ostensible sale subject to conditions concerning repayment and the legal relationship specified by the transaction."],
                    ["Usufructuary mortgage", "Possession is delivered or agreed to be delivered to the mortgagee, who takes rents and profits toward the debt."],
                    ["English mortgage", "Mortgagor transfers property absolutely subject to retransfer upon repayment."],
                    ["Mortgage by deposit of title deeds", "Security is created through deposit of title documents in circumstances recognized by law."],
                    ["Anomalous mortgage", "A mortgage that does not fall wholly within the statutory categories or combines features of different forms."]
                ],

                important: [
                    "s59 — Formalities",
                    "s60 — Right of redemption",
                    "s91 — Persons entitled to redeem",
                    "s92 — Subrogation",
                    "s93 — Tacking",
                    "s100 — Charge"
                ],

                redemption: "The right of redemption is the mortgagor's right to recover the property after the mortgage debt becomes due and statutory conditions are fulfilled.",

                clog: "A clog on redemption is an oppressive or unreasonable condition that effectively prevents or unduly restricts the mortgagor's legal right of redemption."
            }
        },

        {
            id: "lease",
            title: "Lease",
            description: "Creation, duration, rights, duties and determination of leases.",

            content: {
                statutory: "Transfer of Property Act, 1882 — ss105–117",

                definition: "A lease is a transfer of a right to enjoy immovable property for a certain time, express or implied, in consideration of a price, share of crops, service or other thing of value.",

                sections: [
                    "s105 — Definition",
                    "s106 — Duration",
                    "s107 — Creation",
                    "s108 — Rights and liabilities",
                    "s111 — Determination",
                    "s114 — Relief against forfeiture",
                    "s116 — Holding over",
                    "s117 — Agricultural leases"
                ],

                determination: [
                    "Expiry of time",
                    "Happening of specified event",
                    "Merger",
                    "Surrender",
                    "Forfeiture",
                    "Notice to quit where applicable"
                ],

                distinction: "A lease transfers a right to enjoy property; a licence generally creates personal permission without transferring an interest in the property."
            }
        },

        {
            id: "gift",
            title: "Gift",
            description: "Transfer without consideration and statutory formalities.",

            content: {
                statutory: "Transfer of Property Act, 1882 — ss122–129",

                definition: "A gift is the transfer of certain existing movable or immovable property made voluntarily and without consideration by one person to another and accepted by or on behalf of the donee.",

                sections: [
                    "s122 — Definition",
                    "s123 — Formalities",
                    "s124 — Gift of existing/future property",
                    "s125 — Gift to several donees",
                    "s126 — Revocation",
                    "s127 — Onerous gift",
                    "s128 — Universal donee",
                    "s129 — Saving of Muslim law"
                ],

                memory: "GIFT = VOLUNTARY + NO CONSIDERATION + EXISTING PROPERTY + ACCEPTANCE"
            }
        },

        {
            id: "registration-act",
            title: "Registration Act, 1908",
            description: "Compulsory registration, presentation, refusal, appeals and effects.",

            content: {
                statutory: "Registration Act, 1908",

                sections: [
                    "s17 — Documents requiring registration",
                    "s18 — Optional registration",
                    "s23 — Time for presentation",
                    "s24 — Documents executed by several persons",
                    "s25 — Delay",
                    "s26 — Documents executed outside Pakistan",
                    "s28 — Place of registration",
                    "s32 — Persons presenting documents",
                    "s33 — Powers of attorney",
                    "s34 — Inquiry before registration",
                    "s35 — Admission or denial of execution",
                    "s47 — When registered document operates",
                    "s48 — Registered documents and oral agreements",
                    "s49 — Effect of non-registration",
                    "s50 — Registered documents versus unregistered documents",
                    "s57 — Inspection and copies",
                    "s71 — Refusal",
                    "s72 — Appeal",
                    "s77 — Suit"
                ],

                cases: [
                    {
                        name: "Ghulam Rasool v. Akbar Ali",
                        citation: "2011 SCMR 794",
                        principle: "Section 47 concerns the operation of a registered document and its legally relevant date."
                    },
                    {
                        name: "Mst. Rasheeda Begum v. Muhammad Yousaf",
                        citation: "2002 SCMR 1089",
                        principle: "An agreement to sell does not by itself create title or an interest equivalent to a completed sale."
                    },
                    {
                        name: "Anwar Khan v. Abdul Manaf",
                        citation: "2004 SCMR 126",
                        principle: "A family arrangement must be examined according to its substance and legal effect rather than merely its label."
                    }
                ]
            }
        }
    ]
},


/* =========================================================
   MERCANTILE LAW
========================================================= */

mercantile: {
    name: "Mercantile Law",
    subtitle: "Companies, partnership and negotiable instruments",
    examDate: "2026-10-08",
    marks: 100,

    topics: [

        {
            id: "companies",
            title: "Companies Act, 2017",
            description: "Corporate personality, incorporation, shares, directors, meetings and winding up.",

            content: {
                statutory: "Companies Act, 2017",

                weight: "Companies = 60 marks",

                definition: "A company is a legal entity incorporated under the applicable companies legislation and distinct from its members.",

                principles: [
                    ["Separate legal personality", "The company has legal identity separate from its shareholders."],
                    ["Perpetual succession", "The company continues despite changes in membership, subject to law."],
                    ["Limited liability", "Members' liability may be limited according to the company's constitution and statutory form."],
                    ["Corporate property", "Company property belongs to the company, not directly to individual shareholders."]
                ],

                sections: [
                    "ss9–56 — Incorporation",
                    "s17 — Effect of memorandum and articles",
                    "s18 — Effect of registration",
                    "s21 — Registered office",
                    "ss25–26 — Capital and objects",
                    "ss36–38 — Articles",
                    "ss46–52 — Conversion",
                    "s57 — Prospectus",
                    "s58 — Share classes",
                    "s59 — Variation of rights",
                    "s61 — Shares as movable property",
                    "s62 — Share certificate",
                    "s63 — Debentures",
                    "ss67–72 — Allotment, certificates and book entry",
                    "ss74–80 — Transfer and transmission",
                    "s81 — Premium",
                    "s83 — Further issue",
                    "ss86–88 — Own shares",
                    "ss89–97 — Reduction",
                    "Meetings, directors, accounts, audit and winding up"
                ],

                cases: [
                    ["Salomon v Salomon", "Separate corporate personality."],
                    ["Lee v Lee's Air Farming", "Company personality permits relationship between company and individual in different legal capacities."],
                    ["Macaura", "Shareholder does not personally own corporate property."],
                    ["Foss v Harbottle", "Company is ordinarily the proper claimant for wrongs done to the company, subject to exceptions."],
                    ["Royal British Bank v Turquand", "Indoor management principle."]
                ],

                distinctions: [
                    ["Company", "Shareholder", "Company owns its assets; shareholders own shares."],
                    ["Share", "Company property", "A share is an interest in the company; it is not direct ownership of each company asset."],
                    ["Ordinary resolution", "Special resolution", "Different statutory voting requirements and legal purposes."]
                ]
            }
        },

        {
            id: "partnership",
            title: "Partnership Act, 1932",
            description: "Definition, mutual agency, partner duties, dissolution and liability.",

            content: {
                statutory: "Partnership Act, 1932",

                weight: "Partnership = 20 marks",

                sections: [
                    "s4 — Definition",
                    "s5 — Partnership arises from contract",
                    "s6 — Real relation between parties",
                    "s7 — Partnership at will",
                    "s8 — Particular partnership",
                    "s9 — General duties",
                    "s10 — Fraud indemnity",
                    "s11 — Contract",
                    "s12 — Conduct",
                    "s13 — Mutual rights and liabilities",
                    "s14 — Firm property",
                    "s16 — Personal profits",
                    "s18 — Partner as agent",
                    "s19 — Implied authority",
                    "s25 — Joint and several liability",
                    "s28 — Holding out",
                    "s30 — Minor admitted to benefits",
                    "s31 — Introduction of partner",
                    "s32 — Retirement",
                    "s33 — Expulsion",
                    "s39 — Dissolution",
                    "s43 — Dissolution by notice",
                    "s44 — Court dissolution",
                    "s48 — Settlement"
                ],

                definition: "Partnership is the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all.",

                core: "The central concept is mutual agency: each partner can act as an agent of the firm and, within authority, the other partners.",

                cases: [
                    ["Cox v Hickman", "Profit sharing alone does not necessarily establish partnership; the real relationship and agency are important."],
                    ["Mercantile Credit Co v Garrod", "Partners can bind the firm through apparent authority in appropriate circumstances."],
                    ["Waugh v Carver", "Historical illustration concerning partnership and mutual agency."]
                ],

                memory: "PARTNERSHIP = CONTRACT + PROFIT SHARING + BUSINESS + MUTUAL AGENCY"
            }
        },

        {
            id: "negotiable",
            title: "Negotiable Instruments Act, 1881",
            description: "Promissory notes, bills, cheques, negotiation, endorsement and banking principles.",

            content: {
                statutory: "Negotiable Instruments Act, 1881",

                weight: "Negotiable Instruments = 20 marks",

                sections: [
                    "s4 — Promissory note",
                    "s5 — Bill of exchange",
                    "s6 — Cheque",
                    "s7 — Drawer, drawee and acceptor",
                    "s8 — Holder",
                    "s9 — Holder in due course",
                    "s10 — Payment in due course",
                    "s13 — Negotiable instrument",
                    "s14 — Negotiation",
                    "s15 — Endorsement",
                    "s91 — Dishonour by non-acceptance",
                    "s92 — Dishonour by non-payment",
                    "s118 — Presumptions",
                    "ss120–122 — Estoppel",
                    "s131 — Collecting banker"
                ],

                concepts: [
                    ["Promissory note", "Written unconditional undertaking by one person to pay a certain sum to a specified person or order or bearer according to statutory requirements."],
                    ["Bill of exchange", "Written unconditional order directing one person to pay a certain sum to another person or order/bearer."],
                    ["Cheque", "A bill of exchange drawn on a specified banker and payable on demand."],
                    ["Holder", "A person entitled in their own name to possession and to receive or recover the amount."],
                    ["Holder in due course", "A person acquiring the instrument for consideration, before maturity, in good faith and under statutory conditions."]
                ],

                distinctions: [
                    ["Negotiation", "Assignment", "Negotiation transfers negotiable instrument rights through statutory methods; assignment generally transfers rights subject to assignment law."],
                    ["Forgery", "Material alteration", "Forgery concerns unauthorized creation/signature; material alteration concerns unauthorized alteration of a material term."],
                    ["General crossing", "Special crossing", "General crossing identifies banking collection broadly; special crossing directs payment through a specified banker."]
                ]
            }
        }
    ]
},


/* =========================================================
   SPECIAL & LOCAL LAWS
========================================================= */

special: {
    name: "Special & Local Laws",
    subtitle: "Punjab revenue, pre-emption and tenancy law",
    examDate: "2026-10-12",
    marks: 100,

    topics: [

        {
            id: "plra",
            title: "Punjab Land Revenue Act, 1967",
            description: "Revenue administration, records, mutation, partition and recovery.",

            content: {
                weight: "60 marks",

                purpose: "The Act provides a framework for administration, assessment and collection of land revenue and related revenue records and proceedings in Punjab.",

                concepts: [
                    ["Estate", "A revenue unit recognized under the Act."],
                    ["Landowner", "A person recognized as having ownership rights for revenue purposes."],
                    ["Holding", "A share or parcel held by a person according to the revenue framework."],
                    ["Mutation", "An entry in revenue records reflecting a transaction or change in possession/status; mutation itself is generally not a document creating title."],
                    ["Demarcation", "Identification of land boundaries on the ground according to revenue records."],
                    ["Partition", "Division of jointly held revenue property into separate shares according to law."]
                ],

                officers: [
                    "Commissioner",
                    "Collector",
                    "Assistant Commissioner",
                    "Assistant Collector",
                    "Tehsildar"
                ],

                sections: [
                    "s22 — Summons",
                    "s24 — Service",
                    "s25 — Notices, orders and proclamations",
                    "s27 — Judicial proceedings",
                    "s29 — Arrest of defaulter",
                    "s30 — Entry upon land",
                    "Record of Rights",
                    "Mutation",
                    "Partition",
                    "Revenue recovery",
                    "Appeal, review and revision"
                ],

                examTrap: "Mutation is primarily a revenue record entry. It should not automatically be treated as conclusive proof of title."
            }
        },

        {
            id: "preemption",
            title: "Punjab Pre-emption Act, 1991",
            description: "Right of pre-emption, priority classes, demands and limitation.",

            content: {
                weight: "20 marks",

                purpose: "Pre-emption gives a qualifying person a statutory right, subject to the Act, to acquire immovable property in preference to another purchaser.",

                sections: [
                    "s3 — Interpretation according to Quran and Sunnah",
                    "s4 — Overriding effect",
                    "s5 — Sale of immovable property",
                    "s6 — Classes of pre-emptors",
                    "s7 — Priority",
                    "s8 — Joint exercise",
                    "s9 — Equal shares",
                    "s13 — Three demands",
                    "s15 — Waiver",
                    "s16 — Death after demand",
                    "s17 — Abatement",
                    "s24 — Deposit",
                    "s27 — Determination of price",
                    "s28 — Market value",
                    "s30 — Limitation"
                ],

                classes: [
                    ["Shafi Sharik", "Co-sharer in the property sold."],
                    ["Shafi Khalit", "Person sharing an appendage or right connected with the property according to statutory requirements."],
                    ["Shafi Jar", "Adjoining owner subject to the statutory conditions."]
                ],

                demands: [
                    ["Talb-i-Muwathibat", "Immediate demand upon knowledge of the sale."],
                    ["Talb-i-Ishhad", "Formal demand with witnesses/notice within the statutory period."],
                    ["Talb-i-Khusumat", "Institution of the pre-emption suit."]
                ],

                memory: "SALE → SHARIK → KHALIT → JAR → MUWATHIBAT → ISHHAD → KHUSUMAT"
            }
        },

        {
            id: "tenancy",
            title: "Punjab Tenancy Act, 1887",
            description: "Agricultural tenancy, occupancy rights, rent and ejectment.",

            content: {
                weight: "20 marks",

                purpose: "The Act regulates agricultural tenancy and related rights, rent, occupancy and revenue-court proceedings.",

                concepts: [
                    ["Tenant", "A person holding land under another and liable to pay rent according to the tenancy relationship."],
                    ["Landlord", "The person under whom a tenant holds agricultural land."],
                    ["Occupancy right", "A legally recognized protected tenancy interest arising under statutory conditions."],
                    ["Rent", "The consideration payable by a tenant for use or occupation of agricultural land."]
                ],

                sections: [
                    "s5 — Occupancy rights",
                    "ss6–11 — Historical and continuing occupancy provisions",
                    "ss12–14 — Rent",
                    "s15 — Enhancement",
                    "Ejectment",
                    "Remission and suspension",
                    "Records",
                    "Revenue Court procedure",
                    "Succession"
                ],

                distinction: "Occupancy rights are statutory tenancy rights and should not automatically be equated with ownership."
            }
        }
    ]
},


/* =========================================================
   ENVIRONMENTAL LAWS
========================================================= */

environment: {
    name: "Environmental Laws",
    subtitle: "National and international environmental law",
    examDate: "2026-10-14",
    marks: 100,

    topics: [

        {
            id: "environment-national",
            title: "National Environmental Law",
            description: "Constitutional protection, PEPA, pollution control and environmental institutions.",

            content: {
                weight: "80 marks",

                constitutional: [
                    ["Article 9", "Right to life."],
                    ["Article 14", "Dignity of man and privacy of home."],
                    ["Article 38", "Promotion of social and economic well-being."],
                    ["Article 184(3)", "Original jurisdiction of Supreme Court in matters involving public importance and enforcement of fundamental rights."],
                    ["Article 199", "Constitutional jurisdiction of High Courts."]
                ],

                statutory: "Pakistan Environmental Protection Act, 1997",

                sections: [
                    "s2 — Definitions",
                    "ss3–4 — Environmental Protection Council",
                    "s5 — Federal Environmental Protection Agency",
                    "s12 — IEE/EIA",
                    "Environmental standards",
                    "Hazardous substances",
                    "Environmental Protection Orders",
                    "Environmental Tribunal",
                    "Environmental Magistrate",
                    "Inspection and investigation"
                ],

                concepts: [
                    ["Environment", "The statutory concept covering natural and human surroundings and their interactions."],
                    ["Pollution", "The introduction of substances, emissions or conditions that adversely affect the environment according to statutory definitions."],
                    ["Pollutant", "A substance or factor capable of causing pollution."],
                    ["NEQS", "National environmental quality standards prescribing environmental limits and requirements."]
                ],

                IEE_EIA: [
                    ["IEE", "Initial Environmental Examination for projects where the likely environmental impact requires preliminary assessment."],
                    ["EIA", "Environmental Impact Assessment for projects with potentially significant environmental impacts requiring detailed assessment."]
                ],

                principles: [
                    "Polluter Pays",
                    "Precautionary Principle",
                    "Sustainable Development",
                    "Intergenerational Equity",
                    "Environmental Justice"
                ],

                case: {
                    name: "Shehla Zia v WAPDA",
                    citation: "PLD 1994 SC 693",
                    principle: "The Supreme Court recognized that the constitutional right to life can encompass protection against environmental threats to life and health."
                }
            }
        },

        {
            id: "environment-other-national",
            title: "Other National Environmental Laws",
            description: "Forests, wildlife, waste, plastics and climate law.",

            content: {
                areas: [
                    ["Forest Act, 1927", "Reserved forests, protected forests and forest produce."],
                    ["Punjab Wildlife legislation", "Protected species, hunting, national parks, sanctuaries and game reserves."],
                    ["Public nuisance", "PPC s268 provides the statutory concept of public nuisance."],
                    ["Hospital waste", "Segregation, risk/non-risk waste, sharps and cradle-to-grave management."],
                    ["Single-use plastics", "Regulatory controls concerning specified plastic products."],
                    ["Climate Change Act, 2017", "Institutional framework concerning climate policy, mitigation and adaptation."]
                ],

                distinctions: [
                    ["Mitigation", "Reducing greenhouse gas emissions or increasing removals."],
                    ["Adaptation", "Adjusting systems and practices to actual or expected climate impacts."],
                    ["Public nuisance", "Interference affecting the public or a class of the public."],
                    ["Private nuisance", "Unreasonable interference with a person's use or enjoyment of land."]
                ]
            }
        },

        {
            id: "environment-international",
            title: "International Environmental Law",
            description: "Stockholm, Rio, UNFCCC, Kyoto, Paris, CBD and major MEAs.",

            content: {
                weight: "20 marks",

                foundations: [
                    ["Stockholm Conference 1972", "Major foundational international environmental conference; led to Stockholm Declaration and UNEP."],
                    ["Rio Earth Summit 1992", "Produced Rio Declaration, Agenda 21 and major environmental treaty developments."]
                ],

                rio: [
                    "Principle 2 — Sovereignty and responsibility/no harm",
                    "Principle 3 — Development and future generations",
                    "Principle 4 — Integration of environment and development",
                    "Principle 10 — Public participation and information",
                    "Principle 15 — Precaution",
                    "Principle 16 — Polluter Pays",
                    "Principle 17 — Environmental Impact Assessment",
                    "Principle 19 — Transboundary consultation"
                ],

                treaties: [
                    ["UNFCCC", "1992 climate framework; Pakistan signed in 1992 and ratified in 1994."],
                    ["Kyoto Protocol", "1997 protocol to the UNFCCC; entered into force in 2005."],
                    ["Paris Agreement", "2015 climate agreement; entered into force in 2016."],
                    ["CBD", "Convention on Biological Diversity; conservation, sustainable use and fair benefit sharing."],
                    ["CITES", "Controls international trade in listed wildlife species."],
                    ["Ramsar Convention", "Wetlands of international importance."],
                    ["Montreal Protocol", "Protection of the ozone layer."],
                    ["Basel Convention", "Transboundary movement and disposal of hazardous wastes."],
                    ["Rotterdam Convention", "Prior informed consent for certain hazardous chemicals and pesticides."],
                    ["Stockholm Convention", "Persistent organic pollutants."],
                    ["Minamata Convention", "Mercury."],
                    ["UNCCD", "Desertification, land degradation and drought."],
                    ["CMS", "Migratory species."],
                    ["UNCLOS", "International legal framework for oceans and marine areas."]
                ]
            }
        }
    ]
},


/* =========================================================
   CYBER LAWS
========================================================= */

cyber: {
    name: "Cyber Laws",
    subtitle: "PECA 2016, cyber offences, investigation and electronic evidence",
    examDate: "2026-10-16",
    marks: 100,

    topics: [

        {
            id: "cyber-foundations",
            title: "PECA Foundations",
            description: "Prevention of Electronic Crimes Act, 2016 and the 2025 amendment.",

            content: {
                statutory: "Prevention of Electronic Crimes Act, 2016, as amended in 2025",

                amendment: "The Prevention of Electronic Crimes (Amendment) Act, 2025 came into force on 29 January 2025 and substantially changed the institutional and online-content framework.",

                concepts: [
                    ["Information system", "A system for creating, processing, storing or communicating data through electronic or similar means."],
                    ["Data", "Information represented in a form capable of being processed by an information system."],
                    ["Access to data", "Obtaining, viewing, copying or otherwise reaching data through an information system."],
                    ["Access to information system", "Obtaining entry into an information system or part of it."],
                    ["Aspersion", "A statutory concept inserted by the 2025 amendment concerning harmful allegations/remarks under the amended framework."]
                ],

                application: "PECA applies throughout Pakistan and can apply to specified conduct outside Pakistan where the statutory territorial connection with Pakistan exists.",

                agency: "The National Cyber Crime Investigation Agency (NCCIA) is the current investigation agency under the amended PECA framework.",

                categories: [
                    "Unauthorized access",
                    "Unauthorized copying/transmission",
                    "Interference",
                    "Critical infrastructure offences",
                    "Cyber terrorism",
                    "Electronic forgery",
                    "Electronic fraud",
                    "Identity offences",
                    "Unauthorized interception",
                    "Cyberstalking",
                    "Cyberbullying",
                    "Child-related offences",
                    "Spamming",
                    "Spoofing",
                    "False/fake information"
                ]
            }
        },

        {
            id: "cyber-offences-3-19",
            title: "PECA Sections 3–19",
            description: "Core cyber offences and critical infrastructure.",

            content: {
                sections: [
                    ["s3", "Unauthorized access", "Dishonest intention + unauthorized access.", "Up to 3 months or Rs 50,000 or both."],
                    ["s4", "Unauthorized copying/transmission", "Dishonest intention + unauthorized copying/transmission.", "Up to 6 months or Rs 100,000 or both."],
                    ["s5", "Interference", "Dishonest interference with system/data.", "Up to 2 years or Rs 500,000 or both."],
                    ["s6", "Critical infrastructure access", "Unauthorized access to critical infrastructure.", "Up to 3 years or Rs 1 million or both."],
                    ["s7", "Critical infrastructure data", "Unauthorized copying/transmission of critical infrastructure data.", "Up to 5 years or Rs 5 million or both."],
                    ["s8", "Critical infrastructure interference", "Interference with critical infrastructure.", "Up to 7 years or Rs 10 million or both."],
                    ["s9", "Glorification", "Glorification of an offence under statutory conditions.", "Up to 7 years or Rs 10 million or both."],
                    ["s10", "Cyber terrorism", "Specified conduct combined with terrorist purposes.", "Up to 14 years and Rs 50 million or both."],
                    ["s11", "Hate speech", "Interfaith, sectarian or racial hatred under statutory conditions.", "Up to 7 years/fine/both."],
                    ["s12", "Recruitment/funding/planning terrorism", "Electronic recruitment, funding or planning for terrorism.", "Up to 7 years/fine/both."],
                    ["s13", "Electronic forgery", "Creation/use of electronic forgery.", "Ordinary and critical infrastructure penalties differ."],
                    ["s14", "Electronic fraud", "Electronic deception causing wrongful gain/loss or harm.", "Up to 2 years or Rs 10 million or both."],
                    ["s15", "Device offences", "Making/obtaining/supplying devices for offences.", "Up to 6 months or Rs 50,000 or both."],
                    ["s16", "Identity information", "Unauthorized use of identity information.", "Up to 3 years or Rs 5 million or both."],
                    ["s17", "Unauthorized SIM", "Unauthorized issuance of SIM.", "Up to 3 years or Rs 500,000 or both."],
                    ["s18", "Device identifier", "Tampering with unique device identifier.", "Up to 3 years or Rs 1 million or both."],
                    ["s19", "Unauthorized interception", "Unauthorized interception of information.", "Up to 2 years or Rs 500,000 or both."]
                ],

                memory: "3–5 ORDINARY → 6–8 CRITICAL → 9–12 TERROR → 13–16 DIGITAL CRIME → 17–19 TELECOM"
            }
        },

        {
            id: "cyber-offences-20-28",
            title: "PECA Sections 20–28",
            description: "Dignity, modesty, children, stalking, spam, spoofing and false information.",

            content: {
                sections: [
                    ["s20", "Offences against dignity", "False information intentionally/publicly transmitted with statutory harm requirements.", "Up to 3 years or Rs 1 million or both."],
                    ["s21", "Offences against modesty", "Specified sexual imagery, intimidation, inducement or related conduct.", "Up to 5 years/Rs 5 million; enhanced child penalties."],
                    ["s22", "Child pornography", "Producing, distributing, transmitting, procuring or possessing prohibited child sexual material.", "14 years extendable to 20 + minimum Rs 1 million."],
                    ["s22A", "Grooming/solicitation", "Creating trust or taking steps toward sexual exploitation of a minor.", "5–10 years + Rs 500,000–10 million."],
                    ["s22B", "Commercial sexual exploitation", "Electronic facilitation of child prostitution/sex tourism.", "14–20 years + minimum Rs 1 million."],
                    ["s22C", "Kidnapping/trafficking", "Using information systems for specified exploitation of minors.", "14–20 years + minimum Rs 1 million."],
                    ["s23", "Malicious code", "Unauthorized harmful code causing specified damage/loss.", "Up to 2 years or Rs 1 million or both."],
                    ["s24", "Cyberstalking", "Repeated unwanted contact, monitoring, spying or non-consensual imagery with statutory intent.", "Up to 3 years/Rs 1 million; enhanced minor victim penalty."],
                    ["s24A", "Cyberbullying", "Electronic targeting/harassment of a child under the statutory provision.", "1–5 years + Rs 100,000–500,000."],
                    ["s25", "Spamming", "Harmful, fraudulent, misleading, illegal or unsolicited information under statutory conditions.", "Penalties depend on category and repetition."],
                    ["s26", "Spoofing", "Counterfeit source intended to be believed authentic.", "Up to 3 years or Rs 500,000."],
                    ["s26A", "False/fake information", "Information known or reasonably believed false/fake likely to create public fear, panic, disorder or unrest.", "Up to 3 years or Rs 2 million."],
                    ["s27", "Legal recognition", "Electronic form does not prevent legal recognition."],
                    ["s28", "Other laws", "PPC applies to PECA offences to the extent not inconsistent."]
                ],

                distinctions: [
                    ["s20", "s26A", "s20 focuses on specified harm to dignity/reputation/privacy of a natural person; s26A concerns false/fake information likely to create public fear, panic, disorder or unrest."],
                    ["s21", "s22", "s21 concerns specified modesty-related conduct; s22 specifically addresses child sexual material."],
                    ["Spoofing", "Phishing", "Spoofing concerns falsifying identity/source; phishing commonly uses deception to obtain information."]
                ]
            }
        },

        {
            id: "cyber-procedure",
            title: "PECA Sections 29–41",
            description: "NCCIA, investigation, preservation, warrants, seizure and forensics.",

            content: {
                sections: [
                    ["s29", "NCCIA", "Current cybercrime investigation agency and institutional framework."],
                    ["s30", "Investigation", "Only authorized officers investigate PECA offences; JIT framework may apply."],
                    ["s30A", "Remand", "24-hour production; up to 14 days at a time; total statutory limit of 30 days."],
                    ["s30B", "Victim/witness protection", "Security, identity protection, remote testimony and related support."],
                    ["s30C", "In-camera trials", "Special protection for trials involving minors."],
                    ["s30D", "Child sexual content", "Referral for blocking/removal in specified circumstances."],
                    ["s31", "Preservation", "Preservation of specified data where risk of loss/modification exists; notice may preserve up to 90 days."],
                    ["s32", "Traffic data", "Service providers retain specified traffic data for at least one year or notified period, subject to statutory process."],
                    ["s33", "Search and seizure", "Court warrant based on reasonable grounds; emergency cyber terrorism provision exists."],
                    ["s34", "Content data", "Court may order access to stored content data relevant to a PECA offence."],
                    ["s35", "Officer powers", "Inspection, copying, technical assistance, decryption and integrity safeguards."],
                    ["s36", "Seized data", "Inventory, copying and forensic image procedures."],
                    ["s37", "Unlawful online content", "Authority's statutory removal/blocking framework and review/appeal process."],
                    ["s38", "Service provider liability", "Specific actual knowledge and willful participation requirements; no general proactive monitoring obligation."],
                    ["s39", "Real-time collection", "Court-authorized real-time collection for specific criminal investigation, normally limited to necessary duration."],
                    ["s40", "Forensic laboratory", "Independent/designated forensic laboratory framework."],
                    ["s41", "Confidentiality", "Unauthorized disclosure of personal information obtained through lawful access can constitute an offence."]
                ],

                memory: "29 AGENCY → 30 INVESTIGATE → 31 PRESERVE → 32 TRAFFIC → 33 SEARCH → 34 CONTENT → 35 POWERS → 36 EVIDENCE → 37 BLOCK → 39 REAL-TIME → 40 FORENSICS → 41 CONFIDENTIALITY"
            }
        },

        {
            id: "cyber-trial",
            title: "PECA Sections 42–55",
            description: "International cooperation, classification, compensation, appeals and prevention.",

            content: {
                sections: [
                    ["s42", "International cooperation", "Foreign cooperation, evidence preservation and mutual assistance."],
                    ["s43", "Classification", "Cognizable, bailable and compoundable status under the amended framework."],
                    ["s43A", "Child cybercrime complaints", "Complaint framework; current numbering should be read with the amended text."],
                    ["s44", "Trial", "Designated judicial officers and procedural safeguards."],
                    ["s45", "Compensation", "Court may order compensation in addition to punishment."],
                    ["s45A", "Victim support", "Government support mechanism."],
                    ["s46", "Expert opinion", "Amicus/expert assistance."],
                    ["s47", "Appeal", "Appeals within the statutory period to the appropriate appellate court."],
                    ["s48", "Prevention", "Government/Authority directives for prevention."],
                    ["s49", "CERTs", "Cyber emergency response framework."],
                    ["s50", "Relation with other laws", "PECA works with PPC, CrPC and Qanun-e-Shahadat and prevails over inconsistent laws subject to statutory wording."],
                    ["s50A", "Transitory framework", "Legacy agencies/functions pending establishment of new institutions."],
                    ["ss51–55", "Rules and savings", "Rule-making, regulations, reports, amendments and savings."]
                ]
            }
        },

        {
            id: "cyber-evidence",
            title: "Electronic Evidence & Case Law",
            description: "Authenticity, chain of custody, CDR, screenshots, video and constitutional issues.",

            content: {
                evidence: [
                    ["Authenticity", "Proof that electronic evidence is what it is claimed to be."],
                    ["Integrity", "Confidence that evidence has not been altered or tampered with."],
                    ["Chain of custody", "Documented history of collection, handling, storage, transfer and examination."],
                    ["Digital forensics", "Scientific collection, preservation, examination and interpretation of electronic evidence."],
                    ["Hash value", "A digital fingerprint used to help demonstrate that a digital file remains unchanged."]
                ],

                constitutional: [
                    ["Article 9", "Right to life."],
                    ["Article 10A", "Fair trial and due process."],
                    ["Article 14", "Dignity and privacy."],
                    ["Article 19", "Freedom of speech."],
                    ["Article 19A", "Right to information."]
                ],

                cases: [
                    {
                        name: "Ishtiaq Ahmed Mirza v Federation of Pakistan",
                        citation: "PLD 2019 SC 675",
                        facts: "Dispute concerning electronic audio/video evidence.",
                        issue: "Whether electronic recordings could safely be relied upon without adequate proof of authenticity.",
                        decision: "The Court emphasized proper proof and scrutiny of genuineness and tampering.",
                        principle: "Electronic evidence requires reliable proof of authenticity and integrity."
                    },
                    {
                        name: "Mian Khalid Perviz v The State",
                        citation: "2021 SCMR 522",
                        facts: "Case involving reliance upon call detail records.",
                        issue: "Whether CDR alone sufficiently established the relevant factual connection.",
                        decision: "The Court emphasized the need for adequate supporting linkage.",
                        principle: "A CDR does not automatically prove who used a phone or establish the entire factual chain."
                    },
                    {
                        name: "Sheraz Khan v The State",
                        citation: "2021 LHC 3627",
                        facts: "Ordinary criminal conduct involving technological means.",
                        issue: "Whether use of technology automatically converted the conduct into a PECA offence.",
                        decision: "The statutory ingredients of a specific PECA offence must be identified.",
                        principle: "Technology is not itself the offence; the statutory ingredients must be satisfied."
                    },
                    {
                        name: "Muhammad Ashfaq Jutt v Federation of Pakistan",
                        citation: "W.P. No.3028/2020, Islamabad High Court",
                        facts: "Constitutional challenge involving online content regulation.",
                        issue: "Constitutional questions around blocking powers and expression.",
                        decision: "The proceedings raised issues concerning proportionality, expression and institutional powers.",
                        principle: "Online-content regulation must be examined within constitutional rights and statutory safeguards."
                    }
                ],

                memory: "VIDEO = AUTHENTICATE | CDR = LINK | TECHNOLOGY ≠ AUTOMATIC PECA | ONLINE BLOCKING = CONSTITUTION"
            }
        }
    ]
},


/* =========================================================
   CIVIL LAW I
========================================================= */

civil: {
    name: "Civil Law I",
    subtitle: "CPC 1908, Orders and Limitation Act 1908",
    examDate: "2026-10-20",
    marks: 100,

    topics: [

        {
            id: "cpc-jurisdiction",
            title: "CPC Sections 9–14",
            description: "Civil jurisdiction, res sub judice, res judicata and foreign judgments.",

            content: {
                statutory: "Code of Civil Procedure, 1908",

                sections: [
                    ["s9", "Civil jurisdiction", "Civil courts have jurisdiction over suits of a civil nature unless jurisdiction is expressly or impliedly barred."],
                    ["s10", "Res sub judice", "Trial of a later suit may be stayed where the statutory conditions are satisfied because the same matter is already pending."],
                    ["s11", "Res judicata", "A matter directly and substantially in issue, finally decided between the same parties by a competent Court cannot ordinarily be re-litigated."],
                    ["s12", "Bar to further suit", "Statutory restrictions on institution of further suits in specified circumstances."],
                    ["s13", "Foreign judgment", "A foreign judgment may be conclusive subject to statutory exceptions."],
                    ["s14", "Presumption", "Certified foreign judgment carries statutory presumption of competent jurisdiction unless the contrary appears."]
                ],

                resJudicata: {
                    ordinary: "The matter must have been directly and substantially in issue, between the same parties or persons claiming under them, litigating under the same title, before a competent Court and finally decided.",
                    constructive: "Explanation IV treats a matter that might and ought to have been made a ground of attack or defence as having been in issue for purposes of res judicata."
                },

                foreignExceptions: [
                    "Lack of competent jurisdiction",
                    "Not given on merits",
                    "Incorrect view of international law or refusal to recognize applicable Pakistani law",
                    "Proceedings contrary to natural justice",
                    "Judgment obtained by fraud",
                    "Claim founded on breach of Pakistani law"
                ],

                memory: "9 HEAR → 10 WAIT → 11 STOP → 12 BAR → 13 TEST → 14 PRESUME"
            }
        },

        {
            id: "cpc-transfer-institution",
            title: "CPC Sections 22–32",
            description: "Transfer, institution, summons, discovery and witnesses.",

            content: {
                sections: [
                    ["s22", "Transfer", "Transfer of suits capable of being instituted in more than one competent Court."],
                    ["s23", "Forum", "Where applications under s22 are made."],
                    ["s24", "General transfer power", "High Court/District Court may transfer or withdraw suits and proceedings subject to law."],
                    ["s24A", "Safeguards", "Notice and hearing requirements in relevant transfer/withdrawal situations."],
                    ["s26", "Institution", "Suit instituted through presentation of plaint or prescribed method."],
                    ["s27", "Summons", "Summons to defendant."],
                    ["s28", "Service outside Pakistan", "Service according to statutory framework."],
                    ["s29", "Foreign summons", "Specified arrangements for foreign summons."],
                    ["s30", "Discovery", "Discovery, interrogatories, inspection, admissions and production."],
                    ["s31", "Witness summons", "Summons to witnesses."],
                    ["s32", "Witness default", "Consequences for failure to comply."]
                ],

                concepts: [
                    ["Cause of action", "The bundle of essential facts giving a person the basis for seeking judicial relief."],
                    ["Plaint", "The pleading by which a civil suit is instituted."],
                    ["Discovery", "Disclosure of relevant information or documents."],
                    ["Inspection", "Examination of documents or material after disclosure where permitted."],
                    ["Interrogatories", "Formal written questions used to obtain relevant information subject to procedural rules."]
                ]
            }
        },

        {
            id: "cpc-costs",
            title: "CPC Sections 34–35A",
            description: "Interest and costs.",

            content: {
                sections: [
                    ["s34", "Interest", "Interest on decrees for payment of money according to statutory discretion and applicable law."],
                    ["s35", "Costs", "Costs are subject to the Court's statutory powers and applicable rules."],
                    ["s35A", "Adjournment costs", "Special provisions concerning costs resulting from adjournment."]
                ],

                distinction: "Interest concerns the monetary addition to a decree; costs concern litigation expenses and procedural consequences."
            }
        },

        {
            id: "cpc-execution",
            title: "CPC Sections 36–74",
            description: "Execution of decrees and orders.",

            content: {
                sections: [
                    ["s36", "Application to orders", "Execution provisions apply to orders where applicable."],
                    ["s37", "Court which passed decree", "Defines the relevant Court for execution."],
                    ["s38", "Executing Court", "Court by which decree may be executed."],
                    ["s39", "Transfer", "Transfer of decree for execution."],
                    ["s40", "Other Province", "Transfer framework."],
                    ["s41", "Certification", "Result of execution proceedings."],
                    ["s42", "Transferred decree", "Powers of executing Court."],
                    ["s44A", "Reciprocating territories", "Execution of specified foreign decrees."],
                    ["s46", "Precepts", "Precepts for attachment in specified circumstances."],
                    ["s47", "Execution questions", "Questions concerning execution, discharge or satisfaction are determined by the executing Court."],
                    ["s48", "Bar", "Execution barred in specified cases."],
                    ["s49", "Transferee", "Rights/obligations of transferee."],
                    ["s50", "Legal representative", "Execution against legal representative subject to statutory conditions."],
                    ["s51", "Modes", "Delivery, attachment/sale, arrest/detention where permitted, receiver and other modes."],
                    ["s52", "Legal representative", "Enforcement against estate/representative in specified circumstances."],
                    ["s53", "Ancestral property", "Liability of ancestral property in specified circumstances."],
                    ["s54", "Partition", "Partition/separation of share."],
                    ["s55", "Arrest", "Arrest and detention in execution subject to law."],
                    ["s56", "Women", "Prohibition concerning arrest/detention of women in money decrees."],
                    ["s58", "Release", "Release from detention."],
                    ["s60", "Attachment", "Property liable to attachment and sale subject to exemptions."],
                    ["s61", "Agricultural produce", "Partial exemption."],
                    ["s62", "Dwelling-house", "Seizure safeguards."],
                    ["s63", "Multiple Courts", "Property attached in execution of decrees of several Courts."],
                    ["s64", "Alienation after attachment", "Private alienation after attachment is generally ineffective against claims enforceable under the attachment."],
                    ["s65", "Purchaser's title", "Title acquired through Court sale."],
                    ["s73", "Rateable distribution", "Distribution among decree-holders subject to statutory conditions."],
                    ["s74", "Resistance", "Resistance or obstruction to execution."]
                ],

                memory: "36 APPLY → 37 DEFINE → 38 EXECUTE → 39 TRANSFER → 47 QUESTIONS → 51 MODES → 60 ATTACH → 73 DISTRIBUTE"
            }
        },

        {
            id: "cpc-special",
            title: "CPC Sections 75–95",
            description: "Commissions, Government suits, ADR, nuisance, charities and supplemental proceedings.",

            content: {
                sections: [
                    ["s75", "Commissions", "Examination, local investigation, accounts and partition."],
                    ["s76", "Commission elsewhere", "Commission to another Court."],
                    ["s77", "Letter of request", "Evidence from outside Pakistan."],
                    ["s78", "Foreign commission", "Commission from foreign Court."],
                    ["s79", "Government", "Suits by or against Federal/Provincial Government."],
                    ["s80", "Notice", "Two months' written notice before suit against Government/public officer under the statutory conditions."],
                    ["s81", "Public officer", "Exemptions from arrest/personal appearance in specified circumstances."],
                    ["s82", "Execution", "Special requirements before execution against Government/public officer."],
                    ["s83", "Aliens", "Aliens may sue subject to statutory conditions."],
                    ["s84", "Foreign States", "Foreign States may sue in specified circumstances."],
                    ["s86A", "Diplomatic agents", "Special statutory protection."],
                    ["s88", "Interpleader", "Stakeholder seeks determination between rival claimants."],
                    ["s89A", "ADR", "Alternative dispute resolution through mediation/conciliation with statutory consent framework."],
                    ["s90", "Special case", "Parties may state a case for Court opinion."],
                    ["s91", "Public nuisance", "Special standing to sue concerning public nuisance."],
                    ["s92", "Public charities", "Relief concerning breach/administration of public charitable or religious trusts."],
                    ["s93", "Advocate General powers", "Specified delegation."],
                    ["s94", "Supplemental proceedings", "Arrest/security, attachment, injunction, receiver and interlocutory measures."],
                    ["s95", "Compensation", "Compensation for arrest, attachment or injunction obtained without sufficient grounds, subject to statutory limit."]
                ],

                memory: "COMMISSIONS → GOVERNMENT → INTERPLEADER → ADR → NUISANCE → CHARITY → SUPPLEMENT → COMPENSATION"
            }
        },

        {
            id: "cpc-appeals",
            title: "CPC Sections 96–115",
            description: "First appeal, second appeal, review, revision and reference.",

            content: {
                sections: [
                    ["s96", "First appeal", "Appeal from original decree subject to statutory exceptions."],
                    ["s97", "Preliminary decree", "Unchallenged preliminary decree cannot ordinarily be disputed later in appeal from final decree."],
                    ["s98", "Multiple judges", "Decision according to majority/statutory mechanism."],
                    ["s99", "Harmless error", "Technical error not affecting merits or jurisdiction does not ordinarily justify reversal."],
                    ["s100", "Second appeal", "High Court second appeal on specified substantial questions of law/procedural grounds."],
                    ["s101", "Second appeal limitation", "No second appeal except on s100 grounds."],
                    ["s102", "Restriction", "Second appeal restricted in specified classes/values under current law."],
                    ["s103", "Facts", "Limited factual determination by High Court in specified circumstances."],
                    ["s104", "Appealable orders", "Specified orders are appealable."],
                    ["s105", "Other orders", "Errors in non-appealable orders may be raised in appropriate appeal against decree."],
                    ["s106", "Forum", "Appeal from order goes to the Court to which appeal from decree would lie."],
                    ["s107", "Appellate powers", "Final determination, remand, framing issues and additional evidence."],
                    ["s108", "Procedure", "Procedure in appeals from original decrees applies where appropriate."],
                    ["s109", "Supreme Court", "Statutory framework for specified appeals to Supreme Court."],
                    ["s113", "Reference", "Subordinate Court may refer a question to High Court."],
                    ["s114", "Review", "Same Court reconsideration on statutory grounds."],
                    ["s115", "Revision", "High Court/District Court supervisory jurisdiction where no appeal lies and jurisdictional defects exist."]
                ],

                distinctions: [
                    ["Appeal", "Review", "Appeal goes to a higher Court; review is considered by the same Court."],
                    ["Review", "Revision", "Review addresses limited statutory grounds; revision supervises jurisdictional defects where no appeal lies."],
                    ["Reference", "Revision", "Reference asks the High Court for an opinion; revision involves supervisory correction."]
                ],

                memory: "96 FIRST → 100 SECOND → 104 ORDERS → 107 POWERS → 113 REFERENCE → 114 REVIEW → 115 REVISION"
            }
        },

        {
            id: "cpc-orders",
            title: "Important CPC Orders",
            description: "Orders IV, V, XXI, XXVI, XLI, XLII, XLIII and XLVII.",

            content: {
                orders: [
                    ["Order IV", "Institution of suits."],
                    ["Order V", "Issue and service of summons."],
                    ["Order XXI", "Execution of decrees and orders."],
                    ["Order XXVI", "Commissions."],
                    ["Order XLI", "Appeals from original decrees."],
                    ["Order XLII", "Appeals from appellate decrees."],
                    ["Order XLIII", "Appeals from orders."],
                    ["Order XLVII", "Review."]
                ],

                order26: [
                    ["Rule 1", "Examination of witnesses unable to attend Court."],
                    ["Rule 9", "Local investigation."],
                    ["Rules 11–12", "Accounts."],
                    ["Rule 13", "Partition."],
                    ["Rules 19–22", "Foreign evidence/commissions."]
                ],

                order41: [
                    ["Rule 5", "Stay of execution."],
                    ["Rule 11", "Preliminary dismissal."],
                    ["Rule 22", "Cross-objections."],
                    ["Rules 23/23A", "Remand."],
                    ["Rule 25", "Frame and refer issues."],
                    ["Rule 27", "Additional evidence."],
                    ["Rule 31", "Appellate judgment."],
                    ["Rule 33", "Broad appellate powers."]
                ],

                order47: [
                    ["New evidence", "Important matter/evidence discovered despite due diligence."],
                    ["Error apparent", "Self-evident error on the face of the record."],
                    ["Sufficient reason", "Other legally sufficient ground."]
                ]
            }
        },

        {
            id: "cpc-132-151",
            title: "CPC Sections 132–151",
            description: "Miscellaneous procedural provisions and inherent powers.",

            content: {
                sections: [
                    ["s132", "Women", "Exemption from personal appearance in specified circumstances."],
                    ["s133", "Other exemptions", "Specified personal exemptions."],
                    ["s134", "Arrest", "Arrest other than execution."],
                    ["s135", "Protection", "Exemption from arrest under civil process in specified cases."],
                    ["s135A", "Legislators", "Special protection from civil arrest/detention."],
                    ["s136", "Outside district", "Procedure concerning persons/property outside district."],
                    ["s137", "Language", "Language of subordinate Courts."],
                    ["s138", "English", "High Court power concerning evidence in English."],
                    ["s139", "Affidavit", "Who may administer oath."],
                    ["s140", "Assessors", "Assessors in specified causes."],
                    ["s141", "Miscellaneous proceedings", "Procedure for miscellaneous proceedings."],
                    ["s142", "Writing", "Orders/notices in writing."],
                    ["s143", "Postage", "Postage."],
                    ["s144", "Restitution", "Restoring parties to the position they should occupy after reversal/variation/set-aside of decree."],
                    ["s145", "Surety", "Enforcement of surety liability."],
                    ["s146", "Representative", "Proceedings by or against persons claiming under another."],
                    ["s147", "Disability", "Consent/agreement involving persons under disability."],
                    ["s148", "Time", "Court may enlarge time fixed/granted by it subject to law."],
                    ["s149", "Court fee", "Deficiency in court fee may be made good with statutory effect."],
                    ["s150", "Transfer of business", "Receiving Court may continue proceedings."],
                    ["s151", "Inherent powers", "Power to make orders necessary for ends of justice or preventing abuse of process."]
                ],

                memory: "144 RESTORE → 148 TIME → 149 FEE → 151 JUSTICE"
            }
        },

        {
            id: "limitation",
            title: "Limitation Act, 1908",
            description: "Limitation periods, computation, disability, acknowledgment and extinguishment.",

            content: {
                statutory: "Limitation Act, 1908",

                purpose: "Limitation law promotes finality, certainty and diligence by prescribing periods within which legal proceedings must be instituted.",

                sections: [
                    ["s3", "Bar of limitation", "A time-barred suit, appeal or application is dismissed subject to the Act even if limitation is not pleaded."],
                    ["s4", "Court closed", "If the prescribed period expires when the Court is closed, filing may occur on reopening."],
                    ["s5", "Extension", "Sufficient cause may extend certain appeals/applications; it is not a universal extension for every suit."],
                    ["s6", "Disability", "Legal disability can affect computation subject to statutory conditions."],
                    ["s7", "Several persons", "Special disability rule for joint plaintiffs/applicants."],
                    ["s8", "Limits", "Limitations upon disability provisions."],
                    ["s9", "Continuous running", "Once time has begun to run, later disability generally does not stop it subject to statutory exceptions."],
                    ["s10", "Trustees", "Special rule concerning suits against express trustees."],
                    ["s12", "Exclusion", "Exclusion of specified time in computation, including relevant copying time."],
                    ["s14", "Good faith proceeding", "Exclusion of time spent diligently and in good faith before a Court unable to entertain due to jurisdictional or similar defect."],
                    ["s15", "Other exclusions", "Specified periods involving stay, injunction, notice and statutory situations."],
                    ["s17", "Fraud/mistake", "Time can run from discovery in circumstances recognized by the section."],
                    ["s18", "Acknowledgment", "Written acknowledgment before expiry can create a fresh period if statutory requirements are fulfilled."],
                    ["s19", "Payment", "Payment on account of debt/interest can create fresh limitation subject to statutory requirements."],
                    ["s20", "Persons", "Who may acknowledge or make payment and the legal effect."],
                    ["s21", "New parties", "Addition/substitution of plaintiff or defendant and timing."],
                    ["s22", "Continuing wrong", "Fresh limitation may arise while a continuing wrong continues."],
                    ["s25", "Easement", "Long uninterrupted enjoyment can create an easement under statutory conditions."],
                    ["s27", "Extinguishment", "Expiry of limitation for possession can extinguish the right to property in circumstances."]
                ],

                formula: "WHAT CLAIM → WHICH ARTICLE → PERIOD → WHEN STARTED → EXCLUSIONS → EXTENSION → FINAL DATE",

                distinctions: [
                    ["s4", "s5", "s4 concerns Court closure; s5 concerns sufficient cause for specified appeals/applications."],
                    ["s18", "s19", "s18 concerns written acknowledgment; s19 concerns qualifying payment."],
                    ["Limitation", "Res judicata", "Limitation concerns time; res judicata concerns finality of a matter already adjudicated."]
                ]
            }
        }
    ]
}

};


/* =========================================================
   CASE BANK
========================================================= */

const CASE_BANK = [

    {
        subject: "Equity",
        name: "Salomon v Salomon",
        citation: "Corporate Law",
        principle: "Separate legal personality of an incorporated company.",
        facts: "Mr Salomon incorporated a company and transferred his business to it.",
        issue: "Whether the company was legally separate from Mr Salomon.",
        decision: "The company was treated as a separate legal person.",
        exam: "Use when explaining corporate personality."
    },

    {
        subject: "Environmental Laws",
        name: "Shehla Zia v WAPDA",
        citation: "PLD 1994 SC 693",
        principle: "Environmental protection can fall within the constitutional protection of life.",
        facts: "Residents challenged an electricity grid station on environmental and health grounds.",
        issue: "Whether environmental risk could implicate fundamental rights.",
        decision: "The Court recognized environmental protection within the constitutional understanding of life.",
        exam: "Use for Article 9 and environmental rights."
    },

    {
        subject: "Cyber Laws",
        name: "Ishtiaq Ahmed Mirza v Federation of Pakistan",
        citation: "PLD 2019 SC 675",
        principle: "Electronic audio/video requires reliable authentication and scrutiny.",
        facts: "Electronic recording evidence was relied upon in litigation.",
        issue: "Whether electronic recording could be relied upon without proper proof.",
        decision: "The Court emphasized genuineness and protection against tampering.",
        exam: "Use for electronic evidence."
    },

    {
        subject: "Cyber Laws",
        name: "Mian Khalid Perviz v The State",
        citation: "2021 SCMR 522",
        principle: "CDR evidence requires adequate linkage and corroboration.",
        facts: "Call detail records were relied upon in a criminal case.",
        issue: "Whether CDR alone established the relevant connection.",
        decision: "The Court required adequate evidentiary linkage.",
        exam: "Use for CDR and digital evidence."
    },

    {
        subject: "Cyber Laws",
        name: "Sheraz Khan v The State",
        citation: "2021 LHC 3627",
        principle: "Technology does not automatically turn every offence into a PECA offence.",
        facts: "Technology was used in conduct otherwise governed by ordinary criminal law.",
        issue: "Whether PECA automatically applied.",
        decision: "The specific statutory ingredients must be established.",
        exam: "Use for PECA jurisdiction and statutory ingredients."
    },

    {
        subject: "Registration Law",
        name: "Ghulam Rasool v Akbar Ali",
        citation: "2011 SCMR 794",
        principle: "Section 47 concerns the operation of registered documents.",
        facts: "Dispute concerned the effective date of a registered document.",
        issue: "When does the registered document operate?",
        decision: "The statutory operation date must be distinguished from the registration date.",
        exam: "Use with Registration Act s47."
    },

    {
        subject: "Registration Law",
        name: "Mst. Rasheeda Begum v Muhammad Yousaf",
        citation: "2002 SCMR 1089",
        principle: "Agreement to sell does not itself transfer ownership.",
        facts: "Dispute concerned legal effect of agreement to sell.",
        issue: "Whether agreement created title.",
        decision: "Agreement to sell is distinct from completed sale.",
        exam: "Use with TPA s54."
    },

    {
        subject: "Partnership",
        name: "Cox v Hickman",
        citation: "Partnership Law",
        principle: "Profit sharing alone is not necessarily conclusive of partnership; real relationship and agency matter.",
        facts: "Creditors received profits under an arrangement.",
        issue: "Whether receiving profits automatically made them partners.",
        decision: "The relationship and agency were important.",
        exam: "Use for Partnership Act s6."
    },

    {
        subject: "Companies",
        name: "Foss v Harbottle",
        citation: "Corporate Law",
        principle: "The company is ordinarily the proper claimant for wrongs done to it.",
        facts: "Shareholders attempted to sue directors over alleged wrongs to the company.",
        issue: "Who should bring proceedings for a wrong done to the company?",
        decision: "The proper plaintiff is ordinarily the company, subject to recognized exceptions.",
        exam: "Use for corporate litigation and minority protection."
    }

];


/* =========================================================
   QUESTIONS
========================================================= */

const QUESTIONS = [

    {
        id: "EQUITY-001",
        subject: "equity",
        topic: "equity-foundations",
        type: "mcq",
        question: "Why did Equity historically develop?",
        options: [
            "Because Common Law had no courts",
            "Because Common Law remedies could be inadequate in some cases",
            "Because Parliament abolished Common Law",
            "Because Equity replaced criminal law"
        ],
        answer: 1,
        explanation: "Equity developed historically to address situations where rigid Common Law rules or remedies produced inadequate results."
    },

    {
        id: "EQUITY-002",
        subject: "equity",
        topic: "equity-maxims",
        type: "mcq",
        question: "Which maxim concerns improper conduct by the claimant?",
        options: [
            "Equity acts in personam",
            "Equity follows the law",
            "He who comes to equity must come with clean hands",
            "Equality is equity"
        ],
        answer: 2,
        explanation: "The clean hands maxim focuses on the claimant's own improper conduct connected with the equitable relief sought."
    },

    {
        id: "TPA-001",
        subject: "transfer",
        topic: "tpa-foundations",
        type: "mcq",
        question: "Which section defines transfer of property?",
        options: [
            "Section 5",
            "Section 10",
            "Section 41",
            "Section 53"
        ],
        answer: 0,
        explanation: "Section 5 of the Transfer of Property Act deals with transfer of property."
    },

    {
        id: "TPA-002",
        subject: "transfer",
        topic: "mortgage",
        type: "mcq",
        question: "Which provision is associated with the right of redemption?",
        options: [
            "Section 41",
            "Section 52",
            "Section 60",
            "Section 105"
        ],
        answer: 2,
        explanation: "Section 60 is the principal statutory provision concerning the mortgagor's right of redemption."
    },

    {
        id: "MERC-001",
        subject: "mercantile",
        topic: "companies",
        type: "mcq",
        question: "What is the central principle established by Salomon?",
        options: [
            "Shareholders own company assets personally",
            "A company has separate legal personality",
            "Directors cannot be employees",
            "Companies cannot own property"
        ],
        answer: 1,
        explanation: "Salomon establishes the separate legal personality of an incorporated company."
    },

    {
        id: "MERC-002",
        subject: "mercantile",
        topic: "partnership",
        type: "mcq",
        question: "What is the central concept of partnership?",
        options: [
            "Mutual agency",
            "Limited liability",
            "Separate personality",
            "Perpetual succession"
        ],
        answer: 0,
        explanation: "Mutual agency is the central principle of partnership: each partner can act for the firm within authority."
    },

    {
        id: "SPEC-001",
        subject: "special",
        topic: "plra",
        type: "mcq",
        question: "Does mutation itself normally constitute conclusive proof of title?",
        options: [
            "Yes, always",
            "No",
            "Only for companies",
            "Only for leases"
        ],
        answer: 1,
        explanation: "Mutation is principally a revenue record entry and should not automatically be treated as conclusive proof of title."
    },

    {
        id: "SPEC-002",
        subject: "special",
        topic: "preemption",
        type: "mcq",
        question: "What is Talb-i-Khusumat?",
        options: [
            "Immediate demand",
            "Formal demand",
            "Institution of the pre-emption suit",
            "Waiver"
        ],
        answer: 2,
        explanation: "Talb-i-Khusumat is the demand associated with institution of the pre-emption suit."
    },

    {
        id: "ENV-001",
        subject: "environment",
        topic: "environment-national",
        type: "mcq",
        question: "Which constitutional provision was central in Shehla Zia v WAPDA?",
        options: [
            "Article 9",
            "Article 62",
            "Article 77",
            "Article 245"
        ],
        answer: 0,
        explanation: "Article 9 and the constitutional meaning of the right to life were central to the environmental rights analysis."
    },

    {
        id: "ENV-002",
        subject: "environment",
        topic: "environment-international",
        type: "mcq",
        question: "Which Rio Principle is associated with the Precautionary Principle?",
        options: [
            "Principle 2",
            "Principle 10",
            "Principle 15",
            "Principle 21"
        ],
        answer: 2,
        explanation: "Rio Declaration Principle 15 expresses the precautionary approach."
    },

    {
        id: "CYBER-001",
        subject: "cyber",
        topic: "cyber-offences-3-19",
        type: "mcq",
        question: "Which PECA section deals with unauthorized access?",
        options: [
            "s3",
            "s13",
            "s20",
            "s26A"
        ],
        answer: 0,
        explanation: "Section 3 deals with unauthorized access."
    },

    {
        id: "CYBER-002",
        subject: "cyber",
        topic: "cyber-offences-20-28",
        type: "mcq",
        question: "Which section addresses false/fake information likely to create public fear, panic, disorder or unrest?",
        options: [
            "s20",
            "s21",
            "s24",
            "s26A"
        ],
        answer: 3,
        explanation: "Section 26A, inserted by the 2025 amendment, addresses the specified false/fake information offence."
    },

    {
        id: "CYBER-003",
        subject: "cyber",
        topic: "cyber-evidence",
        type: "mcq",
        question: "What does chain of custody document?",
        options: [
            "Only the name of the accused",
            "The history of collection, handling, storage and transfer of evidence",
            "Only the final judgment",
            "The sentence only"
        ],
        answer: 1,
        explanation: "Chain of custody documents how evidence moved from collection through handling, storage, examination and transfer."
    },

    {
        id: "CIVIL-001",
        subject: "civil",
        topic: "cpc-jurisdiction",
        type: "mcq",
        question: "Which CPC section contains the basic rule of civil court jurisdiction?",
        options: [
            "s9",
            "s10",
            "s11",
            "s14"
        ],
        answer: 0,
        explanation: "Section 9 provides the general rule concerning jurisdiction over suits of a civil nature."
    },

    {
        id: "CIVIL-002",
        subject: "civil",
        topic: "cpc-jurisdiction",
        type: "mcq",
        question: "Res judicata is primarily concerned with:",
        options: [
            "A pending matter",
            "A matter already finally decided",
            "Court fees",
            "Summons"
        ],
        answer: 1,
        explanation: "Res judicata prevents re-litigation of a matter that has already been finally decided under the statutory conditions."
    },

    {
        id: "CIVIL-003",
        subject: "civil",
        topic: "cpc-appeals",
        type: "mcq",
        question: "Which section concerns review?",
        options: [
            "s100",
            "s104",
            "s114",
            "s115"
        ],
        answer: 2,
        explanation: "Section 114 concerns review, while section 115 concerns revision."
    },

    {
        id: "CIVIL-004",
        subject: "civil",
        topic: "cpc-132-151",
        type: "mcq",
        question: "Which section contains inherent powers of the Court?",
        options: [
            "s144",
            "s148",
            "s149",
            "s151"
        ],
        answer: 3,
        explanation: "Section 151 preserves the Court's inherent power to make orders necessary for the ends of justice or to prevent abuse of process."
    },

    {
        id: "LIMIT-001",
        subject: "civil",
        topic: "limitation",
        type: "mcq",
        question: "Under the Limitation Act, limitation generally concerns:",
        options: [
            "The prescribed period for legal proceedings",
            "Only criminal offences",
            "Only contracts",
            "Only property registration"
        ],
        answer: 0,
        explanation: "Limitation prescribes periods within which suits, appeals and applications must be instituted."
    }

];


/* =========================================================
   LOCAL STORAGE
========================================================= */

const STORAGE_KEY = "rafayLawRoomProgress";

let progress = JSON.parse(
    localStorage.getItem(STORAGE_KEY) ||
    JSON.stringify({
        completedTopics: [],
        attempted: [],
        correct: [],
        wrong: [],
        weakTopics: {},
        masteredTopics: []
    })
);


function saveProgress() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(progress)
    );
}


/* =========================================================
   STATE
========================================================= */

let state = {
    page: "dashboard",
    selectedCourse: "equity",
    selectedTopic: "equity-foundations",
    quizQuestions: [],
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: false,
    examQuestions: [],
    examAnswers: {},
    examStarted: false,
    examSeconds: 0,
    examTimer: null
};


/* =========================================================
   HELPERS
========================================================= */

function getCourse(id) {
    return COURSES[id];
}

function getTopic(courseId, topicId) {
    const course = getCourse(courseId);

    if (!course) return null;

    return course.topics.find(
        topic => topic.id === topicId
    );
}

function escapeHTML(text) {
    if (text === undefined || text === null) {
        return "";
    }

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function formatDate(dateString) {
    return new Date(
        dateString + "T00:00:00"
    ).toLocaleDateString(
        "en-GB",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );
}

function daysUntil(dateString) {
    const today = new Date();
    const exam = new Date(
        dateString + "T00:00:00"
    );

    const diff =
        exam.getTime() -
        new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
        ).getTime();

    return Math.max(
        0,
        Math.ceil(
            diff /
            (1000 * 60 * 60 * 24)
        )
    );
}

function getNextExam() {
    const today = new Date();

    return EXAMS
        .filter(
            exam =>
                new Date(
                    exam.date + "T23:59:59"
                ) >= today
        )
        .sort(
            (a, b) =>
                new Date(a.date) -
                new Date(b.date)
        )[0];
}

function totalTopics() {
    return Object.values(COURSES)
        .reduce(
            (total, course) =>
                total + course.topics.length,
            0
        );
}

function overallProgress() {
    return Math.round(
        (
            progress.completedTopics.length /
            totalTopics()
        ) * 100
    );
}

function courseProgress(courseId) {
    const course = getCourse(courseId);

    const completed =
        course.topics.filter(
            topic =>
                progress.completedTopics.includes(
                    topic.id
                )
        ).length;

    return Math.round(
        (completed / course.topics.length) * 100
    );
}

function markTopicComplete(courseId, topicId) {

    if (
        !progress.completedTopics.includes(
            topicId
        )
    ) {
        progress.completedTopics.push(topicId);
        saveProgress();
    }
}

function markTopicMastered(topicId) {

    if (
        !progress.masteredTopics.includes(
            topicId
        )
    ) {
        progress.masteredTopics.push(topicId);
        saveProgress();
    }
}

function registerQuestionAttempt(
    question,
    isCorrect
) {

    if (!progress.attempted.includes(question.id)) {
        progress.attempted.push(question.id);
    }

    if (isCorrect) {

        if (
            !progress.correct.includes(
                question.id
            )
        ) {
            progress.correct.push(
                question.id
            );
        }

        delete progress.weakTopics[
            question.topic
        ];

    } else {

        if (
            !progress.wrong.includes(
                question.id
            )
        ) {
            progress.wrong.push(
                question.id
            );
        }

        progress.weakTopics[
            question.topic
        ] =
            (progress.weakTopics[
                question.topic
            ] || 0) + 1;
    }

    saveProgress();
}


/* =========================================================
   PAGE ROUTING
========================================================= */

function navigate(page) {

    state.page = page;

    document
        .querySelectorAll(
            ".nav-btn, .mobile-nav-btn"
        )
        .forEach(btn => {

            btn.classList.toggle(
                "active",
                btn.dataset.page === page
            );
        });

    render();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {

    const next = getNextExam();

    const weakTopics =
        Object.entries(
            progress.weakTopics
        )
        .sort(
            (a, b) =>
                b[1] - a[1]
        )
        .slice(0, 5);

    const courseCards =
        Object.entries(COURSES)
        .map(
            ([id, course], index) => {

                const percent =
                    courseProgress(id);

                const exam =
                    EXAMS.find(
                        e => e.id === id
                    );

                return `
                    <div
                        class="course-card"
                        onclick="openCourse('${id}')"
                    >
                        <span class="course-number">
                            0${index + 1}
                        </span>

                        <h4>
                            ${escapeHTML(course.name)}
                        </h4>

                        <p>
                            ${escapeHTML(course.subtitle)}
                        </p>

                        <div class="course-meta">
                            <span>
                                ${exam ? formatDate(exam.date) : ""}
                            </span>

                            <strong>
                                ${percent}%
                            </strong>
                        </div>

                        <div class="progress-bar">
                            <div
                                class="progress-fill"
                                style="width:${percent}%"
                            ></div>
                        </div>
                    </div>
                `;
            }
        )
        .join("");

    const weakHTML =
        weakTopics.length
            ? weakTopics
                .map(
                    ([topicId, count]) => {

                        let topic = null;
                        let courseId = null;

                        for (
                            const [id, course]
                            of Object.entries(COURSES)
                        ) {
                            const found =
                                course.topics.find(
                                    t =>
                                        t.id === topicId
                                );

                            if (found) {
                                topic = found;
                                courseId = id;
                                break;
                            }
                        }

                        if (!topic) return "";

                        return `
                            <div
                                class="weak-item"
                                onclick="openTopic('${courseId}','${topicId}')"
                                style="cursor:pointer"
                            >
                                <strong>
                                    ${escapeHTML(topic.title)}
                                </strong>

                                <span>
                                    ${count} wrong
                                </span>
                            </div>
                        `;
                    }
                )
                .join("")
            :
                `
                    <div class="empty-state">
                        <h3>No weak areas yet.</h3>
                        <p>
                            Start practising and your
                            weak topics will appear here.
                        </p>
                    </div>
                `;

    return `
        <div class="fade-in">

            <section class="hero">

                <div>
                    <div class="eyebrow">
                        RAFAY'S LAW ROOM
                    </div>

                    <h2>
                        Seven subjects.<br>
                        One mission.
                    </h2>

                    <p>
                        Your complete LLB examination
                        command centre. Learn the law,
                        test yourself, find your weak
                        areas and walk into every paper
                        knowing exactly what you know.
                    </p>

                    <div class="hero-date">
                        Next paper:
                        ${next ? escapeHTML(next.name) : "All exams complete"}
                        ${next ? " · " + formatDate(next.date) : ""}
                    </div>
                </div>

                <div class="countdown-box">

                    <span>
                        DAYS UNTIL NEXT EXAM
                    </span>

                    <div class="countdown-number">
                        ${next ? daysUntil(next.date) : 0}
                    </div>

                    <strong>
                        ${next ? escapeHTML(next.name) : "Done"}
                    </strong>

                </div>

            </section>


            <section class="stats-grid">

                <div class="stat-card">
                    <span>OVERALL PROGRESS</span>
                    <strong>
                        ${overallProgress()}%
                    </strong>
                    <small>
                        Topics completed
                    </small>
                </div>

                <div class="stat-card">
                    <span>QUESTIONS ATTEMPTED</span>
                    <strong>
                        ${progress.attempted.length}
                    </strong>
                    <small>
                        Keep going
                    </small>
                </div>

                <div class="stat-card">
                    <span>CORRECT ANSWERS</span>
                    <strong>
                        ${progress.correct.length}
                    </strong>
                    <small>
                        Knowledge bank growing
                    </small>
                </div>

                <div class="stat-card">
                    <span>TOPICS MASTERED</span>
                    <strong>
                        ${progress.masteredTopics.length}
                    </strong>
                    <small>
                        Locked in
                    </small>
                </div>

            </section>


            <section class="section">

                <div class="section-title">
                    <div>
                        <h3>Your seven papers</h3>
                        <p>
                            Every subject, every exam date,
                            every topic.
                        </p>
                    </div>

                    <button
                        class="dark-btn"
                        onclick="navigate('learn')"
                    >
                        Start Learning
                    </button>
                </div>

                <div class="course-grid">
                    ${courseCards}
                </div>

            </section>


            <section class="two-column section">

                <div class="panel">

                    <h4>
                        What should I study?
                    </h4>

                    <div class="study-list">

                        ${getRecommendedStudy()}

                    </div>

                </div>


                <div class="panel">

                    <h4>
                        Weak areas
                    </h4>

                    <div class="weak-list">
                        ${weakHTML}
                    </div>

                </div>

            </section>

        </div>
    `;
}


function getRecommendedStudy() {

    const next = getNextExam();

    if (!next) {
        return `
            <div class="empty-state">
                All exams completed.
            </div>
        `;
    }

    const course =
        COURSES[next.id];

    if (!course) {
        return "";
    }

    const incomplete =
        course.topics.find(
            topic =>
                !progress.completedTopics.includes(
                    topic.id
                )
        );

    const topic =
        incomplete ||
        course.topics[0];

    return `
        <div
            class="study-item"
            onclick="openTopic('${next.id}','${topic.id}')"
        >
            <div class="study-icon">
                §
            </div>

            <div>
                <strong>
                    ${escapeHTML(topic.title)}
                </strong>

                <small>
                    ${escapeHTML(course.name)}
                </small>
            </div>
        </div>

        <div
            class="study-item"
            onclick="startRandomQuiz('${next.id}')"
        >
            <div class="study-icon">
                ?
            </div>

            <div>
                <strong>
                    Quick ${escapeHTML(course.name)} Quiz
                </strong>

                <small>
                    Test yourself before studying
                </small>
            </div>
        </div>

        <div
            class="study-item"
            onclick="navigate('cases')"
        >
            <div class="study-icon">
                C
            </div>

            <div>
                <strong>
                    Review Case Law
                </strong>

                <small>
                    Facts → Issue → Decision → Principle
                </small>
            </div>
        </div>
    `;
}


/* =========================================================
   SUBJECT PAGE
========================================================= */

function openCourse(courseId) {

    state.selectedCourse = courseId;

    const course =
        getCourse(courseId);

    if (
        course &&
        course.topics.length
    ) {
        state.selectedTopic =
            course.topics[0].id;
    }

    navigate("learn");
}


function openTopic(courseId, topicId) {

    state.selectedCourse = courseId;
    state.selectedTopic = topicId;

    navigate("learn");
}


/* =========================================================
   LEARN
========================================================= */

function renderLearn() {

    const course =
        getCourse(
            state.selectedCourse
        );

    if (!course) {
        return `
            <div class="empty-state">
                Course not found.
            </div>
        `;
    }

    const topic =
        getTopic(
            state.selectedCourse,
            state.selectedTopic
        );

    const sidebar =
        Object.entries(COURSES)
        .map(
            ([id, item]) => `
                <div
                    class="sidebar-course ${id === state.selectedCourse ? "active" : ""}"
                    onclick="openCourse('${id}')"
                >
                    ${escapeHTML(item.name)}
                </div>
            `
        )
        .join("");

    const topicList =
        course.topics
        .map(
            item => `
                <div
                    class="topic-list-item"
                    onclick="openTopic('${state.selectedCourse}','${item.id}')"
                >
                    <strong>
                        ${escapeHTML(item.title)}
                    </strong>

                    <small>
                        ${escapeHTML(item.description)}
                    </small>
                </div>
            `
        )
        .join("");

    return `
        <div class="fade-in">

            <div class="page-header">
                <div class="eyebrow">
                    LEARN
                </div>

                <h2>
                    The Law Room.
                </h2>

                <p>
                    This is the textbook inside the
                    website. Pick a subject, pick a
                    topic and learn it properly.
                </p>
            </div>


            <div class="learning-layout">

                <aside class="course-sidebar">

                    <h4>
                        Subjects
                    </h4>

                    ${sidebar}

                </aside>


                <section class="topic-area">

                    ${
                        topic
                        ?
                        renderLesson(
                            course,
                            topic
                        )
                        :
                        `
                            <div class="empty-state">
                                Select a topic.
                            </div>
                        `
                    }

                    <div class="section">

                        <div class="section-title">
                            <div>
                                <h3>
                                    ${escapeHTML(course.name)}
                                    syllabus
                                </h3>

                                <p>
                                    Every topic in this paper.
                                </p>
                            </div>
                        </div>

                        <div class="topic-list">
                            ${topicList}
                        </div>

                    </div>

                </section>

            </div>

        </div>
    `;
}


/* =========================================================
   LESSON RENDERER
========================================================= */

function renderLesson(course, topic) {

    const c = topic.content;

    markTopicComplete(
        course === getCourse("equity")
            ? "equity"
            : state.selectedCourse,
        topic.id
    );

    let html = `
        <article>

            <div class="topic-heading">

                <div class="eyebrow">
                    ${escapeHTML(course.name)}
                </div>

                <h2>
                    ${escapeHTML(topic.title)}
                </h2>

                <p>
                    ${escapeHTML(topic.description)}
                </p>

                <div class="topic-navigation">

                    <span class="topic-pill">
                        ${escapeHTML(course.marks)} marks
                    </span>

                    <span class="topic-pill">
                        Exam:
                        ${formatDate(course.examDate)}
                    </span>

                    <span class="topic-pill">
                        ${courseProgress(state.selectedCourse)}% course progress
                    </span>

                </div>

            </div>
    `;


    if (c.what) {

        html += `
            <section class="lesson-section">

                <h3>
                    What is it?
                </h3>

                <p>
                    ${escapeHTML(c.what)}
                </p>

            </section>
        `;
    }


    if (c.purpose) {

        html += `
            <section class="lesson-section">

                <h3>
                    Why does it exist?
                </h3>

                <p>
                    ${escapeHTML(c.purpose)}
                </p>

            </section>
        `;
    }


    if (c.why) {

        html += `
            <section class="lesson-section">

                <h3>
                    Why does it matter?
                </h3>

                <p>
                    ${escapeHTML(c.why)}
                </p>

            </section>
        `;
    }


    if (c.explanation) {

        html += `
            <section class="lesson-section">

                <h3>
                    Explanation
                </h3>

                <p>
                    ${escapeHTML(c.explanation)}
                </p>

            </section>
        `;
    }


    if (c.statutory) {

        html += `
            <section class="lesson-section">

                <h3>
                    Statutory Basis
                </h3>

                <div class="legal-highlight">
                    <strong>
                        ${escapeHTML(c.statutory)}
                    </strong>
                </div>

            </section>
        `;
    }


    if (c.sections) {

        html += `
            <section class="lesson-section">

                <h3>
                    Important Provisions
                </h3>

                ${renderSections(c.sections)}

            </section>
        `;
    }


    if (c.elements) {

        html += `
            <section class="lesson-section">

                <h3>
                    Elements / Requirements
                </h3>

                <ul>
                    ${c.elements
                        .map(
                            item =>
                                `<li>${escapeHTML(item)}</li>`
                        )
                        .join("")
                    }
                </ul>

            </section>
        `;
    }


    if (c.concepts) {

        html += `
            <section class="lesson-section">

                <h3>
                    Key Concepts
                </h3>

                ${c.concepts
                    .map(
                        item => `
                            <div class="legal-highlight">

                                <strong>
                                    ${escapeHTML(item[0])}
                                </strong>

                                <p>
                                    ${escapeHTML(item[1])}
                                </p>

                            </div>
                        `
                    )
                    .join("")
                }

            </section>
        `;
    }


    if (c.parties) {

        html += `
            <section class="lesson-section">

                <h3>
                    Parties / Legal Roles
                </h3>

                ${c.parties
                    .map(
                        item => `
                            <div class="legal-highlight">

                                <strong>
                                    ${escapeHTML(item[0])}
                                </strong>

                                <p>
                                    ${escapeHTML(item[1])}
                                </p>

                            </div>
                        `
                    )
                    .join("")
                }

            </section>
        `;
    }


    if (c.creation) {

        html += `
            <section class="lesson-section">

                <h3>
                    Requirements
                </h3>

                <ul>
                    ${c.creation
                        .map(
                            item =>
                                `<li>${escapeHTML(item)}</li>`
                        )
                        .join("")
                    }
                </ul>

            </section>
        `;
    }


    if (c.duties) {

        html += `
            <section class="lesson-section">

                <h3>
                    Duties
                </h3>

                ${c.duties
                    .map(
                        item => `
                            <div class="legal-highlight">
                                <strong>
                                    ${escapeHTML(item[0])}
                                </strong>

                                <p>
                                    ${escapeHTML(item[1])}
                                </p>
                            </div>
                        `
                    )
                    .join("")
                }

            </section>
        `;
    }


    if (c.rights) {

        html += `
            <section class="lesson-section">

                <h3>
                    Rights
                </h3>

                <ul>
                    ${c.rights
                        .map(
                            item =>
                                `<li>${escapeHTML(item)}</li>`
                        )
                        .join("")
                    }
                </ul>

            </section>
        `;
    }


    if (c.beneficiaryRights) {

        html += `
            <section class="lesson-section">

                <h3>
                    Beneficiary Rights
                </h3>

                <ul>
                    ${c.beneficiaryRights
                        .map(
                            item =>
                                `<li>${escapeHTML(item)}</li>`
                        )
                        .join("")
                    }
                </ul>

            </section>
        `;
    }


    if (c.types) {

        html += `
            <section class="lesson-section">

                <h3>
                    Types / Classifications
                </h3>

                ${c.types
                    .map(
                        item => `
                            <div class="legal-highlight">

                                <strong>
                                    ${escapeHTML(item[0])}
                                </strong>

                                <p>
                                    ${escapeHTML(item[1])}
                                </p>

                            </div>
                        `
                    )
                    .join("")
                }

            </section>
        `;
    }


    if (c.maxims) {

        html += `
            <section class="lesson-section">

                <h3>
                    Equitable Maxims
                </h3>

                ${c.maxims
                    .map(
                        item => `
                            <div class="legal-highlight">

                                <strong>
                                    ${escapeHTML(item[0])}
                                </strong>

                                <p>
                                    ${escapeHTML(item[1])}
                                </p>

                            </div>
                        `
                    )
                    .join("")
                }

            </section>
        `;
    }


    if (c.principles) {

        html += `
            <section class="lesson-section">

                <h3>
                    Core Principles
                </h3>

                ${
                    Array.isArray(c.principles[0])
                    ?
                    c.principles
                        .map(
                            item => `
                                <div class="legal-highlight">

                                    <strong>
                                        ${escapeHTML(item[0])}
                                    </strong>

                                    <p>
                                        ${escapeHTML(item[1])}
                                    </p>

                                </div>
                            `
                        )
                        .join("")
                    :
                    `
                        <ul>
                            ${c.principles
                                .map(
                                    item =>
                                        `<li>${escapeHTML(item)}</li>`
                                )
                                .join("")
                            }
                        </ul>
                    `
                }

            </section>
        `;
    }


    if (c.distinctions) {

        html += `
            <section class="lesson-section">

                <h3>
                    Distinctions
                </h3>

                ${c.distinctions
                    .map(
                        item => `
                            <div class="legal-highlight">

                                <strong>
                                    ${escapeHTML(item[0])}
                                    vs
                                    ${escapeHTML(item[1])}
                                </strong>

                                <p>
                                    ${escapeHTML(item[2])}
                                </p>

                            </div>
                        `
                    )
                    .join("")
                }

            </section>
        `;
    }


    if (c.examples) {

        html += `
            <section class="lesson-section">

                <h3>
                    Examples
                </h3>

                <ul>
                    ${c.examples
                        .map(
                            item =>
                                `<li>${escapeHTML(item)}</li>`
                        )
                        .join("")
                    }
                </ul>

            </section>
        `;
    }


    if (c.cases) {

        html += `
            <section class="lesson-section">

                <h3>
                    Case Law
                </h3>

                ${
                    c.cases
                        .map(
                            item => {

                                if (
                                    Array.isArray(item)
                                ) {
                                    return `
                                        <div class="legal-highlight">
                                            <strong>
                                                ${escapeHTML(item[0])}
                                            </strong>
                                            <p>
                                                ${escapeHTML(item[1])}
                                            </p>
                                        </div>
                                    `;
                                }

                                return `
                                    <div class="legal-highlight">

                                        <strong>
                                            ${escapeHTML(item.name)}
                                        </strong>

                                        <p>
                                            ${escapeHTML(item.citation || "")}
                                        </p>

                                        <p>
                                            ${escapeHTML(item.principle || "")}
                                        </p>

                                    </div>
                                `;
                            }
                        )
                        .join("")
                }

            </section>
        `;
    }


    if (c.case) {

        html += `
            <section class="lesson-section">

                <h3>
                    Leading Case
                </h3>

                <div class="legal-highlight">

                    <strong>
                        ${escapeHTML(c.case.name)}
                    </strong>

                    <p>
                        ${escapeHTML(c.case.citation)}
                    </p>

                    <p>
                        ${escapeHTML(c.case.principle)}
                    </p>

                </div>

            </section>
        `;
    }


    if (c.evidence) {

        html += `
            <section class="lesson-section">

                <h3>
                    Electronic Evidence
                </h3>

                ${c.evidence
                    .map(
                        item => `
                            <div class="legal-highlight">
                                <strong>
                                    ${escapeHTML(item[0])}
                                </strong>
                                <p>
                                    ${escapeHTML(item[1])}
                                </p>
                            </div>
                        `
                    )
                    .join("")
                }

            </section>
        `;
    }


    if (c.constitutional) {

        html += `
            <section class="lesson-section">

                <h3>
                    Constitutional Dimension
                </h3>

                ${c.constitutional
                    .map(
                        item => `
                            <div class="legal-highlight">
                                <strong>
                                    ${escapeHTML(item[0])}
                                </strong>
                                <p>
                                    ${escapeHTML(item[1])}
                                </p>
                            </div>
                        `
                    )
                    .join("")
                }

            </section>
        `;
    }


    if (c.treaties) {

        html += `
            <section class="lesson-section">

                <h3>
                    Major International Instruments
                </h3>

                ${c.treaties
                    .map(
                        item => `
                            <div class="legal-highlight">

                                <strong>
                                    ${escapeHTML(item[0])}
                                </strong>

                                <p>
                                    ${escapeHTML(item[1])}
                                </p>

                            </div>
                        `
                    )
                    .join("")
                }

            </section>
        `;
    }


    if (c.orders) {

        html += `
            <section class="lesson-section">

                <h3>
                    Important Orders
                </h3>

                ${c.orders
                    .map(
                        item => `
                            <div class="legal-highlight">
                                <strong>
                                    ${escapeHTML(item[0])}
                                </strong>
                                <p>
                                    ${escapeHTML(item[1])}
                                </p>
                            </div>
                        `
                    )
                    .join("")
                }

            </section>
        `;
    }


    if (c.formula) {

        html += `
            <section class="lesson-section">

                <h3>
                    Problem Question Formula
                </h3>

                <div class="memory-box">
                    ${escapeHTML(c.formula)}
                </div>

            </section>
        `;
    }


    if (c.memory) {

        html += `
            <section class="lesson-section">

                <h3>
                    Memory Trick
                </h3>

                <div class="memory-box">
                    ${escapeHTML(c.memory)}
                </div>

            </section>
        `;
    }


    if (c.exam) {

        html += `
            <section class="lesson-section">

                <h3>
                    Exam Questions
                </h3>

                <ul>
                    ${c.exam
                        .map(
                            item =>
                                `<li>${escapeHTML(item)}</li>`
                        )
                        .join("")
                    }
                </ul>

            </section>
        `;
    }


    html += `

            <section class="lesson-section">

                <h3>
                    Test Yourself
                </h3>

                <p>
                    Do not just read this topic.
                    Test whether you can actually
                    retrieve it.
                </p>

                <button
                    class="primary-btn"
                    onclick="startTopicQuiz('${state.selectedCourse}','${topic.id}')"
                >
                    Test this topic
                </button>

                <button
                    class="secondary-btn"
                    onclick="markTopicMastered('${topic.id}'); render();"
                >
                    Mark mastered
                </button>

            </section>

        </article>
    `;

    return html;
}


function renderSections(sections) {

    return sections
        .map(
            item => {

                if (
                    Array.isArray(item)
                ) {

                    return `
                        <div class="legal-highlight">

                            <strong>
                                ${escapeHTML(item[0])}

                                ${
                                    item[1]
                                    ? " — " + escapeHTML(item[1])
                                    : ""
                                }
                            </strong>

                            ${
                                item[2]
                                ?
                                `<p>${escapeHTML(item[2])}</p>`
                                :
                                ""
                            }

                            ${
                                item[3]
                                ?
                                `<p><strong>Penalty:</strong> ${escapeHTML(item[3])}</p>`
                                :
                                ""
                            }

                        </div>
                    `;
                }

                return `
                    <div class="legal-highlight">
                        ${escapeHTML(item)}
                    </div>
                `;
            }
        )
        .join("");
}


/* =========================================================
   CASE LAW PAGE
========================================================= */

function renderCases() {

    const cards =
        CASE_BANK
        .map(
            item => `
                <div class="case-card">

                    <span class="case-citation">
                        ${escapeHTML(item.subject)}
                    </span>

                    <h4>
                        ${escapeHTML(item.name)}
                    </h4>

                    <p>
                        <span class="case-label">
                            Citation
                        </span><br>
                        ${escapeHTML(item.citation)}
                    </p>

                    <p>
                        <span class="case-label">
                            Facts
                        </span><br>
                        ${escapeHTML(item.facts)}
                    </p>

                    <p>
                        <span class="case-label">
                            Issue
                        </span><br>
                        ${escapeHTML(item.issue)}
                    </p>

                    <p>
                        <span class="case-label">
                            Decision
                        </span><br>
                        ${escapeHTML(item.decision)}
                    </p>

                    <div class="legal-highlight">

                        <strong>
                            Principle
                        </strong>

                        <p>
                            ${escapeHTML(item.principle)}
                        </p>

                    </div>

                    <p>
                        <span class="case-label">
                            Exam Use
                        </span><br>
                        ${escapeHTML(item.exam)}
                    </p>

                </div>
            `
        )
        .join("");

    return `
        <div class="fade-in">

            <div class="page-header">

                <div class="eyebrow">
                    CASE BANK
                </div>

                <h2>
                    Facts. Issue. Decision. Principle.
                </h2>

                <p>
                    No random case-name memorisation.
                    Understand what happened and why
                    the case matters.
                </p>

            </div>

            <div class="case-grid">
                ${cards}
            </div>

        </div>
    `;
}


/* =========================================================
   PRACTICE PAGE
========================================================= */

function renderPractice() {

    return `
        <div class="fade-in">

            <div class="page-header">

                <div class="eyebrow">
                    PRACTICE
                </div>

                <h2>
                    Make the law answer you.
                </h2>

                <p>
                    Reading creates familiarity.
                    Retrieval creates memory.
                </p>

            </div>


            <div class="practice-grid">

                <div
                    class="practice-card"
                    onclick="startRandomQuiz()"
                >
                    <span>
                        MODE 01
                    </span>

                    <h3>
                        Random Quiz
                    </h3>

                    <p>
                        Questions from the entire
                        syllabus.
                    </p>
                </div>


                <div
                    class="practice-card"
                    onclick="startTopicQuiz(state.selectedCourse,state.selectedTopic)"
                >
                    <span>
                        MODE 02
                    </span>

                    <h3>
                        Topic Quiz
                    </h3>

                    <p>
                        Test the exact topic you
                        are studying.
                    </p>
                </div>


                <div
                    class="practice-card"
                    onclick="startRandomQuiz(getNextExam()?.id)"
                >
                    <span>
                        MODE 03
                    </span>

                    <h3>
                        Next Paper
                    </h3>

                    <p>
                        Questions from the next
                        examination subject.
                    </p>
                </div>


                <div
                    class="practice-card"
                    onclick="startWeakQuiz()"
                >
                    <span>
                        MODE 04
                    </span>

                    <h3>
                        Weak Areas
                    </h3>

                    <p>
                        Attack the questions you
                        previously got wrong.
                    </p>
                </div>


                <div
                    class="practice-card"
                    onclick="startRapidFire()"
                >
                    <span>
                        MODE 05
                    </span>

                    <h3>
                        Rapid Fire
                    </h3>

                    <p>
                        Fast retrieval. No overthinking.
                    </p>
                </div>


                <div
                    class="practice-card"
                    onclick="navigate('exam')"
                >
                    <span>
                        MODE 06
                    </span>

                    <h3>
                        Exam Mode
                    </h3>

                    <p>
                        Sit the paper without immediate
                        answers.
                    </p>
                </div>

            </div>

        </div>
    `;
}


/* =========================================================
   QUIZ ENGINE
========================================================= */

function startRandomQuiz(courseId = null) {

    let pool =
        courseId
        ?
        QUESTIONS.filter(
            q => q.subject === courseId
        )
        :
        [...QUESTIONS];

    if (!pool.length) {
        alert(
            "There are no questions available for this selection yet."
        );
        return;
    }

    pool =
        pool.sort(
            () => Math.random() - 0.5
        )
        .slice(0, 10);

    state.quizQuestions = pool;
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizAnswered = false;

    renderQuiz();
}


function startTopicQuiz(
    courseId,
    topicId
) {

    const pool =
        QUESTIONS.filter(
            q =>
                q.subject === courseId &&
                q.topic === topicId
        );

    if (!pool.length) {
        alert(
            "More questions for this exact topic will be added to the question bank."
        );
        return;
    }

    state.quizQuestions =
        pool.sort(
            () => Math.random() - 0.5
        );

    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizAnswered = false;

    renderQuiz();
}


function startWeakQuiz() {

    const weakIds =
        Object.keys(
            progress.weakTopics
        );

    const pool =
        QUESTIONS.filter(
            q =>
                weakIds.includes(q.topic)
        );

    if (!pool.length) {

        alert(
            "No weak-area questions yet. Get a few questions wrong first!"
        );

        return;
    }

    state.quizQuestions =
        pool.sort(
            () => Math.random() - 0.5
        );

    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizAnswered = false;

    renderQuiz();
}


function startRapidFire() {

    const pool =
        QUESTIONS
            .sort(
                () =>
                    Math.random() - 0.5
            )
            .slice(0, 7);

    state.quizQuestions = pool;
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizAnswered = false;

    renderQuiz();
}


function renderQuiz() {

    const question =
        state.quizQuestions[
            state.quizIndex
        ];

    if (!question) {

        document.getElementById(
            "mainContent"
        ).innerHTML = `

            <div class="fade-in">

                <div class="quiz-card">

                    <div class="eyebrow">
                        QUIZ COMPLETE
                    </div>

                    <h2 class="quiz-question">
                        ${state.quizScore}
                        /
                        ${state.quizQuestions.length}
                    </h2>

                    <p>
                        ${
                            state.quizScore /
                            state.quizQuestions.length >=
                            0.8
                            ?
                            "Excellent retrieval."
                            :
                            "Now go back to the weak topics and close the gaps."
                        }
                    </p>

                    <br>

                    <button
                        class="primary-btn"
                        onclick="navigate('practice')"
                    >
                        Back to Practice
                    </button>

                </div>

            </div>
        `;

        return;
    }


    state.page = "quiz";


    const options =
        question.options
            .map(
                (option, index) => `
                    <button
                        class="option"
                        onclick="answerQuiz(${index})"
                        id="option-${index}"
                    >
                        <strong>
                            ${String.fromCharCode(65 + index)}.
                        </strong>

                        ${escapeHTML(option)}
                    </button>
                `
            )
            .join("");


    document.getElementById(
        "mainContent"
    ).innerHTML = `

        <div class="fade-in">

            <div class="quiz-card">

                <div class="quiz-top">

                    <span>
                        ${escapeHTML(question.id)}
                    </span>

                    <span>
                        Question
                        ${state.quizIndex + 1}
                        /
                        ${state.quizQuestions.length}
                    </span>

                </div>

                <div class="quiz-question">
                    ${escapeHTML(question.question)}
                </div>

                <div class="option-list">
                    ${options}
                </div>

                <div id="quizFeedback"></div>

            </div>

        </div>
    `;
}


function answerQuiz(index) {

    if (state.quizAnswered) {
        return;
    }

    state.quizAnswered = true;

    const question =
        state.quizQuestions[
            state.quizIndex
        ];

    const correct =
        index === question.answer;

    registerQuestionAttempt(
        question,
        correct
    );

    const buttons =
        document.querySelectorAll(
            ".option"
        );

    buttons.forEach(
        (button, i) => {

            if (
                i === question.answer
            ) {
                button.classList.add(
                    "correct"
                );
            }

            if (
                i === index &&
                !correct
            ) {
                button.classList.add(
                    "wrong"
                );
            }

            button.disabled = true;
        }
    );


    const feedback =
        document.getElementById(
            "quizFeedback"
        );

    feedback.innerHTML = `

        <div
            class="answer-feedback ${
                correct
                ? "feedback-correct"
                : "feedback-wrong"
            }"
        >

            <strong>
                ${
                    correct
                    ? "Correct."
                    : "Not quite."
                }
            </strong>

            <p>
                ${escapeHTML(question.explanation)}
            </p>

            ${
                !correct
                ?
                `
                    <button
                        class="secondary-btn"
                        style="margin-top:10px"
                        onclick="openTopic('${question.subject}','${question.topic}')"
                    >
                        Review this topic
                    </button>
                `
                :
                ""
            }

            <button
                class="dark-btn"
                style="margin-top:10px"
                onclick="nextQuizQuestion()"
            >
                ${
                    state.quizIndex + 1 ===
                    state.quizQuestions.length
                    ?
                    "Finish"
                    :
                    "Next Question"
                }
            </button>

        </div>
    `;


    if (correct) {
        launchConfetti();
    }
}


function nextQuizQuestion() {

    state.quizIndex++;
    state.quizAnswered = false;

    renderQuiz();
}


/* =========================================================
   EXAM MODE
========================================================= */

function renderExam() {

    return `
        <div class="fade-in">

            <div class="page-header">

                <div class="eyebrow">
                    EXAM MODE
                </div>

                <h2>
                    No hints. No mercy. Just the paper.
                </h2>

                <p>
                    Build a paper, start the timer and
                    answer everything before seeing
                    your result.
                </p>

            </div>


            <div class="exam-builder">

                <div class="form-group">

                    <label>
                        SUBJECT
                    </label>

                    <select id="examSubject">

                        <option value="all">
                            All Subjects
                        </option>

                        ${Object.entries(COURSES)
                            .map(
                                ([id, course]) =>
                                    `
                                        <option value="${id}">
                                            ${escapeHTML(course.name)}
                                        </option>
                                    `
                            )
                            .join("")
                        }

                    </select>

                </div>


                <div class="form-group">

                    <label>
                        NUMBER OF MCQs
                    </label>

                    <select id="examCount">

                        <option value="10">
                            10
                        </option>

                        <option value="20" selected>
                            20
                        </option>

                        <option value="30">
                            30
                        </option>

                    </select>

                </div>


                <div class="form-group">

                    <label>
                        TIME
                    </label>

                    <select id="examTime">

                        <option value="10">
                            10 minutes
                        </option>

                        <option value="20" selected>
                            20 minutes
                        </option>

                        <option value="30">
                            30 minutes
                        </option>

                        <option value="45">
                            45 minutes
                        </option>

                    </select>

                </div>


                <button
                    class="primary-btn"
                    onclick="beginExam()"
                >
                    Start Examination
                </button>

            </div>

        </div>
    `;
}


function beginExam() {

    const subject =
        document.getElementById(
            "examSubject"
        ).value;

    const count =
        Number(
            document.getElementById(
                "examCount"
            ).value
        );

    const minutes =
        Number(
            document.getElementById(
                "examTime"
            ).value
        );


    let pool =
        subject === "all"
        ?
        [...QUESTIONS]
        :
        QUESTIONS.filter(
            q =>
                q.subject === subject
        );


    pool =
        pool
            .sort(
                () =>
                    Math.random() - 0.5
            )
            .slice(
                0,
                Math.min(
                    count,
                    pool.length
                )
            );


    if (!pool.length) {

        alert(
            "Not enough questions for this subject yet."
        );

        return;
    }


    state.examQuestions = pool;
    state.examAnswers = {};
    state.examStarted = true;
    state.examSeconds = minutes * 60;

    clearInterval(
        state.examTimer
    );

    state.examTimer =
        setInterval(
            () => {

                state.examSeconds--;

                const timer =
                    document.getElementById(
                        "examTimer"
                    );

                if (timer) {
                    timer.textContent =
                        formatSeconds(
                            state.examSeconds
                        );
                }

                if (
                    state.examSeconds <= 0
                ) {

                    clearInterval(
                        state.examTimer
                    );

                    submitExam();
                }

            },
            1000
        );

    renderExamPaper();
}


function formatSeconds(seconds) {

    const mins =
        Math.floor(
            seconds / 60
        );

    const secs =
        seconds % 60;

    return (
        String(mins).padStart(2, "0")
        +
        ":"
        +
        String(secs).padStart(2, "0")
    );
}


function renderExamPaper() {

    const questions =
        state.examQuestions
            .map(
                (question, index) => `

                    <div class="exam-question">

                        <span class="exam-question-number">
                            QUESTION ${index + 1}
                            ·
                            ${escapeHTML(question.id)}
                        </span>

                        <h3>
                            ${escapeHTML(question.question)}
                        </h3>

                        <div class="option-list">

                            ${
                                question.options
                                    .map(
                                        (option, optionIndex) =>
                                            `
                                                <label
                                                    class="option"
                                                    style="display:block"
                                                >

                                                    <input
                                                        type="radio"
                                                        name="exam-${question.id}"
                                                        value="${optionIndex}"
                                                        onchange="saveExamAnswer('${question.id}',${optionIndex})"
                                                        ${
                                                            state.examAnswers[question.id] === optionIndex
                                                            ? "checked"
                                                            : ""
                                                        }
                                                    >

                                                    ${escapeHTML(option)}

                                                </label>
                                            `
                                    )
                                    .join("")
                            }

                        </div>

                    </div>
                `
            )
            .join("");


    document.getElementById(
        "mainContent"
    ).innerHTML = `

        <div class="fade-in">

            <div
                class="panel"
                style="margin-bottom:20px; position:sticky; top:120px; z-index:20"
            >

                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                    "
                >

                    <strong>
                        EXAM IN PROGRESS
                    </strong>

                    <strong id="examTimer">
                        ${formatSeconds(
                            state.examSeconds
                        )}
                    </strong>

                </div>

            </div>


            <div class="quiz-card">

                ${questions}

                <button
                    class="danger-btn"
                    onclick="submitExam()"
                >
                    Submit Examination
                </button>

            </div>

        </div>
    `;
}


function saveExamAnswer(
    questionId,
    answer
) {

    state.examAnswers[
        questionId
    ] = answer;
}


function submitExam() {

    clearInterval(
        state.examTimer
    );

    let score = 0;

    state.examQuestions.forEach(
        question => {

            const answer =
                state.examAnswers[
                    question.id
                ];

            const correct =
                answer === question.answer;

            if (correct) {
                score++;
            }

            registerQuestionAttempt(
                question,
                correct
            );
        }
    );


    const percentage =
        Math.round(
            (
                score /
                state.examQuestions.length
            ) * 100
        );


    document.getElementById(
        "mainContent"
    ).innerHTML = `

        <div class="fade-in">

            <div class="quiz-card">

                <div class="eyebrow">
                    EXAM COMPLETE
                </div>

                <h2 class="quiz-question">
                    ${percentage}%
                </h2>

                <p>
                    You scored
                    <strong>
                        ${score}
                    </strong>
                    out of
                    <strong>
                        ${state.examQuestions.length}
                    </strong>.
                </p>

                <br>

                <div class="exam-box">

                    Every question you got wrong has
                    been recorded against its exact
                    topic so you can revise it.

                </div>

                <br>

                <button
                    class="primary-btn"
                    onclick="navigate('progress')"
                >
                    View Progress
                </button>

                <button
                    class="secondary-btn"
                    onclick="navigate('practice')"
                >
                    Practise Again
                </button>

            </div>

        </div>
    `;

    state.examStarted = false;
}


/* =========================================================
   REVISION
========================================================= */

function renderRevision() {

    const weak =
        Object.entries(
            progress.weakTopics
        )
        .sort(
            (a, b) =>
                b[1] - a[1]
        );


    const revisionHTML =
        weak.length
        ?
        weak
            .map(
                ([topicId, count]) => {

                    let topic = null;
                    let courseId = null;

                    for (
                        const [id, course]
                        of Object.entries(COURSES)
                    ) {

                        const found =
                            course.topics.find(
                                t =>
                                    t.id === topicId
                            );

                        if (found) {
                            topic = found;
                            courseId = id;
                            break;
                        }
                    }

                    if (!topic) return "";

                    return `
                        <div class="revision-card">

                            <div>

                                <strong>
                                    ${escapeHTML(topic.title)}
                                </strong>

                                <p>
                                    ${escapeHTML(topic.description)}
                                </p>

                                <span class="tag">
                                    ${count} wrong answers
                                </span>

                            </div>

                            <button
                                class="primary-btn"
                                onclick="openTopic('${courseId}','${topicId}')"
                            >
                                Review
                            </button>

                        </div>
                    `;
                }
            )
            .join("")
        :
        `
            <div class="empty-state">

                <h3>
                    No weak areas yet.
                </h3>

                <p>
                    Once you make mistakes in Practice
                    or Exam Mode, this page will become
                    your personalised revision list.
                </p>

            </div>
        `;


    return `
        <div class="fade-in">

            <div class="page-header">

                <div class="eyebrow">
                    REVISION
                </div>

                <h2>
                    Fix what you forget.
                </h2>

                <p>
                    Every wrong answer is attached
                    to the exact topic that caused it.
                </p>

            </div>

            ${revisionHTML}

        </div>
    `;
}


/* =========================================================
   PROGRESS
========================================================= */

function renderProgress() {

    const courseRows =
        Object.entries(COURSES)
        .map(
            ([id, course]) => {

                const percent =
                    courseProgress(id);

                return `
                    <div class="subject-progress-row">

                        <div
                            class="subject-progress-row-top"
                        >

                            <strong>
                                ${escapeHTML(course.name)}
                            </strong>

                            <strong>
                                ${percent}%
                            </strong>

                        </div>

                        <small>
                            Exam:
                            ${formatDate(course.examDate)}
                        </small>

                        <div class="progress-bar">

                            <div
                                class="progress-fill"
                                style="width:${percent}%"
                            ></div>

                        </div>

                    </div>
                `;
            }
        )
        .join("");


    const accuracy =
        progress.attempted.length
        ?
        Math.round(
            (
                progress.correct.length /
                progress.attempted.length
            ) * 100
        )
        :
        0;


    return `
        <div class="fade-in">

            <div class="page-header">

                <div class="eyebrow">
                    PROGRESS
                </div>

                <h2>
                    See exactly where you stand.
                </h2>

                <p>
                    Your dashboard changes as you
                    learn and practise.
                </p>

            </div>


            <div class="progress-overview">

                <div class="big-progress">

                    <span>
                        OVERALL
                    </span>

                    <div class="big-progress-number">
                        ${overallProgress()}%
                    </div>

                    <p>
                        Course completion
                    </p>

                    <br>

                    <div>
                        ${progress.attempted.length}
                        questions attempted
                    </div>

                    <div>
                        ${accuracy}%
                        quiz accuracy
                    </div>

                </div>


                <div class="subject-progress">

                    ${courseRows}

                </div>

            </div>

        </div>
    `;
}


/* =========================================================
   MAIN RENDERER
========================================================= */

function render() {

    const main =
        document.getElementById(
            "mainContent"
        );

    switch (state.page) {

        case "dashboard":
            main.innerHTML =
                renderDashboard();
            break;

        case "learn":
            main.innerHTML =
                renderLearn();
            break;

        case "practice":
            main.innerHTML =
                renderPractice();
            break;

        case "cases":
            main.innerHTML =
                renderCases();
            break;

        case "revision":
            main.innerHTML =
                renderRevision();
            break;

        case "exam":
            main.innerHTML =
                renderExam();
            break;

        case "progress":
            main.innerHTML =
                renderProgress();
            break;

        default:
            main.innerHTML =
                renderDashboard();
    }

    updateTopCountdown();
}


/* =========================================================
   TOP COUNTDOWN
========================================================= */

function updateTopCountdown() {

    const next =
        getNextExam();

    const examName =
        document.getElementById(
            "topNextExam"
        );

    const countdown =
        document.getElementById(
            "topCountdown"
        );


    if (!next) {

        examName.textContent =
            "All exams complete";

        countdown.textContent =
            "";

        return;
    }


    examName.textContent =
        next.name;

    countdown.textContent =
        `${daysUntil(next.date)} days · ${formatDate(next.date)}`;
}


/* =========================================================
   CONFETTI
========================================================= */

function launchConfetti() {

    const container =
        document.getElementById(
            "confettiContainer"
        );

    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );

        piece.className =
            "confetti";

        piece.style.left =
            Math.random() * 100 +
            "%";

        piece.style.top =
            "35%";

        piece.style.background =
            [
                "#111111",
                "#3d6b57",
                "#b18a48",
                "#9c3f3f",
                "#ffffff"
            ][
                Math.floor(
                    Math.random() * 5
                )
            ];

        piece.style.setProperty(
            "--x",
            (
                Math.random() * 500 -
                250
            ) + "px"
        );

        piece.style.setProperty(
            "--y",
            (
                Math.random() * 500 +
                100
            ) + "px"
        );

        container.appendChild(
            piece
        );

        setTimeout(
            () => piece.remove(),
            1400
        );
    }
}


/* =========================================================
   NAV EVENT LISTENERS
========================================================= */

document
    .querySelectorAll(
        ".nav-btn, .mobile-nav-btn"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    navigate(
                        button.dataset.page
                    );

                }
            );

        }
    );


/* =========================================================
   INITIAL LOAD
========================================================= */

render();


/* =========================================================
   KEEP COUNTDOWN UPDATED
========================================================= */

setInterval(
    updateTopCountdown,
    60000
);


/* =========================================================
   KEYBOARD SHORTCUTS
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            state.page === "quiz" &&
            !state.quizAnswered
        ) {

            const key =
                event.key.toLowerCase();

            const map = {
                a: 0,
                b: 1,
                c: 2,
                d: 3
            };

            if (
                map[key] !== undefined
            ) {

                answerQuiz(
                    map[key]
                );
            }
        }

    }
);
