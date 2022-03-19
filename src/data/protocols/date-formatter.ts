export interface DateFormatter {
  format: (date: string, expectedFormat: string) => string
}
