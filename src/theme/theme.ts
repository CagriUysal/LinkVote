import { createMuiTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    layout: {
      width: string;
      minWidth: string;
      margin: string;
      "& > *": {
        marginTop: string;
      };
    };
  }

  interface ThemeOptions {
    layout?: {
      width?: string;
      minWidth?: string;
      margin?: string;
      "& > *"?: {
        marginTop: string;
      };
    };
  }
}

export default createMuiTheme({
  layout: {
    width: "35%",
    minWidth: "300px",
    margin: "0 auto",
    "& > *": {
      marginTop: "1em",
    },
  },
});
