export function CreateSlug(str: any) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

export function UndoSlug(slug: any) {
  return slug
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (char: any) => char.toUpperCase()); // Capitalize each word
}
