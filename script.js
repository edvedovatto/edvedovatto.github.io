const T = {
  pt: {
    title: "Eduardo Vedovatto | Senior QA Engineer",
    meta: "Eduardo Vedovatto - Senior QA Engineer. Mais de 10 anos em QA, em fintech, pagamentos e automotivo: automação de testes web e API no pipeline e IA aplicada a QA.",
    skip: "Pular para o conteúdo",
    nav_projects: "Projetos", nav_exp: "Experiência", nav_skills: "Ferramentas", nav_contact: "Contato",
    role: "Senior QA Engineer", focus: "Test Automation · AI-Driven QA",
    lead: "Mais de 10 anos em QA, em fintech, pagamentos e automotivo. Automação web e API no pipeline (Playwright, Cypress, Java + REST Assured), IA aplicada a QA e um olhar de teste manual e exploratório para o que a automação não pega.",
    f_open: "Disponível para vagas", f_remote: "Remoto, Porto Alegre, Brasil (UTC-3)", f_english: "Inglês C2",
    h_projects: "Projetos",
    setslip_kind: "Mobile · Android",
    setslip_title: "Setslip: um app Android meu, com testes de ponta a ponta",
    setslip_desc: "App que monta fichas de treino e \"imprime\" cada uma numa impressora térmica desenhada na tela. Criei o app com IA, já pensando na automação: ele foi desenhado para ser testável desde o começo.",
    shot_slip: "Tela do Setslip: ficha de costas e tríceps impressa, com 0 de 5 exercícios feitos e os botões de grupo muscular embaixo",
    shot_checked: "Ficha de costas e tríceps com 2 de 5 exercícios marcados como feitos",
    setslip_b1: "O app expõe IDs estáveis e o estado da tela: o teste espera o resultado, não um tempo fixo. Sem XPath, sem Thread.sleep.",
    setslip_b2: "Cada cenário começa do app limpo, sem abrir nova sessão do Appium. Falha vem com print, hierarquia de tela, logcat e vídeo.",
    setslip_b3: "Acessibilidade testada: alvo de toque de 48dp, descrições e anúncios de leitor de tela.",
    n_scen: "cenários E2E (Gherkin)", n_unit: "testes unitários", n_emu: "emulador no CI", n_ci2: "smoke no CI", n_ci2_v: "toda noite",
    juice_kind: "Web + API",
    juice_title: "Juice Shop: a mesma loja testada pela tela e pela API",
    juice_desc: "Testes automatizados do OWASP Juice Shop, uma loja online feita com falhas de propósito, para mostrar o que vale testar na tela e o que vale testar na API.",
    juice_b1: "Tela só para o que só a tela mostra: mensagens de erro, redirecionamentos e a compra de ponta a ponta. Regra de negócio, permissão e contrato ficam na API.",
    juice_b2: "Os testes que alteram dados criam o próprio usuário pela API (no checkout, também endereço e cartão). Principais respostas validadas por JSON Schema; casos de 400, 401, 404 e controle de acesso (um usuário tentando ler ou apagar dado de outro, IDOR).",
    juice_b3: "Os bugs que o app tem de propósito viraram 13 testes do comportamento certo. Eles rodam numa passada à parte no CI, que não trava o build e avisa se algum for corrigido. Acessibilidade checada com axe (WCAG 2.1 AA), com exceções documentadas no README.",
    n_ui: "testes de tela", n_api: "testes de API", n_bugs: "testes de bug conhecido", n_ci1: "regressão no CI",
    l_repo: "Repositório ↗", l_strategy: "Estratégia ↗", l_bugs: "Bugs que a suíte expõe ↗", l_ci: "Execuções do CI ↗", l_report: "Relatório do último run ↗",
    l_decisions: "Decisões da suíte ↗", l_features: "Cenários ↗", l_apk: "Baixar o APK ↗",
    sig: "Nos dois projetos, bug encontrado vira teste do comportamento certo, marcado como problema conhecido. Esses testes rodam numa passada à parte: não travam o build e avisam quando o bug é corrigido.",
    h_exp: "Experiência",
    j1_when: "abr 2026 - set 2026", j1_role: "QA Engineer",
    j1_ctx: "Fintech global de pagamentos. Criei skills customizadas do Claude Code para a rotina de QA (briefing diário, análise de documentação, monitoramento de shift-left via Jira) e, ao ver que cerca de 84% da documentação estava desatualizada havia mais de dois anos, uma solução que sugere a atualização a cada entrega. Evoluí a automação em Java (Selenium, REST Assured + JUnit) e fiz testes manuais, inclusive validação mobile em iOS e Android.",
    j2_when: "out 2025 - mar 2026", j2_role: "Senior QA Engineer · PJ",
    j2_ctx: "Automação do zero com Playwright (Page Object) integrada a CI/CD no Azure DevOps, em diferentes projetos, incluindo uma fintech dos EUA. APIs automatizadas com Java + REST Assured ou Postman, conforme o projeto. Estruturei as camadas principais em cerca de três semanas e usei Playwright MCP para mapear o sistema e gerar testes a partir dos fluxos, revisando tudo que a IA gerou.",
    j3_when: "jan 2023 - jun 2025", j3_role: "Senior QA Engineer",
    j3_ctx: "Projeto Americas (TicketLog). Geração automática de massa de teste via API, com cerca de 70% menos tempo de preparação; implantei Definition of Done e análise sistemática de defeitos (cerca de 80% vinham do frontend). Também liderei o time de qualidade do projeto (5 QAs).",
    j4_when: "jun 2022 - set 2022", j4_role: "QA Engineer",
    j4_ctx: "Testes funcionais e de API com Postman, com validação de dados em SQL.",
    j5_when: "fev 2016 - mai 2022", j5_role: "QA Engineer e Desenvolvedor Jr",
    j5_ctx: "Entre os clientes, BMW Group, TicketLog e ADP Brasil (ERP): planos de teste, regressão, automação de UI com Robot Framework e API com Postman/Newman.",
    h_cert: "Certificação", cert_v: "(Certified Tester Foundation Level), 2018",
    h_lang: "Idiomas", lang_v: "Português nativo · Inglês C2 (EF SET 95/100)",
    h_cases: "Como eu trabalho",
    bio: "Atuo na qualidade de ponta a ponta, em projetos nacionais e globais: refinamento e critérios de aceite, planejamento de testes, Definition of Done e shift-left. Automatizo web e APIs integrado a CI/CD e uso IA no fluxo de QA para mapear sistemas, gerar testes e analisar demandas.",
    c1: "Bug que só acontecia com internet lenta: limitei a rede no navegador, vi duas requisições dependentes terminando fora de ordem e entreguei aos devs os passos exatos para reproduzir.",
    c2: "Massa de teste era o gargalo do TicketLog (regras diferentes por país): gerar os dados via API cortou cerca de 70% do tempo de preparação, primeiro para os devs, depois para o QA.",
    c3: "Defeito chegando tarde: a análise mostrou que cerca de 80% vinham do frontend; com Definition of Done, checklists e workshops, a prevenção foi para onde o problema nascia.",
    h_skills: "Ferramentas", s1_t: "Automação", s2: "Java + REST Assured + JUnit (no CI/CD) · Postman/Newman, Bruno",
    s4_t: "IA em QA", s4: "Claude Code (skills customizadas), GitHub Copilot, Playwright MCP, workflows de AI Agents",
    s5_t: "Linguagens", s6_t: "Gestão de testes", s7_t: "Projetos pessoais (GitHub)",
    h_contact: "Contato",
    contact_lead: "Aberto a vagas remotas de Senior QA Engineer, QA Automation e SDET.",
    regime: "Remoto · PJ/contractor ou CLT · fuso compatível com EUA e Europa",
    l_recs: "Recomendações no LinkedIn ↗",
    copied: "E-mail copiado ✓"
  },
  en: {
    title: "Eduardo Vedovatto | Senior QA Engineer",
    meta: "Eduardo Vedovatto - Senior QA Engineer. 10+ years in QA across fintech, payments and automotive: web and API test automation in CI and AI applied to QA.",
    skip: "Skip to content",
    nav_projects: "Projects", nav_exp: "Experience", nav_skills: "Skills", nav_contact: "Contact",
    role: "Senior QA Engineer", focus: "Test Automation · AI-Driven QA",
    lead: "10+ years in QA across fintech, payments and automotive. Web and API automation in CI (Playwright, Cypress, Java + REST Assured), AI applied to QA, and a hands-on exploratory eye for what automation misses.",
    f_open: "Open to work", f_remote: "Remote, Porto Alegre, Brazil (UTC-3)", f_english: "English C2",
    h_projects: "Projects",
    setslip_kind: "Mobile · Android",
    setslip_title: "Setslip: my own Android app, tested end to end",
    setslip_desc: "An app that builds workout sheets and \"prints\" each one on a thermal printer drawn on screen. I built it AI-driven with automation in mind: it was designed to be testable from day one.",
    shot_slip: "Setslip screen: a printed back and triceps sheet, 0 of 5 exercises done, with the muscle group buttons below",
    shot_checked: "Back and triceps sheet with 2 of 5 exercises checked off",
    setslip_b1: "The app exposes stable IDs and the screen state: tests wait for outcomes, not fixed delays. No XPath, no Thread.sleep.",
    setslip_b2: "Every scenario starts from a clean app without opening a new Appium session. Failures come with a screenshot, view hierarchy, logcat and video.",
    setslip_b3: "Accessibility tested: 48dp touch targets, content descriptions and screen reader announcements.",
    n_scen: "E2E scenarios (Gherkin)", n_unit: "unit tests", n_emu: "emulator in CI", n_ci2: "smoke in CI", n_ci2_v: "every night",
    juice_kind: "Web + API",
    juice_title: "Juice Shop: one shop, tested through the UI and the API",
    juice_desc: "Automated tests for OWASP Juice Shop, an online shop built with flaws on purpose, showing what belongs in the UI and what belongs in the API.",
    juice_b1: "UI tests cover only what the UI alone can show: error messages, redirects and the purchase end to end. Business rules, permissions and contracts live in the API tests.",
    juice_b2: "Tests that change data create their own user through the API (checkout tests also create the address and card). Main responses checked against JSON schemas, plus 400, 401, 404 and broken access control (one user reading or deleting another user's data, IDOR).",
    juice_b3: "The app's built-in bugs became 13 tests of the correct behavior. They run in a separate CI pass that doesn't block the build and flags any that get fixed. Accessibility checked with axe (WCAG 2.1 AA), with exceptions documented in the README.",
    n_ui: "UI tests", n_api: "API tests", n_bugs: "known-issue tests", n_ci1: "regression in CI",
    l_repo: "Repository ↗", l_strategy: "Strategy ↗", l_bugs: "Bugs the suite exposes ↗", l_ci: "CI runs ↗", l_report: "Latest test report ↗",
    l_decisions: "Suite decisions ↗", l_features: "Scenarios ↗", l_apk: "Download the APK ↗",
    sig: "In both projects, a bug found becomes a test of the correct behavior, tagged as a known issue. Those tests run in a separate pass: they don't block the build and flag when the bug gets fixed.",
    h_exp: "Experience",
    j1_when: "Apr 2026 - Sep 2026", j1_role: "QA Engineer",
    j1_ctx: "Global payments fintech. Built custom Claude Code skills for day-to-day QA (daily ticket briefing, documentation analysis, Jira-based shift-left monitoring) and, after finding about 84% of the documentation had not been updated in over two years, a solution that suggests updates with each delivery. Extended the Java automation (Selenium, REST Assured + JUnit) and did hands-on manual testing, including mobile validation on iOS and Android.",
    j2_when: "Oct 2025 - Mar 2026", j2_role: "Senior QA Engineer · contractor",
    j2_ctx: "Built automation from scratch with Playwright (Page Object), integrated into CI/CD on Azure DevOps, across several projects including a US fintech. APIs automated with Java + REST Assured or Postman, depending on the project. Structured the core layers in about three weeks and used Playwright MCP to map the system and generate tests from its flows, reviewing all AI output.",
    j3_when: "Jan 2023 - Jun 2025", j3_role: "Senior QA Engineer",
    j3_ctx: "Americas project (TicketLog). Automated test-data generation via API, cutting preparation time by about 70%; introduced a Definition of Done and systematic defect analysis (about 80% of issues were frontend). Also led the project's QA team of five.",
    j4_when: "Jun 2022 - Sep 2022", j4_role: "QA Engineer",
    j4_ctx: "Functional and API testing with Postman, with SQL data validation.",
    j5_when: "Feb 2016 - May 2022", j5_role: "QA Engineer and Junior Developer",
    j5_ctx: "Clients included BMW Group, TicketLog and ADP Brasil (ERP): test plans, regression, UI automation with Robot Framework and API testing with Postman/Newman.",
    h_cert: "Certification", cert_v: "(Certified Tester Foundation Level), 2018",
    h_lang: "Languages", lang_v: "Portuguese (native) · English C2 (EF SET 95/100)",
    h_cases: "How I work",
    bio: "I work across the whole quality lifecycle on Brazilian and global projects: refinement and acceptance criteria, test planning, Definition of Done and shift-left. I automate web and APIs integrated into CI/CD and use AI in the QA workflow to map systems, generate tests and analyze incoming work.",
    c1: "A bug that only showed up on slow connections: I throttled the network in the browser, found two dependent requests finishing out of order, and gave developers exact repro steps.",
    c2: "Test data was the bottleneck on TicketLog (different rules per country): generating it through the API cut preparation time by about 70%, first for developers, then for QA.",
    c3: "Defects were found too late: analysis showed about 80% came from the frontend, so I introduced a Definition of Done, checklists and workshops to prevent them at the source.",
    h_skills: "Skills", s1_t: "Automation", s2: "Java + REST Assured + JUnit (in CI/CD) · Postman/Newman, Bruno",
    s4_t: "AI in QA", s4: "Claude Code (custom skills), GitHub Copilot, Playwright MCP, AI agent workflows",
    s5_t: "Programming languages", s6_t: "Test management", s7_t: "Personal projects (GitHub)",
    h_contact: "Contact",
    contact_lead: "Open to remote Senior QA Engineer, QA Automation and SDET roles.",
    regime: "Remote · contractor or full-time · US and European time-zone overlap",
    l_recs: "LinkedIn recommendations ↗",
    copied: "Email copied ✓"
  }
};

function setLang(lang) {
  const t = T[lang];
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.title = t.title;
  document.querySelector('meta[name="description"]').content = t.meta;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-alt]").forEach(img => { img.alt = t[img.dataset.i18nAlt]; });
  document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  try { localStorage.setItem("lang", lang); } catch {}
}

document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

const email = document.querySelector(".email");
const address = email.dataset.email;
let copiedTimer;
email.addEventListener("click", () => {
  navigator.clipboard?.writeText(address).then(() => {
    email.textContent = T[document.documentElement.lang === "en" ? "en" : "pt"].copied;
    clearTimeout(copiedTimer);
    copiedTimer = setTimeout(() => { email.textContent = address; }, 2000);
  }).catch(() => {});
});

let saved = null;
try { saved = localStorage.getItem("lang"); } catch {}
const brZones = "Sao_Paulo Araguaina Bahia Belem Boa_Vista Campo_Grande Cuiaba Eirunepe Fortaleza Maceio Manaus Noronha Porto_Velho Recife Rio_Branco Santarem".split(" ");
const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
const inBrazil = brZones.some(z => zone === "America/" + z) || navigator.languages.some(l => l.toLowerCase() === "pt-br");
setLang(T[saved] ? saved : inBrazil ? "pt" : "en");
