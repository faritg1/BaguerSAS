//JavaScript
import { API_URL_DEV } from "../../const.js";

const HOSTNAME = window.location.hostname;
const ENVIRONMENT = HOSTNAME === "127.0.0.1" ? "dev" : "Hay un error Host";

const getAPI_URL = () => {
    return ENVIRONMENT === "dev" ? API_URL_DEV : "Host no encontrado";
};

export { getAPI_URL };