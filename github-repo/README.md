# Hexacore Studio Website

Dieses Repository enthält den Quellcode für die Hexacore Studio Website, eine moderne React-Anwendung, die mit Vite erstellt wurde.

## Technologien

- React
- Vite
- React Router
- Tailwind CSS
- Radix UI

## Lokale Entwicklung

1. Repository klonen
2. Abhängigkeiten installieren:
   ```bash
   npm install
   # oder
   yarn
   # oder
   pnpm install
   ```
3. Entwicklungsserver starten:
   ```bash
   npm run dev
   # oder
   yarn dev
   # oder
   pnpm dev
   ```

## Vercel Deployment

Diese Anwendung ist für die Bereitstellung auf Vercel optimiert. Die `vercel.json`-Datei enthält die notwendigen Konfigurationen für das Client-Side Routing mit React Router.

### Wichtiger Hinweis zu Abhängigkeiten

Folgende Versionsanpassungen wurden vorgenommen, um Kompatibilitätskonflikte zu lösen:

1. Die Version von `date-fns` wurde auf `^3.6.0` festgelegt, da `react-day-picker` nicht mit Version 4.x kompatibel ist.

2. Die Versionen von `react` und `react-dom` wurden auf `^18.3.1` festgelegt, da `react-day-picker` nicht mit React 19.x kompatibel ist.

Bitte diese Versionen nicht ohne sorgfältige Prüfung aktualisieren, da dies zu Deployment-Fehlern führen kann.

### Automatisches Deployment über GitHub

Die einfachste Methode zur Bereitstellung dieser Website auf Vercel ist die direkte Integration mit diesem GitHub-Repository:

1. Erstelle ein Konto auf [Vercel](https://vercel.com) falls noch nicht vorhanden
2. Klicke auf "Add New..." > "Project"
3. Verbinde dein GitHub-Konto und wähle dieses Repository aus
4. Vercel erkennt automatisch die Vite/React-Konfiguration
5. Klicke auf "Deploy"

Vercel wird automatisch neue Deployments erstellen, wenn Änderungen an den Main-Branch gepusht werden.