import type { Judgment } from '../types';

export const SEEDED_JUDGMENTS: Judgment[] = [
  {
    id: 'sc-2026-001',
    caseTitle: 'State of Maharashtra v. Ananya Infra Ventures Pvt Ltd (Demo)',
    caseNumber: 'Civil Appeal No. 4821 of 2026',
    judgmentDate: '24 September 2026',
    bench: '3-Judge Bench',
    judges: ['Justice D. Y. Chandrachud (Former CJI)', 'Justice B. R. Gavai', 'Justice Surya Kant'],
    practiceArea: 'Constitutional Law',
    caseType: 'Civil Appeal',
    isConstitutional: true,
    summary: 'The Supreme Court examined the constitutional scope of state legislative power under Article 300A concerning compulsory acquisition of infrastructure concessions without prior arbitral valuation.',
    keyIssues: [
      'Whether state revocation of PPP infrastructure concessions violates the fundamental guarantee under Article 300A.',
      'Extent of judicial review over executive orders issued under emergency infrastructure takeover statutes.'
    ],
    ratioDecidendi: 'Executive expropriation of contractual concession rights without statutory valuation mechanisms violates the principle of fair compensation embedded within Article 300A.',
    keyHoldings: [
      'Contractual rights in public-private partnership concessions constitute "property" for the purpose of Article 300A.',
      'Unilateral termination of infrastructure agreements without adequate notice or interim compensation triggers constitutional scrutiny.',
      'State instrumentalities must adhere to natural justice even in commercial infrastructure contracts.'
    ],
    relevantProvisions: [
      'Article 300A, Constitution of India',
      'Section 34, Arbitration and Conciliation Act, 1996',
      'Section 9, Right to Fair Compensation and Transparency in Land Acquisition Act'
    ],
    citation: '2026 INSC 482 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-002',
    caseTitle: 'Apex Arbitral Nominees Ltd v. Union of India & Ors (Demo)',
    caseNumber: 'Special Leave Petition (C) No. 9102 of 2026',
    judgmentDate: '22 September 2026',
    bench: '2-Judge Bench',
    judges: ['Justice Sanjiv Khanna', 'Justice M. M. Sundresh'],
    practiceArea: 'Arbitration',
    caseType: 'Special Leave Petition',
    summary: 'Clarification regarding automatic stay on enforcement of domestic arbitral awards where allegations of fraud in underlying agreements are raised post-enforcement notice.',
    keyIssues: [
      'Does Section 36(3) proviso mandate an unconditional stay if fraud is alleged without prima facie documentary proof?',
      'Interplay between Section 11 arbitrator appointments and Section 34 challenge proceedings.'
    ],
    ratioDecidendi: 'Mere uncorroborated allegations of fraud in Section 36 applications do not grant an automatic unconditional stay without a threshold determination of credibility.',
    keyHoldings: [
      'Courts must evaluate whether fraud goes to the root of the arbitral agreement itself.',
      'Security deposit equal to 50% of award amount remains mandatory unless clear bad faith is proven on record.'
    ],
    relevantProvisions: [
      'Section 36(3), Arbitration & Conciliation Act, 1996',
      'Section 17, Indian Contract Act, 1872'
    ],
    citation: '2026 INSC 479 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-003',
    caseTitle: 'FinCorp Asset Reconstruction Co. v. Operational Creditor Forum (Demo)',
    caseNumber: 'Civil Appeal No. 3310 of 2026',
    judgmentDate: '19 September 2026',
    bench: '3-Judge Bench',
    judges: ['Justice J. B. Pardiwala', 'Justice Manoj Misra', 'Justice K. V. Viswanathan'],
    practiceArea: 'Insolvency & Bankruptcy',
    caseType: 'Civil Appeal',
    summary: 'Priority of distribution among secured financial creditors versus statutory tax dues under the Insolvency and Bankruptcy Code, 2016 following CIRP completion.',
    keyIssues: [
      'Whether state GST department claims take precedence over First Charge Financial Creditors during waterfall distribution under Section 53.',
      'Application of Rainbow Papers precedent to revised NCLT resolution plans.'
    ],
    ratioDecidendi: 'Section 53 of the IBC overrides state tax liens; secured financial creditors maintain statutory priority over government dues.',
    keyHoldings: [
      'The non-obstante clause in Section 238 IBC prevails over provincial tax legislations.',
      'Adjudicating authorities cannot alter the commercial wisdom of the Committee of Creditors regarding distribution ratios.'
    ],
    relevantProvisions: [
      'Section 53, Insolvency and Bankruptcy Code, 2016',
      'Section 238, Insolvency and Bankruptcy Code, 2016'
    ],
    citation: '2026 INSC 471 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-004',
    caseTitle: 'Rohan Deshmukh & Anr. v. Central Bureau of Investigation (Demo)',
    caseNumber: 'Criminal Appeal No. 1105 of 2026',
    judgmentDate: '17 September 2026',
    bench: '2-Judge Bench',
    judges: ['Justice Abhay S. Oka', 'Justice Ujjal Bhuyan'],
    practiceArea: 'Criminal Law',
    caseType: 'Criminal Appeal',
    summary: 'Landmark ruling on the admissibility of encrypted messaging logs and digital forensics under Section 65B of the Indian Evidence Act / Section 61 Bharatiya Sakshya Adhiniyam.',
    keyIssues: [
      'Mandatory nature of electronic certificate for mobile device cloud backups.',
      'Standard of proof required for custodial interrogation under PMLA bail provisions.'
    ],
    ratioDecidendi: 'Electronic evidence retrieved from cloud servers without strict contemporaneous chain of custody certification cannot form the sole basis for denying bail.',
    keyHoldings: [
      'Bail is the rule and jail is the exception even under stringent anti-money laundering statutes.',
      'Forensic mirror imaging must comply strictly with statutory digital evidence guidelines.'
    ],
    relevantProvisions: [
      'Section 45, Prevention of Money Laundering Act, 2002',
      'Section 61, Bharatiya Sakshya Adhiniyam, 2023'
    ],
    citation: '2026 INSC 465 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-005',
    caseTitle: 'Global BioTech Solutions Inc. v. Controller of Patents (Demo)',
    caseNumber: 'Civil Appeal No. 5120 of 2026',
    judgmentDate: '15 September 2026',
    bench: '2-Judge Bench',
    judges: ['Justice P. S. Narasimha', 'Justice Aravind Kumar'],
    practiceArea: 'Intellectual Property',
    caseType: 'Civil Appeal',
    summary: 'Interpretation of Section 3(d) of the Patents Act regarding enhanced efficacy in secondary pharmaceutical formulation claims.',
    keyIssues: [
      'What constitutes therapeutic efficacy improvement in targeted monoclonal antibody combinations?',
      'Standard for proving non-obviousness before the Patent Appellate Authority.'
    ],
    ratioDecidendi: 'Incremental variation in bioavailability without demonstrable comparative clinical efficacy does not satisfy the statutory threshold under Section 3(d).',
    keyHoldings: [
      'Public health safeguards under Section 3(d) must be interpreted strictly against evergreening tactics.',
      'Patent applicants carry the evidentiary burden to prove enhanced bio-activity.'
    ],
    relevantProvisions: [
      'Section 3(d), Patents Act, 1970',
      'Section 64, Patents Act, 1970'
    ],
    citation: '2026 INSC 458 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-006',
    caseTitle: 'Citizens Collective for Clean Energy v. Union of India (Demo)',
    caseNumber: 'Writ Petition (Civil) No. 712 of 2026',
    judgmentDate: '12 September 2026',
    bench: '5-Judge Bench',
    judges: ['Justice D. Y. Chandrachud (Former CJI)', 'Justice B. R. Gavai', 'Justice Surya Kant', 'Justice Vikram Nath', 'Justice Dipankar Datta'],
    practiceArea: 'Environmental Law',
    caseType: 'Constitutional Bench',
    isConstitutional: true,
    summary: 'Constitutional recognition of the Right to Be Free from Adverse Effects of Climate Change under Article 21 and Article 14.',
    keyIssues: [
      'Does Article 21 encompass a distinct fundamental right to climate resilience and clean environment energy transitions?',
      'Balancing statutory environmental clearances with net-zero commitments.'
    ],
    ratioDecidendi: 'Articles 14 and 21 of the Constitution mandate state proactive mitigation against severe climate degradation affecting vulnerable coastal populations.',
    keyHoldings: [
      'Climate change directly impacts the fundamental right to life, health, and clean air.',
      'Public trust doctrine imposes affirmative obligations on state regulatory bodies to evaluate cumulative environmental impact.'
    ],
    relevantProvisions: [
      'Article 21, Constitution of India',
      'Article 48A, Constitution of India',
      'Section 3, Environment (Protection) Act, 1986'
    ],
    citation: '2026 INSC 450 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-007',
    caseTitle: 'Karan Sharma v. Commissioner of Income Tax (Delhi) (Demo)',
    caseNumber: 'Civil Appeal No. 2901 of 2026',
    judgmentDate: '09 September 2026',
    bench: '2-Judge Bench',
    judges: ['Justice B. V. Nagarathna', 'Justice N. Kotiswar Singh'],
    practiceArea: 'Tax Law',
    caseType: 'Civil Appeal',
    summary: 'Taxability of cross-border software licensing fees as Royalty under India-Singapore Double Taxation Avoidance Agreement (DTAA).',
    keyIssues: [
      'Does payments for off-the-shelf software packages constitute royalty under Article 12 of DTAA?',
      'Retrospective applicability of domestic tax law amendments to bilateral treaties.'
    ],
    ratioDecidendi: 'Bilateral treaty provisions override domestic statutory amendments unless explicit treaty protocol modification is negotiated between sovereign nations.',
    keyHoldings: [
      'Copyright license grant without underlying technology transfer does not constitute royalty.',
      'Assessees are entitled to treaty benefits under Section 90(2) Income Tax Act.'
    ],
    relevantProvisions: [
      'Section 9(1)(vi), Income Tax Act, 1961',
      'Section 90(2), Income Tax Act, 1961',
      'Article 12, India-Singapore DTAA'
    ],
    citation: '2026 INSC 442 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-008',
    caseTitle: 'New Age Logistics Tech v. State of Karnataka (Demo)',
    caseNumber: 'Writ Petition (Civil) No. 309 of 2026',
    judgmentDate: '05 September 2026',
    bench: '2-Judge Bench',
    judges: ['Justice Hrishikesh Roy', 'Justice Prashant Kumar Mishra'],
    practiceArea: 'Administrative Law',
    caseType: 'Writ Petition',
    summary: 'Validity of state algorithmic labor registration regulations restricting gig economy delivery platforms under Article 19(1)(g).',
    keyIssues: [
      'Proportionality test applied to mandatory state data-sharing rules for tech platforms.',
      'Limits of subordinate legislation without explicit parent statutory authorization.'
    ],
    ratioDecidendi: 'State regulatory measures creating unviable operational compliance burdens on e-commerce logistics without statutory backing violate Article 19(1)(g).',
    keyHoldings: [
      'Delegated legislation cannot exceed the explicit parameters of the enabling Act.',
      'Data disclosure orders must satisfy the three-fold test of legality, necessity, and proportionality.'
    ],
    relevantProvisions: [
      'Article 19(1)(g), Constitution of India',
      'Section 43A, Information Technology Act, 2000'
    ],
    citation: '2026 INSC 435 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-009',
    caseTitle: 'Metro Developers Pvt Ltd v. Real Estate Regulatory Authority (Demo)',
    caseNumber: 'Civil Appeal No. 1822 of 2026',
    judgmentDate: '01 September 2026',
    bench: '2-Judge Bench',
    judges: ['Justice Sanjay Karol', 'Justice Ahsanuddin Amanullah'],
    practiceArea: 'Corporate Law',
    caseType: 'Civil Appeal',
    summary: 'Jurisdiction of RERA Authority to levy compensation for delayed possession concurrent with consumer forum proceedings.',
    keyIssues: [
      'Does Section 71 RERA bar home-buyers from parallel remedies under the Consumer Protection Act 2019?',
      'Binding nature of developer allotment letters post-RERA registration.'
    ],
    ratioDecidendi: 'RERA and Consumer Protection Act provide concurrent, non-mutually exclusive remedies to real estate buyers.',
    keyHoldings: [
      'Home-buyers are not forced to elect between RERA and Consumer Commission.',
      'Developers cannot insert unconscionable ex-parte penalty waiver clauses in booking documents.'
    ],
    relevantProvisions: [
      'Section 18, Real Estate (Regulation and Development) Act, 2016',
      'Section 100, Consumer Protection Act, 2019'
    ],
    citation: '2026 INSC 428 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-010',
    caseTitle: 'Dr. Meera Vasudevan v. Union of India & Ors (Demo)',
    caseNumber: 'Writ Petition (Civil) No. 990 of 2026',
    judgmentDate: '28 August 2026',
    bench: '3-Judge Bench',
    judges: ['Justice B. R. Gavai', 'Justice K. V. Viswanathan', 'Justice Sandeep Mehta'],
    practiceArea: 'Constitutional Law',
    caseType: 'Writ Petition',
    isConstitutional: true,
    summary: 'Guidelines on equal opportunity and maternity protections for women medical residents in apex federal tertiary hospitals.',
    keyIssues: [
      'Whether mandatory 80-hour work shifts without rest breaks for pregnant medical professionals breach Article 15(3) and Article 21.',
      'Enforceability of national workplace health directives in autonomous medical institutions.'
    ],
    ratioDecidendi: 'State healthcare institutions must provide reasonable maternity accommodations without penalizing residency training completion timelines.',
    keyHoldings: [
      'Maternity rights are integral to personal liberty under Article 21.',
      'Institutional rules causing indirect gender discrimination in medical residencies are void.'
    ],
    relevantProvisions: [
      'Article 15(3), Constitution of India',
      'Article 21, Constitution of India',
      'Maternity Benefit Act, 1961'
    ],
    citation: '2026 INSC 419 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-011',
    caseTitle: 'Indus Valley Port Infrastructure v. Customs Excise Tax Appellate Tribunal (Demo)',
    caseNumber: 'Civil Appeal No. 6012 of 2026',
    judgmentDate: '24 August 2026',
    bench: '2-Judge Bench',
    judges: ['Justice Abhay S. Oka', 'Justice Rajesh Bindal'],
    practiceArea: 'Tax Law',
    caseType: 'Civil Appeal',
    summary: 'Input Tax Credit (ITC) eligibility on capital goods utilized in heavy maritime port dredging operations.',
    keyIssues: [
      'Do marine dredging vessels qualify as plant & machinery under Section 17(5) CGST Act?',
      'Scope of blocked credits in infrastructure works contracts.'
    ],
    ratioDecidendi: 'Dredging vessels directly integral to commercial port vessel navigation qualify for Input Tax Credit as capital plant and machinery.',
    keyHoldings: [
      'Strict interpretation of tax exemptions should not negate the anti-cascading objective of GST.',
      'Dredging machinery is distinct from general civil immovable construction works.'
    ],
    relevantProvisions: [
      'Section 16, Central Goods and Services Tax Act, 2017',
      'Section 17(5), CGST Act, 2017'
    ],
    citation: '2026 INSC 412 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-012',
    caseTitle: 'Vikramaditya Power Co. v. Northern Grid Corporation (Demo)',
    caseNumber: 'Special Leave Petition (C) No. 12040 of 2026',
    judgmentDate: '20 August 2026',
    bench: '3-Judge Bench',
    judges: ['Justice Surya Kant', 'Justice Dipankar Datta', 'Justice Ujjal Bhuyan'],
    practiceArea: 'Arbitration',
    caseType: 'Special Leave Petition',
    summary: 'Competency of emergency arbitrators appointed under international institutional rules to grant binding interim injunctions in India-seated arbitrations.',
    keyIssues: [
      'Is an Emergency Arbitrator Order enforceable under Section 17(1) of the Indian Arbitration Act for domestic seats?',
      'Evidentiary standard for enforcing emergency interim measures before the High Court.'
    ],
    ratioDecidendi: 'Interim orders passed by an Emergency Arbitrator constituted under institutional rules are enforceable under Section 17(2) of the Arbitration Act.',
    keyHoldings: [
      'Party autonomy permits choice of institutional rules including Emergency Arbitrator provisions.',
      'Courts will not re-hear emergency interim orders on merits unless fundamental public policy is violated.'
    ],
    relevantProvisions: [
      'Section 17, Arbitration & Conciliation Act, 1996',
      'Section 2(1)(d), Arbitration & Conciliation Act, 1996'
    ],
    citation: '2026 INSC 405 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-013',
    caseTitle: 'Siddharth Varma v. State of Uttar Pradesh (Demo)',
    caseNumber: 'Criminal Appeal No. 981 of 2026',
    judgmentDate: '16 August 2026',
    bench: '2-Judge Bench',
    judges: ['Justice C. T. Ravikumar', 'Justice Sanjay Karol'],
    practiceArea: 'Criminal Law',
    caseType: 'Criminal Appeal',
    summary: 'Scope of Section 482 CrPC / Bharatiya Nagarik Suraksha Adhiniyam powers to quash commercial dispute-turned-FIRs.',
    keyIssues: [
      'Criminalization of breach of contract claims through allegations of cheating under Section 420 IPC / BNSS.',
      'Guidelines for awarding exemplary costs on litigants filing malicious FIRs to force commercial settlements.'
    ],
    ratioDecidendi: 'Criminal prosecution cannot be weaponized as a pressure tactic to settle genuine civil contract disputes.',
    keyHoldings: [
      'High Courts must exercise Section 482 powers to prevent abuse of court process in commercial matters.',
      'Exemplary costs of ₹2,00,000 imposed on informant for suppressing civil court litigation.'
    ],
    relevantProvisions: [
      'Section 482, Code of Criminal Procedure, 1973',
      'Section 528, Bharatiya Nagarik Suraksha Adhiniyam, 2023',
      'Section 420, Indian Penal Code'
    ],
    citation: '2026 INSC 398 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-014',
    caseTitle: 'National Association of Software Companies v. Data Protection Board (Demo)',
    caseNumber: 'Writ Petition (Civil) No. 440 of 2026',
    judgmentDate: '11 August 2026',
    bench: '3-Judge Bench',
    judges: ['Justice D. Y. Chandrachud (Former CJI)', 'Justice P. S. Narasimha', 'Justice J. B. Pardiwala'],
    practiceArea: 'Administrative Law',
    caseType: 'Writ Petition',
    isConstitutional: true,
    summary: 'Procedural safeguards and right to hearing under the Digital Personal Data Protection Act (DPDP Act) penalty adjudication process.',
    keyIssues: [
      'Are financial penalty proceedings before the Data Protection Board quasi-judicial requiring oral hearings?',
      'Validity of delegation of rule-making powers concerning cross-border data transfer security assessments.'
    ],
    ratioDecidendi: 'Adjudication of heavy statutory penalties under data privacy laws requires compliance with audi alteram partem and reasoned written orders.',
    keyHoldings: [
      'Data fiduciaries must be afforded adequate opportunity to present technical audit logs before penalty determination.',
      'Board rulings without detailed analytical justification on quantum of fine violate natural justice.'
    ],
    relevantProvisions: [
      'Section 33, Digital Personal Data Protection Act, 2023',
      'Article 14, Constitution of India'
    ],
    citation: '2026 INSC 390 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-015',
    caseTitle: 'Zenith Chemical Industries v. Pollution Control Board (Demo)',
    caseNumber: 'Civil Appeal No. 4022 of 2026',
    judgmentDate: '06 August 2026',
    bench: '2-Judge Bench',
    judges: ['Justice B. R. Gavai', 'Justice Prashant Kumar Mishra'],
    practiceArea: 'Environmental Law',
    caseType: 'Civil Appeal',
    summary: 'Application of absolute liability principle to industrial chemical leakage cases post-NGT compensation orders.',
    keyIssues: [
      'Methodology for calculating environmental restitution costs on chemical manufacturing units.',
      'Can NGT issue ex-parte closure directions without prior show-cause notices?'
    ],
    ratioDecidendi: 'Absolute liability holds hazardous industries accountable irrespective of negligence, but procedural fairness requires post-decisional hearing on damage quantification.',
    keyHoldings: [
      'Polluter Pays principle requires scientific baseline study by independent expert committee.',
      'Industrial units causing hazardous discharge must deposit interim security pending final damage assessment.'
    ],
    relevantProvisions: [
      'Section 15, National Green Tribunal Act, 2010',
      'Water (Prevention and Control of Pollution) Act, 1974'
    ],
    citation: '2026 INSC 382 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-016',
    caseTitle: 'Standard Merchant Bank v. Resolution Professional of Solar Tech Ltd (Demo)',
    caseNumber: 'Civil Appeal No. 2219 of 2026',
    judgmentDate: '02 August 2026',
    bench: '2-Judge Bench',
    judges: ['Justice Sanjiv Khanna', 'Justice SVN Bhatti'],
    practiceArea: 'Insolvency & Bankruptcy',
    caseType: 'Civil Appeal',
    summary: 'Treatment of unliquidated arbitral claims during Resolution Plan approval in IBC corporate insolvency.',
    keyIssues: [
      'Can resolution plans extinguish pending arbitral counterclaims of corporate debtors at zero value?',
      'Duties of Resolution Professional regarding contingent asset disclosure in Information Memorandum.'
    ],
    ratioDecidendi: 'Resolution plans cannot clean the slate by arbitrary extinguishment of corporate debtor’s pending arbitral claims without valuation.',
    keyHoldings: [
      'Arbitral claims of corporate debtor represent potential assets and must be preserved for successful resolution applicants.',
      'NCLAT order setting aside plan modification upheld.'
    ],
    relevantProvisions: [
      'Section 30(2), Insolvency and Bankruptcy Code, 2016',
      'Section 31, Insolvency and Bankruptcy Code, 2016'
    ],
    citation: '2026 INSC 375 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-017',
    caseTitle: 'Oberoi Media Works Ltd v. Copyright Enforcement Agency (Demo)',
    caseNumber: 'Special Leave Petition (C) No. 7810 of 2026',
    judgmentDate: '27 July 2026',
    bench: '2-Judge Bench',
    judges: ['Justice P. S. Narasimha', 'Justice K. V. Viswanathan'],
    practiceArea: 'Intellectual Property',
    caseType: 'Special Leave Petition',
    summary: 'Intermediary liability safe harbor for AI-assisted content aggregation platforms under Section 52 Copyright Act.',
    keyIssues: [
      'Does automated indexing of copyright material by AI models constitute fair dealing or infringement?',
      'Notice-and-takedown obligations of digital curation engines in India.'
    ],
    ratioDecidendi: 'Transformation of copyrighted legal data for analytical research summaries falls within statutory fair dealing provisions when source attribution is preserved.',
    keyHoldings: [
      'Safe harbor protections under IT Act Section 79 apply to AI legal intelligence search indices.',
      'Commercial redistribution of full raw text without authorization remains prohibited.'
    ],
    relevantProvisions: [
      'Section 52(1)(a), Copyright Act, 1957',
      'Section 79, Information Technology Act, 2000'
    ],
    citation: '2026 INSC 368 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-018',
    caseTitle: 'Star Freight Systems v. Union of India (GST Council) (Demo)',
    caseNumber: 'Civil Appeal No. 5890 of 2026',
    judgmentDate: '21 July 2026',
    bench: '3-Judge Bench',
    judges: ['Justice B. V. Nagarathna', 'Justice Ujjal Bhuyan', 'Justice N. Kotiswar Singh'],
    practiceArea: 'Tax Law',
    caseType: 'Civil Appeal',
    summary: 'Binding nature of GST Council recommendations on state tax legislatures post-Mohit Minerals landmark decision.',
    keyIssues: [
      'Can state governments enact divergent GST rates on intra-state logistics contrary to Council recommendations?',
      'Cooperative federalism in fiscal legislative policy.'
    ],
    ratioDecidendi: 'GST Council recommendations hold persuasive value; state legislatures retain constitutional competence subject to harmonized parliamentary coordination.',
    keyHoldings: [
      'Harmonization in tax structure is desirable but sub-national fiscal autonomy is part of basic federal structure.',
      'Imposition of state transit cess on inter-state vehicles declared unconstitutional.'
    ],
    relevantProvisions: [
      'Article 279A, Constitution of India',
      'Article 246A, Constitution of India'
    ],
    citation: '2026 INSC 360 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-019',
    caseTitle: 'Tarun Kumar v. Enforcement Directorate (Demo)',
    caseNumber: 'Criminal Appeal No. 714 of 2026',
    judgmentDate: '15 July 2026',
    bench: '2-Judge Bench',
    judges: ['Justice Abhay S. Oka', 'Justice Aravind Kumar'],
    practiceArea: 'Criminal Law',
    caseType: 'Criminal Appeal',
    summary: 'Condition precedent for arrest under Section 19 PMLA and mandatory recording of reasons to believe in writing.',
    keyIssues: [
      'Is failure to supply written grounds of arrest at the moment of arrest fatal to remand orders?',
      'Compliance with Supreme Court directives in Pankaj Bansal judgment.'
    ],
    ratioDecidendi: 'Furnishing written reasons to believe at the time of arrest is an inviolable constitutional mandate under Article 22(1).',
    keyHoldings: [
      'Non-compliance with mandatory arrest protocol vitiates subsequent custody orders.',
      'Appellant directed to be released on personal bond.'
    ],
    relevantProvisions: [
      'Section 19, Prevention of Money Laundering Act, 2002',
      'Article 22(1), Constitution of India'
    ],
    citation: '2026 INSC 352 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  },
  {
    id: 'sc-2026-020',
    caseTitle: 'Heritage Habitat Trust v. State of Delhi & Ors (Demo)',
    caseNumber: 'Civil Appeal No. 1109 of 2026',
    judgmentDate: '09 July 2026',
    bench: '2-Judge Bench',
    judges: ['Justice Surya Kant', 'Justice Dipankar Datta'],
    practiceArea: 'Civil Litigation',
    caseType: 'Civil Appeal',
    summary: 'Doctrine of adverse possession against municipal statutory authorities in public utility zones.',
    keyIssues: [
      'Can continuous possession over public park land mature into ownership against local municipal bodies?',
      'Requisites for proving animus possidendi against state authorities.'
    ],
    ratioDecidendi: 'Adverse possession claims against public trust land require strict proof of open, hostile, and uninterrupted possession for 30 years without permissive user.',
    keyHoldings: [
      'Public amenity land cannot be lost to private squatters by mere lapse of municipal vigilance.',
      'Encroachments on civic greens directed to be cleared within 60 days.'
    ],
    relevantProvisions: [
      'Article 112, Limitation Act, 1963',
      'Section 25, Limitation Act, 1963'
    ],
    citation: '2026 INSC 341 (Demo)',
    fullTextPdfUrl: '#demo-pdf-download',
    isDemo: true
  }
];
