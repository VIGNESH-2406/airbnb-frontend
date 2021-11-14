// import { useState } from "react";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import getCenter from "geolib/es/getCenter";

// function Map({ searchResults }) {
//   const [selectedLocation, selectedLocation] = useState({});

//   const coordinates = searchResults.map((result) => ({
//     longitude: result.long,
//     latitude: result.lat,
//   }));

//   const center = getCenter(coordinates);

//   const [viewport, setViewport] = useState({
//     width: "100%",
//     heigt: "100%",
//     latitude: center.latitude,
//     longitude: center.longitude,
//     zoom: 10,
//   });

//   return (
//     <ReactMapGL
//       mapStyle="https://api.mapbox.com/styles/v1/vignesh2406/ckuqeh00e28hw18lkkhbqtmx9.html?title=copy&access_token=pk.eyJ1IjoidmlnbmVzaDI0MDYiLCJhIjoiY2t1cWVlYm5oMHhsbDJ3bWRnMTkzYmR3dCJ9.u2k9FQKNQIwB3siFDxG4nA&zoomwheel=true&fresh=true#13/33.75001/-118.4106"
//       mapBoxApiAccessToken={process.env.mapBox_key}
//       {...viewport}
//     >
//       {searchResults.map((result) => {
//         <div key={result.long}>
//           <Marker
//             longitude={result.long}
//             latitude={result.lat}
//             offsetLeft={-20}
//             offsetTop={-10}
//           >
//             <p
//               onClick={() => selectedLocation(result)}
//               className="cursor-pointer text-2xl animate-bounce"
//             >
//               **
//             </p>
//           </Marker>
//           {selectedLocation.long === result.long ? (
//             <Popup
//               onClose={() => selectedLocation({})}
//               closeOnClick={true}
//               latitude={result.lat}
//               longitude={result.long}
//             >
//               {result.title}
//             </Popup>
//           ) : (
//             false
//           )}
//         </div>;
//       })}
//     </ReactMapGL>
//   );
// }
// export default Map;
