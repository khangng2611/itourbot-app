import { createContext, useState } from "react";
import { useWindowDimensions } from "react-native";

const DataContext = createContext({
    screenWidth: null,
    screenHeight: null,
    stationsList: [],
    setStationsList : () => null,
})

const DataProvider = ({children}) => {
    const [stationsList, setStationsList] = useState([]);
    const screenWidth = useWindowDimensions().width;
    const screenHeight = useWindowDimensions().height;
    return (
        <DataContext.Provider
            value={{
                screenWidth: screenWidth,
                screenHeight: screenHeight,
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