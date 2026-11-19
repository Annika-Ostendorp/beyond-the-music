import { readFile } from "node:fs/promises";

export type MusicRecord = { // Eigenschaften einer Veröffentlichung
    id: string;
    title: string;
    artist: string;
    category: "raye" | "amma" | "absolutely";
    featured: boolean;
    releaseType: string;
    releaseDate: string;
    genres: string[];
    trackCount?: number; // ? -> ist optional -> braucht man z.B. bei richtiger Single nicht
    totalDuration?: string; // auch optional, da man das bei Album nicht braucht
    collaborators: string[];
    coverImage: string;
    coverAlt: string;
}

export async function loadRecords(): Promise<MusicRecord[]> { // Promise gibt Versprechen auf später verfügbaren Rückgabewert zurück --> soll Array von Record-Objekten liefern; export damit andere Dateien diese Funktion importieren können --> asynchrones Arbeiten
    const text = await readFile("data/records.json", "utf-8"); // liest Datei aus & wartet, bis gesamter Inhalt als reiner Text vorliegt
    return JSON.parse(text); // übersetzt Text in JavaScript-Daten -> beendet Funktion
} 