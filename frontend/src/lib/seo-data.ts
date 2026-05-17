export const locations = [
  'noida',
  'preet-vihar',
  'laxmi-nagar',
  'mayur-vihar',
  'sector-62',
  'south-ex',
  'vasant-kunj',
  'dwarka'
];

export const subjects = [
  // General Subjects
  'maths', 'science', 'biology', 'sst', 'english',

  // Commerce Subjects
  'economics', 'business-studies', 'accountancy',

  // Broad Classes
  'class-8', 'class-9', 'class-10', 'class-11', 'class-12',

  // High-Intent Class + Subject Combinations
  'class-10-maths', 'class-10-science', 'class-10-sst',
  'class-12-maths', 'class-12-accountancy', 'class-12-economics',
  'class-12-business-studies', 'class-12-biology', 'class-12-physics',
  'class-12-chemistry',

  // Competitive Exams
  'jee', 'jee-mains', 'jee-advanced', 'neet', 'cuet', 'nda',

  // National Boards
  'cbse', 'icse', 'isc',

  // International Boards (High Premium)
  'cambridge', 'cambridge-igcse', 'cambridge-a-levels', 'ib-board', 'ib-diploma',

  // Golden Combinations (Board + Class)
  'cbse-class-10', 'cbse-class-12', 'icse-class-10', 'isc-class-12'
];

/**
 * Words that must be rendered in ALL CAPS regardless of position.
 */
const UPPERCASE_WORDS = new Set([
  'sst', 'ielts', 'neet', 'jee', 'cuet', 'nda',
  'cbse', 'icse', 'isc', 'ib', 'igcse'
]);

/**
 * Words that should be Title Cased but are not acronyms.
 * Everything else defaults to standard Title Case.
 */

/**
 * Formats a URL slug into readable, human-friendly text.
 * Handles acronyms, board names, class+subject combinations.
 *
 * Examples:
 *   'maths'                  -> 'Maths'
 *   'sst'                    -> 'SST'
 *   'jee-mains'              -> 'JEE Mains'
 *   'cuet'                   -> 'CUET'
 *   'cbse-class-12'          -> 'CBSE Class 12'
 *   'cambridge-igcse'        -> 'Cambridge IGCSE'
 *   'ib-diploma'             -> 'IB Diploma'
 *   'ib-board'               -> 'IB Board'
 *   'business-studies'       -> 'Business Studies'
 *   'class-12-business-studies' -> 'Class 12 Business Studies'
 */
export function formatSlug(slug: string): string {
  if (!slug) return '';
  return slug
    .split('-')
    .map((word) => {
      const lower = word.toLowerCase();
      if (UPPERCASE_WORDS.has(lower)) {
        return word.toUpperCase();
      }
      // Numbers (e.g. "10", "12", "8") pass through as-is
      if (/^\d+$/.test(word)) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}
