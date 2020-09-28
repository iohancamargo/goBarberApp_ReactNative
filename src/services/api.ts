import axios from 'axios';

/**
 * iOS com emulador: localhost
 * iOS com dispositivo fisico: IP da maquina
 * Android com emulador: Verificar o adb devices: adb reverse tcp:3333 tcp:3333 (3333 = localhost:3333)
 * Android com emulador: 10.0.2.2 (Android studio)
 * Android com emulador: 10.0.3.2 (Genymotion)
 * Android físico: IP da máquina
 */
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
