import { createContext, useState } from "react";

const DataContext = createContext({
    stationsList: [],
    setStationsList : () => null,
})

const DataProvider = ({children}) => {
    const [stationsList, setStationsList] = useState([]);
    return (
        <DataContext.Provider
            value={{
                stationsList: stationsList,
                setStationsList: (stations) => {
                    setStationsList(stations);
                },
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export { DataContext, DataProvider };