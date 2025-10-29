export interface Supplement {
  name: string
  dosage: string
  benefits: string[]
  reasoning: string
  precautions: string[]
  confidence: number
}

export interface RecommendationData {
  recommendations: Supplement[]
  summary: string
  disclaimer: string
}

export const supplementDatabase: Record<string, RecommendationData> = {
  Headache: {
    summary:
      "These supplements may help reduce headache frequency and intensity through various mechanisms including inflammation reduction and muscle relaxation.",
    disclaimer:
      "These recommendations are for informational purposes only. Consult with a healthcare professional before starting any supplement regimen, especially if you have chronic headaches or take medications.",
    recommendations: [
      {
        name: "Magnesium Glycinate",
        dosage: "400-600mg daily",
        benefits: [
          "Reduces muscle tension and nerve excitability",
          "May prevent migraine headaches",
          "Supports healthy blood vessel function",
          "Helps with stress-related headaches",
        ],
        reasoning:
          "Magnesium deficiency is linked to headaches and migraines. This form is well-absorbed and gentle on the stomach.",
        precautions: [
          "May cause digestive upset in high doses",
          "Can interact with certain medications",
          "Start with lower doses and increase gradually",
        ],
        confidence: 85,
      },
      {
        name: "Coenzyme Q10 (CoQ10)",
        dosage: "100-300mg daily",
        benefits: [
          "Supports cellular energy production",
          "May reduce migraine frequency",
          "Antioxidant properties",
          "Supports cardiovascular health",
        ],
        reasoning:
          "Studies show CoQ10 can reduce migraine frequency and severity by improving cellular energy metabolism.",
        precautions: [
          "May interact with blood thinners",
          "Take with meals for better absorption",
          "Effects may take 2-3 months to notice",
        ],
        confidence: 75,
      },
      {
        name: "Riboflavin (Vitamin B2)",
        dosage: "400mg daily",
        benefits: [
          "Supports energy metabolism",
          "May prevent migraines",
          "Supports nervous system function",
          "Antioxidant properties",
        ],
        reasoning:
          "High-dose riboflavin has been shown in studies to reduce migraine frequency by supporting mitochondrial function.",
        precautions: [
          "May cause bright yellow urine (harmless)",
          "Take with food to reduce stomach upset",
          "Effects typically seen after 3 months",
        ],
        confidence: 80,
      },
    ],
  },
  Fatigue: {
    summary:
      "These supplements target common causes of fatigue including nutrient deficiencies, poor cellular energy production, and adrenal stress.",
    disclaimer:
      "Persistent fatigue may indicate underlying health conditions. Consult a healthcare provider for proper evaluation before relying solely on supplements.",
    recommendations: [
      {
        name: "Iron Bisglycinate",
        dosage: "18-25mg daily (with vitamin C)",
        benefits: [
          "Supports oxygen transport",
          "Prevents iron deficiency anemia",
          "Improves energy levels",
          "Better absorbed than other forms",
        ],
        reasoning:
          "Iron deficiency is a common cause of fatigue, especially in women. This chelated form is gentle and well-absorbed.",
        precautions: [
          "Get iron levels tested before supplementing",
          "Can cause constipation or stomach upset",
          "Take on empty stomach for best absorption",
        ],
        confidence: 90,
      },
      {
        name: "Vitamin B12 (Methylcobalamin)",
        dosage: "1000-2000mcg daily",
        benefits: [
          "Supports energy metabolism",
          "Essential for red blood cell formation",
          "Supports nervous system function",
          "May improve cognitive function",
        ],
        reasoning:
          "B12 deficiency is common and causes fatigue. Methylcobalamin is the active form that's readily used by the body.",
        precautions: [
          "Generally very safe",
          "May interact with certain medications",
          "Sublingual forms may be better absorbed",
        ],
        confidence: 85,
      },
      {
        name: "Rhodiola Rosea",
        dosage: "300-600mg daily (3% rosavins, 1% salidroside)",
        benefits: [
          "Adaptogenic herb that combats stress",
          "May improve physical and mental performance",
          "Supports adrenal function",
          "May reduce fatigue from stress",
        ],
        reasoning:
          "Rhodiola is an adaptogen that helps the body cope with stress and may improve energy levels and reduce fatigue.",
        precautions: [
          "May cause jitteriness in some people",
          "Take in the morning to avoid sleep issues",
          "Quality varies between brands",
        ],
        confidence: 70,
      },
    ],
  },
  Stress: {
    summary:
      "These supplements work through different pathways to help manage stress response, promote relaxation, and support the nervous system.",
    disclaimer:
      "Chronic stress requires comprehensive management. These supplements should complement, not replace, stress management techniques and professional support when needed.",
    recommendations: [
      {
        name: "Ashwagandha (KSM-66)",
        dosage: "300-600mg daily",
        benefits: [
          "Reduces cortisol levels",
          "Adaptogenic properties",
          "May improve stress resilience",
          "Supports sleep quality",
        ],
        reasoning:
          "Ashwagandha is a well-researched adaptogen that helps regulate the stress response and lower cortisol levels.",
        precautions: [
          "May interact with thyroid medications",
          "Avoid during pregnancy",
          "May cause drowsiness in some people",
        ],
        confidence: 90,
      },
      {
        name: "L-Theanine",
        dosage: "100-200mg daily",
        benefits: [
          "Promotes relaxation without drowsiness",
          "May reduce anxiety",
          "Supports focus and attention",
          "Works synergistically with caffeine",
        ],
        reasoning: "L-theanine increases alpha brain waves associated with relaxation while maintaining alertness.",
        precautions: [
          "Generally very safe",
          "May enhance effects of sedatives",
          "Take on empty stomach for best results",
        ],
        confidence: 85,
      },
      {
        name: "Magnesium Glycinate",
        dosage: "200-400mg daily",
        benefits: [
          "Supports nervous system function",
          "May reduce anxiety and stress",
          "Promotes muscle relaxation",
          "Supports better sleep",
        ],
        reasoning:
          "Magnesium is involved in over 300 enzymatic reactions and helps regulate the nervous system and stress response.",
        precautions: [
          "May cause digestive upset in high doses",
          "Take with food if stomach sensitive",
          "Start with lower doses",
        ],
        confidence: 80,
      },
    ],
  },
  "Joint Pain": {
    summary:
      "These supplements target inflammation, cartilage health, and joint mobility through different mechanisms to help manage joint discomfort.",
    disclaimer:
      "Joint pain can have many causes. Consult with a healthcare provider for proper diagnosis and treatment, especially for persistent or severe pain.",
    recommendations: [
      {
        name: "Curcumin (with Piperine)",
        dosage: "500-1000mg daily",
        benefits: [
          "Powerful anti-inflammatory effects",
          "May reduce joint pain and stiffness",
          "Antioxidant properties",
          "Supports overall joint health",
        ],
        reasoning: "Curcumin is a potent anti-inflammatory compound that may help reduce joint inflammation and pain.",
        precautions: [
          "May interact with blood thinners",
          "Can increase bleeding risk",
          "Take with food and black pepper for absorption",
        ],
        confidence: 85,
      },
      {
        name: "Glucosamine Sulfate",
        dosage: "1500mg daily",
        benefits: [
          "Supports cartilage structure",
          "May slow cartilage breakdown",
          "Supports joint mobility",
          "May reduce joint pain over time",
        ],
        reasoning: "Glucosamine is a building block of cartilage and may help maintain joint structure and function.",
        precautions: [
          "Effects may take 2-3 months to notice",
          "May affect blood sugar in diabetics",
          "Derived from shellfish (allergy concern)",
        ],
        confidence: 75,
      },
      {
        name: "Omega-3 Fatty Acids (EPA/DHA)",
        dosage: "2-3g daily (combined EPA/DHA)",
        benefits: [
          "Anti-inflammatory effects",
          "May reduce joint stiffness",
          "Supports overall health",
          "May reduce inflammatory markers",
        ],
        reasoning: "Omega-3s have anti-inflammatory properties that may help reduce joint inflammation and pain.",
        precautions: [
          "May increase bleeding risk",
          "Choose high-quality, tested products",
          "Take with meals to reduce fishy aftertaste",
        ],
        confidence: 80,
      },
    ],
  },
  "Sleep Issues": {
    summary:
      "These supplements work through different pathways to promote relaxation, regulate sleep cycles, and improve sleep quality naturally.",
    disclaimer:
      "Chronic sleep issues may indicate underlying conditions. Consult a healthcare provider if sleep problems persist despite good sleep hygiene.",
    recommendations: [
      {
        name: "Melatonin",
        dosage: "0.5-3mg, 30 minutes before bed",
        benefits: [
          "Regulates sleep-wake cycle",
          "May reduce time to fall asleep",
          "Supports natural circadian rhythm",
          "Antioxidant properties",
        ],
        reasoning: "Melatonin is the body's natural sleep hormone and can help regulate disrupted sleep patterns.",
        precautions: [
          "Start with lowest effective dose",
          "May cause morning grogginess",
          "Can interact with certain medications",
        ],
        confidence: 90,
      },
      {
        name: "Magnesium Glycinate",
        dosage: "200-400mg before bed",
        benefits: [
          "Promotes muscle relaxation",
          "Supports nervous system calm",
          "May improve sleep quality",
          "Helps with stress-related sleep issues",
        ],
        reasoning:
          "Magnesium helps activate the parasympathetic nervous system, promoting relaxation and better sleep.",
        precautions: ["May cause digestive upset in high doses", "Take 1-2 hours before bed", "Start with lower doses"],
        confidence: 85,
      },
      {
        name: "L-Theanine",
        dosage: "100-200mg before bed",
        benefits: [
          "Promotes relaxation without sedation",
          "May reduce racing thoughts",
          "Supports calm alertness during day",
          "Works well with other sleep aids",
        ],
        reasoning:
          "L-theanine promotes alpha brain waves associated with relaxation and may help quiet an overactive mind.",
        precautions: [
          "Generally very safe",
          "May enhance effects of sleep medications",
          "Take on empty stomach for best absorption",
        ],
        confidence: 80,
      },
    ],
  },
  "Digestive Issues": {
    summary:
      "These supplements support digestive health through different mechanisms including gut microbiome balance, digestive enzyme support, and gut lining health.",
    disclaimer:
      "Persistent digestive issues may indicate underlying conditions requiring medical evaluation. These supplements should complement, not replace, proper medical care.",
    recommendations: [
      {
        name: "Multi-Strain Probiotic",
        dosage: "10-50 billion CFU daily",
        benefits: [
          "Supports healthy gut microbiome",
          "May improve digestive function",
          "Supports immune system",
          "May reduce bloating and gas",
        ],
        reasoning:
          "Probiotics help maintain a healthy balance of gut bacteria, which is essential for proper digestion and overall health.",
        precautions: [
          "Start with lower doses to avoid digestive upset",
          "Keep refrigerated if required",
          "Quality varies significantly between brands",
        ],
        confidence: 85,
      },
      {
        name: "Digestive Enzymes",
        dosage: "1-2 capsules with meals",
        benefits: [
          "Supports protein, fat, and carb digestion",
          "May reduce bloating after meals",
          "Helps with nutrient absorption",
          "May reduce digestive discomfort",
        ],
        reasoning:
          "Digestive enzymes help break down food more efficiently, reducing digestive stress and improving nutrient absorption.",
        precautions: [
          "Take with meals for best results",
          "May not be suitable for certain conditions",
          "Start with meals that typically cause issues",
        ],
        confidence: 75,
      },
      {
        name: "L-Glutamine",
        dosage: "5-10g daily",
        benefits: [
          "Supports gut lining health",
          "May help heal leaky gut",
          "Supports immune function",
          "May reduce inflammation",
        ],
        reasoning:
          "L-glutamine is the primary fuel for intestinal cells and helps maintain the integrity of the gut lining.",
        precautions: [
          "Generally well tolerated",
          "Take on empty stomach for best absorption",
          "May interact with certain medications",
        ],
        confidence: 70,
      },
    ],
  },
}

