
// Scenarios data
const scenarios = [
    {
        "title": "Scenario 1: Biometric Data and Surveillance Ethics",
        "text": "You are designing a public security system that uses facial recognition to prevent crimes. A local advocacy group raises concerns about racial bias and surveillance abuse. Using the data improves security but risks reinforcing systemic bias.",
        "optionA": "Use the biometric data",
        "feedbackA": "You chose to use the biometric data. This increases security but risks exacerbating bias and infringing on privacy.",
        "privacyChangeA": -20,
        "trustChangeA": 15,
        "optionB": "Avoid using the data",
        "feedbackB": "You chose to avoid using the data. This avoids ethical concerns but may reduce the system's effectiveness.",
        "privacyChangeB": 20,
        "trustChangeB": -10
    },
    {
        "title": "Scenario 2: Educational Assessment Bias",
        "text": "You are creating a predictive model for student success. Historical data shows disparities based on socioeconomic background. Including this data may improve accuracy but perpetuate inequities in resource allocation.",
        "optionA": "Use the full dataset",
        "feedbackA": "You chose to use the full dataset. This maximizes model performance but risks reinforcing systemic inequities.",
        "equityChangeA": -15,
        "accuracyChangeA": 20,
        "optionB": "Exclude the sensitive data",
        "feedbackB": "You chose to exclude the sensitive data. This addresses bias but may lead to less accurate predictions.",
        "equityChangeB": 20,
        "accuracyChangeB": -10
    },
    {
        "title": "Scenario 3: Environmental Data and Economic Growth",
        "text": "You are part of a committee deciding whether to publish environmental data that reveals the harmful practices of a local industry. Publishing it promotes accountability but could hurt the region's economic growth.",
        "optionA": "Publish the data",
        "feedbackA": "You chose to publish the data. This promotes transparency but may cause job losses and economic decline.",
        "environmentChangeA": 25,
        "economicChangeA": -15,
        "optionB": "Withhold the data",
        "feedbackB": "You chose to withhold the data. This protects the economy but undermines environmental advocacy.",
        "environmentChangeB": -20,
        "economicChangeB": 15
    },
    {
        "title": "Scenario 4: Customer Behavior Tracking",
        "text": "Your team proposes tracking users' behavior on a platform to personalize experiences. This could increase engagement but raises significant privacy concerns.",
        "optionA": "Implement tracking",
        "feedbackA": "You chose to implement tracking. This improves user experience but risks breaching user trust.",
        "privacyChangeA": -15,
        "engagementChangeA": 20,
        "optionB": "Avoid tracking",
        "feedbackB": "You chose to avoid tracking. This protects privacy but limits personalization capabilities.",
        "privacyChangeB": 20,
        "engagementChangeB": -10
    },
    {
        "title": "Scenario 5: Law Enforcement and Predictive Policing",
        "text": "You are tasked with implementing a predictive policing model. Historical data indicates certain communities have been over-policed. Using this data could perpetuate discrimination but improve crime prevention.",
        "optionA": "Use the data",
        "feedbackA": "You chose to use the data. This improves crime prediction but risks perpetuating discrimination.",
        "trustChangeA": -20,
        "crimePreventionChangeA": 25,
        "optionB": "Exclude the data",
        "feedbackB": "You chose to exclude the data. This reduces bias but might weaken the model’s effectiveness.",
        "trustChangeB": 15,
        "crimePreventionChangeB": -10
    },
    {
        "title": "Scenario 6: Medical Research and Consent",
        "text": "You discover a valuable dataset from patients who were not fully informed about its future uses. Using the data could advance medical research but violates ethical consent standards.",
        "optionA": "Use the dataset",
        "feedbackA": "You chose to use the dataset. This accelerates progress but disregards patient autonomy.",
        "ethicsChangeA": -20,
        "researchProgressChangeA": 25,
        "optionB": "Discard the dataset",
        "feedbackB": "You chose to discard the dataset. This respects ethics but delays research breakthroughs.",
        "ethicsChangeB": 20,
        "researchProgressChangeB": -15
    },
    {
        "title": "Scenario 7: Social Media Moderation and Free Speech",
        "text": "You are moderating content on a social media platform. A dataset suggests that targeting certain keywords could reduce misinformation, but it may also suppress legitimate conversations.",
        "optionA": "Enforce strict moderation",
        "feedbackA": "You chose to enforce strict moderation. This reduces misinformation but risks infringing on free speech.",
        "trustChangeA": -10,
        "accuracyChangeA": 20,
        "optionB": "Allow open discussion",
        "feedbackB": "You chose to allow open discussion. This protects free speech but may allow misinformation to spread.",
        "trustChangeB": 15,
        "accuracyChangeB": -20
    },
    {
        "title": "Scenario 8: Disaster Relief and Resource Allocation",
        "text": "During a disaster, you collect data showing that wealthier neighborhoods report damage more frequently, but poorer areas are more vulnerable. Allocating resources based on reports may lead to inequitable distribution.",
        "optionA": "Use the report data",
        "feedbackA": "You chose to use the report data. This ensures responsiveness and they promiss donations for rebuild. But it overlooks vulnerabilities.",
        "equityChangeA": -20,
        "efficiencyChangeA": 15,
        "optionB": "Prioritize underserved areas",
        "feedbackB": "You chose to prioritize underserved areas. This promotes equity but may delay some assistance.",
        "equityChangeB": 20,
        "efficiencyChangeB": -15
    },
    {
        "title": "Scenario 9: Hiring and Algorithmic Bias",
        "text": "Your company implements an AI system to screen resumes. Historical data reveals a bias against candidates from underrepresented groups. Ignoring this data reduces bias but might miss patterns for effective hiring.",
        "optionA": "Use the algorithm",
        "feedbackA": "You chose to use the algorithm. This streamlines hiring but risks perpetuating bias.",
        "diversityChangeA": -15,
        "efficiencyChangeA": 20,
        "optionB": "Rework the algorithm",
        "feedbackB": "You chose to rework the algorithm. This addresses bias but delays hiring processes.",
        "diversityChangeB": 20,
        "efficiencyChangeB": -10
    },
    {
        "title": "Scenario 10: Transportation Planning and Marginalized Communities",
        "text": "A new public transit system proposal relies on commuter data that underrepresents marginalized communities. Using this data may optimize efficiency but fail to serve those in need.",
        "optionA": "Base decisions on the data",
        "feedbackA": "You chose to base decisions on the data. This maximizes efficiency but overlooks equity.",
        "equityChangeA": -20,
        "efficiencyChangeA": 15,
        "optionB": "Incorporate additional inputs",
        "feedbackB": "You chose to incorporate additional inputs. This promotes inclusivity but complicates planning.",
        "equityChangeB": 20,
        "efficiencyChangeB": -15
    },
    {
        "title": "Scenario 11: Autonomous Vehicles and Ethical Dilemmas",
        "text": "You are designing an autonomous vehicle algorithm. Your data shows that prioritizing pedestrian safety can increase risks for passengers in certain situations. Balancing these priorities is challenging.",
        "optionA": "Prioritize pedestrian safety",
        "feedbackA": "You chose to prioritize pedestrian safety. This reduces harm to pedestrians but increases risks for passengers.",
        "pedestrianSafetyChangeA": 20,
        "passengerSafetyChangeA": -15,
        "optionB": "Prioritize passenger safety",
        "feedbackB": "You chose to prioritize passenger safety. This protects passengers but may increase risks for pedestrians.",
        "pedestrianSafetyChangeB": -15,
        "passengerSafetyChangeB": 20
    },
    {
        "title": "Scenario 12: Workplace Monitoring for Productivity",
        "text": "Your company proposes using employee monitoring tools to improve productivity. These tools collect data on employee activities, but they may invade workers' privacy.",
        "optionA": "Implement monitoring tools",
        "feedbackA": "You chose to implement monitoring tools. This improves productivity but reduces employee privacy.",
        "productivityChangeA": 15,
        "privacyChangeA": -20,
        "optionB": "Avoid using monitoring tools",
        "feedbackB": "You chose to avoid using monitoring tools. This protects privacy but may lead to reduced productivity.",
        "productivityChangeB": -10,
        "privacyChangeB": 20
    },
    {
        "title": "Scenario 13: Public Health Data and Individual Privacy",
        "text": "You are developing a public health campaign to combat an infectious disease. Sharing anonymized patient data could help target interventions but risks re-identification of individuals in small communities.",
        "optionA": "Share anonymized data",
        "feedbackA": "You chose to share anonymized data. This improves intervention strategies but risks breaching privacy.",
        "publicHealthChangeA": 20,
        "privacyChangeA": -15,
        "optionB": "Do not share data",
        "feedbackB": "You chose not to share the data. This protects privacy but limits the effectiveness of interventions and may cause more severe pandemic.",
        "publicHealthChangeB": -20,
        "privacyChangeB": 20
    },
    {
        "title": "Scenario 14: Financial Inclusion and Risk Models",
        "text": "You are developing a credit risk model for a bank. Including data from alternative sources, like social media, improves accuracy for underserved populations but raises concerns about fairness and privacy.",
        "optionA": "Use alternative data sources",
        "feedbackA": "You chose to use alternative data sources. This improves accuracy but risks fairness and privacy concerns.",
        "financialInclusionChangeA": 20,
        "privacyChangeA": -15,
        "optionB": "Avoid alternative data",
        "feedbackB": "You chose to avoid alternative data. This ensures fairness but may exclude underserved populations.",
        "financialInclusionChangeB": -10,
        "privacyChangeB": 20
    },
    {
        "title": "Scenario 15: Energy Consumption and Smart Meters",
        "text": "Your team proposes installing smart meters to collect real-time energy usage data. This helps optimize energy distribution but raises concerns about how the data might be used by third parties.",
        "optionA": "Install smart meters",
        "feedbackA": "You chose to install smart meters. This improves energy efficiency but risks misuse of personal data.",
        "efficiencyChangeA": 25,
        "privacyChangeA": -15,
        "optionB": "Do not install smart meters",
        "feedbackB": "You chose not to install smart meters. This protects privacy but reduces opportunities for energy optimization.",
        "efficiencyChangeB": -15,
        "privacyChangeB": 20
    },
	{
        title: "Scenario 16: The Census and Privacy Dilemma",
        text: "You are a census taker tasked with collecting household data. During your rounds, you encounter a family with a child who is undocumented. Reporting could fulfill your legal obligation but risks separating the child from their family.",
        optionA: "Report the child",
        feedbackA: "You chose to report the child. This could aid policy-making but risks deportation and family separation.",
        privacyChangeA: -15,
        trustChangeA: 20,
        optionB: "Conceal their status",
        feedbackB: "You chose to conceal their status. This protects the child and family but leaves incomplete data.",
        privacyChangeB: 20,
        trustChangeB: -10,
    }
];

