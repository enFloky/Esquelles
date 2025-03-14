import React, { useEffect, useState } from "react";

const AppVR = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => console.error("Error obtenint la ubicació:", error),
        { enableHighAccuracy: true }
      );
    } else {
      console.error("El teu navegador no suporta la geolocalització.");
    }
  }, []);

  return (
    <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
      vr-mode-ui="enabled: false"
    >
      {/* Càmera i entorn */}
      <a-camera position="0 1.6 0" look-controls-enabled="true">
        <a-text
          value="Mira al voltant per trobar la muntanya!"
          position="-1 1.5 -3"
          color="white"
          align="center"
        ></a-text>
      </a-camera>

      {/* Marcador GPS per Santa Brígida */}
      <a-entity
        gps-entity-place={`latitude: 42.0175; longitude: 2.6222`}
        scale="3 3 3"
      >
        <a-text
          value="⛰️ Santa Brígida"
          look-at="[gps-camera]"
          color="yellow"
          align="center"
        ></a-text>
      </a-entity>

      {/* Posició de la càmera basada en GPS */}
      <a-entity gps-camera rotation-reader></a-entity>
    </a-scene>
  );
};

export default AppVR;
