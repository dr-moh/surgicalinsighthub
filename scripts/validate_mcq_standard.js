#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const targetPath = process.argv[2];

if (!targetPath) {
  console.error('Usage: node scripts/validate_mcq_standard.js <path-to-bundle>');
  process.exit(1);
}

const resolvedPath = path.resolve(process.cwd(), targetPath);

if (!fs.existsSync(resolvedPath)) {
  console.error(`ERROR: File not found: ${resolvedPath}`);
  process.exit(1);
}

const loadQuestions = (filePath) => {
  const raw = fs.readFileSync(filePath, 'utf8');

  if (filePath.endsWith('.json')) {
    return JSON.parse(raw);
  }

  if (filePath.endsWith('.js')) {
    const matches = [...raw.matchAll(/^\s*window\.QUESTIONS\s*=\s*(\[[\s\S]*?\]);/gm)];
    if (matches.length === 0) {
      throw new Error('Unable to locate `window.QUESTIONS = [...]` in JS bundle');
    }
    return JSON.parse(matches[matches.length - 1][1]);
  }

  throw new Error('Unsupported file type. Use a .json or .js MCQ bundle file.');
};

const nonEmptyString = (value) => typeof value === 'string' && value.trim().length > 0;

let questions;

try {
  questions = loadQuestions(resolvedPath);
} catch (error) {
  console.error(`ERROR: Failed to parse bundle: ${error.message}`);
  process.exit(1);
}

if (!Array.isArray(questions)) {
  console.error('ERROR: MCQ bundle must be an array');
  process.exit(1);
}

if (questions.length === 0) {
  console.error('ERROR: MCQ bundle is empty');
  process.exit(1);
}

const requiredSharpFields = [
  'set_the_stage',
  'highlight_excellence',
  'address_gaps',
  'review_learning_points',
];

const errors = [];
const warnings = [];

questions.forEach((question, index) => {
  const label = `Q${question?.id ?? index + 1}`;

  if (!question || typeof question !== 'object' || Array.isArray(question)) {
    errors.push(`${label}: entry must be an object`);
    return;
  }

  if (typeof question.id !== 'number' || !Number.isFinite(question.id)) {
    errors.push(`${label}: id must be a number`);
  }

  if (!nonEmptyString(question.question)) {
    errors.push(`${label}: question must be a non-empty string`);
  }

  if (!question.options || typeof question.options !== 'object' || Array.isArray(question.options)) {
    errors.push(`${label}: options must be an object containing A-D choices`);
  } else {
    const requiredOptionKeys = ['A', 'B', 'C', 'D'];
    const missingOptions = requiredOptionKeys.filter((key) => !nonEmptyString(question.options[key]));
    if (missingOptions.length > 0) {
      errors.push(`${label}: missing non-empty option(s): ${missingOptions.join(', ')}`);
    }

    if (!nonEmptyString(question.answer) || !Object.prototype.hasOwnProperty.call(question.options, question.answer)) {
      errors.push(`${label}: answer must match one of the provided option keys`);
    }
  }

  if (!question.sharp || typeof question.sharp !== 'object' || Array.isArray(question.sharp)) {
    errors.push(`${label}: sharp must be an object`);
  } else {
    const missingSharp = requiredSharpFields.filter((field) => !nonEmptyString(question.sharp[field]));
    if (missingSharp.length > 0) {
      errors.push(`${label}: missing SHARP field(s): ${missingSharp.join(', ')}`);
    }

    if (!nonEmptyString(question.sharp.plan) && !nonEmptyString(question.sharp.plan_for_improvement)) {
      warnings.push(`${label}: SHARP plan is missing (plan or plan_for_improvement expected)`);
    }

    if (!nonEmptyString(question.sharp.guideline)) {
      warnings.push(`${label}: SHARP guideline is missing`);
    }

    if (!nonEmptyString(question.sharp.takeaway)) {
      warnings.push(`${label}: SHARP takeaway is missing`);
    }
  }

  if (!question.explanation || typeof question.explanation !== 'object' || Array.isArray(question.explanation)) {
    warnings.push(`${label}: explanation should be an object`);
  } else if (!nonEmptyString(question.explanation.correct)) {
    warnings.push(`${label}: explanation.correct should be a non-empty string`);
  }
});

if (errors.length > 0) {
  console.error(`ERROR: Validation failed with ${errors.length} issue(s):`);
  errors.slice(0, 100).forEach((issue) => console.error(` - ${issue}`));
  if (errors.length > 100) {
    console.error(` - ...and ${errors.length - 100} more`);
  }
  process.exit(1);
}

console.log(`✓ Bundle parsed successfully: ${resolvedPath}`);
console.log(`✓ Questions validated: ${questions.length}`);

if (warnings.length > 0) {
  console.warn(`⚠ Validation warnings: ${warnings.length}`);
  warnings.slice(0, 20).forEach((warning) => console.warn(` - ${warning}`));
  if (warnings.length > 20) {
    console.warn(` - ...and ${warnings.length - 20} more`);
  }
} else {
  console.log('✓ No validation warnings');
}
