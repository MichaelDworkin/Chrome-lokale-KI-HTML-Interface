/**
 * presets.js – Voreingestellte Eingabetexte für die Chrome KI Lokal Seite.
 *
 * Anleitung:
 *   - "label"  → Beschriftung des Buttons in der Seitenleiste
 *   - "text"   → Text, der VOR dem aktuellen Inhalt des Eingabefelds eingefügt wird
 *
 * SYSTEM_PROMPT (optional):
 *   Legt das Verhalten der KI für die gesamte Session fest.
 *   Wird beim ersten Prompt als "system"-Rolle übergeben.
 *   Leer lassen ("") um den eingebauten Standard zu verwenden:
 *   "Du bist ein Kollege, der präzise und korrekt antwortet."
 *
 * Diese Datei kann mit jedem Texteditor bearbeitet werden.
 * Nach dem Speichern einfach die Seite im Browser neu laden.
 * Hinweis: Nach einer Änderung des SYSTEM_PROMPT muss die Session
 * über "Session zurücksetzen" neu gestartet werden.
 */

/** Systemprompt – bestimmt die Rolle und das Verhalten der KI */
const SYSTEM_PROMPT = "Du bist ein Arbeitskollege, der bei technischen Fragen sachlich, präzise und ohne unnötige Höflichkeiten antwortet.";


// 📝🔍 📖💻 📜 🚀JavaScript
const PRESETS = [
  {
    label: "✅ Korrigieren",
    text: "Korrigiere Grammatik und Rechtschreibung des folgenden Textes, dabei gebe nur korrigierten Text aus, ohne Erklärung:\n\n"
  },
  {
    label: "🌍 Übersetzen -> EN",
    text: "Übersetze den folgenden Text ins Englische:\n\n"
  },
  {
    label: "🌍 Übersetzen -> DE",
    text: "Übersetze den folgenden Text ins Deutsch:\n\n"
  },
  {
    label: "📧     E-Mail    ",
    text: "Formuliere eine professionelle E-Mail auf Basis des folgenden Inhalts:\n\n"
  },
  {
    label: "💡 > 💻 PowerShell ",
    text: "Erstelle ein PowerShell-Skript mit folgender Funktionalität:\n\n"
  },
  {
    label: "📜 VBS > 💻 PowerShell",
    text: "Portiere den VBS nach PowerShell. Kommentire detaliert den Skript:\n\n"
  },
  {
    label: "📜 VBS > 🚀 JScript",
    text: "Portiere den VBS nach JScript. Kommentire detaliert den Skript:\n\n"
  },
  {
    label: "🐛 Code erklären",
    text: "Analysiere den folgenden Code und erkläre ihn:\n\n"
  }
];
