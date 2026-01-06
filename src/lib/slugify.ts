export function slugify(text: string) {
  return text
    .toString() // Cast to string
    .toLowerCase() // Convert the string to lowercase letters
    .normalize("NFD") // Decompose accented letters
    .replace(/[\u0300-\u036f]/g, "") // Remove accent marks
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s+/g, "-") // Replace spaces with a single hyphen
    .replace(/[^a-z0-9-]+/g, "") // Remove all non-word chars except hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
}

export function revert_slugify(slug: string) {
  if (!slug) return "";
  return slug
    .toString()
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize first letter of each word
}
