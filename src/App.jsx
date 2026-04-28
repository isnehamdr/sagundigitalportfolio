// ECE 401 — Families, Communities & Children — Digital Portfolio
// React + Tailwind CSS (CDN-ready, no build step needed)
// Usage: Drop into a Vite/CRA project or use with a Tailwind CDN setup

import { useState } from "react";

// ─────────────────────────────────────────────
// DESIGN TOKENS (mirrors original CSS variables)
// ─────────────────────────────────────────────
const colors = {
  sageDark: "#2d5239",
  sage: "#4a7c59",
  sageMid: "#c5dccb",
  sageLight: "#e8f0eb",
  warm: "#f5f0e8",
  paper: "#fdfcf9",
  ink: "#1a1a18",
  muted: "#5a5a55",
  border: "#ddd8cc",
  amber: "#c17f3a",
  amberLight: "#fdf4e7",
  blue: "#3a6b8a",
  blueLight: "#edf3f7",
  rose: "#c4656a",
};

// ─────────────────────────────────────────────
// TAB CONFIG
// ─────────────────────────────────────────────
const TABS = [
  { id: "home",       label: "Overview" },
  { id: "economic",  label: "Economic" },
  { id: "social",    label: "Social" },
  { id: "cultural",  label: "Cultural & Diversity" },
  { id: "health",    label: "Health & Wellbeing" },
  { id: "crisis",    label: "Crisis & Emergency" },
  { id: "references",label: "References" },
];

// ─────────────────────────────────────────────
// SHARED PRIMITIVE COMPONENTS
// ─────────────────────────────────────────────

/** Dark green site header */
function Header() {
  return (
    <div
      style={{ background: colors.sageDark, color: "white", padding: "1.5rem", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative circles */}
      <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, background: "rgba(255,255,255,0.05)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: -30, left: "30%", width: 130, height: 130, background: "rgba(255,255,255,0.04)", borderRadius: "50%" }} />

      <p style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: colors.sageMid, marginBottom: 4, position: "relative", zIndex: 1 }}>
        ECE 401 — Assessment 3 — Digital Portfolio
      </p>
      <h1 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, marginBottom: 3, position: "relative", zIndex: 1 }}>
        Families, Communities &amp; Children
      </h1>
      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", position: "relative", zIndex: 1 }}>
        A Professional Resource for Early Childhood Educators
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem", position: "relative", zIndex: 1 }}>
        {["5 Contexts", "APA 7th Edition", "Evidence-Based Practice", "Birth to 5 Years"].map((m) => (
          <span key={m} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: colors.sageMid, display: "inline-block" }} />
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Sticky horizontal tab navigation */
function NavBar({ active, setActive }) {
  return (
    <div style={{ background: "white", borderBottom: `1px solid ${colors.border}`, position: "sticky", top: 0, zIndex: 100, overflowX: "auto" }}>
      <div style={{ display: "flex", minWidth: "max-content" }}>
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            style={{
              whiteSpace: "nowrap",
              background: active === t.id ? colors.sageLight : "none",
              border: "none",
              borderBottom: active === t.id ? `2px solid ${colors.sage}` : "2px solid transparent",
              padding: "0.9rem 1.2rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: active === t.id ? colors.sageDark : colors.muted,
              cursor: "pointer",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Context badge + page title + intro paragraph */
function SectionTitle({ badge, icon, title, intro }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: colors.sageLight, color: colors.sageDark,
        fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase",
        padding: "5px 14px", borderRadius: 20, marginBottom: "1rem",
      }}>
        <span style={{ fontSize: 15 }}>{icon}</span> {badge}
      </div>
      <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, marginBottom: "0.5rem", lineHeight: 1.2, color: colors.ink }}>
        {title}
      </h2>
      <p style={{ fontSize: 16, color: colors.muted, borderBottom: `1px solid ${colors.border}`, paddingBottom: "1.5rem" }}>
        {intro}
      </p>
    </div>
  );
}

/** Section wrapper with decorated heading */
function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h3 style={{
        fontFamily: "'Lora', Georgia, serif", fontSize: "1.15rem", fontWeight: 600,
        color: colors.sageDark, display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem",
      }}>
        {title}
        <span style={{ flex: 1, height: 1, background: colors.sageMid }} />
      </h3>
      {children}
    </div>
  );
}

/** Stat tile */
function StatCard({ num, label }) {
  return (
    <div style={{
      background: colors.warm, border: `1px solid ${colors.border}`,
      borderRadius: 10, padding: "1rem", textAlign: "center", flex: "1 1 140px", minWidth: 0,
    }}>
      <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: colors.sageDark }}>{num}</div>
      <div style={{ fontSize: 12, color: colors.muted, marginTop: 4, lineHeight: 1.3 }}>{label}</div>
    </div>
  );
}

/** Stat row — wrapping flex */
function StatRow({ stats }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12, margin: "1.5rem 0" }}>
      {stats.map((s, i) => <StatCard key={i} {...s} />)}
    </div>
  );
}

/** Sage-bordered theory callout */
function TheoryBox({ title, children }) {
  return (
    <div style={{
      background: colors.sageLight, borderLeft: `4px solid ${colors.sage}`,
      borderRadius: "0 10px 10px 0", padding: "1rem 1.2rem", margin: "1rem 0",
    }}>
      <strong style={{ color: colors.sageDark, fontSize: 13.5 }}>{title}</strong>
      <p style={{ fontSize: 13.5, color: colors.muted, marginTop: 6 }}>{children}</p>
    </div>
  );
}

/** Arrow-prefixed impact list */
function ImpactList({ items }) {
  return (
    <ul style={{ listStyle: "none", margin: "0.5rem 0" }}>
      {items.map((it, i) => (
        <li key={i} style={{
          fontSize: 14, color: colors.muted, padding: "6px 0 6px 20px",
          position: "relative", borderBottom: i < items.length - 1 ? `1px solid ${colors.border}` : "none",
        }}>
          <span style={{ position: "absolute", left: 0, color: colors.sage, fontWeight: 600 }}>→</span>
          {it}
        </li>
      ))}
    </ul>
  );
}

/** Amber policy pills */
function PolicyPills({ items }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "1rem 0" }}>
      {items.map((p) => (
        <span key={p} style={{
          background: colors.amberLight, border: "1px solid #e8c87a",
          borderRadius: 20, padding: "4px 14px", fontSize: 12, color: "#7a4f1a", fontWeight: 500,
        }}>{p}</span>
      ))}
    </div>
  );
}

/** Numbered strategy card */
function StrategyCard({ num, title, desc }) {
  return (
    <div style={{
      background: "white", border: `1px solid ${colors.border}`,
      borderRadius: 10, padding: "1.1rem", borderLeft: `4px solid ${colors.sage}`,
    }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: colors.sage, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{num}</div>
      <div style={{ fontWeight: 600, fontSize: 14, color: colors.ink, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 13.5, color: colors.muted, lineHeight: 1.6 }}>{desc}</div>
    </div>
  );
}

/** Strategy grid */
function StrategyGrid({ items }) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {items.map((s, i) => <StrategyCard key={i} {...s} />)}
    </div>
  );
}

/** Blue org partner card */
function OrgCard({ name, desc }) {
  return (
    <div style={{ background: colors.blueLight, border: "1px solid #c5d9e8", borderRadius: 10, padding: "1rem" }}>
      <div style={{ fontWeight: 600, fontSize: 13.5, color: colors.blue, marginBottom: 4 }}>{name}</div>
      <div style={{ fontSize: 13, color: colors.muted }}>{desc}</div>
    </div>
  );
}

/** Org grid */
function OrgGrid({ orgs }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
      {orgs.map((o, i) => <OrgCard key={i} {...o} />)}
    </div>
  );
}

