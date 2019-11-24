import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const StyledButton = withStyles({
    root: {
        textTransform: 'capitalize',
    },
    outlined: {

    },
    contained: {
        fontWeight: 700
    }
  })(Button);
