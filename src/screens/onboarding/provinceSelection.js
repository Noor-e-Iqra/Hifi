import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import routes from "../../navigation/routes";
import { Chip, useTheme } from "react-native-paper";

// Importing custom components and data
import { CustomButton } from "../../components/customButton";
import Container from "../../components/Container";
import { Skip } from "../../components/skip";
import { srilankaProvinces } from "../../data";

export const ProvinceSelection = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const [selected, setSelected] = useState("");

  return (
    <Container paddingStyle={{ alignItems: "center" }}>
      <Text style={styles.title(fonts, colors)}>What's your province?</Text>
      <View style={styles.container(colors)}>
        <Text style={styles.desc(fonts, colors)}>Provinces of Sri Lanka</Text>
        <View style={styles.optionsCon}>
          {/* Mapping through provinces and displaying each as a Chip */}
          {srilankaProvinces.map((province, i) => (
            <Chip
              key={i}
              style={styles.chip(colors, selected == province)}
              textStyle={styles.label(fonts, colors, selected == province)}
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
        disabled={selected == ""}
        btnStyle={{ marginTop: "30%", width: "80%" }}
        onPress={() => navigation.navigate(routes.bottom_tab_bar)}
      />

      {/* Skip */}
      <Skip navigation={navigation} />
    </Container>
  );
};

const styles = StyleSheet.create({
  title: (fonts, colors) => ({
    ...fonts.exo_semibold,
    fontSize: 25,
    alignSelf: "flex-start",
    color: colors.gray,
    marginBottom: 10,
  }),
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
