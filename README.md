# Chrome lokale KI – Gemini Nano offline HTML Interface

> **Kurzfassung:** Diese lokal gespeicherte HTML-Seite ermöglicht es, das in Google Chrome eingebettete KI-Modell **Gemini Nano** direkt im Browser zu nutzen – vollständig offline, ohne Cloud-Verbindung und ohne dass Daten das Gerät verlassen.

---
Homepage des Projekts [Chrome lokale KI – Gemini Nano offline im Browser nutzen](https://chrome-lokale-ki.esp8266-server.de)


## Grundidee

1. Google Chrome bietet das eingebettete KI-Modell **Gemini Nano** zur lokalen Nutzung an.
2. Dieses Projekt stellt ein Interface zur bequemen Nutzung der KI im Browser bereit.
3. Das Interface ist eine einfache HTML-Datei, die Sie auf Ihre Festplatte kopieren und von dort öffnen.
4. Der lokale Speicherort der Webseite ermöglicht die Nutzung der KI vollständig ohne Internetverbindung. Ziehen Sie das Netzwerkkabel vom PC, oder schalten Sie WLAN aus – das eingebettete KI-Modell **Gemini Nano** funktioniert weiterhin.
5. Es gibt keine Beschränkungen bei der Anzahl der Anfragen oder Tokens.
6. Im Gegensatz zu Ollama oder LM Studio müssen Sie keine zusätzliche Software installieren und konfigurieren.

## Hauptmerkmale

1. Nur zwei Dateien auf Ihrer Festplatte: `Chrome_lokale_KI.html` und `presets.js`.
2. Voreingestellte, benutzerdefinierte Prompts. Die **Preset-Buttons** sind frei konfigurierbar in der Datei `presets.js`.
3. Die **Ausgabe wird als Markdown gerendert** und kann als formatierter Text direkt aus der Zwischenablage z.B. in ein Word-Dokument eingefügt werden.
4. Solange Sie die Session nicht zurücksetzen, können Sie weitere Fragen oder Aufgaben zu vorherigen Antworten stellen – z.B. „Übersetze deine vorherige Antwort auf Englisch".

## Oberfläche im Überblick

![Benutzeroberfläche des Chrome lokale KI Interfaces mit Preset-Buttons und Eingabefeld](Bilder/Screenshot%2020260611185500.png)

![Markdown-Ausgabe beim Streamen von Gemini Nano im Chrome lokale KI Interface](Bilder/Screenshot%2020260611190055.png)

## Warum dieses Projekt?

Große Online-KI-Modelle sind zweifelsohne deutlich leistungsfähiger als jedes lokale KI-Modell.
Aber auch wenn es kostenlose Modelle oder solche mit großzügigen Limits gibt, bin ich skeptisch, mich dauerhaft daran zu gewöhnen.

Ich erinnere mich gut an die Zeit, als YouTube noch kostenlos und werbefrei war. Nachdem wir alle unser Leben ohne YouTube kaum noch vorstellen konnten, wurde der Dienst mit Werbung überschwemmt und zunehmend kostenpflichtig.
Genau das passiert gerade mit großen KI-Modellen – sie werden teurer.

Der Vorteil dieses Interfaces: Es ist eine einfache HTML-Datei. Jeder kann den Quellcode einsehen und prüfen oder von einer KI analysieren lassen. Man weiß zwar nicht, was Chrome intern macht, aber Google Chrome vertraue ich mehr als vieler anderer Software.
Außerdem besteht die Möglichkeit, Chrome und Gemini Nano in einer bestimmten Version zu sichern, sodass spätere Updates das System nicht verschlimmbessern können.

---

## 1. Systemvoraussetzungen

Gemini Nano läuft als **On-Device KI vollständig lokal** auf Ihrem Rechner – ohne Cloud-Anbindung und ohne Datenweitergabe. Dafür gelten verbindliche Hardware- und Softwareanforderungen laut offizieller Google-Dokumentation (Stand: Mai 2025).

!!! warning "Wichtig"
    Die KI funktioniert **nicht** auf Mobilgeräten (Android/iOS) und **nicht** im normalen Chrome für ChromeOS (nur auf Chromebook Plus).

### Betriebssystem

| Betriebssystem | Mindestversion |
| -------------- | -------------- |
| Windows        | Windows 10 oder Windows 11 |
| macOS          | macOS 13 Ventura oder neuer |
| Linux          | Unterstützt (aktuelle Distribution) |
| ChromeOS       | Ab Plattform 16389.0.0, nur auf **Chromebook Plus** |

### Chrome-Browser

| Anforderung | Wert |
| ----------- | ---- |
| Mindestversion | **Chrome 138** oder neuer |
| Empfohlen | Chrome 140+ (stabile CPU-Unterstützung) |
| Kanal | Stable, Beta, Dev oder Canary |
| Mobil (Android/iOS) | ❌ Nicht unterstützt |

!!! info "Mehrsprachigkeit"
    Ab **Chrome 149** unterstützt Gemini Nano folgende Sprachen für Ein- und Ausgabe: Englisch, Spanisch, Japanisch, **Deutsch** und Französisch.

### Hardware

| Komponente | Mindestanforderung |
| ---------- | ------------------ |
| **GPU** (bevorzugt) | Mehr als **4 GB VRAM** |
| **CPU** (alternativ) | **16 GB RAM** und mindestens **4 CPU-Kerne** |
| **Speicherplatz** | Mindestens **22 GB freier Speicher** im Chrome-Profil-Verzeichnis |
| **Netzwerk** | Unbegrenzte oder nicht getaktete Verbindung *(nur für den einmaligen Modell-Download erforderlich)* |

!!! tip "Hinweis zum Speicherplatz"
    Sinkt der freie Speicher nach dem Modell-Download unter 10 GB, entfernt Chrome das Modell automatisch. Es wird neu heruntergeladen, sobald wieder genug Platz vorhanden ist.

!!! success "Keine Daten verlassen Ihren Rechner"
    Nach dem einmaligen Herunterladen des Modells wird **keine Internetverbindung** mehr benötigt. Alle Berechnungen laufen lokal – es werden **keine Daten an Google oder Dritte übertragen**. Diese Lösung ist damit **DSGVO-freundlich** und geeignet für die Verarbeitung sensibler Inhalte.

---

## 2. Gemini Nano aktivieren – Schritt für Schritt

Die Prompt-API für Gemini Nano ist standardmäßig deaktiviert und muss manuell über Chrome-Flags aktiviert werden.

### Schritt 1 – Chrome-Flag aktivieren

1. Öffnen Sie einen **neuen Tab** in Chrome.

2. Kopieren Sie den folgenden Link und fügen Sie ihn in die Adressleiste ein:

    ```
    chrome://flags/#prompt-api-for-gemini-nano
    ```

3. Drücken Sie `Enter`.

4. Das Flag **„Prompt API for Gemini Nano"** erscheint oben markiert.

5. Ändern Sie den Wert im Dropdown-Menü von `Default` auf **`Enabled`** (oder `Enabled Multilingual` für Mehrsprachigkeit einschließlich Deutsch).

6. Klicken Sie unten auf **„Relaunch"** – Chrome startet neu.

### Schritt 2 – Gemini Nano Modell herunterladen

Nach dem Neustart lädt Chrome das Gemini Nano-Modell einmalig herunter (~4 GB). Das geschieht automatisch im Hintergrund.

1. Öffnen Sie in Chrome einen neuen Tab und geben Sie folgende Adresse ein:

    ```
    chrome://on-device-internals
    ```

2. Unter **„Model Status"** sehen Sie den Download-Fortschritt.

3. Warten Sie, bis der Status **„Model available"** angezeigt wird, bevor Sie die Seite verwenden.

!!! note "Download-Dauer"
    Der Download kann je nach Verbindungsgeschwindigkeit **mehrere Minuten bis über eine Stunde** dauern. Chrome muss dabei nicht aktiv genutzt werden; der Download läuft im Hintergrund.

### Schritt 3 – API-Verfügbarkeit prüfen *(optional)*

Um zu bestätigen, dass die Prompt API bereit ist:

1. Drücken Sie `F12` (Entwicklertools öffnen) → Reiter **„Console"**.

2. Geben Sie ein:

    ```javascript
    (await LanguageModel.availability())
    ```

3. Erwartete Ausgabe: `"available"` → Die KI ist einsatzbereit.

| Rückgabewert | Bedeutung |
| ------------ | --------- |
| `"available"` | ✅ Modell geladen, sofort nutzbar |
| `"downloadable"` | ⏬ Modell wird noch heruntergeladen |
| `"unavailable"` | ❌ Hardwareanforderungen nicht erfüllt |

---

## 3. Erste Schritte: Prompt eingeben und ausführen

1. **Prompt eingeben:** Schreiben Sie Ihre Frage oder Aufgabe in das große Textfeld links.
2. **Ausführen:** Klicken Sie auf **„🚀 Session erstellen & Antwort streamen"** oder drücken Sie **Strg + Enter**.
3. **Erster Start:** Beim allerersten Aufruf wird eine KI-Session erstellt – das kann einige Sekunden dauern. Der Status zeigt den Fortschritt an.
4. **Antwort lesen:** Die Antwort erscheint im Ausgabefeld und wird **live gestreamt** – der Text baut sich Wort für Wort auf.
5. **Folge-Prompt:** Weitere Prompts können direkt eingegeben werden; die bestehende Session wird wiederverwendet (Kontext bleibt erhalten).

---

## 4. Voreingestellte Prompts (Preset-Buttons)

Rechts neben dem Eingabefeld befinden sich **Preset-Buttons** mit vorgefertigten Aufgabentexten.

**So funktioniert ein Klick:**

- Der Preset-Text wird **vor** den aktuellen Inhalt des Eingabefelds eingefügt.
- Der Cursor springt an den Anfang, damit Sie sofort sehen, was ergänzt wurde.
- Sie können dann noch eigenen Text ergänzen oder direkt ausführen.

**Beispiel:**

- Eingabefeld enthält: `Klimawandel`
- Klick auf **„🔍 Erklären"**
- Ergebnis: `Erkläre den folgenden Begriff oder Text verständlich und mit Beispielen:\n\nKlimawandel`

---

## 5. Ausgabe verwenden und exportieren

Unterhalb des Ausgabefelds stehen drei Buttons zur Verfügung (werden nach der ersten Antwort aktiv):

| Button | Funktion |
| ------ | -------- |
| 📋 In Zwischenablage kopieren | Kopiert den Rohtext (Markdown) in die Zwischenablage |
| 💾 Als .txt speichern | Download als Textdatei mit Windows-Zeilenenden (CRLF) |
| 📄 Als .md speichern | Download als Markdown-Datei mit Windows-Zeilenenden (CRLF) |

!!! tip ""
    Die Dateinamen enthalten automatisch einen Zeitstempel, z.B. `ki-ausgabe-2026-06-07T14-30-00.txt`.

Die **Ausgabe wird als Markdown gerendert** – Überschriften, Fettdruck, Code-Blöcke, Listen und Tabellen werden korrekt dargestellt und lassen sich direkt in Word oder andere Programme einfügen.

---

## 6. Session-Verwaltung

Gemini Nano behält innerhalb einer Session den **Gesprächskontext** – ähnlich einem Chatverlauf.

| Aktion | Bedeutung |
| ------ | --------- |
| Mehrere Prompts hintereinander | Kontext bleibt erhalten; die KI „erinnert sich" an frühere Nachrichten |
| **🔄 Session zurücksetzen** | Löscht den Kontext vollständig; beim nächsten Prompt wird eine neue Session gestartet |
| Seite neu laden | Session wird ebenfalls verworfen |

!!! tip "Tipp"
    Wenn die KI inkonsistente oder verwirrende Antworten liefert, hilft ein **Session-Reset** – der Kontext-Speicher (Token-Budget) kann erschöpft sein.

---

## 7. Prompt abbrechen

Während eine Antwort generiert wird, ist der **⛔ Stopp**-Button aktiv.

- Ein Klick bricht die Generierung sofort ab.
- Der **bereits generierte Text bleibt** im Ausgabefeld erhalten.
- Die Export-Buttons werden aktiviert, falls bereits Text vorhanden ist.
- Der Status zeigt: `⛔ Abgebrochen. (Bisherige Ausgabe bleibt erhalten)`

---

## 8. Voreinstellungen anpassen (presets.js)

Die Preset-Buttons werden aus der Datei **`presets.js`** geladen, die im gleichen Ordner wie die HTML-Datei liegen muss.

**Datei öffnen:** Mit jedem Texteditor (z.B. Notepad, VS Code, Notepad++).

**Aufbau eines Eintrags:**

```javascript
{
  label: "📝 Zusammenfassen",   // Beschriftung des Buttons
  text: "Fasse den folgenden Text präzise zusammen:\n\n"  // Wird vor die Eingabe gestellt
}
```

**Neuen Preset hinzufügen** – einfach einen neuen Block ins Array einfügen:

```javascript
{
  label: "🔢 Tabelle erstellen",
  text: "Erstelle eine übersichtliche Tabelle aus den folgenden Daten:\n\n"
},
```

**Nach dem Speichern** der `presets.js` genügt ein **F5** (Seite neu laden) – die Buttons erscheinen sofort aktualisiert.

!!! warning "Hinweis zum file://-Protokoll"
    Die Seite wird lokal als `file://`-Protokoll geöffnet. Aus Sicherheitsgründen blockieren manche Browser das Laden externer Dateien über `file://`. Falls die Buttons nicht erscheinen, stellen Sie sicher, dass beide Dateien im selben Ordner liegen und Chrome nicht im Inkognito-Modus läuft.

---

## 9. Fehlerbehebung

### „LanguageModel-API nicht verfügbar"

- Chrome-Flag ist nicht aktiviert → [Schritt 1](#schritt-1--chrome-flag-aktivieren) wiederholen.
- Chrome-Version ist zu alt → Chrome aktualisieren (mindestens Version 138).
- Mobilgerät wird verwendet → Gemini Nano ist auf Mobilgeräten nicht verfügbar.

### Die Seite lädt, aber es kommt keine Antwort

- Modell noch nicht heruntergeladen → `chrome://on-device-internals` prüfen.
- Hardwareanforderungen nicht erfüllt → RAM/VRAM und Betriebssystem prüfen.
- Zu wenig freier Speicherplatz → Mindestens 22 GB freigeben.

### „presets.js nicht geladen"

- Datei `presets.js` liegt nicht im selben Ordner wie `Chrome_lokale_KI.html`.
- Tippfehler im Dateinamen → Dateiname muss exakt `presets.js` lauten (Groß-/Kleinschreibung beachten).
- Syntaxfehler in `presets.js` → Datei im Browser-Konsolenfenster (`F12`) auf Fehler prüfen.

### Antworten sind inkonsistent oder abgebrochen

- Session-Budget erschöpft → **🔄 Session zurücksetzen** klicken.
- Prompt ist zu lang → Kürzeren Prompt versuchen (Gemini Nano ist für kurze Eingaben optimiert: < 500 Token).

### Modell wurde automatisch entfernt

Chrome entfernt Gemini Nano automatisch, wenn weniger als 10 GB freier Speicher vorhanden ist. Nach dem Freigeben von Speicherplatz lädt Chrome das Modell automatisch erneut herunter.

