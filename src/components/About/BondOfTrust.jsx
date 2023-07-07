import React from "react";
import { Box, Container, Grid, Hidden, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import { useTheme } from "@mui/material/styles";

import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
const StyledImg = styled("img")();
const BondOfTrust = () => {
  const { t, i18n } = useTranslation(["About"]);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const styleitem = {
    fontSize: 14,
    fontWeight: "bold",
    color: theme.palette.aek.tex,

    borderBottomColor: "white",
    textTransform: "capitalize",
  };
  const styleitemPanel = {
    fontSize: 20,
    color: theme.palette.aek.tex,
    minHeight: "380px",
    border: "1px solid #e0e0e0",
    borderTop: "none",
    textAlign: "start",
  };
  return (
    <>
      <Box
        my="3rem"
        sx={{
          flexDirection: "column",
          justifyItems: "center",
          textAlign: "center",
          width: "70%",
          mx: "auto",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold",fontSize:{xs:28,md:35} }}>
          {t("title_BondofTrust")}
        </Typography>
        <Typography variant="body1" color="#9e9e9e" py="1rem">
          {t("description_BondofTrust")}
        </Typography>
        <Box
          sx={{
            border: "3px solid #1976D2",
            width: "55px",
            mx: "auto",
            mb: 4,
          }}
        />
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          color: "white",flexGrow: 1, textAlign: "start",my:"2rem"
        }}
      >
        <Box my="2rem" sx={{  }}>
          <Grid container spacing={{sx:0,md:2}} >
            <Grid  item xs={12} sm={12} md={6}>
              <StyledImg
                src="http://wwsthemes.com/themes/medwise/v2.0/images/750-500-1.jpg"
                alt="Photo by Markus Spiske from Pexels"
                sx={{
                  margin: 'auto',
                  display: 'block',
                  height: "100%",
                  width: "100%",

                  
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
            <Box
                sx={{
                  width: { xs: "100%", md: "100%" },
                  typography: "body1",
                }}
              >
                <TabContext value={value}>
                  <Box
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      sx={{
                        "&  button ": {
                          borderBottom: "1px solid #e0e0e0",
                        },
                        "& button.Mui-selected": {
                          border: "1px solid #e0e0e0",
                          borderBottom: "none",
                        },
                      }}
                      textColor="primary"
                      TabIndicatorProps={{
                        style: {
                          display: "none",
                          height: 3,
                        },
                      }}
                    >
                      <Tab
                        sx={styleitem}
                        icon={<PeopleOutlinedIcon sx={{ fontSize: 32 }} />}
                        iconPosition="start"
                        label={t("Experience")}
                        value="1"
                        
                      />
                      <Tab
                        sx={styleitem}
                        icon={<ScienceOutlinedIcon sx={{ fontSize: 32}} />}
                        iconPosition="start"
                        label={t("Facilities")}
                        value="2"
                      />

                      <Tab
                        sx={{
                          display: { xs: "none", sm: "block" },
                          width: "100%",
                        }}
                        disabled
                      />
                    </TabList>
                  </Box>

                  <TabPanel value="1" sx={styleitemPanel} className="TabPanel">
                    {t("description_Experience")}
                  </TabPanel>
                  <TabPanel className="TabPanel" value="2" sx={styleitemPanel}>
                    {t("description_Facilities")}
                  </TabPanel>
                </TabContext>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default BondOfTrust;
