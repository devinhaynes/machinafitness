type CaseType =
  | "camel_case"
  | "snake_case"
  | "kebab_case"
  | "pascal_case"
  | "sentence_case"
  | "title_case"
  | "lower_case"
  | "upper_case";

export const textTransform = (text: string, case_type: CaseType) => {
  switch (case_type) {
    case "camel_case":
      return text.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
    case "snake_case":
      return text.replace(/[-\s]/g, "_");
    case "kebab_case":
      return text.replace(/[_\s]/g, "-");
    case "pascal_case":
      return text.replace(/[-_\s](.)/g, (_, c) => c.toUpperCase());
    case "sentence_case":
      return text.replace(/[-_\s]/g, " ");
    case "title_case":
      return text.replace(/[-_\s](.)/g, (_, c) => c.toUpperCase());
    case "lower_case":
      return text.toLowerCase();
    case "upper_case":
      return text.toUpperCase();
    default:
      return text;
  }
};