/** Resource card — type: 'web' | 'book' | 'video' */
function ResourceCard({ title, meta, use, type = "web" }) {
  const topBorder = type === "book" ? colors.amber : type === "video" ? colors.rose : colors.sage;
  return (
    <div style={{
      background: "white", border: `1px solid ${colors.border}`,
      borderRadius: 8, padding: "0.9rem", borderTop: `3px solid ${topBorder}`,
    }}>
      <div style={{ fontWeight: 600, fontSize: 13, color: colors.ink, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 11.5, color: colors.muted, marginBottom: 5, fontStyle: "italic" }}>{meta}</div>
      <div style={{ fontSize: 12.5, color: colors.muted, lineHeight: 1.5 }}>{use}</div>
    </div>
  );
}

/** Resource group with label + auto grid */
function ResSection({ label, cards }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div style={{
        fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase",
        color: colors.sage, marginBottom: 10, display: "flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ width: 20, height: 2, background: colors.sage, display: "inline-block" }} />
        {label}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 8 }}>
        {cards.map((c, i) => <ResourceCard key={i} {...c} />)}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// TAB PAGE COMPONENTS
// ─────────────────────────────────────────────

function HomeTab({ setActive }) {
  const contexts = [
    { id: "economic",  icon: "💰", title: "Economic Contexts",       desc: "Poverty, housing stress, financial hardship and their impact on early childhood" },
    { id: "social",    icon: "🤝", title: "Social Contexts",         desc: "Isolation, family breakdown, out-of-home care and social wellbeing" },
    { id: "cultural",  icon: "🌏", title: "Cultural & Diversity",    desc: "First Nations families, immigrant and refugee communities" },
    { id: "health",    icon: "🧠", title: "Health & Wellbeing",      desc: "Parental mental illness, substance use, trauma and grief" },
    { id: "crisis",    icon: "🌊", title: "Crisis & Emergency",      desc: "Natural disasters, family violence, displacement and climate" },
  ];
  return (
    <div>
      {/* Hero */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.sageLight} 0%, ${colors.warm} 100%)`,
        border: `1px solid ${colors.sageMid}`, borderRadius: 16, padding: "2rem",
        marginBottom: "2rem", textAlign: "center",
      }}>
        <h1 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "1.6rem", color: colors.sageDark, marginBottom: "0.8rem" }}>
          Early Childhood Education: Navigating Complexity
        </h1>
        <p style={{ color: colors.muted, maxWidth: 580, margin: "0 auto 1rem", fontSize: 15 }}>
          This portfolio explores the diverse family and community contexts that shape children's lives and early childhood service provision in Australia. Each section presents theory, policy, evidence-based strategies, and curated resources for educators.
        </p>
        <p style={{ fontSize: 12, color: colors.muted }}>Navigate using the tabs above or click a context below to begin</p>
      </div>

      {/* Context nav cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: "2rem" }}>
        {contexts.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            style={{
              background: "white", border: `1px solid ${colors.border}`, borderRadius: 12,
              padding: "1.2rem", cursor: "pointer", textAlign: "left", fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{c.icon}</div>
            <div style={{ fontWeight: 600, fontSize: 14, color: colors.ink, marginBottom: 4 }}>{c.title}</div>
            <div style={{ fontSize: 12.5, color: colors.muted }}>{c.desc}</div>
          </button>
        ))}
      </div>

      {/* About box */}
      <div style={{ padding: "1.5rem", background: colors.warm, borderRadius: 12, border: `1px solid ${colors.border}` }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: colors.sage, marginBottom: "0.8rem" }}>
          About This Portfolio
        </div>
        <p style={{ fontSize: 14, color: colors.muted }}>
          This digital portfolio is designed as a professional resource for early childhood educators working with children and families experiencing diverse challenges. It draws on sociological theory, contemporary Australian research, and national policy frameworks to provide evidence-based guidance. All resources are appropriate for children birth to 5 years. All citations follow APA 7th edition.
        </p>
      </div>
    </div>
  );
}

function EconomicTab() {
  return (
    <div>
      <SectionTitle
        badge="Context 1" icon="💰" title="Economic Contexts"
        intro="Poverty, housing stress, and financial hardship create significant barriers to children's development and wellbeing. Understanding these economic pressures is essential for early childhood educators who serve as critical bridges between vulnerable families and community support."
      />

      <Section title="Understanding the Context">
        <p style={{ color: colors.muted, marginBottom: "0.8rem", fontSize: 14.5 }}>
          Economic disadvantage in Australia encompasses poverty, housing insecurity, unemployment, and financial hardship. The Brotherhood of St Laurence (2022) defines child poverty as households with income below 50% of the median, and the Australian Institute of Health and Welfare (AIHW, 2023) reports that approximately one in six Australian children — around 761,000 children — live in poverty. This figure is disproportionately represented among single-parent families, First Nations communities, recently arrived migrants, and families in regional or remote areas.
        </p>
        <p style={{ color: colors.muted, marginBottom: "1rem", fontSize: 14.5 }}>
          Financial hardship is not a static condition; it exists on a spectrum from temporary financial stress through to entrenched intergenerational poverty. Housing stress — defined as paying more than 30% of household income on housing costs — affects over 40% of low-income renting families in Australia (AIHW, 2023). The compounding effects of poverty, housing instability, food insecurity, and limited access to healthcare create what sociologists call "cumulative disadvantage."
        </p>
        <StatRow stats={[
          { num: "1 in 6",  label: "Australian children live below the poverty line (AIHW, 2023)" },
          { num: "761,000", label: "Children experiencing economic disadvantage in Australia" },
          { num: "40%",     label: "Low-income renters experiencing housing stress" },
        ]} />
        <TheoryBox title="Bronfenbrenner's Ecological Systems Theory (1979)">
          Bronfenbrenner's bioecological model positions the child within nested systems from the immediate family microsystem through to the broader macrosystem of culture and policy. Economic hardship operates at multiple levels: it directly shapes the home microsystem through stress and reduced resources, while also acting at the exosystem (parental employment) and macrosystem (welfare policy) levels. This means economic intervention must occur simultaneously at family, community, and policy levels.
        </TheoryBox>
        <TheoryBox title="Bourdieu's Theory of Capital (1986)">
          Bourdieu's framework distinguishes between economic capital (financial resources), social capital (networks and relationships), and cultural capital (education, knowledge, skills). Families in poverty often experience deficits across all three forms of capital, limiting their access to quality education, health services, and social networks that buffer children against hardship. Early childhood services can serve as significant sites for building social and cultural capital in disadvantaged communities.
        </TheoryBox>
      </Section>

      <Section title="Impact on Children and Families">
        <ImpactList items={[
          "Children in poverty experience higher rates of developmental delay across cognitive, language, and social-emotional domains (Grantham-McGregor et al., 2007)",
          "Housing instability disrupts enrolment continuity, peer relationships, and the sense of safety children need to learn and explore",
          "Food insecurity affects concentration, energy, immune function, and brain development, particularly critical in the 0–5 years window",
          "Parental financial stress increases family conflict, reduces warm and responsive parenting, and elevates children's cortisol levels",
          "Children from low socioeconomic backgrounds start school an average of 18 months behind peers in vocabulary and pre-literacy skills (AEDC, 2022)",
          "Early childhood services in low-income areas often have lower quality ratings, fewer qualified staff, and higher turnover, compounding existing disadvantage",
        ]} />
      </Section>

      <Section title="Social Policy and Australian Responses">
        <PolicyPills items={["Child Care Subsidy (CCS)", "Family Tax Benefit Parts A & B", "National Housing Strategy 2024", "JobSeeker / Youth Allowance", "Closing the Gap", "Early Start Kindergarten", "ACCS (Additional CCS)"]} />
        <p style={{ color: colors.muted, fontSize: 14.5 }}>
          The Child Care Subsidy (CCS) subsidises up to 90% of fees for eligible low-income families, directly improving access to quality early education. The Additional Child Care Subsidy (ACCS) provides further support for families in hardship. The National Housing Strategy (2023–2043) targets the creation of 1.2 million new homes with a proportion of affordable and social housing. Critically, these policies reflect growing recognition that access to quality early childhood education is both a child's right and a key lever for breaking cycles of poverty.
        </p>
      </Section>

      <Section title="Five Evidence-Based Strategies for Practice">
        <StrategyGrid items={[
          { num: "Strategy 1", title: "Trauma-Informed and Strengths-Based Practice", desc: "Reframe interactions to acknowledge family strengths rather than deficits. Use asset-based language in communications and planning. Ask \"What is going well for your family?\" before exploring challenges. This approach, supported by research from Berry Street (2021), improves family engagement and trust." },
          { num: "Strategy 2", title: "Provision of Material Supports Within the Service", desc: "Maintain a \"family pantry\" with nappies, formula, healthy snacks, and second-hand clothing. Partner with local food banks (OzHarvest, Foodbank) to offer regular food packages. Normalise this support to reduce stigma — frame it as \"community sharing.\"" },
          { num: "Strategy 3", title: "Flexible Attendance and Fee Arrangements", desc: "Work with families experiencing financial hardship to create flexible attendance schedules and payment plans. Assist families to apply for CCS and ACCS, and connect them with community legal services if facing debt." },
          { num: "Strategy 4", title: "Rich Language and Literacy Environments", desc: "Counteract vocabulary gaps by prioritising intentional, responsive conversations, shared book reading, storytelling, and language-rich play. Research shows that the \"30 million word gap\" between high and low-income families can be significantly reduced by quality ECE interactions (Hart & Risley, 1995)." },
          { num: "Strategy 5", title: "Community Hub Partnerships", desc: "Transform the ECE setting into a community hub by co-locating services such as maternal and child health, financial counselling, and adult literacy. The Marrung Aboriginal Education Plan and various Family and Children's Centres in Australia demonstrate this integrated model's effectiveness." },
        ]} />
      </Section>

      <Section title="Community and Professional Partnerships">
        <OrgGrid orgs={[
          { name: "Salvation Army — Moneycare",   desc: "Free financial counselling for families in crisis; can be invited into ECE settings for workshops" },
          { name: "OzHarvest",                    desc: "Food rescue organisation that delivers nutritious food to community services at no cost" },
          { name: "Centrelink / Services Australia", desc: "Access to CCS, FTB, and crisis payments; educators can assist families to navigate applications" },
          { name: "Brotherhood of St Laurence",   desc: "Research and advocacy on child poverty; provides community programs in disadvantaged areas" },
          { name: "Good Shepherd Australia",      desc: "No-interest loans (NILs), financial wellbeing programs, and domestic violence support" },
        ]} />
      </Section>

      <Section title="Resources for Educators and Children">
        <ResSection label="Websites and Programs" cards={[
          { type: "web",   title: "Raising Children Network",            meta: "raisingchildren.net.au",    use: "Australian parenting resource with evidence-based guidance on supporting children through financial stress." },
          { type: "web",   title: "AIHW — Child Poverty Dashboard",      meta: "aihw.gov.au",               use: "Data-rich resource tracking child wellbeing indicators. Valuable for educator professional development and advocacy." },
          { type: "web",   title: "Foodbank Australia",                  meta: "foodbank.org.au",            use: "Connection to local food relief services. ECE services can register as distribution partners." },
          { type: "web",   title: "Brotherhood of St Laurence — Early Years", meta: "bsl.org.au/early-years", use: "Programs, research, and resources specifically addressing child poverty and educational equity." },
        ]} />
        <ResSection label="Children's Storybooks (Birth–5 years)" cards={[
          { type: "book", title: "Fly Away Home",                         meta: "Eve Bunting — Ages 4–5",          use: "Addresses homelessness with sensitivity. Use during circle time to open conversations about different homes." },
          { type: "book", title: "The Berenstain Bears and the Trouble with Money", meta: "Stan & Jan Berenstain — Ages 3–5", use: "Introduces concepts of needs vs wants in child-friendly language." },
          { type: "book", title: "Those Shoes",                           meta: "Maribeth Boelts — Ages 3–5",      use: "A child wanting shoes he can't afford — gentle and powerful. Use to validate children's desires while exploring values." },
          { type: "book", title: "Wiggles: Sharing is Caring",            meta: "The Wiggles — Ages 0–2",          use: "Simple, repetitive text about sharing and community. Read with infants and toddlers to build empathy and belonging." },
        ]} />
        <ResSection label="Children's Videos & Shows" cards={[
          { type: "video", title: "Sesame Street — \"For Every Child\"",  meta: "Sesame Workshop — Ages 2–5",   use: "Episodes featuring Lily, a character experiencing food insecurity. Normalises diverse family circumstances." },
          { type: "video", title: "Bluey — \"Market Run\" & \"Camping\"", meta: "ABC Kids — Ages 2–5",          use: "Depicts everyday family life including budgeting and resourcefulness." },
          { type: "video", title: "ABC Kids — PlaySchool",                meta: "ABC Kids — Ages 0–4",          use: "Long-running Australian show depicting diverse families. Use segments showing different home settings." },
          { type: "video", title: "Daniel Tiger's Neighbourhood",         meta: "PBS Kids — Ages 2–4",          use: "Social-emotional learning through everyday situations. Episodes on sharing, community helpers, and feelings." },
        ]} />
      </Section>
    </div>
  );
}

function SocialTab() {
  return (
    <div>
      <SectionTitle
        badge="Context 2" icon="🤝" title="Social Contexts"
        intro="Isolation, family breakdown, and out-of-home care profoundly affect children's sense of security, identity, and social development. Educators play a vital role in providing consistency and connection for children navigating social disruption."
      />

      <Section title="Understanding the Context">
        <p style={{ color: colors.muted, marginBottom: "0.8rem", fontSize: 14.5 }}>
          Social contexts encompass the relational environments that shape children's development beyond the family. Key social stressors affecting Australian children include geographical isolation, social isolation of caregivers, family separation, out-of-home care (OOHC), and incarceration of a parent. The AIHW (2023) reports that 46,000 Australian children live in out-of-home care, with Aboriginal and Torres Strait Islander children 10 times more likely to be in OOHC than non-Indigenous children.
        </p>
        <StatRow stats={[
          { num: "46,000", label: "Children in out-of-home care in Australia (AIHW, 2023)" },
          { num: "10x",    label: "Higher OOHC rate for Aboriginal and Torres Strait Islander children" },
          { num: "50%",    label: "Of Australian marriages end in separation or divorce (ABS, 2022)" },
        ]} />
        <TheoryBox title="Attachment Theory — Bowlby (1969) & Ainsworth (1978)">
          Attachment theory posits that children form strong emotional bonds with primary caregivers, and the quality of these attachments shapes neurological development, stress regulation, and social-emotional competence. Children in out-of-home care or experiencing family breakdown frequently have disrupted attachment histories. ECE educators can serve as "attachment figures" through consistent, warm, responsive caregiving.
        </TheoryBox>
        <TheoryBox title="Family Systems Theory — Minuchin (1974)">
          This theory conceptualises the family as a dynamic system where changes in one part ripple through all members. Divorce, remarriage, and changed custody arrangements alter the family system's structure and communication patterns. ECE educators who understand family systems can tailor communication strategies and support children in adapting to new family configurations.
        </TheoryBox>
      </Section>

      <Section title="Impact on Children and Families">
        <ImpactList items={[
          "Children with insecure attachment histories show higher rates of anxiety, aggression, and difficulty with peer relationships in ECE settings",
          "Parental divorce and separation are associated with increased internalising and externalising behaviours during the transition period",
          "Children in out-of-home care often experience developmental delays, complex trauma responses, and a deep need for predictability and safe relationships",
          "Geographic isolation limits access to playgroups, family support services, and specialist intervention",
          "Social isolation of caregivers reduces the quality and quantity of language and play interactions children receive",
          "Frequent placement changes in OOHC disrupt schooling, peer friendships, and the continuity of care critical for development",
        ]} />
      </Section>

      <Section title="Social Policy and Australian Responses">
        <PolicyPills items={["National Framework for Child Safety", "Family Law Act 1975", "Child Protection Acts (State)", "Connected Beginnings", "Playgroup Australia", "NDIS Early Intervention", "Strong Families, Safe Kids"]} />
        <p style={{ color: colors.muted, fontSize: 14.5 }}>
          Australia's National Framework for Protecting Australia's Children (2021–2031) guides child protection policy, aiming to ensure all children grow up safe, healthy, and thriving. The Connected Beginnings program embeds health, family, and early childhood services within Aboriginal communities, addressing both social isolation and cultural safety.
        </p>
      </Section>

      <Section title="Five Evidence-Based Strategies for Practice">
        <StrategyGrid items={[
          { num: "Strategy 1", title: "Key Person Approach", desc: "Assign each child — especially those in OOHC or experiencing family disruption — a consistent key educator who builds a warm, predictable relationship. Research shows this significantly improves attachment security in group care settings (Elfer et al., 2012)." },
          { num: "Strategy 2", title: "Predictable Routines and Visual Schedules", desc: "Children from chaotic or disrupted home environments rely heavily on the predictability of the ECE setting for co-regulation. Use visual timetables, consistent farewell rituals, and verbal preparation for transitions. Predictability reduces anxiety and builds trust." },
          { num: "Strategy 3", title: "Family Inclusion and Communication", desc: "Develop inclusive communication practices that acknowledge diverse family structures. Avoid assuming two-parent households; use \"family\" rather than \"mum and dad.\" For OOHC, establish clear communication protocols with foster carers and case workers." },
          { num: "Strategy 4", title: "Social Skills and Peer Relationship Building", desc: "Explicitly teach and model friendship skills, conflict resolution, and collaborative play. Use social stories, puppet play, and facilitated play groups to build peer connections." },
          { num: "Strategy 5", title: "Outreach Playgroups for Isolated Families", desc: "Partner with Playgroup Australia and local councils to establish or support mobile or community playgroups for geographically isolated or socially disconnected families. These serve as low-barrier entry points to social connection." },
        ]} />
      </Section>

      <Section title="Community and Professional Partnerships">
        <OrgGrid orgs={[
          { name: "CREATE Foundation",           desc: "National body representing the voice of children in out-of-home care; provides resources for carers and educators" },
          { name: "Relationships Australia",     desc: "Counselling and family support services for separating families; can provide workshops for educators" },
          { name: "Playgroup Australia",         desc: "Facilitates community playgroups particularly in regional/remote areas; advocates for social inclusion of isolated families" },
          { name: "Family Relationship Centres", desc: "Government-funded centres providing mediation and support for separating families" },
          { name: "Child and Family Social Workers", desc: "Professionals embedded in schools and community services who co-ordinate support plans for children in OOHC" },
        ]} />
      </Section>

      <Section title="Resources for Educators and Children">
        <ResSection label="Websites and Programs" cards={[
          { type: "web",   title: "CREATE Foundation",         meta: "create.org.au",                 use: "Resources for supporting children in out-of-home care; professional development materials for educators." },
          { type: "web",   title: "Playgroup Australia",       meta: "playgroupaustralia.com.au",     use: "Find or establish community playgroups. Access resources for welcoming isolated and vulnerable families." },
          { type: "web",   title: "Kids Helpline",             meta: "kidshelpline.com.au",           use: "Resources for children experiencing family stress; educators can access professional support guides." },
          { type: "web",   title: "Family Relationships Online", meta: "familyrelationships.gov.au", use: "Government portal for families experiencing separation; provides referral pathways that educators can share." },
        ]} />
        <ResSection label="Children's Storybooks (Birth–5 years)" cards={[
          { type: "book", title: "Two Homes",         meta: "Claire Masurel — Ages 2–5",   use: "A child describing life across two homes after parental separation. Use in a small group or 1:1 to validate the child's experience." },
          { type: "book", title: "The Invisible String", meta: "Patrice Karst — Ages 3–5", use: "About connection remaining strong even during separation. Powerful for children in OOHC or with incarcerated parents." },
          { type: "book", title: "Owl Babies",         meta: "Martin Waddell — Ages 0–3", use: "Three owlets wait anxiously for their mother — simple, repetitive, and deeply reassuring. Read at drop-off to validate separation anxiety." },
          { type: "book", title: "Families",           meta: "Susan Kuklin — Ages 3–5",   use: "Photographs and child voices from diverse family structures. An affirming celebration of all families." },
        ]} />
        <ResSection label="Children's Videos & Shows" cards={[
          { type: "video", title: "Bluey — \"Sleepytime\" & \"Weekend Dad\"", meta: "ABC Kids — Ages 2–5", use: "Explores parent-child separation, imagination, and connection. Rich starting points for discussing feelings about parents." },
          { type: "video", title: "ABC Me — Little J & Big Cuz",             meta: "ABC — Ages 3–5",       use: "Depicts a child being cared for by extended family — normalises kinship care arrangements." },
          { type: "video", title: "Sesame Street — \"Julia's Story\"",       meta: "Sesame Workshop — Ages 2–5", use: "Introduction to autism and inclusion through Julia's story; use to build peer empathy." },
          { type: "video", title: "Cosmic Kids Yoga Podcast",                meta: "Ages 3–5",             use: "Mindfulness and yoga for young children; supports emotional regulation for children experiencing social stress." },
        ]} />
      </Section>
    </div>
  );
}

function CulturalTab() {
  return (
    <div>
      <SectionTitle
        badge="Context 3" icon="🌏" title="Cultural and Diversity Contexts"
        intro="Australia's rich cultural diversity — including First Nations peoples and communities from over 200 countries — demands culturally responsive early childhood practice. Educators must move beyond tolerance to genuine cultural competence and anti-bias advocacy."
      />

      <Section title="Understanding the Context">
        <p style={{ color: colors.muted, marginBottom: "0.8rem", fontSize: 14.5 }}>
          Australia is one of the world's most culturally diverse nations. Approximately 29% of Australians were born overseas. Aboriginal and Torres Strait Islander peoples represent the world's oldest living cultures, with over 500 distinct language groups, and continue to face the enduring impacts of colonisation, including intergenerational trauma, systemic disadvantage, and ongoing over-representation in child protection systems.
        </p>
        <p style={{ color: colors.muted, marginBottom: "1rem", fontSize: 14.5 }}>
          Refugee and humanitarian entrant families face unique challenges including trauma prior to arrival, language barriers, unfamiliarity with Australian systems, and ongoing settlement stress. Research consistently demonstrates that strong cultural identity is a protective factor for children's wellbeing and long-term outcomes (Marmot, 2010).
        </p>
        <StatRow stats={[
          { num: "29%",  label: "Of Australians born overseas (ABS, 2021)" },
          { num: "500+", label: "Distinct First Nations language groups in Australia" },
          { num: "200+", label: "Countries of birth represented in Australian communities" },
        ]} />
        <TheoryBox title="Anti-Bias Curriculum — Derman-Sparks (1989)">
          The anti-bias curriculum challenges educators to actively counter bias, stereotyping, and discrimination in ECE settings. Rather than "colour-blindness," it promotes genuine engagement with identity, diversity, justice, and activism at developmentally appropriate levels. Children as young as 2–3 years notice racial and cultural differences and begin forming attitudes; ECE is a critical window for building respectful, justice-oriented identities.
        </TheoryBox>
        <TheoryBox title="Cultural Historical Activity Theory — Vygotsky (1978)">
          Vygotsky's sociocultural theory emphasises that learning is inherently social and cultural. Children learn through participation in cultural practices, and their development cannot be understood outside of cultural context. For First Nations children and children from immigrant families, this means that their prior cultural knowledge and learning practices are valid and valuable — funds of knowledge to be built upon.
        </TheoryBox>
      </Section>

      <Section title="Impact on Children and Families">
        <ImpactList items={[
          "Children who feel their culture is invisible or devalued in the ECE setting show lower engagement, self-esteem, and sense of belonging",
          "Language barriers isolate families from participation and can leave children as \"language brokers\" — translating for adults, which is developmentally inappropriate",
          "First Nations children continue to experience significantly worse outcomes across health, education, and wellbeing indicators, compounded by systemic racism",
          "Refugee children frequently carry pre-migration trauma, and additional stress from settlement challenges, affecting their capacity for learning",
          "Bicultural children may experience identity confusion and peer pressure to \"choose\" between their home and Australian cultures",
          "Educators' own cultural assumptions and biases — even unconscious ones — shape the equity of children's experiences in ECE settings",
        ]} />
      </Section>

      <Section title="Social Policy and Australian Responses">
        <PolicyPills items={["Closing the Gap 2023", "Multicultural Australia Policy", "National Quality Standard (NQS)", "EYLF — Belonging, Being & Becoming", "Humanitarian Settlement Program", "NAIDOC Week", "Reconciliation Action Plans"]} />
        <p style={{ color: colors.muted, fontSize: 14.5 }}>
          The National Quality Standard (Quality Area 6) explicitly requires ECE services to value cultural diversity and to actively work with families and communities. The Early Years Learning Framework's core of "Belonging, Being and Becoming" is grounded in recognition that all children's identities, cultures, and languages must be respected. Closing the Gap's Priority Reform 1 centres on formal partnerships with Aboriginal and Torres Strait Islander communities.
        </p>
      </Section>

      <Section title="Five Evidence-Based Strategies for Practice">
        <StrategyGrid items={[
          { num: "Strategy 1", title: "Embedding Cultural Identity in the Curriculum", desc: "Incorporate children's home languages, cultural practices, foods, music, art, and stories authentically into everyday programming — not only during \"multicultural days.\" Seek guidance from families and community members as cultural authorities; avoid tokenism or stereotyping." },
          { num: "Strategy 2", title: "Two-Way Learning with First Nations Communities", desc: "Build genuine, long-term relationships with local Aboriginal and Torres Strait Islander communities. Engage Elders and community members as knowledge holders; develop curriculum that reflects Country, story, and culture. Develop and implement a Reconciliation Action Plan in consultation with community." },
          { num: "Strategy 3", title: "Multilingual Environments", desc: "Display labels, greetings, and signage in community languages. Source books and resources in home languages. Recruit bilingual educators and interpreters. Research clearly shows that supporting home language development strengthens English acquisition and cognitive development (Cummins, 2001)." },
          { num: "Strategy 4", title: "Culturally Safe Transitions and Enrolment", desc: "Provide enrolment forms and orientation materials in accessible language. Offer home visits or community-based orientation for newly arrived families. Identify a key cultural broker within the service or community for refugee families during the first 12 months." },
          { num: "Strategy 5", title: "Critical Reflection on Bias and Privilege", desc: "Engage in regular critical reflection as a team, using anti-bias frameworks to examine whose cultures are centred and whose are marginalised in your setting. Use the EYLF's principle of \"Critical Reflection\" to scrutinise programming, resources, and communication through a cultural equity lens." },
        ]} />
      </Section>

      <Section title="Community and Professional Partnerships">
        <OrgGrid orgs={[
          { name: "SNAICC — First Nations Voice",      desc: "Peak body for Aboriginal and Torres Strait Islander children's services; provides policy, resources, and advocacy materials" },
          { name: "Multicultural Australia",           desc: "Settlement support for refugees and migrants; partnerships with ECE services for family transition support" },
          { name: "Red Cross — Refugee Support",       desc: "Case management and community support for refugee families; can connect ECE services to newly arrived families" },
          { name: "FECCA — Federation of Ethnic Communities", desc: "Advocates for culturally diverse communities; provides resources and policy advice for inclusive ECE practice" },
          { name: "Local Aboriginal Land Councils",   desc: "First point of contact for establishing respectful relationships with Country; can facilitate introductions to Elders" },
        ]} />
      </Section>

      <Section title="Resources for Educators and Children">
        <ResSection label="Websites and Programs" cards={[
          { type: "web", title: "SNAICC Resources Hub",                meta: "snaicc.org.au",                    use: "Comprehensive resources for culturally safe practice with First Nations children and families." },
          { type: "web", title: "Reconciliation Australia",            meta: "reconciliation.org.au",            use: "Reconciliation Action Plan templates and resources." },
          { type: "web", title: "ACARA — Australian Curriculum (First Nations)", meta: "australiancurriculum.edu.au", use: "Cross-curriculum priority resources; valuable for early years adaptations and planning authentic First Nations content." },
          { type: "web", title: "Refugee Council of Australia",        meta: "refugeecouncil.org.au",            use: "Policy briefings and community guides. Access settlement statistics and family support pathways." },
        ]} />
        <ResSection label="Children's Storybooks (Birth–5 years)" cards={[
          { type: "book", title: "Wombat Stew",      meta: "Marcia K. Vaughan — Ages 2–5", use: "Australian bush animals and community cooperation. Use to celebrate Australian identity and Indigenous ecological knowledge." },
          { type: "book", title: "Welcome to Country", meta: "Aunty Joy Murphy — Ages 3–5", use: "A Wurundjeri Elder's welcome. Read at the beginning of the year; model respectful acknowledgment of Country in your daily practice." },
          { type: "book", title: "My Two Blankets",  meta: "Irena Kobald — Ages 3–5",    use: "A refugee child's experience of settling in a new land. Read to build empathy in all children." },
          { type: "book", title: "Cub",              meta: "Cary Fagan — Ages 0–2",      use: "A gentle story about belonging and a new environment. Use with infants during settling-in periods." },
        ]} />
        <ResSection label="Children's Videos & Shows" cards={[
          { type: "video", title: "Little J & Big Cuz (ABC)", meta: "ABC Me — Ages 3–5", use: "First Nations characters navigating culture and school. Centralises Aboriginal and Torres Strait Islander perspectives." },
          { type: "video", title: "Barrumbi Kids",             meta: "NITV — Ages 3–5",  use: "Set in Arnhem Land, depicting everyday life for First Nations children. Authentic representation." },
          { type: "video", title: "Sesame Street — Many Languages", meta: "Sesame Workshop — Ages 2–5", use: "Multilingual segments celebrating diverse languages and cultures." },
          { type: "video", title: "Story Time with Noni (NITV)", meta: "NITV — Ages 0–4", use: "First Nations stories told by Aboriginal presenters. Integrate into daily storytime routine." },
        ]} />
      </Section>
    </div>
  );
}

function HealthTab() {
  return (
    <div>
      <SectionTitle
        badge="Context 4" icon="🧠" title="Health and Wellbeing Contexts"
        intro="Parental mental illness, substance use, family violence, trauma, and grief fundamentally shape children's neurological development and sense of safety. Early childhood educators are often among the first professionals to recognise signs of child and family distress."
      />

      <Section title="Understanding the Context">
        <p style={{ color: colors.muted, marginBottom: "0.8rem", fontSize: 14.5 }}>
          Health and wellbeing challenges encompass: parental mental illness, substance use disorders, domestic and family violence, childhood trauma, physical illness, disability, and grief and loss. The AIHW (2022) estimates that 1 in 5 Australians experience a mental health condition in any given year, and children of parents with mental illness are two to three times more likely to develop mental health problems themselves. In the perinatal period, maternal depression affects approximately 1 in 6 Australian mothers.
        </p>
        <p style={{ color: colors.muted, marginBottom: "1rem", fontSize: 14.5 }}>
          Adverse Childhood Experiences (ACEs) research (Felitti et al., 1998) has fundamentally shaped understanding of how chronic stress and trauma in early childhood become "biologically embedded," affecting brain architecture, immune function, and lifelong health and learning. Protective relationships with consistent, caring adults are the single most powerful buffer against the impact of adversity.
        </p>
        <StatRow stats={[
          { num: "1 in 5", label: "Australians experience mental illness annually (AIHW, 2022)" },
          { num: "1 in 6", label: "New mothers experience perinatal depression" },
          { num: "2–3x",   label: "Higher mental health risk for children of parents with mental illness" },
        ]} />
        <TheoryBox title="Neuroscience of Early Adversity — Shonkoff & Phillips (2000)">
          The Harvard Center on the Developing Child's research demonstrates that the first 1,000 days of life represent a window of extraordinary neuroplasticity during which experiences — positive and negative — fundamentally shape brain architecture. "Serve and return" interactions (responsive caregiving) build neural connections for language, cognition, and social-emotional development. Chronic adversity without a buffering relationship disrupts this architecture.
        </TheoryBox>
        <TheoryBox title="Trauma-Informed Practice — Harris & Fallot (2001)">
          Trauma-informed care shifts the question from "What is wrong with you?" to "What happened to you?" It recognises that challenging behaviours in children are frequently adaptations to unsafe or unpredictable environments, not wilful defiance. The five principles — safety, trustworthiness, choice, collaboration, and empowerment — provide a framework for ECE practice that is both therapeutic and educational.
        </TheoryBox>
      </Section>

      <Section title="Impact on Children and Families">
        <ImpactList items={[
          "Children of parents with depression experience lower quality of caregiving, reduced language input, and disrupted attachment — all affecting cognitive and social-emotional development",
          "Prenatal alcohol and substance exposure can cause Foetal Alcohol Spectrum Disorder (FASD), affecting memory, impulse control, social understanding, and learning",
          "Children experiencing domestic violence live in a state of chronic hypervigilance, which impairs concentration, executive function, and the ability to form trusting relationships",
          "Grief and loss in young children manifests as regression, sleep disturbance, separation anxiety, and developmental delays",
          "Children with trauma histories frequently require significantly more relational support, predictability, and sensory regulation opportunities within the ECE setting",
          "Early childhood educators are mandated reporters of child abuse and neglect, placing them in a critical protective role in these families' lives",
        ]} />
      </Section>

      <Section title="Social Policy and Australian Responses">
        <PolicyPills items={["National Mental Health Strategy", "Fifth Mental Health Plan 2017", "NDIS Early Childhood Approach", "Headspace — Early Psychosis", "Mandatory Reporting Laws (State)", "PANDA — Perinatal Mental Health", "Alcohol and Drug Strategy"]} />
        <p style={{ color: colors.muted, fontSize: 14.5 }}>
          The National Mental Health Strategy (2022–2032) commits to a comprehensive, integrated approach to mental health across the lifespan. The NDIS Early Childhood Approach supports children under 9 with developmental concerns access early intervention. Mandatory reporting legislation in every Australian state and territory requires ECE educators to report reasonable suspicion of child abuse or neglect.
        </p>
      </Section>

      <Section title="Five Evidence-Based Strategies for Practice">
        <StrategyGrid items={[
          { num: "Strategy 1", title: "Trauma-Informed Relationship-Based Practice", desc: "Prioritise relationship and safety above all else for children experiencing adversity. Use calm, predictable, warm interactions; avoid power struggles; offer choices to build agency. Understand dysregulated behaviour as communication rather than defiance." },
          { num: "Strategy 2", title: "Regulatory Environments and Co-Regulation", desc: "Design the physical environment to support sensory regulation: quiet spaces, dim lighting zones, heavy blankets, water play, movement opportunities. Be an active co-regulator — model and narrate your own calm state, use breathing and body-based strategies alongside children." },
          { num: "Strategy 3", title: "Grief and Loss Support Protocols", desc: "Develop a service-level protocol for supporting children experiencing bereavement or significant loss. Train all educators in developmentally appropriate grief responses. Maintain normal routines, allow regressive behaviour without shame, and create meaningful rituals of remembrance." },
          { num: "Strategy 4", title: "Non-Judgmental Family Support and Referral", desc: "Approach parents experiencing mental illness or substance use with empathy and non-judgment. Maintain a warm, discreet referral pathway to services (PANDA, GP, Lifeline, local mental health services). Frame support as \"I noticed... and I'm wondering how we can help.\"" },
          { num: "Strategy 5", title: "Educator Wellbeing and Secondary Trauma Support", desc: "Educators working with children in adversity are at risk of secondary traumatic stress and compassion fatigue. Services must build in regular reflective supervision, debriefing opportunities, and formal EAP access. Educator wellbeing is directly linked to the quality of care children receive." },
        ]} />
      </Section>

      <Section title="Community and Professional Partnerships">
        <OrgGrid orgs={[
          { name: "PANDA",                        desc: "Perinatal Anxiety and Depression Australia; helpline and resources for parents experiencing perinatal mental health challenges" },
          { name: "CAMHS (Child and Adolescent MHS)", desc: "State-based specialist mental health service for children; ECE services can refer families and request consultation" },
          { name: "Lifeline Australia",            desc: "24/7 crisis support; educators can provide this number to families in acute distress" },
          { name: "Berry Street — CREATE Education", desc: "Trauma-informed practice training and resources specifically designed for education settings including early childhood" },
          { name: "Alcohol and Drug Foundation",  desc: "Non-judgmental resources and referral pathways for families experiencing substance use challenges" },
        ]} />
      </Section>

      <Section title="Resources for Educators and Children">
        <ResSection label="Websites and Programs" cards={[
          { type: "web", title: "Harvard Center on the Developing Child", meta: "developingchild.harvard.edu", use: "Research, videos, and practitioner resources on early brain development, toxic stress, and resilience." },
          { type: "web", title: "Berry Street Childhood Institute",       meta: "berrystreet.org.au",          use: "Trauma-informed practice training, resources, and research for ECE educators." },
          { type: "web", title: "PANDA — Educators Resource",            meta: "panda.org.au",                use: "Information for educators on recognising and responding to parental perinatal mental health concerns." },
          { type: "web", title: "Emerging Minds",                        meta: "emergingminds.com.au",        use: "Practitioner resources for children's mental health; includes free online courses for ECE educators on trauma, grief, parental mental illness, and anxiety." },
        ]} />
        <ResSection label="Children's Storybooks (Birth–5 years)" cards={[
          { type: "book", title: "The Huge Bag of Worries", meta: "Virginia Ironside — Ages 3–5", use: "A child carries her worries in a bag until she learns to share them. Use to open conversations about anxiety and trusted adults." },
          { type: "book", title: "When Dinosaurs Die",      meta: "Laurie Krasny Brown — Ages 3–5", use: "A clear, sensitive guide to death and grief for young children." },
          { type: "book", title: "In My Heart",             meta: "Jo Witek — Ages 0–3",           use: "An emotions exploration book with interactive textures. Excellent for infants and toddlers to build emotional vocabulary." },
          { type: "book", title: "Grumpy Monkey",           meta: "Suzanne Lang — Ages 2–5",       use: "A monkey who is grumpy for no clear reason — a funny validation of big unexplained feelings." },
        ]} />
        <ResSection label="Children's Videos & Shows" cards={[
          { type: "video", title: "Daniel Tiger's Neighbourhood",        meta: "PBS Kids — Ages 2–4",         use: "Explicit emotion regulation strategies set to song. Use Daniel Tiger's strategies as consistent service-wide regulation tools." },
          { type: "video", title: "Bluey — \"Sleepytime\"",              meta: "ABC Kids — Ages 2–5",         use: "Explores dreams, imagination, and parental connection. Use for children with separation anxiety." },
          { type: "video", title: "Sesame Street — \"When Families Grieve\"", meta: "Sesame Workshop — Ages 3–5", use: "Resources including video segments specifically addressing death and grief with young children." },
          { type: "video", title: "Smiling Mind App (Junior)",           meta: "All ages — guided audio",     use: "Australian-developed mindfulness app with content for young children. Use body scan and breathing exercises as a calming strategy." },
        ]} />
      </Section>
    </div>
  );
}

function CrisisTab() {
  return (
    <div>
      <SectionTitle
        badge="Context 5" icon="🌊" title="Crisis and Emergency Contexts"
        intro="Natural disasters, family violence, climate anxiety, displacement, and refugee experiences confront children with acute and prolonged crises that overwhelm normal coping capacity. Early childhood services must be prepared to respond, recover, and build long-term resilience."
      />

      <Section title="Understanding the Context">
        <p style={{ color: colors.muted, marginBottom: "0.8rem", fontSize: 14.5 }}>
          Australia is among the world's most disaster-prone nations: bushfires, floods, cyclones, and drought are recurring features of the national landscape, intensifying with climate change. The 2019–20 Black Summer bushfires affected over 12 million hectares and displaced hundreds of thousands of Australians, including many families with young children (AIHW, 2022).
        </p>
        <p style={{ color: colors.muted, marginBottom: "1rem", fontSize: 14.5 }}>
          Family violence is Australia's most pervasive emergency context: 1 in 4 Australian women has experienced physical or sexual violence by a current or former partner (AIHW, 2023). Climate change increasingly manifests as "eco-anxiety" even in young children, who are aware of environmental threats through media and community conversation.
        </p>
        <StatRow stats={[
          { num: "1 in 4", label: "Women affected by partner violence (AIHW, 2023)" },
          { num: "12M ha", label: "Burned in the 2019–20 Black Summer fires" },
          { num: "82,000", label: "Humanitarian entrants settled in Australia annually" },
        ]} />
        <TheoryBox title="Post-Traumatic Growth Theory — Tedeschi & Calhoun (1996)">
          While trauma causes genuine harm, research also demonstrates that supportive, relationship-centred responses can facilitate post-traumatic growth. For young children, this is mediated primarily through adults: children who have at least one warm, responsive, believing adult in their life show dramatically better recovery from acute trauma. ECE settings and educators can be that transformative relationship.
        </TheoryBox>
        <TheoryBox title="Ecological and Disaster Risk Theory — Norris et al. (2008)">
          Community resilience after disaster depends on the interconnection of four adaptive capacities: economic development, social capital, information and communication, and community competence. ECE services contribute directly to community resilience by providing social capital, trusted communication channels, and continuity of normalising routines during and after crises. Reopening the ECE service after disaster is itself a critical community resilience intervention.
        </TheoryBox>
      </Section>

      <Section title="Impact on Children and Families">
        <ImpactList items={[
          "Young children experiencing natural disasters show significantly elevated rates of PTSD, depression, separation anxiety, and regression in the 12–24 months post-event",
          "Family violence creates a dual trauma: the violence itself, and the disruption of separation from home, school, and peer network that follows when families flee",
          "Children in refugee families often carry pre-migration, in-transit, and post-arrival trauma, creating complex layered presentations that may be misinterpreted as developmental disorder",
          "Climate anxiety is documented in children as young as 5, manifesting as worry, nightmares, and loss of trust in adults to protect them",
          "Disruption of ECE attendance during and after crises compounds developmental impacts, particularly for children from disadvantaged backgrounds",
          "Educators themselves experience shared community trauma after natural disasters, requiring specific support to maintain their caregiving capacity",
        ]} />
      </Section>

      <Section title="Social Policy and Australian Responses">
        <PolicyPills items={["National Plan to End Violence 2022–32", "Disaster Risk Reduction Strategy", "National Recovery Plan (Bushfires)", "1800 RESPECT", "Safe and Supported Framework", "UNHCR Australia", "Family Violence Leave (Fair Work)"]} />
        <p style={{ color: colors.muted, fontSize: 14.5 }}>
          Australia's National Plan to End Violence Against Women and Children (2022–2032) commits $1.7 billion over 10 years to prevention, early intervention, response, and recovery. ECE services are explicitly named as critical early intervention settings in multiple national frameworks. Educators must know local referral pathways for family violence disclosures, including 1800RESPECT (1800 737 732).
        </p>
      </Section>

      <Section title="Five Evidence-Based Strategies for Practice">
        <StrategyGrid items={[
          { num: "Strategy 1", title: "Emergency Preparedness Planning", desc: "Develop and regularly rehearse a comprehensive Emergency Management Plan that includes communication protocols with families, procedures for children in care during disasters, and business continuity for service re-opening after disruption. Practice evacuation drills with children in a calm, play-based way." },
          { num: "Strategy 2", title: "Stabilisation and Normalisation After Crisis", desc: "After acute crisis, prioritise safety, predictability, and routine above academic learning. Restore normal service rhythm as quickly as safely possible. Research shows that restoration of routine is the single most powerful short-term recovery intervention for young children (La Greca et al., 2002)." },
          { num: "Strategy 3", title: "Child-Led Expressive Opportunities", desc: "Provide open-ended creative materials — paint, clay, loose parts, sand, water — that allow children to process crisis experiences through play and art without adult direction. Avoid asking children to \"draw what happened\"; create a safe, rich environment and follow the child's lead." },
          { num: "Strategy 4", title: "Safe Disclosure Practices for Family Violence", desc: "Train all educators to respond calmly and safely to disclosures of family violence: believe the child, don't pressure for details, don't promise secrecy, and follow your mandatory reporting obligations. Have a named person responsible for case consultation and follow-up." },
          { num: "Strategy 5", title: "Environmental and Nature-Based Resilience", desc: "Build children's connection to the natural world as a foundation for resilience and climate hope. Gardening, bush walking, weather observation, and caring for living things counteract climate anxiety with agency and wonder. Research in \"nature deficit disorder\" (Louv, 2005) supports outdoor engagement as a mental health intervention." },
        ]} />
      </Section>

      <Section title="Community and Professional Partnerships">
        <OrgGrid orgs={[
          { name: "1800RESPECT",                   desc: "National family violence and sexual assault counselling service; essential referral for any family violence disclosure." },
          { name: "Red Cross — Disaster Recovery", desc: "Emergency relief, emotional support, and community recovery following natural disasters; partners with ECE services in disaster-affected communities" },
          { name: "Safe Steps (Victoria) / DVConnect", desc: "State-based family violence crisis services providing emergency accommodation, safety planning, and advocacy" },
          { name: "UNHCR Australia",               desc: "United Nations High Commissioner for Refugees; provides resources and policy advice for services working with refugee and asylum-seeking families" },
          { name: "Australian Psychological Society", desc: "Provides disaster mental health resources, community trauma support guides, and referral to psychologists for complex presentations" },
        ]} />
      </Section>

      <Section title="Resources for Educators and Children">
        <ResSection label="Websites and Programs" cards={[
          { type: "web", title: "Australian Red Cross — Disaster Ready", meta: "redcross.org.au/emergencies",  use: "Emergency preparedness resources for families and services; includes guidance for talking to young children about disasters." },
          { type: "web", title: "1800RESPECT",                          meta: "1800respect.org.au",           use: "Educator-specific resources on responding to family violence disclosures; includes a professional support line." },
          { type: "web", title: "Climate for Change — Educator Resources", meta: "climateforchange.org.au",  use: "Age-appropriate resources for discussing climate change with young children; focuses on agency, hope, and environmental action." },
          { type: "web", title: "Emerging Minds — Disaster Resources",  meta: "emergingminds.com.au/disasters", use: "Evidence-based practitioner guides for supporting children's mental health after natural disasters." },
        ]} />
        <ResSection label="Children's Storybooks (Birth–5 years)" cards={[
          { type: "book", title: "Possum and the Summer Storm", meta: "Wildlife Rescue — Ages 2–5",  use: "Australian animal characters navigating weather events. Normalises environmental disruption." },
          { type: "book", title: "A Little Spot of Safety",    meta: "Diane Alber — Ages 3–5",      use: "Teaches children about safe and unsafe situations and identifying trusted adults. Essential for services working with children experiencing family violence." },
          { type: "book", title: "The Storm Whale",            meta: "Benji Davies — Ages 0–3",     use: "Themes of loneliness, caring for others, and natural events. Read after storm events or with children who are isolated." },
          { type: "book", title: "When Sophie Gets Angry",     meta: "Molly Bang — Ages 2–5",       use: "Sophie experiences overwhelming anger and finds nature as a calming refuge. Excellent for children processing crisis." },
        ]} />
        <ResSection label="Children's Videos & Shows" cards={[
          { type: "video", title: "Bluey — \"Camping\" & \"Bushfire\"",       meta: "ABC Kids — Ages 2–5",         use: "Connects to Australian landscape and family resilience. Use to build excitement for nature and open conversations about fire safety." },
          { type: "video", title: "Sesame Street — \"Elmo's World: Helping\"",meta: "Sesame Workshop — Ages 2–4",   use: "Explores community helpers and ways children can contribute. Builds children's sense of agency in difficult situations." },
          { type: "video", title: "Mister Rogers' Neighbourhood",             meta: "PBS — Ages 2–5",               use: "Fred Rogers' guidance on scary world events (\"Look for the helpers\") is timeless. Use specifically after community-level crises." },
          { type: "video", title: "ABC Kids — Behind the News (BTN) Junior",  meta: "ABC — Ages 4–5",               use: "Age-appropriate news explanations including climate and disaster stories. For older preschoolers to provide accurate, manageable information." },
        ]} />
      </Section>
    </div>
  );
}

function ReferencesTab() {
  const sections = [
    {
      letter: "A",
      refs: [
        "Australian Bureau of Statistics. (2021). Census of population and housing: Cultural diversity data summary. ABS. https://www.abs.gov.au",
        "Australian Bureau of Statistics. (2022). Marriages and divorces, Australia. ABS. https://www.abs.gov.au",
        "Australian Early Development Census. (2022). National report 2021. Australian Government. https://www.aedc.gov.au",
        "Australian Institute of Health and Welfare. (2022). Australia's welfare 2022: Data insights. AIHW. https://www.aihw.gov.au",
        "Australian Institute of Health and Welfare. (2023). Child protection Australia 2021–22. AIHW. https://www.aihw.gov.au",
        "Ainsworth, M. D. S., Blehar, M. C., Waters, E., & Wall, S. (1978). Patterns of attachment: A psychological study of the strange situation. Erlbaum.",
      ],
    },
    {
      letter: "B–C",
      refs: [
        "Berry Street. (2021). Trauma-informed positive education: Year 7 overview. Berry Street Childhood Institute.",
        "Bourdieu, P. (1986). The forms of capital. In J. G. Richardson (Ed.), Handbook of theory and research for the sociology of education (pp. 241–258). Greenwood.",
        "Bowlby, J. (1969). Attachment and loss: Vol. 1. Attachment. Basic Books.",
        "Bronfenbrenner, U. (1979). The ecology of human development: Experiments by nature and design. Harvard University Press.",
        "Brotherhood of St Laurence. (2022). Poverty and inequality in Australia. Brotherhood of St Laurence.",
        "Cummins, J. (2001). Negotiating identities: Education for empowerment in a diverse society (2nd ed.). California Association for Bilingual Education.",
      ],
    },
    {
      letter: "D–F",
      refs: [
        "Department of Education. (2022). Belonging, being and becoming: The Early Years Learning Framework for Australia (V2.0). Australian Government.",
        "Derman-Sparks, L., & Edwards, J. O. (1989). Anti-bias curriculum: Tools for empowering young children. National Association for the Education of Young Children.",
        "Elfer, P., Goldschmied, E., & Selleck, D. (2012). Key persons in the early years (2nd ed.). Routledge.",
        "Felitti, V. J., Anda, R. F., Nordenberg, D., Williamson, D. F., Spitz, A. M., Edwards, V., Koss, M. P., & Marks, J. S. (1998). Relationship of childhood abuse and household dysfunction to many of the leading causes of death in adults. American Journal of Preventive Medicine, 14(4), 245–258.",
      ],
    },
    {
      letter: "G–L",
      refs: [
        "Grantham-McGregor, S., Cheung, Y. B., Cueto, S., Glewwe, P., Richter, L., & Strupp, B. (2007). Developmental potential in the first 5 years for children in developing countries. The Lancet, 369(9555), 60–70.",
        "Harris, M., & Fallot, R. D. (2001). Using trauma theory to design service systems. Jossey-Bass.",
        "Hart, B., & Risley, T. R. (1995). Meaningful differences in the everyday experience of young American children. Brookes.",
        "La Greca, A. M., Silverman, W. K., Vernberg, E. M., & Roberts, M. C. (Eds.). (2002). Helping children cope with disasters and terrorism. American Psychological Association.",
        "Louv, R. (2005). Last child in the woods: Saving our children from nature-deficit disorder. Algonquin Books.",
      ],
    },
    {
      letter: "M–V",
      refs: [
        "Marmot, M. (2010). Fair society, healthy lives: The Marmot review. UCL Institute of Health Equity.",
        "Minuchin, S. (1974). Families and family therapy. Harvard University Press.",
        "Norris, F. H., Stevens, S. P., Pfefferbaum, B., Wyche, K. F., & Pfefferbaum, R. L. (2008). Community resilience as a metaphor, theory, set of capacities, and strategy for disaster readiness. American Journal of Community Psychology, 41(1–2), 127–150.",
        "Shonkoff, J. P., & Phillips, D. A. (Eds.). (2000). From neurons to neighborhoods: The science of early childhood development. National Academy Press.",
        "Tedeschi, R. G., & Calhoun, L. G. (1996). The posttraumatic growth inventory: Measuring the positive legacy of trauma. Journal of Traumatic Stress, 9(3), 455–471.",
        "Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.",
      ],
    },
  ];

  return (
    <div>
      <SectionTitle
        badge="Reference List" icon="📚" title="Reference List"
        intro="All sources are cited in APA 7th edition format. This portfolio draws on peer-reviewed research, government data, and recognised professional frameworks."
      />
      {sections.map((s) => (
        <div key={s.letter} style={{ background: colors.warm, border: `1px solid ${colors.border}`, borderRadius: 12, padding: "1.5rem", marginBottom: 12 }}>
          <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "1rem", color: colors.ink, marginBottom: "1rem" }}>{s.letter}</h3>
          {s.refs.map((r, i) => (
            <p key={i} style={{ fontSize: 12.5, color: colors.muted, marginBottom: 8, paddingLeft: "2em", textIndent: "-2em", lineHeight: 1.6 }}>{r}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// ROOT APP COMPONENT
// ─────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("home");

  const tabMap = {
    home:       <HomeTab setActive={setActive} />,
    economic:   <EconomicTab />,
    social:     <SocialTab />,
    cultural:   <CulturalTab />,
    health:     <HealthTab />,
    crisis:     <CrisisTab />,
    references: <ReferencesTab />,
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: colors.paper, color: colors.ink, minHeight: "100vh" }}>
      {/* Google Fonts */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" />

      <Header />
      <NavBar active={active} setActive={setActive} />

      {/* Page content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 1rem" }}>
        {tabMap[active]}
      </div>
    </div>
  );
}

/*
──────────────────────────────────────────
  HOW TO USE
──────────────────────────────────────────
  Option A — Vite / Create React App
  ───────────────────────────────────────
  1. npm create vite@latest my-ece-portfolio -- --template react
  2. cd my-ece-portfolio && npm install
  3. Replace src/App.jsx with this file
  4. In src/main.jsx keep: ReactDOM.createRoot(document.getElementById('root')).render(<App />)
  5. npm run dev

  Option B — Tailwind (if you want Tailwind classes instead of inline styles)
  ───────────────────────────────────────
  1. Follow Vite setup above, then:
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p
  2. The component currently uses inline styles (compatible with any setup).
     You can progressively migrate individual components to Tailwind classes.

  Component Map
  ───────────────────────────────────────
  Primitives:   Header, NavBar, SectionTitle, Section
  Data display: StatCard, StatRow, TheoryBox, ImpactList, PolicyPills
  Cards:        StrategyCard, StrategyGrid, OrgCard, OrgGrid
  Resources:    ResourceCard, ResSection
  Pages:        HomeTab, EconomicTab, SocialTab, CulturalTab,
                HealthTab, CrisisTab, ReferencesTab
  Root:         App (default export)
*/