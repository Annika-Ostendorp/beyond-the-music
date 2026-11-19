import { loadRecords } from "@/lib/records";

export async function GET(request: Request): Promise<Response> {
    const url = new URL(request.url);

    const records = await loadRecords();
    const category = url.searchParams.get("category");
    const result = category
        ? records.filter((record) => record.category === category) // if-else --> wenn category vorhanden und nicht leer ist --> Records nach dieser Kategorie filtern, ansonsten alle Records verwenden
        : records;

    return Response.json(result)
}