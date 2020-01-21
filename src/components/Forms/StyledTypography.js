import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export const StyledTypography = withStyles({
  root: {
    fontFamily: '"Work Sans", sans-serif',
    color: "#260031"
  },

  h2: {
    fontSize: "28px",
    marginTop: "60px",
    marginBottom: "40px"
  },

  h3: {
    padding: 0,
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "5px"
  },

  h4: {
    padding: 0,
    fontSize: "12px",
    fontWeight: 200
  }
})(Typography);
