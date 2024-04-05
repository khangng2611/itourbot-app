// import { createContext, useState } from 'react';

// const DataContext = createContext({
//     stations: [],
//     setStations: () => null,
// });

// const DataProvider = (props) => {
//     const { stations, setStations } = useState();

//     return (
//         <DataContext.Provider value={{
//             setStations: (data) => {
//                 setStations(data);
//             },
//             stations,
//         }}
//         >
//             {props.children}
//         </DataContext.Provider>
//     );
// };

// export {DataContext, DataProvider}
