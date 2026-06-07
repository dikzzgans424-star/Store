// Konfigurasi Pusat Nexus Panel (Versi Bypass CORS Otomatis)
const CONFIG = {
    // 1. CUKUP GANTI INI JIKA PINDAH PANEL (Jangan pakai '/' di akhir)
    PANEL_ASLI: "https://erine.jkt48-private.com", 
    
    // Generator otomatis agar tembus CORS tanpa netlify.toml (Jangan diubah)
    get PANEL_URL() {
        return `https://api.allorigins.win/raw?url=${encodeURIComponent(this.PANEL_ASLI)}`;
    },
    
    // 2. ID Server Bot WA kamu di Pterodactyl
    SERVER_ID: "d5cf1e91", 
    
    // 3. Client API Key Pterodactyl kamu
    API_KEY: "ptlc_IsiDenganClientApiKeyKamu", 
    
    // 4. Letak file database kamu di panel
    NAMA_FILE_DB: "database/database.json",

    // ==========================================
    // CONFIG UNTUK MODUL EDIT DATA (EXPRESS BOT)
    // ==========================================
    // URL langsung ke WebAPI bot kamu di port 4510
    get BOT_API_URL() {
        return `${this.PANEL_ASLI}:4510`;
    },
    
    // Harus sama persis dengan SECRET_KEY di file webapi.js bot kamu
    SECRET_KEY: "dimas_ganteng_123" 
};