export function getSupplementRecommendations(symptom: string): RecommendationData | null {
  // Normalize the symptom input to match our database keys
  const normalizedSymptom = symptom.toLowerCase()

  // Direct match
  for (const [key, data] of Object.entries(supplementDatabase)) {
    if (key.toLowerCase() === normalizedSymptom) {
      return data
    }
  }

  // Partial match
  for (const [key, data] of Object.entries(supplementDatabase)) {
    if (normalizedSymptom.includes(key.toLowerCase()) || key.toLowerCase().includes(normalizedSymptom)) {
      return data
    }
  }

  // Default response for unmatched symptoms
  return {
    summary:
      "We couldn't find specific recommendations for your symptoms. Please consult with a healthcare professional for personalized advice.",
    disclaimer:
      "This is a general response. For specific health concerns, always consult with a qualified healthcare provider.",
    recommendations: [
      {
        name: "Multivitamin",
        dosage: "As directed on label",
        benefits: [
          "Covers basic nutritional needs",
          "Supports overall health",
          "May help fill dietary gaps",
          "Convenient daily nutrition",
        ],
        reasoning:
          "A high-quality multivitamin can help ensure you're getting essential nutrients that support overall health.",
        precautions: [
          "Choose high-quality brands",
          "Take with food to reduce stomach upset",
          "May interact with certain medications",
        ],
        confidence: 60,
      },
    ],
  }
}
