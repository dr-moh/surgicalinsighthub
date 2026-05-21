const fs = require('fs');

const data = fs.readFileSync('js/questions/general_surgery.js', 'utf8');
const jsonStr = data.substring(data.indexOf('['), data.lastIndexOf(']') + 1);
const questions = JSON.parse(jsonStr);

const q = questions.find(q => JSON.stringify(q).includes('It may indicate whether right ventricular'));
console.log("Q:", JSON.stringify(q, null, 2));

function normalizeSharpDebrief(question) {
  function toSharpObject(source) {
    if (!source || typeof source !== 'object' || Array.isArray(source)) return {};
    return Object.keys(source).reduce(function(acc, key) {
      if (source[key] !== undefined) acc[key] = source[key];
      return acc;
    }, {});
  }
  var merged = Object.assign(
    {},
    toSharpObject(question.sharp),
    toSharpObject(question.sharp_debrief),
    toSharpObject(question.sharp_description),
    toSharpObject(question.sharpDescription),
    toSharpObject(question.sharp_metadata)
  );
  var topLevelSharp = {
    S: question.S,
    H: question.H,
    A: question.A,
    R: question.R,
    P: question.P,
    set_the_stage: question.set_the_stage,
    setTheStage: question.setTheStage,
    highlight_excellence: question.highlight_excellence,
    highlightExcellence: question.highlightExcellence,
    address_gaps: question.address_gaps,
    addressGaps: question.addressGaps,
    review_learning_points: question.review_learning_points,
    reviewLearningPoints: question.reviewLearningPoints,
    review_guidelines: question.review_guidelines,
    reviewGuidelines: question.reviewGuidelines,
    plan: question.plan,
    plan_for_improvement: question.plan_for_improvement,
    planForImprovement: question.planForImprovement,
    verified_answer: question.verified_answer,
    verifiedAnswer: question.verifiedAnswer
  };
  return Object.assign(merged, toSharpObject(topLevelSharp));
}

console.log("Normalized:", normalizeSharpDebrief(q));
