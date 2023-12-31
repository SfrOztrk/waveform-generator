import React, { useState } from "react";
import copy from "clipboard-copy";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const CopyButton = (props) => {
  const [copied, setCopied] = useState(false);
  const t = props.t;

  const handleCopy = () => {
    copy(props.text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      <Button
        color="inherit"
        variant="outlined"
        onClick={handleCopy}
        startIcon={props.startIcon}
        style={props.style}
      >
        {copied ? t("copied") : t("copyUrl")}
      </Button>
    </div>
  );
};

export default CopyButton;
