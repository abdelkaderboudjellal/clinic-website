import React from "react";
import CardExtention from "./CardExtention";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import HealingIcon from "@mui/icons-material/Healing";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
const Extention = () => {
  const { t, i18n } = useTranslation(["About"]);

  switch (true) {
    case i18n.language == "en":
      break;
    case i18n.language == "fr":
      break;
    case i18n.language == "ar":
      break;
  }

  const items = [
    {
      logo: <AccessAlarmIcon />,
      title: t("title"),
      color: "#f5f5f5",
      description: t("description"),
    },
    {
      logo: <HealingIcon />,
      title: t("title1"),
      color: "#e0e0e0",
      description: t("description"),
    },
    {
      logo: <AccessAlarmIcon />,
      title: t("title2"),
      color: "#f5f5f5",
      description: t("description"),
    },
  ];
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { md: "repeat(3,1fr)" } }}>
      {items.map((item) => {
        return (
          <CardExtention
            logo={item.logo}
            title={item.title}
            color={item.color}
            description={item.description}
          />
        );
      })}
    </Box>
  );
};

export default Extention;
