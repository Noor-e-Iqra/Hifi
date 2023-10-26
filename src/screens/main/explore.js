import React, { useState } from "react";
import {
  FlatList,
  Image,
  LayoutAnimation,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import routes from "../../navigation/routes";
import { IconButton, useTheme } from "react-native-paper";

// Importing custom components and data
import Container from "../../components/Container";
import images from "../../../assets/images";
import { CustomHeader } from "../../components/customHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import icons from "../../../assets/icons";
import { SearchBar } from "../../components/searchBar";
import { filters, popular_institutions, popular_teachers } from "../../data";
import { Teacher } from "../../components/teacher";
import { Institute } from "../../components/institute";
import { globalStyles } from "../../utils/styles";
import { FilterRow } from "../../components/filterRow";
import { Filters } from "../../components/filters";
import { CustomLayoutLinear } from "../../utils/animations";
import NoDataFound from "../../components/noDataFound";

export const Explore = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const [data, setData] = useState(popular_teachers);
  const [showFilters, setShowFilters] = useState({
    teachers: false,
    institutions: false,
  });
  const [selectedTeacherFilter, setSelectedTeacherFilter] = useState([
    "Island",
    "All Subjects",
  ]);
  const [selectedInstituteFilter, setSelectedInstituteFilter] = useState([
    "Island",
  ]);

  function filterTeachers(category, option, index) {
    let temp = [...selectedTeacherFilter];
    temp[index] = option;
    setSelectedTeacherFilter(temp);
    if (category == "Subject") {
      if (option == "All Subjects") setData(popular_teachers);
      else setData(popular_teachers.filter((a) => a.subject == option));
    }
  }
  return (
    <Container paddingStyle={{ marginBottom: "10%", paddingHorizontal: 0 }}>
      {/* header */}
      <CustomHeader />
      <View style={[globalStyles.row, { marginTop: 25, marginHorizontal: 24 }]}>
        {/* search bar */}
        <SearchBar />
        {/* sort icon */}
        <IconButton
          onPress={() => {}}
          size={30}
          icon={() => <Image source={icons.sort} style={styles.icon} />}
        />
      </View>
      <FilterRow
        heading={"Popular Teachers"}
        isSelected={showFilters.teachers}
        onPressFilter={() => {
          if (showFilters) {
            setData(popular_teachers);
            setSelectedTeacherFilter(["Island", "All Subjects"]);
          }
          LayoutAnimation.configureNext(CustomLayoutLinear);
          setShowFilters({ ...showFilters, teachers: !showFilters.teachers });
        }}
      />

      {/* teachers filters */}
      {showFilters.teachers && (
        <Filters
          data={filters}
          selectedFilter={selectedTeacherFilter}
          isFunction
          onPress={filterTeachers}
        />
      )}
      {/* when there is no data */}
      {data.length == 0 && <NoDataFound />}

      {/* Popular Teachers */}
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
        renderItem={({ item, index }) => (
          <Teacher
            item={item}
            isFirst={index == 0}
            isLast={index + 1 == data.length}
          />
        )}
      />
      <FilterRow
        heading={"Popular Institutions"}
        style={{ marginTop: 5, marginBottom: 5 }}
        isSelected={showFilters.institutions}
        onPressFilter={() => {
          LayoutAnimation.configureNext(CustomLayoutLinear);
          setShowFilters({
            ...showFilters,
            institutions: !showFilters.institutions,
          });
        }}
      />
      {/* Institution filters */}
      {showFilters.institutions && (
        <Filters
          data={[filters[0]]}
          selectedFilter={selectedInstituteFilter}
          onPress={(option) => setSelectedInstituteFilter([option])}
        />
      )}
      {/* Popuplar Institutions */}
      <FlatList
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={popular_institutions}
        contentContainerStyle={{
          paddingBottom: 20,
          paddingHorizontal: 24,
        }}
        renderItem={({ item }) => <Institute item={item} />}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: (colors) => ({
    width: "100%",
    backgroundColor: colors.light_gray,
    borderRadius: 8,
    marginTop: 15,
    padding: 8,
  }),
  icon: {
    height: 28,
    width: 28,
  },
  desc: (fonts, colors) => ({
    ...fonts.exo_semibold,
    fontSize: 18,
    color: colors.gray2,
    marginVertical: 8,
    marginHorizontal: 12,
    flex: 1,
  }),
  optionsCon: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "99%",
    alignSelf: "center",
  },
  chip: (colors, selected) => ({
    margin: 8,
    borderRadius: 10,
    width: "44.5%",
    backgroundColor: selected ? colors.primary : colors.light_gray2,
  }),

  label: (fonts, colors, selected) => ({
    ...fonts.exo_medium,
    fontSize: 16,
    textAlign: "center",
    flex: 1,
    paddingVertical: 10,
    color: selected ? colors.white : colors.gray2,
  }),
});
