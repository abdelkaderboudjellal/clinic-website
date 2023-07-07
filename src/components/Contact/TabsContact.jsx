import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Container, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tabsClasses } from "@mui/material/Tabs";
import "../page/Contact.css";
import { useTranslation } from "react-i18next";
const TabsContact = () => {
  const { t, i18n } = useTranslation(["Contact"]);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const colors = theme.palette.aek.back;
  const styleitem = {
    fontSize: 14,
    fontWeight: "bold",
    color: theme.palette.aek.tex,

    borderBottomColor: "white",
    textTransform: "capitalize",
    mx: 4,
  };
  const styleitemPanel = {
    fontSize: 14,
    color: theme.palette.aek.tex,textAlign:"start"
  };
  return (
    <Box
      sx={{
        bgcolor: colors,
        minHeight: 400,

        width: "100%",
      }}
    >
      <Container
        maxWidth="md"
        sx={{ position: "relative", display: "flex", justifyContent: "center" }}
      >
        <Paper
          sx={{
            position: "absolute",
            typography: "body1",
            mt: -8,
            px: 4,
            textAlign: "left",
            mr: 4,
            width: { xs: "80%", md: "100%" },
            mx: { xs: "10%", md: "0" },
            mb: 8,
          }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider",textAlign:"start"}}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                sx={{
                  [`& .${tabsClasses.scrollButtons}`]: {
                    "&.Mui-disabled": { opacity: 0.3 },
                  },
                }}
              >
                <Tab sx={styleitem} label={t("fil_Dentaire")} value="1" />
                <Tab sx={styleitem} label={t("dents_de_sagesse")} value="2" />
                <Tab sx={styleitem} label={t("Blanchiment")} value="3" />
                <Tab sx={styleitem} label={t("Sensibilité")} value="4" />
              </TabList>
            </Box>
            <TabPanel className="TabPanel" sx={styleitemPanel} value="1">
              {t("fil_Dentaire_description")}
            </TabPanel>
            <TabPanel className="TabPanel" sx={styleitemPanel} value="2">
            {t("dents_de_sagesse_description")}
            </TabPanel>
            <TabPanel className="TabPanel" sx={styleitemPanel} value="3">
            {t("Blanchiment_description")}
            </TabPanel>
            <TabPanel className="TabPanel" sx={styleitemPanel} value="4">
            {t("Sensibilité_description")}
            </TabPanel>
          </TabContext>
        </Paper>
      </Container>
    </Box>
  );
};

export default TabsContact;
