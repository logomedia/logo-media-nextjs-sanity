"use client";
import PropTypes from "prop-types";
import { useState } from "react";
// @mui
import { Stack, Collapse, Typography } from "@mui/material";
// components
import Iconify from "../../components/iconify";
//
import { StyledLink } from "./styles";

// ----------------------------------------------------------------------

export default function ListMobile({ list }) {
  const { title, children } = list;

  const [expand, setExpand] = useState(false);

  const onExpand = () => {
    setExpand(!expand);
  };

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="h6"
        onClick={onExpand}
        sx={{
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}>
        {title}
        <Iconify
          width={16}
          icon={expand ? "carbon:chevron-down" : "carbon:chevron-right"}
          sx={{ ml: 0.5 }}
        />
      </Typography>

      <Collapse in={expand} unmountOnExit sx={{ width: 1 }}>
        <Stack spacing={1.5} alignItems="flex-start">
          {children[0].items?.map((link, index) => (
            <StyledLink key={index} href={link.path}>
              {link.title}
            </StyledLink>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}

ListMobile.propTypes = {
  list: PropTypes.shape({
    items: PropTypes.array,
    subheader: PropTypes.string,
  }),
};
