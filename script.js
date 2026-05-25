import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Configura estas llaves con los valores de tu panel de Supabase
const supabaseUrl = 'https://hlmmaypouknygztwzlke.supabase.co/rest/v1/';
const supabaseKey = 'sb_publishable_bLAkyrgj9kTACrPRNCmoVQ_HgZAhW4Y';
const supabase = createClient(supabaseUrl, supabaseKey);

async function cargarMascotas() {
    const { data, error } = await supabase.from('mascotas').select('*');
    if (error) console.error("Error:", error);
    else console.log("Mascotas registradas:", data);
}

// Inicialización
console.log("Skin Vet Care - Sistema conectado a Supabase");
cargarMascotas();