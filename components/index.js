import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";

// home screen
import Welcome from "./home/welcome/Welcome";
import PopularStations from "./home/popular/PopularStations";

// auth screen
import BotLoginImage from "./auth/BotLoginImage";
import LoginForm from "./auth/LoginForm";

// job details screen
import Company from "./jobdetails/company/Company";
import { default as JobTabs } from "./jobdetails/tabs/Tabs";
import { default as JobAbout } from "./jobdetails/about/About";
import { default as JobFooter } from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";

// common
import TabNavigator from "./common/navigation/TabNavigator";
import Input from "./common/input/Input";

//map screen
import LocationSpot from "./map/LocationSpot";
import MapImage from "./map/MapImage";
import BotStateBox from "./map/BotStateBox";

// station details
import About from "./stationdetails/about/About";
import Poster from './stationdetails/poster/Poster';
import RequestBar from './stationdetails/requestbar/RequestBar';

export {
  ScreenHeaderBtn,
  Welcome,
  PopularStations,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  TabNavigator, 
  LocationSpot,
  MapImage,
  BotStateBox,
  About, 
  Poster,
  RequestBar,
  BotLoginImage,
  LoginForm,
  Input
};
