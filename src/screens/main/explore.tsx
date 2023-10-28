import React, { useState, FC } from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  LayoutAnimation,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { IconButton } from "react-native-paper";

// custom component and data
import Container from "../../components/container";
import CustomHeader from "../../components/customHeader";
import icons from "../../../assets/icons";
import SearchBar from "../../components/searchBar";
import { filters, popular_institutions, popular_teachers } from "../../data";
import Teacher from "../../components/teacher";
import Institute from "../../components/institute";
import { globalStyles } from "../../theme/styles";
import FilterRow from "../../components/filterRow";
import Filters from "../../components/filters";
import { CustomLayoutLinear } from "../../utils/animations";
import NoDataFound from "../../components/noDataFound";

interface TeacherData {
  bg: string;
  image: ImageSourcePropType;
  name: string;
  subject: string;
}

interface InstituteData {
  bg: string;
  image: ImageSourcePropType;
  name: string;
  rating: number;
  rating_num: number;
  subject: string;
  desc: string;
}

interface ExploreProps {
  navigation: any;
}

export const Explore: FC<ExploreProps> = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [teachersData, setTeachersData] =
    useState<TeacherData[]>(popular_teachers);
  const [institutionsData, setInstitutionsData] =
    useState<InstituteData[]>(popular_institutions);
  const [showFilters, setShowFilters] = useState<{
    teachers: boolean;
    institutions: boolean;
  }>({
    teachers: false,
    institutions: false,
  });
  const [selectedTeacherFilter, setSelectedTeacherFilter] = useState<string[]>([
    "Island",
    "All Subjects",
  ]);
  const [selectedInstituteFilter, setSelectedInstituteFilter] = useState<
    string[]
  >(["Island"]);

  // Function to handle teacher filters
  const filterTeachers = (category: string, option: string, index: number) => {
    let temp = [...selectedTeacherFilter];
    temp[index] = option;
    setSelectedTeacherFilter(temp);
    if (category === "Subject") {
      const filteredTeachers =
        option === "All Subjects"
          ? popular_teachers
          : popular_teachers.filter((a) => a.subject === option);
      setTeachersData(filteredTeachers);
    }
  };

  // Function to handle search input
  const onSearch = (text: string) => {
    setSearchQuery(text);
    if (text.length) {
      const searchedTeachers = popular_teachers.filter((item) =>
        item.name.includes(text)
      );
      const searchedInstitutes = popular_institutions.filter((item) =>
        item.name.includes(text)
      );
      setTeachersData(searchedTeachers);
      setInstitutionsData(searchedInstitutes);
    } else {
      setTeachersData(popular_teachers);
      setInstitutionsData(popular_institutions);
    }
  };

  // Function to toggle teacher and institute filter
  const toggleFilter = (type: string) => {
    LayoutAnimation.configureNext(CustomLayoutLinear);
    setShowFilters((prev) => ({ ...prev, [type]: !prev[type] }));
    if (type === "teachers" && showFilters.teachers) {
      setTeachersData(popular_teachers);
      setSelectedTeacherFilter(["Island", "All Subjects"]);
    } else if (type === "institutions" && showFilters.institutions) {
      setSelectedInstituteFilter(["Island"]);
    }
  };

  return (
    <Container paddingStyle={styles.padding}>
      {/* header */}
      {!isFocused && searchQuery === "" && <CustomHeader />}

      <View style={styles.row(isFocused || searchQuery !== "")}>
        {/* search bar */}
        <SearchBar
          value={searchQuery}
          focused={isFocused || searchQuery !== ""}
          setFocused={setIsFocused}
          onChangeText={(e) => onSearch(e.trim())}
          onPressCross={() => {
            LayoutAnimation.configureNext(CustomLayoutLinear);
            onSearch("");
          }}
        />
        {/* sort icon */}
        <IconButton
          onPress={() => {}}
          size={30}
          icon={() => <Image source={icons.sort} style={styles.icon} />}
        />
      </View>

      {/* Popular Teachers Filter icon */}
      <FilterRow
        heading={"Popular Teachers"}
        isSelected={showFilters.teachers}
        onPressFilter={() => toggleFilter("teachers")}
      />

      {/* Popular Teachers all filters */}
      {showFilters.teachers && (
        <Filters
          data={filters}
          selectedFilter={selectedTeacherFilter}
          isFunction
          onPress={filterTeachers}
        />
      )}

      {teachersData.length === 0 && <NoDataFound />}

      {/* Popular Teachers List */}
      <FlatList
        horizontal
        data={teachersData}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
        renderItem={({ item, index }) => (
          <Teacher
            item={item}
            isFirst={index === 0}
            isLast={index + 1 === teachersData.length}
          />
        )}
      />

      {/* Popular Institutions Filter icon */}
      <FilterRow
        heading={"Popular Institutions"}
        style={{ marginTop: 5, marginBottom: 5 }}
        isSelected={showFilters.institutions}
        onPressFilter={() => toggleFilter("institutions")}
      />

      {/* Popular Institutions all filters */}
      {showFilters.institutions && (
        <Filters
          data={[filters[0]]}
          selectedFilter={selectedInstituteFilter}
          onPress={(option) => setSelectedInstituteFilter([option])}
        />
      )}

      {institutionsData.length === 0 && <NoDataFound />}

      {/* Popular Institutions List */}
      <FlatList
        scrollEnabled={false}
        data={institutionsData}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlist_i}
        renderItem={({ item }) => <Institute item={item} />}
      />
    </Container>
  );
};

interface Styles {
  padding: {
    paddingHorizontal: number;
    marginBottom: string;
  };
  flatlist_i: {
    paddingBottom: number;
    paddingHorizontal: number;
  };
  icon: {
    height: number;
    width: number;
  };
  row: (isFocused: boolean) => {
    marginTop: number;
    marginHorizontal: number;
  };
}

const styles: Styles = StyleSheet.create<Styles>({
  padding: {
    paddingHorizontal: 0,
    marginBottom:
      Platform.OS === "android" ? "11%" : Platform.OS === "web" ? "2.5%" : "8%",
  },
  flatlist_i: {
    paddingBottom: 20,
    paddingHorizontal: 24,
  },
  icon: {
    height: 28,
    width: 28,
  },
  row: (isFocused: boolean) => ({
    ...globalStyles.row,
    marginTop: isFocused ? 0 : 25,
    marginHorizontal: 24,
  }),
});
