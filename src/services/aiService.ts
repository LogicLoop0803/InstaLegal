import { getAllJudgments } from './judgmentService';
import { getAllNews } from './newsService';
import { getAllCounsel } from './counselService';

export interface AIMessage {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: string;
  relatedJudgmentIds?: string[];
}

/**
 * Service abstraction for InstaLegal AI Assistant.
 * Designed to easily connect to a backend LLM API (e.g., Gemini API or custom service).
 */
export const askNyayaAI = async (query: string): Promise<AIMessage> => {
  // Simulate natural latency
  await new Promise(resolve => setTimeout(resolve, 800));

  const lowerQuery = query.toLowerCase();
  const judgments = getAllJudgments();
  const news = getAllNews();
  const counsel = getAllCounsel();

  let responseText = '';
  const relatedIds: string[] = [];

  if (lowerQuery.includes('constitutional') || lowerQuery.includes('article')) {
    const constJudgments = judgments.filter(j => j.practiceArea === 'Constitutional Law' || j.isConstitutional);
    relatedIds.push(...constJudgments.map(j => j.id));

    responseText = `### ⚖️ InstaLegal AI Constitutional Intelligence Summary

Found **${constJudgments.length} Constitutional Benches & Matters** in recent records:

1. **${constJudgments[0]?.caseTitle || 'Climate Rights Petition'}**
   - **Bench:** ${constJudgments[0]?.bench}
   - **Ratio Decidendi:** ${constJudgments[0]?.ratioDecidendi}
   - **Key Provisions:** ${constJudgments[0]?.relevantProvisions.join(', ')}

2. **${constJudgments[1]?.caseTitle || 'State Expropriation Matter'}**
   - **Ratio:** Contractual rights in PPP concessions constitute property under Article 300A requiring natural justice and fair compensation.

> **Legal Takeaway:** The Apex Court continues to strictly enforce Article 21 procedural compliance and limits arbitrary executive revocation in commercial-public contracts.`;

  } else if (lowerQuery.includes('arbitration') || lowerQuery.includes('section 11') || lowerQuery.includes('section 34')) {
    const arbJudgments = judgments.filter(j => j.practiceArea === 'Arbitration');
    relatedIds.push(...arbJudgments.map(j => j.id));

    responseText = `### ⚖️ InstaLegal AI Arbitration Briefing

Key Supreme Court Arbitration rulings in current intelligence index:

- **${arbJudgments[0]?.caseTitle || 'Apex Arbitral Nominees'}** (${arbJudgments[0]?.citation || '2026 INSC 479'})
  - **Ratio:** Unsubstantiated fraud allegations in Section 36 stay applications do not grant an automatic unconditional stay without threshold proof.
- **${arbJudgments[1]?.caseTitle || 'Vikramaditya Power Co.'}** (${arbJudgments[1]?.citation || '2026 INSC 405'})
  - **Ratio:** Interim emergency arbitrator orders are enforceable under Section 17(2) of the Arbitration Act for domestic seated arbitrations.

**Actionable Insight for Litigators:** Ensure Section 11 petitions are filed within 3 years of arbitration notice to prevent limitation bars under Article 137.`;

  } else if (lowerQuery.includes('insolvency') || lowerQuery.includes('ibc') || lowerQuery.includes('nclt')) {
    const ibcJudgments = judgments.filter(j => j.practiceArea === 'Insolvency & Bankruptcy');
    relatedIds.push(...ibcJudgments.map(j => j.id));

    responseText = `### 🏢 InstaLegal AI Insolvency & IBC Analysis

Key Insolvency & Resolution Rulings:

1. **${ibcJudgments[0]?.caseTitle || 'FinCorp Asset Reconstruction'}**
   - **Holding:** Section 53 IBC non-obstante priority overrides state tax liens. Financial creditors retain statutory first charge over state GST claims.
2. **${ibcJudgments[1]?.caseTitle || 'Standard Merchant Bank'}**
   - **Holding:** Resolution plans cannot arbitrarily extinguish corporate debtor’s pending arbitral claims at zero value without valuation.

> **Legislative Alert:** IBC Amendment Bill 2026 has been introduced proposing group insolvency consolidation and 90-day fast-track NCLT approvals.`;

  } else if (lowerQuery.includes('counsel') || lowerQuery.includes('aor') || lowerQuery.includes('advocate')) {
    const topCounsel = counsel.slice(0, 3);
    responseText = `### 🏛️ Verified Supreme Court Counsel Discovery

Based on your prompt, here are top-verified Advocates-on-Record and Senior Counsel matching active practice areas:

${topCounsel.map(c => `- **${c.name}** (${c.designation}) — ${c.location} | Practice: ${c.practiceAreas.join(', ')} | ${c.experienceYears} Years Exp`).join('\n')}

You can view full profiles or request direct consultation through the Verified Counsel Hub.`;

  } else if (lowerQuery.includes('today') || lowerQuery.includes('what changed') || lowerQuery.includes('recent')) {
    responseText = `### ⚡ Today's Apex Court Legal Intelligence

**Morning Intelligence Briefing:**
- **Judgments Handed Down:** 5 new rulings indexed today including high-impact Constitutional Bench orders.
- **Top News:** Supreme Court Constitution Bench begins hearing on sub-classification of protected groups under Article 16(4).
- **Practice Focus:** Criminal procedure bail safeguards under PMLA reaffirmed; non-supply of written grounds vitiates arrest.

Would you like to examine specific judgments or dive deeper into practice area trends?`;

  } else {
    responseText = `### 🤖 InstaLegal AI Legal Assistant

I analyzed your query across **${judgments.length} Apex Court judgments**, **${news.length} news briefs**, and **${counsel.length} verified counsel profiles**.

**Key Findings for "${query}":**
- Found relevant Supreme Court precedents in **Constitutional Law**, **Arbitration**, and **Commercial Litigation**.
- Recent ratios emphasize strict adherence to statutory limitation and natural justice in executive administrative orders.

Feel free to ask for specific case citations, ratio decidendi analysis, statutory provisions, or counsel recommendations!`;
  }

  return {
    id: `ai-${Date.now()}`,
    sender: 'assistant',
    content: responseText,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    relatedJudgmentIds: relatedIds
  };
};