let currentScenario = 0;
let results = {
    privacy: 0,
    trust: 0,
    equity: 0,
    efficiency: 0,
    environment: 0,
    crimePrevention: 0,
    publicHealth: 0,
};

const updateResults = (scenario, choice) => {
    const metrics = Object.keys(results);

    // Update metrics based on the choice
    metrics.forEach((metric) => {
        const changeKey = `${metric}Change${choice}`;
        if (scenario[changeKey] !== undefined) {
            results[metric] += scenario[changeKey];
        }
    });
};

const showSummary = () => {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    // Display results for each metric
    for (const [metric, value] of Object.entries(results)) {
        if (value !== 0) {
            resultsContainer.innerHTML += `<p><strong>${metric.charAt(0).toUpperCase() + metric.slice(1)}:</strong> ${value > 0 ? "+" : ""}${value}</p>`;
        }
    }
    resultsContainer.innerHTML += `<p>Although some of the settings are exaggerated, many are realistic and have happened to me. For example, in Scenario 4, "Your team proposes tracking users' behavior on a platform to personalize experiences. This could increase engagement but raises significant privacy concerns." I used to work at *** company, where sensitive user information—such as addresses, phone numbers, and dates of birth—was used for model training. While this data was critical for fraud prevention and recommendation systems, it also raised significant privacy issues. Users could not opt out if they wanted to use the service.

Similarly, hiring algorithms are incredibly common but often biased. These systems rely on historical data from previous employees, perpetuating inequalities and discrimination encoded in the past.

Additionally, I believe we all experienced the COVID-19 pandemic. In China, people were required to share their location and travel information to help control the spread of the virus. Personally, I was fine with this because I believe sharing my information could save my life and the lives of others. However, I understand that not everyone might feel the same way.

Lastly, in the final scenario, it’s common for people to forgive someone even if it compromises the precision of data. This is a human response that reflects values beyond pure data accuracy.

This game aims to make you think critically about the trade-offs between data privacy and other priorities. By exploring these scenarios, you gain a deeper understanding of the ethical dilemmas that arise in the use of data. </p>

    // Provide a summary interpretation
    resultsContainer.innerHTML += `
        <h3>Summary:</h3>
        <p>Your choices prioritized ${
            results.privacy >= results.trust ? "privacy" : "trust"
        } over ${
            results.efficiency >= results.equity ? "efficiency" : "equity"
        }. ${
            results.environment > 0
                ? "You emphasized environmental responsibility."
                : "You prioritized economic stability."
        }</p>`;
};

document.getElementById("startButton").addEventListener("click", () => {
    document.getElementById("landing").classList.add("hidden");
    document.getElementById("scenario").classList.remove("hidden");
    loadScenario();
});

const loadScenario = () => {
    const scenario = scenarios[currentScenario];
    document.getElementById("scenarioTitle").textContent = scenario.title;
    document.getElementById("scenarioText").textContent = scenario.text;
    document.getElementById("choiceA").textContent = scenario.feedbackA;
    document.getElementById("choiceB").textContent = scenario.feedbackB;
};

document.getElementById("choiceA").addEventListener("click", () => {
    const scenario = scenarios[currentScenario];
    updateResults(scenario, "A");
    nextScenario();
});

document.getElementById("choiceB").addEventListener("click", () => {
    const scenario = scenarios[currentScenario];
    updateResults(scenario, "B");
    nextScenario();
});

const nextScenario = () => {
    currentScenario++;
    if (currentScenario < scenarios.length) {
        loadScenario();
    } else {
        document.getElementById("scenario").classList.add("hidden");
        document.getElementById("summary").classList.remove("hidden");
        showSummary();
    }
};

document.getElementById("restartButton").addEventListener("click", () => {
    currentScenario = 0;
    results = { privacy: 0, trust: 0, equity: 0, efficiency: 0, environment: 0, crimePrevention: 0, publicHealth: 0 };
    document.getElementById("summary").classList.add("hidden");
    document.getElementById("landing").classList.remove("hidden");
});
