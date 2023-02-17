import { HOSTNAME } from "./../component/config.js";

export const obtenerActividades = async () => {
  try {
    const resp = await fetch(HOSTNAME + "/api/actividades", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return await resp.json();
  } catch (error) {
    console.log("error " + error);
  }
};




