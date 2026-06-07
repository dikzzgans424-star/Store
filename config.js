const CONFIG = {
    // 1. CUKUP GANTI INI JIKA PINDAH PANEL (Tanpa tanda '/' di akhir)
    PANEL_ASLI: "https://erine.jkt48-private.com", 
    
    // Jalur fungsi kilat Netlify (Jangan diubah)
    get PANEL_URL() {
        const target = `${this.PANEL_ASLI}/api/client/servers/${this.SERVER_ID}/files/contents?file=${this.NAMA_FILE_DB}`;
        return `/get-database?url=${encodeURIComponent(target)}`;
    },
    
    // 2. ID Server Bot WA kamu di Pterodactyl
    SERVER_ID: "d5cf1e91", 
    
    // 3. Client API Key Pterodactyl kamu (ptlc_xxx)
    API_KEY: "ptlc_WBvDChLSbHOngjPb4nYyMYw2kN4M46xgp1bXAJHmV0f", 
    
    // 4. Letak file database kamu di panel
    NAMA_FILE_DB: "database/database.json",

    // URL langsung ke WebAPI bot kamu di port 4510 untuk fitur Edit/Slot
    get BOT_API_URL() {
        return `${this.PANEL_ASLI}:4510`;
    },
    
    // Harus sama persis dengan SECRET_KEY di file webapi.js bot kamu
    SECRET_KEY: "dimas_ganteng_123" 
};
