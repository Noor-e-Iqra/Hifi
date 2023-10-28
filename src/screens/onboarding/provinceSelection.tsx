import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Chip, useTheme } from "react-native-paper";

// Importing custom components and data
import CustomButton from "../../components/customButton";
import Container from "../../components/container";
import Skip from "../../components/skip";
import { srilankaProvinces } from "../../data";
// styles
import { globalStyles } from "../../theme/styles";
// route names
import routes from "../../navigation/routes";

interface ProvinceSelectionProps {
  navigation: any;
}

export const ProvinceSelection: React.FC<ProvinceSelectionProps> = ({
  navigation,
}) => {
  const { colors, fonts } = useTheme();
  const [selected, setSelected] = useState<string>("");

  return (
    <Container paddingStyle={{ alignItems: "center" }}>
      <Text style={[globalStyles.heading(fonts, colors), styles.title]}>
        What's your province?
      </Text>
      <View style={styles.container(colors)}>
        <Text style={styles.desc(fonts, colors)}>Provinces of Sri Lanka</Text>
        <View style={styles.optionsCon}>
          {/* Mapping through provinces and displaying each as a Chip */}
          {srilankaProvinces.map((province: string, i: number) => (
            <Chip
              key={i}
              style={styles.chip(colors, selected === province)}
              textStyle={styles.label(fonts, colors, selected === province)}
              onPress={() => setSelected(province)}
            >
              {province}
            </Chip>
          ))}
        </View>
      </View>

      {/* Next button */}
      <CustomButton
        text={"Next"}
        disabled={selected === ""}
        btnStyle={{ marginTop: "30%", width: "80%" }}
        onPress={() => navigation.navigate(routes.bottom_tab_bar)}
      />

      {/* Skip */}
      <Skip navigation={navigation} />
    </Container>
  );
};

interface Styles {
  title: TextStyle;
  container: (colors: any) => ViewStyle;
  desc: (fonts: any, colors: any) => TextStyle;
  optionsCon: ViewStyle;
  chip: (colors: any, selected: boolean) => ViewStyle;
  label: (fonts: any, colors: any, selected: boolean) => TextStyle;
}

const styles: Styles = StyleSheet.create<Styles>({
  title: {
    fontSize: 25,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  container: (colors) => ({
    width: "100%",
    backgroundColor: colors.light_gray,
    borderRadius: 8,
    marginTop: 15,
    padding: 8,
  }),
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
    width: Platform.OS === "web" ? "48.6%" : "44.5%",
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
