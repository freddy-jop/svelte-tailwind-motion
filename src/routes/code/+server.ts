import { error } from "@sveltejs/kit";
import { promises as fs } from "fs";
import path from "path";

// Gestionnaire pour la méthode GET
export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "src",
    "lib",
    "components",
    "features",
    "wavesUserParams",
    "WavesParams.svelte"
  );

  try {
    // Lire le fichier en tant que texte brut
    const fileContent = await fs.readFile(filePath, "utf8");

    // Retourner une réponse avec du texte brut
    return new Response(fileContent, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  } catch (err) {
    console.error("Error reading the file:", err);
    // Gérer l'erreur avec une réponse 500
    throw error(500, "Error reading the file");
  }
}
