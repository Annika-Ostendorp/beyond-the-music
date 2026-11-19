import { loadRecords } from "@/lib/records";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
): Promise<Response> {
    const { id } = await params;
    const records = await loadRecords();
    const record = records.find((record) => record.id === id);
    if (!record) { // record mit unbekannter ID --> Fehlermeldung als JSON
        return Response.json({ error: "Record not found" }, { status: 404 });
    }
    return Response.json(record);
}