import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import styles from '../../../styles/app.style';
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, } from "react-native";
import { Poster, RequestBar, About } from '../../../components';

// import {
//   Company,
//   JobAbout,
//   JobFooter,
//   JobTabs,
//   ScreenHeaderBtn,
//   Specifics,
// } from "../../components";

const tabs = ["About", "Qualifications", "Responsibilities"];

const StationDetails = () => {
  const data = useLocalSearchParams();
  const item = JSON.parse(data.data);

  // const { data, isLoading, error, refetch } = useFetch("station-details", {
  //   job_id: item._id,
  // });

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch()
    setRefreshing(false)
  }, []);


  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title='Qualifications'
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );

      case "About":
        return (
          <JobAbout info={data[0].job_description ?? "No data provided"} />
        );

      case "Responsibilities":
        return (
          <Specifics
            title='Responsibilities'
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Stack.Screen
        options={{
          headerShown: false
          // headerStyle: { backgroundColor: COLORS.lightWhite },
          // headerShadowVisible: false,
          // headerBackVisible: false,
          // headerLeft: () => (
          //   <ScreenHeaderBtn
          //     iconUrl={icons.left}
          //     dimension='60%'
          //     handlePress={() => router.back()}
          //   />
          // ),
          // headerRight: () => (
          //   <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
          // ),
          // headerTitle: "",
        }}
      />

      {/* <ScrollView style={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data available</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />

              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'} /> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.container}>
        <Poster item={item} />
        <About item={item} />
      </ScrollView>
      <RequestBar item={item} />
    </SafeAreaView>
  );
};

export default StationDetails;
